-- Create table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  processed BOOLEAN DEFAULT false,
  spam_score INTEGER DEFAULT 0
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for public insertions (anyone can submit contact form)
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for viewing submissions (only for future admin access)
CREATE POLICY "No one can view contact submissions without authentication" 
ON public.contact_submissions 
FOR SELECT 
USING (false);

-- Create index for email lookups
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);

-- Create index for created_at for rate limiting queries
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at);

-- Create index for IP address for rate limiting
CREATE INDEX idx_contact_submissions_ip_address ON public.contact_submissions(ip_address);

-- Create function to clean up old submissions (data retention)
CREATE OR REPLACE FUNCTION public.cleanup_old_contact_submissions()
RETURNS void AS $$
BEGIN
  DELETE FROM public.contact_submissions 
  WHERE created_at < now() - interval '1 year';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to check rate limiting
CREATE OR REPLACE FUNCTION public.check_contact_rate_limit(
  client_ip INET,
  client_email TEXT
)
RETURNS boolean AS $$
DECLARE
  ip_count INTEGER;
  email_count INTEGER;
BEGIN
  -- Check IP rate limit (max 5 submissions per hour)
  SELECT COUNT(*) INTO ip_count
  FROM public.contact_submissions 
  WHERE ip_address = client_ip 
    AND created_at > now() - interval '1 hour';
  
  -- Check email rate limit (max 3 submissions per day)
  SELECT COUNT(*) INTO email_count
  FROM public.contact_submissions 
  WHERE email = client_email 
    AND created_at > now() - interval '1 day';
  
  -- Return false if rate limit exceeded
  IF ip_count >= 5 OR email_count >= 3 THEN
    RETURN false;
  END IF;
  
  RETURN true;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;