import dbConnect from '../../../lib/dbConnect'
import Product from '../../../models/Product'

export default async function handler(req, res) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      try {
        const { featured, active = true } = req.query
        let query = { active: active === 'true' }
        
        if (featured === 'true') {
          query.featured = true
        }

        const products = await Product.find(query).sort({ createdAt: -1 })
        res.status(200).json({ success: true, data: products })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    case 'POST':
      try {
        const product = await Product.create(req.body)
        res.status(201).json({ success: true, data: product })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' })
      break
  }
}