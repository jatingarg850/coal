const mongoose = require('mongoose')
require('dotenv').config({ path: '.env.local' })

// Import models
const Product = require('../models/Product')
const Admin = require('../models/Admin')

const coalImages = [
  '/images/WhatsApp Image 2025-09-04 at 14.10.26_3f88efa3.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.26_743110a8.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.27_0c725090.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.27_40f620c0.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.28_12826353.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.28_9f1aeab8.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.28_f1ba0ed2.jpg',
  '/images/WhatsApp Image 2025-09-04 at 14.10.29_8b9022eb.jpg'
]

const sampleProducts = [
  {
    name: 'Premium Steam Coal',
    description: 'High-quality steam coal with excellent calorific value, perfect for industrial applications and power generation.',
    image: coalImages[0],
    category: 'Steam Coal',
    featured: true,
    specifications: {
      calorificValue: '6000-6500 kcal/kg',
      ashContent: '12-15%',
      moistureContent: '8-10%',
      sulphurContent: '0.5-0.8%'
    }
  },
  {
    name: 'Superior Coking Coal',
    description: 'Premium grade coking coal specifically designed for steel industry applications with low ash content.',
    image: coalImages[1],
    category: 'Coking Coal',
    featured: true,
    specifications: {
      calorificValue: '7000-7500 kcal/kg',
      ashContent: '8-12%',
      moistureContent: '6-8%',
      sulphurContent: '0.6-1.0%'
    }
  },
  {
    name: 'Efficient Thermal Coal',
    description: 'High-efficiency thermal coal optimized for power generation with consistent quality and performance.',
    image: coalImages[2],
    category: 'Thermal Coal',
    featured: true,
    specifications: {
      calorificValue: '5500-6000 kcal/kg',
      ashContent: '15-18%',
      moistureContent: '10-12%',
      sulphurContent: '0.4-0.7%'
    }
  },
  {
    name: 'Premium Anthracite Coal',
    description: 'Highest grade anthracite coal with exceptional calorific value and minimal ash content.',
    image: coalImages[3],
    category: 'Anthracite Coal',
    featured: true,
    specifications: {
      calorificValue: '7500-8000 kcal/kg',
      ashContent: '5-8%',
      moistureContent: '3-5%',
      sulphurContent: '0.3-0.5%'
    }
  },
  {
    name: 'Industrial Steam Coal',
    description: 'Reliable steam coal for various industrial applications with consistent quality standards.',
    image: coalImages[4],
    category: 'Steam Coal',
    featured: false,
    specifications: {
      calorificValue: '5800-6200 kcal/kg',
      ashContent: '14-16%',
      moistureContent: '9-11%',
      sulphurContent: '0.6-0.9%'
    }
  },
  {
    name: 'Metallurgical Coking Coal',
    description: 'Specialized coking coal for metallurgical processes with optimal coking properties.',
    image: coalImages[5],
    category: 'Coking Coal',
    featured: false,
    specifications: {
      calorificValue: '6800-7200 kcal/kg',
      ashContent: '10-13%',
      moistureContent: '7-9%',
      sulphurContent: '0.7-1.1%'
    }
  }
]

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')

    // Clear existing data
    await Product.deleteMany({})
    await Admin.deleteMany({})
    console.log('Cleared existing data')

    // Create products
    const products = await Product.insertMany(sampleProducts)
    console.log(`Created ${products.length} products`)

    // Create admin user
    const admin = await Admin.create({
      username: 'admin',
      email: 'admin@jaimatadicoals.com',
      password: 'admin123',
      role: 'super_admin'
    })
    console.log('Created admin user:', admin.username)

    console.log('Database seeded successfully!')
    console.log('Admin credentials: username: admin, password: admin123')
    
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await mongoose.connection.close()
    console.log('Database connection closed')
  }
}

seedDatabase()