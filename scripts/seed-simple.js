const mongoose = require('mongoose')

// Simple seed script without dotenv dependency
// You can set MONGODB_URI directly here or pass it as environment variable

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://username:password@cluster.mongodb.net/jaimatadiservices?retryWrites=true&w=majority'

// Coal Images
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

// Product Schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, default: 'Contact for Price' },
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
  featured: { type: Boolean, default: false },
  active: { type: Boolean, default: true }
}, { timestamps: true })

// Admin Schema
const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ['admin', 'super_admin'], default: 'admin' },
  active: { type: Boolean, default: true }
}, { timestamps: true })

// Hash password before saving
const bcrypt = require('bcryptjs')
AdminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

const Product = mongoose.model('Product', ProductSchema)
const Admin = mongoose.model('Admin', AdminSchema)

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
  {
    name: 'Pet Coke Premium Grade',
    description: 'Premium petroleum coke for industrial applications with high carbon content and low ash.',
    image: coalImages[3],
    category: 'Pet Coke',
    featured: true,
    specifications: {
      calorificValue: '8000-8500 kcal/kg',
      ashContent: '0.5-2%',
      moistureContent: '1-3%',
      sulphurContent: '3-6%'
    }
  },
  {
    name: 'Industrial Grade Indian Coal',
    description: 'Reliable industrial grade Indian coal for various manufacturing applications with consistent quality.',
    image: coalImages[4],
    category: 'Indian Coal',
    featured: false,
    specifications: {
      calorificValue: '5000-5800 kcal/kg',
      ashContent: '18-25%',
      moistureContent: '10-15%',
      sulphurContent: '0.8-1.2%'
    }
  },
  {
    name: 'Export Quality Indonesian Coal',
    description: 'Export quality Indonesian coal meeting international standards and specifications.',
    image: coalImages[5],
    category: 'Indonesian Coal',
    featured: false,
    specifications: {
      calorificValue: '6500-7000 kcal/kg',
      ashContent: '6-10%',
      moistureContent: '5-8%',
      sulphurContent: '0.3-0.6%'
    }
  },
  {
    name: 'Steam Coal for Power Plants',
    description: 'Specialized steam coal optimized for power generation with consistent burning properties.',
    image: coalImages[6],
    category: 'Premium Steam Coal',
    featured: false,
    specifications: {
      calorificValue: '5800-6300 kcal/kg',
      ashContent: '14-18%',
      moistureContent: '9-12%',
      sulphurContent: '0.6-0.9%'
    }
  },
  {
    name: 'High Grade Pet Coke',
    description: 'High grade petroleum coke with superior carbon content for cement and steel industries.',
    image: coalImages[7],
    category: 'Pet Coke',
    featured: false,
    specifications: {
      calorificValue: '8200-8600 kcal/kg',
      ashContent: '0.3-1.5%',
      moistureContent: '0.5-2%',
      sulphurContent: '2-5%'
    }
  }
]

async function seedDatabase() {
  try {
    console.log('🚀 Starting database seeding...')
    console.log('📡 Connecting to MongoDB...')
    
    if (!MONGODB_URI || MONGODB_URI.includes('username:password')) {
      console.error('❌ Please update MONGODB_URI in the script or set it as environment variable')
      console.log('💡 You can:')
      console.log('   1. Edit this file and replace MONGODB_URI with your actual connection string')
      console.log('   2. Or set environment variable: MONGODB_URI=your_connection_string npm run seed-simple')
      process.exit(1)
    }

    await mongoose.connect(MONGODB_URI)
    console.log('✅ Connected to MongoDB')

    // Clear existing data
    console.log('🧹 Clearing existing data...')
    await Product.deleteMany({})
    await Admin.deleteMany({})
    console.log('✅ Cleared existing data')

    // Create products
    console.log('📦 Creating products...')
    const products = await Product.insertMany(sampleProducts)
    console.log(`✅ Created ${products.length} products`)

    // Create admin user
    console.log('👤 Creating admin user...')
    const admin = await Admin.create({
      username: 'admin',
      email: 'jaimatadiservices2019@gmail.com',
      password: 'admin123',
      role: 'super_admin'
    })
    console.log('✅ Created admin user:', admin.username)

    console.log('\n🎉 Database seeded successfully!')
    console.log('📋 Summary:')
    console.log(`   • ${products.length} products created`)
    console.log(`   • 1 admin user created`)
    console.log('\n🔑 Admin credentials:')
    console.log('   • Username: admin')
    console.log('   • Password: admin123')
    console.log('\n🌐 Next steps:')
    console.log('   1. Start the development server: npm run dev')
    console.log('   2. Visit: http://localhost:3000')
    console.log('   3. Admin panel: http://localhost:3000/admin/login')
    
  } catch (error) {
    console.error('❌ Error seeding database:', error.message)
    if (error.message.includes('authentication failed')) {
      console.log('💡 Check your MongoDB connection string and credentials')
    }
  } finally {
    await mongoose.connection.close()
    console.log('🔌 Database connection closed')
  }
}

seedDatabase()