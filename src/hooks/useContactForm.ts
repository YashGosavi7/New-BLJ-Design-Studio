import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface UseContactFormReturn {
  isSubmitting: boolean;
  submitForm: (formData: FormData) => Promise<boolean>;
}

// Basic input sanitization to prevent XSS
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove basic HTML tags
    .trim()
    .slice(0, 1000); // Limit length
};

// Email validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const useContactForm = (): UseContactFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (formData: FormData): Promise<boolean> => {
    setIsSubmitting(true);

    try {
      // Client-side validation
      if (!formData.name || !formData.email || !formData.message) {
        toast.error('Please fill in all required fields');
        return false;
      }

      if (!validateEmail(formData.email)) {
        toast.error('Please enter a valid email address');
        return false;
      }

      if (formData.message.length < 10) {
        toast.error('Message must be at least 10 characters long');
        return false;
      }

      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email.toLowerCase()),
        phone: sanitizeInput(formData.phone),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message),
      };

      // Get client IP (simplified for demo)
      const clientIP = '127.0.0.1'; // In production, this would come from request headers

      // Check rate limiting
      const { data: rateLimitCheck, error: rateLimitError } = await supabase
        .rpc('check_contact_rate_limit', {
          client_ip: clientIP,
          client_email: sanitizedData.email
        });

      if (rateLimitError) {
        console.error('Rate limit check error:', rateLimitError);
        // Continue with submission even if rate limit check fails
      } else if (!rateLimitCheck) {
        toast.error('Too many submissions. Please try again later.');
        return false;
      }

      // Submit to database
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: sanitizedData.name,
          email: sanitizedData.email,
          phone: sanitizedData.phone || null,
          subject: sanitizedData.subject || null,
          message: sanitizedData.message,
          ip_address: clientIP,
          user_agent: navigator.userAgent,
        });

      if (error) {
        console.error('Database error:', error);
        toast.error('Failed to send message. Please try again.');
        return false;
      }

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      return true;

    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An unexpected error occurred. Please try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitForm,
  };
};