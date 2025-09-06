import mongoose from 'mongoose'

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

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)