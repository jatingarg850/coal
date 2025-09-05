import dbConnect from '../../../lib/dbConnect'
import Inquiry from '../../../models/Inquiry'

export default async function handler(req, res) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      try {
        const inquiries = await Inquiry.find({}).sort({ createdAt: -1 })
        res.status(200).json({ success: true, data: inquiries })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    case 'POST':
      try {
        const inquiry = await Inquiry.create(req.body)
        res.status(201).json({ success: true, data: inquiry })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' })
      break
  }
}