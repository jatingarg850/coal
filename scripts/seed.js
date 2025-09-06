const mongoose = require('mongoose')
const path = require('path')
const bcrypt = require('bcryptjs')

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') })

// Define schemas directly in the seed script
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: String,
    default: 'Contact for Price'
  },
  category: {
    type: String,
    enum: ['Premium Steam Coal', 'Indian Coal', 'Indonesian Coal', 'Pet Coke'],
    required: true
  },
  specifications: {
    calorificValue: String,
    ashContent: String,
    moistureContent: String,
    sulphurContent: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['admin', 'super_admin'],
    default: 'admin'
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

AdminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

const Product = mongoose.model('Product', ProductSchema)
const Admin = mongoose.model('Admin', AdminSchema)

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
    description: 'High-quality premium steam coal with excellent calorific value, perfect for industrial applications and power generation.',
    image: coalImages[0],
    category: 'Premium Steam Coal',
    featured: true,
    specifications: {
      calorificValue: '6000-6500 kcal/kg',
      ashContent: '12-15%',
      moistureContent: '8-10%',
      sulphurContent: '0.5-0.8%'
    }
  },
  {
    name: 'Indian Coal Grade A',
    description: 'Superior grade Indian coal sourced from premium mines across India with consistent quality.',
    image: coalImages[1],
    category: 'Indian Coal',
    featured: true,
    specifications: {
      calorificValue: '5500-6200 kcal/kg',
      ashContent: '15-20%',
      moistureContent: '8-12%',
      sulphurContent: '0.6-1.0%'
    }
  },
  {
    name: 'Indonesian Coal Premium',
    description: 'High-quality Indonesian coal with low ash content and high calorific value for industrial use.',
    image: coalImages[2],
    category: 'Indonesian Coal',
    featured: true,
    specifications: {
      calorificValue: '6200-6800 kcal/kg',
      ashContent: '8-12%',
      moistureContent: '6-10%',
      sulphurContent: '0.4-0.7%'
    }
  },
]

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')

    

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