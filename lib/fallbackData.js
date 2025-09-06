// Fallback data for testing without MongoDB

export const fallbackProducts = [
  {
    _id: '1',
    name: 'Premium Steam Coal',
    description: 'High-quality premium steam coal with excellent calorific value, perfect for industrial applications and power generation.',
    image: '/images/WhatsApp Image 2025-09-04 at 14.10.26_3f88efa3.jpg',
    category: 'Premium Steam Coal',
    featured: true,
    specifications: {
      calorificValue: '6000-6500 kcal/kg',
      ashContent: '12-15%',
      moistureContent: '8-10%',
      sulphurContent: '0.5-0.8%'
    },
    active: true,
    createdAt: new Date().toISOString()
  },
  {
    _id: '2',
    name: 'Indian Coal Grade A',
    description: 'Superior grade Indian coal sourced from premium mines across India with consistent quality.',
    image: '/images/WhatsApp Image 2025-09-04 at 14.10.26_743110a8.jpg',
    category: 'Indian Coal',
    featured: true,
    specifications: {
      calorificValue: '5500-6200 kcal/kg',
      ashContent: '15-20%',
      moistureContent: '8-12%',
      sulphurContent: '0.6-1.0%'
    },
    active: true,
    createdAt: new Date().toISOString()
  },
  {
    _id: '3',
    name: 'Indonesian Coal Premium',
    description: 'High-quality Indonesian coal with low ash content and high calorific value for industrial use.',
    image: '/images/WhatsApp Image 2025-09-04 at 14.10.27_0c725090.jpg',
    category: 'Indonesian Coal',
    featured: true,
    specifications: {
      calorificValue: '6200-6800 kcal/kg',
      ashContent: '8-12%',
      moistureContent: '6-10%',
      sulphurContent: '0.4-0.7%'
    },
    active: true,
    createdAt: new Date().toISOString()
  },
  {
    _id: '4',
    name: 'Pet Coke Premium Grade',
    description: 'Premium petroleum coke for industrial applications with high carbon content and low ash.',
    image: '/images/WhatsApp Image 2025-09-04 at 14.10.27_40f620c0.jpg',
    category: 'Pet Coke',
    featured: true,
    specifications: {
      calorificValue: '8000-8500 kcal/kg',
      ashContent: '0.5-2%',
      moistureContent: '1-3%',
      sulphurContent: '3-6%'
    },
    active: true,
    createdAt: new Date().toISOString()
  },
  {
    _id: '5',
    name: 'Industrial Grade Indian Coal',
    description: 'Reliable industrial grade Indian coal for various manufacturing applications with consistent quality.',
    image: '/images/WhatsApp Image 2025-09-04 at 14.10.28_12826353.jpg',
    category: 'Indian Coal',
    featured: false,
    specifications: {
      calorificValue: '5000-5800 kcal/kg',
      ashContent: '18-25%',
      moistureContent: '10-15%',
      sulphurContent: '0.8-1.2%'
    },
    active: true,
    createdAt: new Date().toISOString()
  },
  {
    _id: '6',
    name: 'Export Quality Indonesian Coal',
    description: 'Export quality Indonesian coal meeting international standards and specifications.',
    image: '/images/WhatsApp Image 2025-09-04 at 14.10.28_9f1aeab8.jpg',
    category: 'Indonesian Coal',
    featured: false,
    specifications: {
      calorificValue: '6500-7000 kcal/kg',
      ashContent: '6-10%',
      moistureContent: '5-8%',
      sulphurContent: '0.3-0.6%'
    },
    active: true,
    createdAt: new Date().toISOString()
  }
]

export const fallbackInquiries = []