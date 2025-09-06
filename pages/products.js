import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  const categories = ['All', 'Premium Steam Coal', 'Indian Coal', 'Indonesian Coal', 'Pet Coke']

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory))
    }
  }, [selectedCategory, products])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      if (data.success) {
        setProducts(data.data)
        setFilteredProducts(data.data)
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading products...</div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Our Products - Jai Mata Di Coals</title>
        <meta name="description" content="Explore our complete range of premium coal products including steam coal, coking coal, thermal coal, and anthracite coal." />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Jai Mata Di Coals</h1>
                <p className="text-sm text-gray-600">Premium Coal Supplier</p>
              </div>
            </Link>
            
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Home</Link>
              <Link href="/products" className="text-orange-500 font-medium">Products</Link>
              <Link href="/#about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">About Us</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Coal Products</h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            Discover our comprehensive range of premium quality coal products for all your industrial needs
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product._id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                  {product.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  
                  {product.specifications && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Specifications</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        {product.specifications.calorificValue && (
                          <div className="flex justify-between">
                            <span>Calorific Value:</span>
                            <span className="font-medium">{product.specifications.calorificValue}</span>
                          </div>
                        )}
                        {product.specifications.ashContent && (
                          <div className="flex justify-between">
                            <span>Ash Content:</span>
                            <span className="font-medium">{product.specifications.ashContent}</span>
                          </div>
                        )}
                        {product.specifications.moistureContent && (
                          <div className="flex justify-between">
                            <span>Moisture Content:</span>
                            <span className="font-medium">{product.specifications.moistureContent}</span>
                          </div>
                        )}
                        {product.specifications.sulphurContent && (
                          <div className="flex justify-between">
                            <span>Sulphur Content:</span>
                            <span className="font-medium">{product.specifications.sulphurContent}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-orange-500 font-bold text-lg">Contact for Price</span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Custom Coal Solutions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for customized coal products and bulk supply solutions tailored to your specific requirements.
          </p>
          <Link href="/#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Jai Mata Di Coals. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}