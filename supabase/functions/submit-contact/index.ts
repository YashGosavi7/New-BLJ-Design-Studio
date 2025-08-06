import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

// Validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

function calculateSpamScore(data: ContactSubmission): number {
  let score = 0;
  
  // Check for suspicious patterns
  const message = data.message.toLowerCase();
  const suspiciousWords = ['click here', 'buy now', 'urgent', 'limited time', 'act now', 'free money'];
  
  suspiciousWords.forEach(word => {
    if (message.includes(word)) score += 10;
  });
  
  // Check for excessive caps
  const capsCount = (data.message.match(/[A-Z]/g) || []).length;
  if (capsCount > data.message.length * 0.3) score += 15;
  
  // Check for excessive links
  const linkCount = (data.message.match(/https?:\/\//g) || []).length;
  if (linkCount > 2) score += 20;
  
  return score;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Parse and validate request body
    const body = await req.json();
    const { name, email, phone, subject, message } = body as ContactSubmission;

    // Basic validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ 
        error: 'Missing required fields: name, email, and message are required' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate email format
    if (!validateEmail(email)) {
      return new Response(JSON.stringify({ 
        error: 'Invalid email format' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate phone if provided
    if (phone && !validatePhone(phone)) {
      return new Response(JSON.stringify({ 
        error: 'Invalid phone number format' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Length validation
    if (name.length > 100 || email.length > 100 || message.length > 2000) {
      return new Response(JSON.stringify({ 
        error: 'Input too long. Name and email must be under 100 characters, message under 2000 characters' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get client IP and user agent
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                    req.headers.get('x-real-ip') || 
                    'unknown';
    const userAgent = req.headers.get('user-agent') || '';

    // Check rate limiting
    const { data: rateLimitCheck, error: rateLimitError } = await supabase
      .rpc('check_contact_rate_limit', {
        client_ip: clientIP,
        client_email: email
      });

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
      return new Response(JSON.stringify({ 
        error: 'Unable to process request at this time' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!rateLimitCheck) {
      return new Response(JSON.stringify({ 
        error: 'Rate limit exceeded. Please try again later.' 
      }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : null,
      subject: subject ? sanitizeInput(subject) : null,
      message: sanitizeInput(message),
    };

    // Calculate spam score
    const spamScore = calculateSpamScore(sanitizedData);

    // Insert into database
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{
        name: sanitizedData.name,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        subject: sanitizedData.subject,
        message: sanitizedData.message,
        ip_address: clientIP,
        user_agent: userAgent,
        spam_score: spamScore
      }])
      .select();

    if (error) {
      console.error('Database insert error:', error);
      return new Response(JSON.stringify({ 
        error: 'Failed to submit contact form' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Contact form submitted successfully:', {
      id: data[0]?.id,
      email: sanitizedData.email,
      spamScore,
      ip: clientIP
    });

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      id: data[0]?.id
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in submit-contact function:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
};

serve(handler);