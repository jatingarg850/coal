# Deployment Guide - Jai Mata Di Coals Website

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set environment variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: A secure random string (32+ characters)
     - `NEXTAUTH_URL`: Your production domain (e.g., https://yoursite.vercel.app)

3. **Domain Setup**
   - Add your custom domain in Vercel dashboard
   - Update `NEXTAUTH_URL` to your custom domain

### Option 2: Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Environment Variables**
   - Add the same environment variables as Vercel

### Option 3: Railway

1. **Connect GitHub Repository**
2. **Set Environment Variables**
3. **Deploy automatically**

### Option 4: DigitalOcean App Platform

1. **Create New App**
2. **Connect GitHub**
3. **Configure Environment Variables**
4. **Deploy**

## 📋 Pre-Deployment Checklist

### ✅ Required Steps:

1. **Environment Variables Setup**
   ```bash
   # Copy example file
   cp .env.example .env.local
   
   # Update with your actual values
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secure_jwt_secret
   NEXTAUTH_URL=your_production_url
   ```

2. **Database Setup**
   ```bash
   # Seed the database with initial data
   npm run seed
   ```

3. **Build Test**
   ```bash
   # Test production build locally
   npm run build
   npm start
   ```

4. **Update Configuration Files**
   - Update `public/robots.txt` with your domain
   - Update `public/sitemap.xml` with your domain
   - Replace `public/favicon.ico` with your actual favicon

### 🔧 Configuration Updates Needed:

1. **Contact Information** (in `pages/index.js`):
   - Replace placeholder phone numbers
   - Replace placeholder email addresses
   - Replace placeholder business address

2. **Domain URLs**:
   - Update `NEXTAUTH_URL` in environment variables
   - Update sitemap.xml with your actual domain
   - Update robots.txt with your actual domain

3. **SEO Meta Tags**:
   - Update meta descriptions
   - Add Open Graph tags
   - Add Twitter Card tags

## 🗄️ Database Setup

### MongoDB Atlas (Recommended)

1. **Create MongoDB Atlas Account**
   - Go to [mongodb.com/atlas](https://mongodb.com/atlas)
   - Create a free cluster

2. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

3. **Whitelist IP Addresses**
   - Add `0.0.0.0/0` for all IPs (or specific deployment IPs)

4. **Create Database User**
   - Create a user with read/write permissions

## 🔐 Security Considerations

1. **JWT Secret**
   - Use a strong, random 32+ character string
   - Never commit this to version control

2. **Environment Variables**
   - Never commit `.env.local` to git
   - Use platform-specific environment variable settings

3. **Database Security**
   - Use strong database passwords
   - Limit IP access when possible
   - Enable MongoDB Atlas security features

## 📊 Performance Optimization

1. **Image Optimization**
   - All images are optimized with Next.js Image component
   - WebP format enabled for better compression

2. **Code Splitting**
   - Automatic code splitting with Next.js
   - Dynamic imports where beneficial

3. **Caching**
   - Static assets cached automatically
   - API responses can be cached as needed

## 🔍 SEO Setup

1. **Meta Tags**
   - Title tags optimized for each page
   - Meta descriptions added
   - Open Graph tags for social sharing

2. **Sitemap**
   - XML sitemap generated
   - Submit to Google Search Console

3. **Robots.txt**
   - Proper robots.txt configuration
   - Admin pages blocked from indexing

## 📱 Testing

### Before Deployment:

1. **Functionality Testing**
   ```bash
   npm run dev
   ```
   - Test all forms
   - Test admin panel
   - Test product display
   - Test responsive design

2. **Build Testing**
   ```bash
   npm run build
   npm start
   ```
   - Ensure production build works
   - Check for any build errors

3. **Cross-Browser Testing**
   - Test on Chrome, Firefox, Safari, Edge
   - Test on mobile devices

## 🚨 Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check for TypeScript errors
   - Ensure all dependencies are installed
   - Check environment variables

2. **Database Connection Issues**
   - Verify MongoDB URI format
   - Check IP whitelist settings
   - Verify database user permissions

3. **Image Loading Issues**
   - Ensure images are in `public/images/` folder
   - Check image file names match exactly
   - Verify Next.js Image component usage

## 📞 Post-Deployment

1. **Test All Features**
   - Contact form submission
   - Admin panel login
   - Product display
   - Mobile responsiveness

2. **Set Up Monitoring**
   - Monitor website uptime
   - Set up error tracking
   - Monitor database performance

3. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Set up Google Analytics
   - Verify social media sharing

## 🔄 Updates and Maintenance

1. **Regular Updates**
   - Keep dependencies updated
   - Monitor security advisories
   - Regular database backups

2. **Content Management**
   - Use admin panel for product updates
   - Regular content reviews
   - Monitor inquiry submissions

---

## 📋 Quick Deployment Commands

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 3. Seed database
npm run seed

# 4. Test build
npm run build

# 5. Deploy to Vercel
npx vercel

# Or push to GitHub and deploy via Vercel dashboard
git add .
git commit -m "Ready for deployment"
git push origin main
```

Your Jai Mata Di Coals website is now ready for deployment! 🎉