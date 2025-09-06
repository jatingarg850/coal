import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import SEO from '../components/SEO'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
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

  const [products, setProducts] = useState([])
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productInterest: 'General Inquiry'
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products?featured=true')
      const data = await response.json()
      if (data.success) {
        setProducts(data.data.slice(0, 6)) // Show 6 featured products
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      // Fallback products if API fails
      setProducts([
        {
          _id: '1',
          name: 'Premium Steam Coal',
          description: 'High-quality premium steam coal with excellent calorific value for power generation and industrial use',
          image: coalImages[0],
          category: 'Premium Steam Coal',
          specifications: { calorificValue: '6000-6500 kcal/kg', ashContent: '12-15%' }
        },
        {
          _id: '2',
          name: 'Indian Coal',
          description: 'Superior grade Indian coal sourced from premium mines across India',
          image: coalImages[1],
          category: 'Indian Coal',
          specifications: { calorificValue: '5500-6200 kcal/kg', ashContent: '15-20%' }
        },
        {
          _id: '3',
          name: 'Indonesian Coal',
          description: 'High-quality Indonesian coal with low ash content and high calorific value',
          image: coalImages[2],
          category: 'Indonesian Coal',
          specifications: { calorificValue: '6200-6800 kcal/kg', ashContent: '8-12%' }
        },
        {
          _id: '4',
          name: 'Pet Coke',
          description: 'Premium petroleum coke for industrial applications with high carbon content',
          image: coalImages[3],
          category: 'Pet Coke',
          specifications: { calorificValue: '8000-8500 kcal/kg', ashContent: '0.5-2%' }
        },
        {
          _id: '5',
          name: 'Industrial Grade Coal',
          description: 'Reliable industrial grade coal for various manufacturing applications',
          image: coalImages[4],
          category: 'Indian Coal',
          specifications: { calorificValue: '5800-6200 kcal/kg', ashContent: '14-18%' }
        },
        {
          _id: '6',
          name: 'Export Quality Coal',
          description: 'Export quality coal meeting international standards and specifications',
          image: coalImages[5],
          category: 'Indonesian Coal',
          specifications: { calorificValue: '6500-7000 kcal/kg', ashContent: '6-10%' }
        }
      ])
    }
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      })

      if (response.ok) {
        alert('Thank you for your inquiry! We will get back to you soon.')
        setContactForm({ 
          name: '', 
          email: '', 
          phone: '', 
          company: '', 
          message: '', 
          productInterest: 'General Inquiry' 
        })
      } else {
        alert('There was an error sending your message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again.')
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % coalImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [coalImages.length])

  return (
    <>
      <SEO 
        title="Jai Mata Di Coals - Premium Coal Supplier in India"
        description="Leading coal supplier providing high-quality steam coal, coking coal, thermal coal, and anthracite coal for industries across India. Guaranteed quality and timely delivery."
        keywords="coal supplier India, steam coal, coking coal, thermal coal, anthracite coal, industrial coal, power plant coal, steel industry coal"
      />

      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span>📧 jaimatadiservices2019@gmail.com</span>
            <span>📞 +91-9838931189</span>
          </div>
          <div className="flex space-x-4">
            <span>🕒 Mon-Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Jai Mata Di Coals</h1>
                <p className="text-sm text-gray-600">Premium Coal Supplier</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">About Us</a>
              <a href="#products" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Products</a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Contact</a>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Get Quote
              </button>
            </div>

            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t bg-white py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-orange-500 font-medium">Home</a>
                <a href="#about" className="text-gray-700 hover:text-orange-500 font-medium">About Us</a>
                <a href="#products" className="text-gray-700 hover:text-orange-500 font-medium">Products</a>
                <a href="#services" className="text-gray-700 hover:text-orange-500 font-medium">Services</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-500 font-medium">Contact</a>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium w-fit">
                  Get Quote
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Image Slider */}
      <section id="home" className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={coalImages[currentSlide]}
            alt="Coal Products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="mb-6">
              <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                🔥 Premium Quality Coal
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Leading Coal Supplier in <span className="text-orange-400">India</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Providing high-quality steam coal, coking coal, and thermal coal for industries with guaranteed quality and timely delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Products →
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="absolute bottom-8 right-8 flex space-x-2">
          <button 
            onClick={() => setCurrentSlide(currentSlide === 0 ? coalImages.length - 1 : currentSlide - 1)}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
          >
            ←
          </button>
          <button 
            onClick={() => setCurrentSlide((currentSlide + 1) % coalImages.length)}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
          >
            →
          </button>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {coalImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-orange-400 w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-orange-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10000+</div>
              <div className="text-orange-100">Tonnes Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Premium Coal Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We supply premium quality coal products to meet diverse industrial requirements with guaranteed specifications and timely delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
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
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  
                  {product.specifications && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-700">
                        <div className="flex justify-between mb-1">
                          <span>Calorific Value:</span>
                          <span className="font-medium">{product.specifications.calorificValue}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Ash Content:</span>
                          <span className="font-medium">{product.specifications.ashContent}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-orange-500 font-bold text-lg">Contact for Price</span>
                    <button 
                      onClick={() => {
                        setContactForm({...contactForm, productInterest: product.name})
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-medium transition-colors">
              View All Products →
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={coalImages[4]}
                  alt="About Us"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
            
            <div>
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Leading Coal Supplier Since 2014
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Jai Mata Di Coals has established itself as a trusted name in the coal industry, providing premium quality coal products to industries across India. Our commitment to excellence and customer satisfaction has made us a preferred choice for businesses.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in supplying various grades of coal including steam coal, coking coal, thermal coal, and anthracite coal, ensuring consistent quality and timely delivery to meet your industrial requirements.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 text-xl">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Quality Assured</div>
                    <div className="text-sm text-gray-600">Premium grade coal</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 text-xl">🚚</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Timely Delivery</div>
                    <div className="text-sm text-gray-600">On-time shipments</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 text-xl">💰</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Best Prices</div>
                    <div className="text-sm text-gray-600">Competitive rates</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 text-xl">🏭</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Industry Expert</div>
                    <div className="text-sm text-gray-600">Experienced team</div>
                  </div>
                </div>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Coal Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From sourcing to delivery, we provide comprehensive coal supply solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-orange-500 text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industrial Supply</h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable coal supply for power plants, steel mills, cement factories, and other industrial applications with guaranteed quality specifications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-orange-500 text-2xl">🚛</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Logistics & Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Efficient transportation and delivery services ensuring your coal reaches you on time, every time, with proper handling and care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-orange-500 text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Testing</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive quality testing and certification to ensure all coal products meet industry standards and your specific requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-orange-500 text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Tailored coal supply solutions based on your specific industrial needs, volume requirements, and delivery schedules.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-orange-500 text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional consultation services to help you choose the right coal grade and specifications for optimal performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-orange-500 text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Long-term Partnerships</h3>
              <p className="text-gray-600 leading-relaxed">
                Building lasting business relationships with flexible contracts, competitive pricing, and dedicated customer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your Coal Quote Today</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your coal requirements? Contact us for competitive pricing and reliable supply solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Office Address</h4>
                    <p className="text-gray-300">
                      Ward No 5, House No 568, Oblic 44<br />
                      Santaji Nagar, Kanhan, Nagpur - 441401<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone Numbers</h4>
                    <p className="text-gray-300">
                      +91-9838931189 (Primary)<br />
                      +91-9307787702 (Secondary)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email Address</h4>
                    <p className="text-gray-300">
                      jaimatadiservices2019@gmail.com<br />
                      jaimatadiservices2019@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                    <p className="text-gray-300">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Interest</label>
                  <select
                    value={contactForm.productInterest}
                    onChange={(e) => setContactForm({...contactForm, productInterest: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Premium Steam Coal">Premium Steam Coal</option>
                    <option value="Indian Coal">Indian Coal</option>
                    <option value="Indonesian Coal">Indonesian Coal</option>
                    <option value="Pet Coke">Pet Coke</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    rows="4"
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your coal requirements, quantity needed, delivery location, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors transform hover:scale-105"
                >
                  Send Inquiry →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">J</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Jai Mata Di Coals</h3>
                  <p className="text-sm text-gray-400">Premium Coal Supplier</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading coal supplier in India, providing high-quality coal products for industries with guaranteed quality and timely delivery.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-sm">📘</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-sm">📧</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-sm">📞</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-orange-400 transition-colors">Products</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Our Products</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-400">Premium Steam Coal</span></li>
                <li><span className="text-gray-400">Indian Coal</span></li>
                <li><span className="text-gray-400">Indonesian Coal</span></li>
                <li><span className="text-gray-400">Pet Coke</span></li>
                <li><span className="text-gray-400">Industrial Grade Coal</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">📍</span>
                  <div>
                    <p className="text-gray-400 text-sm">
                      Ward No 5, House No 568, Oblic 44<br />
                      Santaji Nagar, Kanhan, Nagpur - 441401
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-orange-500">📞</span>
                  <p className="text-gray-400 text-sm">+91-9838931189</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-orange-500">✉️</span>
                  <p className="text-gray-400 text-sm">jaimatadiservices2019@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Jai Mata Di Coals. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}