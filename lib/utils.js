// Utility functions for the application

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatPhoneNumber(phone) {
  // Format Indian phone numbers
  if (phone && phone.startsWith('+91')) {
    return phone
  }
  return phone ? `+91-${phone}` : ''
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone) {
  const phoneRegex = /^[+]?[0-9]{10,15}$/
  return phoneRegex.test(phone.replace(/\s|-/g, ''))
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + '...'
}

export function generateMetaDescription(text, maxLength = 160) {
  return truncateText(text, maxLength)
}

// SEO helpers
export function generatePageTitle(title, siteName = 'Jai Mata Di Coals') {
  return title ? `${title} | ${siteName}` : siteName
}

// Form validation
export function validateContactForm(data) {
  const errors = {}
  
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long'
  }
  
  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }
  
  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}