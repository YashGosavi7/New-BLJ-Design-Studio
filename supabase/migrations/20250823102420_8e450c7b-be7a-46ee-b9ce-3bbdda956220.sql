-- Create a policy to allow reading contact submissions for analysis
-- This replaces the overly restrictive policy that blocks all access
DROP POLICY IF EXISTS "No one can view contact submissions without authentication" ON public.contact_submissions;

-- Create a more practical policy for business operations
-- Allow service role access for admin functions
CREATE POLICY "Service role can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (
  auth.jwt() ->> 'role' = 'service_role'
);

-- Add a policy for authenticated admin users (when authentication is implemented)
CREATE POLICY "Authenticated admins can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (
  -- This will allow access when admin authentication is implemented
  -- For now, this policy won't grant access as there's no admin system
  false
);