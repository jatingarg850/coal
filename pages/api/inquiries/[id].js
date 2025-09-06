import dbConnect from '../../../lib/dbConnect'
import Inquiry from '../../../models/Inquiry'

export default async function handler(req, res) {
  await dbConnect()
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case 'DELETE':
      try {
        const deleted = await Inquiry.findByIdAndDelete(id)
        if (!deleted) return res.status(404).json({ success: false, error: 'Inquiry not found' })
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break
    default:
      res.status(405).json({ success: false, message: 'Method not allowed' })
      break
  }
}
