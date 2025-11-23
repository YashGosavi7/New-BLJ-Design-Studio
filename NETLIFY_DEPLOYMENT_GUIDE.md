# Netlify Deployment Guide

This guide will help you deploy your Balaji Design Studio website to Netlify.

## ✅ Pre-Deployment Checklist

### 1. **Project Review Status**
- ✅ Build script configured (`npm run build`)
- ✅ Output directory: `dist` (Vite default)
- ✅ React Router SPA routing configured
- ✅ Netlify configuration files created
- ✅ Environment variables documented

### 2. **Files Created for Deployment**
- ✅ `netlify.toml` - Netlify configuration
- ✅ `public/_redirects` - SPA routing support
- ✅ `.env.example` - Environment variable template

## 🚀 Deployment Steps

### Method 1: Deploy via Netlify Dashboard (Recommended)

1. **Prepare Your Repository**
   ```bash
   # Ensure all changes are committed
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up/Login
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub/GitLab/Bitbucket repository
   - Select your repository: `New-BLJ-Design-Studio`

3. **Configure Build Settings**
   Netlify should auto-detect these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 (or latest LTS)

4. **Set Environment Variables** (if using Supabase)
   - Go to Site settings → Environment variables
   - Add the following:
     ```
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
     ```
   - If not using Supabase, you can skip this step

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete
   - Your site will be live at `https://random-name-123.netlify.app`

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Site**
   ```bash
   cd New-BLJ-Design-Studio
   netlify init
   ```
   - Follow the prompts
   - Choose "Create & configure a new site"
   - Select your team
   - Site name (or leave blank for random name)

4. **Set Environment Variables** (if needed)
   ```bash
   netlify env:set VITE_SUPABASE_URL "your_supabase_url"
   netlify env:set VITE_SUPABASE_PUBLISHABLE_KEY "your_supabase_key"
   ```

5. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Method 3: Drag & Drop (Quick Test)

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site will be live immediately

## 🔧 Configuration Details

### Build Settings
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** 18 (configured in netlify.toml)

### Routing
- All routes are handled by React Router
- `_redirects` file ensures SPA routing works correctly
- All paths redirect to `index.html` with 200 status

### Headers & Security
Configured in `netlify.toml`:
- Security headers (XSS protection, frame options, etc.)
- Cache control for static assets
- Long-term caching for images and assets

## 🌐 Custom Domain Setup

1. **In Netlify Dashboard:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain name
   - Follow DNS configuration instructions

2. **DNS Configuration:**
   - Add CNAME record pointing to your Netlify site
   - Or add A records (IP addresses provided by Netlify)

3. **SSL Certificate:**
   - Netlify automatically provisions SSL certificates
   - HTTPS will be enabled automatically

## 🔐 Environment Variables

### Required (if using Supabase):
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Your Supabase anon key

### Setting in Netlify:
1. Go to Site settings → Environment variables
2. Add each variable
3. Redeploy site for changes to take effect

**Note:** If you're not using Supabase features, these variables are optional.

## 📊 Build Optimization

### Current Optimizations:
- ✅ Image lazy loading
- ✅ Code splitting (React Router)
- ✅ Optimized build output
- ✅ Static asset caching

### Post-Deployment:
- Monitor build logs for any errors
- Check site performance in Netlify Analytics
- Review Core Web Vitals

## 🐛 Troubleshooting

### Build Fails

1. **Check Build Logs**
   - Go to Deploys → Latest deploy → Build log
   - Look for error messages

2. **Common Issues:**
   - **Node version mismatch:** Update `NODE_VERSION` in netlify.toml
   - **Missing dependencies:** Ensure `package-lock.json` is committed
   - **Environment variables:** Check if required vars are set

### Routes Not Working

1. **Verify `_redirects` file:**
   - Should be in `public/_redirects`
   - Should contain: `/*    /index.html   200`

2. **Check netlify.toml:**
   - Ensure publish directory is `dist`

### Images Not Loading

1. **Check image paths:**
   - Ensure images are in `public/` folder
   - Use relative paths starting with `/`

2. **Verify build output:**
   - Check if images are copied to `dist/` folder

## 📝 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All routes work (test navigation)
- [ ] Images load properly
- [ ] Contact form works (if implemented)
- [ ] Mobile responsive
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)
- [ ] Analytics set up (optional)

## 🔄 Continuous Deployment

Once connected to Git:
- Every push to `main` branch triggers automatic deployment
- Pull requests can create preview deployments
- Branch deploys available for testing

## 📈 Performance Monitoring

1. **Netlify Analytics** (if enabled)
   - View site performance
   - Monitor traffic
   - Check build times

2. **Core Web Vitals**
   - Use Google PageSpeed Insights
   - Monitor LCP, FID, CLS scores

## 🆘 Support

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Netlify Community:** [community.netlify.com](https://community.netlify.com)
- **Vite Docs:** [vitejs.dev](https://vitejs.dev)

## ✅ Deployment Ready!

Your project is now configured for Netlify deployment. Follow the steps above to deploy your site.

**Quick Start:**
1. Push code to GitHub
2. Connect to Netlify
3. Deploy!

---

**Last Updated:** January 2025
**Status:** ✅ Ready for Deployment

