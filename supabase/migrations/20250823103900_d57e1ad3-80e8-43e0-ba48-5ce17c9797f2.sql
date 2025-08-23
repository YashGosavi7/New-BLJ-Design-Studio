-- Create storage bucket for portfolio images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'portfolio-images', 
  'portfolio-images', 
  true,
  52428800, -- 50MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
);

-- Create RLS policies for portfolio images bucket
CREATE POLICY "Public can view portfolio images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'portfolio-images');

CREATE POLICY "Service role can manage portfolio images"
ON storage.objects
FOR ALL
USING (bucket_id = 'portfolio-images' AND auth.jwt() ->> 'role' = 'service_role')
WITH CHECK (bucket_id = 'portfolio-images' AND auth.jwt() ->> 'role' = 'service_role');

-- Allow authenticated users to upload (for admin interface)
CREATE POLICY "Authenticated users can upload portfolio images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'portfolio-images' 
  AND (storage.foldername(name))[1] = 'uploads'
);