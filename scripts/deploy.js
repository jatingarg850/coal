#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment preparation...\n');

// Check if required files exist
const requiredFiles = [
  '.env.local',
  'package.json',
  'next.config.js'
];

console.log('📋 Checking required files...');
for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing required file: ${file}`);
    process.exit(1);
  }
  console.log(`✅ ${file} exists`);
}

// Check environment variables
console.log('\n🔧 Checking environment variables...');
const envPath = path.join(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

const requiredEnvVars = [
  'MONGODB_URI',
  'JWT_SECRET',
  'NEXTAUTH_URL'
];

for (const envVar of requiredEnvVars) {
  if (!envContent.includes(envVar)) {
    console.error(`❌ Missing environment variable: ${envVar}`);
    process.exit(1);
  }
  console.log(`✅ ${envVar} is set`);
}

// Run tests
console.log('\n🧪 Running build test...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build test passed');
} catch (error) {
  console.error('❌ Build test failed');
  process.exit(1);
}

// Check if images exist
console.log('\n🖼️  Checking coal images...');
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  console.error('❌ Images directory not found');
  process.exit(1);
}

const imageFiles = fs.readdirSync(imagesDir);
if (imageFiles.length === 0) {
  console.error('❌ No images found in public/images/');
  process.exit(1);
}

console.log(`✅ Found ${imageFiles.length} images`);

// Generate deployment summary
console.log('\n📊 Deployment Summary:');
console.log('='.repeat(50));
console.log(`Project: Jai Mata Di Coals Website`);
console.log(`Images: ${imageFiles.length} coal product images`);
console.log(`Environment: Production ready`);
console.log(`Build: Successful`);
console.log('='.repeat(50));

console.log('\n🎉 Deployment preparation complete!');
console.log('\n📝 Next steps:');
console.log('1. Push to GitHub: git add . && git commit -m "Ready for deployment" && git push');
console.log('2. Deploy on Vercel: Import repository and set environment variables');
console.log('3. Update domain URLs in environment variables');
console.log('4. Test all functionality after deployment');

console.log('\n🔗 Useful links:');
console.log('- Vercel: https://vercel.com');
console.log('- MongoDB Atlas: https://cloud.mongodb.com');
console.log('- Deployment Guide: See DEPLOYMENT.md');

console.log('\n✨ Your Jai Mata Di Coals website is ready for deployment!');