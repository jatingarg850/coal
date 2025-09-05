/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  env: {
    MONGODB_URI: 'mongodb+srv://ds8314880:dtRD1Dnvq0ggbHT0@cluster0.b2g3ln2.mongodb.net/adicoals?retryWrites=true&w=majority&appName=Cluster0',
    JWT_SECRET: 'your-super-secret-jwt-key-change-this-in-production',
    NEXTAUTH_SECRET: 'your-nextauth-secret-key',
    NEXTAUTH_URL: 'http://localhost:3000'
  }
}

module.exports = nextConfig