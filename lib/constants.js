// Site Configuration
export const SITE_CONFIG = {
  name: 'Jai Mata Di Coals',
  description: 'Premium Coal Supplier in India',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/images/WhatsApp Image 2025-09-04 at 14.10.26_3f88efa3.jpg',
  links: {
    twitter: 'https://twitter.com/jaimatadicoals',
    facebook: 'https://facebook.com/jaimatadicoals',
    linkedin: 'https://linkedin.com/company/jaimatadicoals',
  },
}

// Contact Information
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
    street: '[Your Street Address]',
    city: '[Your City]',
    state: '[Your State]',
    pincode: '[PIN Code]',
    country: 'India'
  },
  businessHours: {
    weekdays: 'Monday - Saturday: 9:00 AM - 6:00 PM',
    weekend: 'Sunday: Closed'
  }
}

// Coal Images
export const COAL_IMAGES = [
  '/images/WhatsApp Image 2025-09-04 at 14.10.26_3f88efa3.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.26_743110a8.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.27_0c725090.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.27_40f620c0.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.28_12826353.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.28_9f1aeab8.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.28_f1ba0ed2.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.29_8b9022eb.jpg'
]

// Product Categories
export const PRODUCT_CATEGORIES = [
  'Steam Coal',
  'Coking Coal', 
  'Thermal Coal',
  'Anthracite Coal'
]