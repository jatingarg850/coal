import mongoose from 'mongoose'

const InquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  productInterest: {
    type: String,
    enum: ['Steam Coal', 'Coking Coal', 'Thermal Coal', 'Anthracite Coal', 'General Inquiry'],
    default: 'General Inquiry'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'quoted', 'closed'],
    default: 'new'
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
})

export default mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema)