# 3D Labs OKC - Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Git repository initialized
- Vercel account (free tier available)

## Environment Variables

Before deploying, you need to set up the following environment variables:

### Required for Form Submissions
```
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id
NEXT_PUBLIC_FORMSPREE_QUOTE_ID=your_quote_form_id
```

To get your Formspree IDs:
1. Go to https://formspree.io
2. Create two forms: "Contact Form" and "Quote Request Form"
3. Copy the form IDs from each form's integration page

### Optional: Google Analytics
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

To set up Google Analytics:
1. Go to https://analytics.google.com
2. Create a new GA4 property for your site
3. Copy the Measurement ID (starts with "G-")

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Run deployment:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project

4. Add environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add each variable for Production environment

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 3D Labs OKC website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/3dlabsokc.git
   git push -u origin main
   ```

2. Go to https://vercel.com/new

3. Import your GitHub repository

4. Configure environment variables during setup

5. Click "Deploy"

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Test quote request form submission
- [ ] Verify Google Analytics tracking (if configured)
- [ ] Set up custom domain (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit

## Custom Domain Setup

1. In Vercel dashboard, go to Project Settings > Domains
2. Add your domain: `3dlabsokc.com`
3. Add www subdomain: `www.3dlabsokc.com`
4. Update DNS records as instructed by Vercel:
   - A record: `76.76.19.61`
   - CNAME for www: `cname.vercel-dns.com`

## Google Search Console Setup

1. Go to https://search.google.com/search-console
2. Add property: `https://3dlabsokc.com`
3. Verify ownership via DNS TXT record or HTML file
4. Submit sitemap: `https://3dlabsokc.com/sitemap.xml`
5. Update `app/layout.tsx` with verification code:
   ```tsx
   verification: {
     google: "your-verification-code",
   }
   ```

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel will automatically rebuild and deploy on push to main branch.

## Performance Optimization

The site is already optimized for performance:
- Static Site Generation (SSG) for all pages
- Image optimization via Next.js Image component
- Font optimization via next/font
- CSS animations respect prefers-reduced-motion
- Skeleton loading states for perceived performance

## Troubleshooting

### Forms not submitting
- Check that Formspree IDs are correctly set in environment variables
- Verify forms are active in Formspree dashboard
- Check browser console for errors

### Analytics not tracking
- Verify GA Measurement ID is correct
- Check that adblockers are not blocking gtag
- Wait 24-48 hours for data to appear in GA dashboard

### Build failures
- Run `npm run build` locally to check for errors
- Check Vercel build logs for specific error messages
- Ensure all dependencies are listed in package.json
