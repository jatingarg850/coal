# Jai Mata Di Coals - Premium Coal Supplier Website

A modern, responsive website for Jai Mata Di Coals built with Next.js, featuring an admin panel for product and inquiry management.

![Jai Mata Di Coals](./public/images/WhatsApp%20Image%202025-09-04%20at%2014.10.26_3f88efa3.jpg)

## 🌟 Features

- **Modern Design**: Clean, professional design with coal industry imagery
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Image Slider**: Hero section with rotating coal product images
- **Product Showcase**: Featured products section with real coal images and specifications
- **Contact Form**: Functional contact form that saves inquiries to database
- **Admin Panel**: Secure admin dashboard for managing products and inquiries
- **Database Integration**: MongoDB integration for data persistence
- **SEO Optimized**: Complete SEO setup with meta tags, sitemap, and structured data
- **Performance Optimized**: Fast loading with Next.js optimization features

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT-based admin authentication
- **Styling**: Tailwind CSS with custom components
- **Deployment**: Vercel-ready with configuration files

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- MongoDB database (MongoDB Atlas recommended)
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd jai-mata-di-coals
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secure_jwt_secret_32_characters_minimum
   NEXTAUTH_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Seed the database**
   ```bash
   npm run seed
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Visit `http://localhost:3000`

## 📁 Project Structure

```
├── components/           # Reusable React components
│   └── SEO.js           # SEO component with meta tags
├── lib/                 # Utility functions and configurations
│   ├── constants.js     # Site constants and configuration
│   ├── dbConnect.js     # Database connection utility
│   ├── mongodb.js       # MongoDB client setup
│   └── utils.js         # Helper functions
├── models/              # Database models
│   ├── Admin.js         # Admin user model
│   ├── Inquiry.js       # Customer inquiry model
│   └── Product.js       # Product model
├── pages/               # Next.js pages
│   ├── api/             # API routes
│   │   ├── auth/        # Authentication endpoints
│   │   ├── inquiries/   # Inquiry management
│   │   └── products/    # Product management
│   ├── admin/           # Admin panel pages
│   │   ├── dashboard.js # Admin dashboard
│   │   └── login.js     # Admin login
│   ├── _app.js          # App component
│   ├── _document.js     # Document component
│   ├── index.js         # Homepage
│   └── products.js      # Products page
├── public/              # Static assets
│   ├── images/          # Coal product images
│   ├── favicon.ico      # Site favicon
│   ├── manifest.json    # PWA manifest
│   ├── robots.txt       # Search engine robots file
│   └── sitemap.xml      # XML sitemap
├── scripts/             # Database and utility scripts
│   └── seed.js          # Database seeding script
├── styles/              # CSS styles
│   └── globals.css      # Global styles with Tailwind
├── .env.example         # Environment variables example
├── .gitignore           # Git ignore rules
├── DEPLOYMENT.md        # Detailed deployment guide
├── middleware.js        # Next.js middleware for security
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vercel.json          # Vercel deployment configuration
```

## 🔐 Admin Panel

Access the admin panel at `/admin/login`

**Default Credentials:**
- Username: `admin`
- Password: `admin123`

### Admin Features:
- **Product Management**: Add, view, edit, and manage coal products
- **Inquiry Management**: View and manage customer inquiries
- **Image Selection**: Choose from uploaded coal images for products
- **Featured Products**: Mark products as featured for homepage display
- **Dashboard Analytics**: View basic statistics and recent activities

## 🎨 Customization

### Updating Contact Information

Edit the contact information in `lib/constants.js`:

```javascript
export const CONTACT_INFO = {
  phone: {
    primary: '+91-XXXXXXXXXX',
    secondary: '+91-XXXXXXXXXX'
  },
  email: {
    info: 'info@jaimatadicoals.com',
    sales: 'sales@jaimatadicoals.com'
  },
  address: {
    street: 'Your Street Address',
    city: 'Your City',
    state: 'Your State',
    pincode: 'PIN Code',
    country: 'India'
  }
}
```

### Adding New Products

1. Login to admin panel
2. Go to Products tab
3. Click "Add Product"
4. Fill in product details and select an image
5. Mark as "Featured" to show on homepage

### Styling Changes

- Main styles are in `styles/globals.css`
- Component styles use Tailwind CSS classes
- Colors can be customized in `tailwind.config.js`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set environment variables in Vercel dashboard
   - Deploy automatically

3. **Set Environment Variables in Vercel:**
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secure random string (32+ characters)
   - `NEXTAUTH_URL`: Your production domain
   - `NEXT_PUBLIC_SITE_URL`: Your production domain

### Other Deployment Options

See `DEPLOYMENT.md` for detailed guides on:
- Netlify
- Railway
- DigitalOcean App Platform
- Self-hosted deployment

## 🔍 SEO Features

- **Meta Tags**: Optimized title and description tags
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD schema for search engines
- **Sitemap**: XML sitemap for search engine indexing
- **Robots.txt**: Search engine crawling instructions
- **Performance**: Optimized images and code splitting

## 📊 Performance

- **Next.js Image Optimization**: Automatic image optimization and WebP conversion
- **Code Splitting**: Automatic code splitting for faster loading
- **Static Generation**: Pre-rendered pages for better performance
- **Caching**: Optimized caching strategies
- **Compression**: Gzip compression enabled

## 🔒 Security

- **JWT Authentication**: Secure admin authentication
- **Input Validation**: Form validation and sanitization
- **Security Headers**: XSS protection and security headers
- **Environment Variables**: Sensitive data in environment variables
- **Database Security**: Secure MongoDB connection and queries

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- Email: jaimatadiservices2019@gmail.com
- Phone: +91-9838931189

## 📄 License

This project is proprietary software for Jai Mata Di Coals.

---

**Built with ❤️ for Jai Mata Di Coals**