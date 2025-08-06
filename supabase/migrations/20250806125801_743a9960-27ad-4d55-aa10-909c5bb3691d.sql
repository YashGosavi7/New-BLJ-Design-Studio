-- Fix function search path security issue for cleanup function
CREATE OR REPLACE FUNCTION public.cleanup_old_contact_submissions()
RETURNS void 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.contact_submissions 
  WHERE created_at < now() - interval '1 year';
END;
$$;

-- Fix function search path security issue for rate limit function
CREATE OR REPLACE FUNCTION public.check_contact_rate_limit(
  client_ip INET,
  client_email TEXT
)
RETURNS boolean 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
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
$$;