import dbConnect from '../../../lib/dbConnect'
import Product from '../../../models/Product'

export default async function handler(req, res) {
  // Try MongoDB first, fallback to static data if connection fails
  try {
    await dbConnect()

    switch (req.method) {
      case 'GET':
        try {
          const { featured, active } = req.query
          let query = { active: active === undefined ? true : active === 'true' }
          
          if (featured === 'true') {
            query.featured = true
          }

          const products = await Product.find(query).sort({ createdAt: -1 })
          res.status(200).json({ success: true, data: products })
        } catch (error) {
          // Fallback to static data
          const { fallbackProducts } = await import('../../../lib/fallbackData')
          let products = fallbackProducts.filter(p => p.active)
          
          if (req.query.featured === 'true') {
            products = products.filter(p => p.featured)
          }
          
          res.status(200).json({ success: true, data: products })
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
  } catch (dbError) {
    // Database connection failed, use fallback data
    if (req.method === 'GET') {
      const { fallbackProducts } = await import('../../../lib/fallbackData')
      let products = fallbackProducts.filter(p => p.active)
      
      if (req.query.featured === 'true') {
        products = products.filter(p => p.featured)
      }
      
      res.status(200).json({ success: true, data: products })
    } else {
      res.status(503).json({ 
        success: false, 
        error: 'Database unavailable. Please set up MongoDB connection.',
        message: 'See MONGODB_SETUP.md for instructions'
      })
    }
  }
}