# 🚀 Quick Start Guide - Jai Mata Di Services

## ✅ Current Status
Your website is now running at: **http://localhost:3000**

The website will work with sample data even without MongoDB. To get full functionality, follow the steps below.

## 🎯 What's Working Right Now
- ✅ Homepage with all your contact information
- ✅ Product showcase with sample products
- ✅ Contact form (saves to fallback storage)
- ✅ Products page with filtering
- ✅ Responsive design
- ✅ All your business details

## 🗄️ Set Up MongoDB (Required for Admin Panel)

### Step 1: Create MongoDB Atlas Account (Free)
1. Go to: https://cloud.mongodb.com
2. Sign up for free account
3. Create a new project

### Step 2: Create Free Database
1. Click "Build a Database"
2. Choose "M0 Sandbox" (FREE)
3. Select any cloud provider/region
4. Cluster Name: `Cluster0` (default is fine)
5. Click "Create"

### Step 3: Create Database User
1. Go to "Database Access" (left sidebar)
2. Click "Add New Database User"
3. Username: `jaimatadiuser`
4. Password: Create a strong password (SAVE THIS!)
5. Database User Privileges: "Read and write to any database"
6. Click "Add User"

### Step 4: Allow Network Access
1. Go to "Network Access" (left sidebar)
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Database" (left sidebar)
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. It looks like: `mongodb+srv://jaimatadiuser:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

### Step 6: Update .env.local
Replace the MONGODB_URI in your `.env.local` file:

```env
MONGODB_URI=mongodb+srv://jaimatadiuser:YOURPASSWORD@cluster0.xxxxx.mongodb.net/jaimatadiservices?retryWrites=true&w=majority
JWT_SECRET=jaimatadiservices2024supersecretjwtkey32chars
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Important**: Replace `YOURPASSWORD` with your actual password and update the cluster URL.

### Step 7: Seed Database
```bash
npm run seed-simple
```

## 🎉 Test Everything

### Homepage: http://localhost:3000
- ✅ Your contact info: +91-9838931189, +91-9307787702
- ✅ Email: jaimatadiservices2019@gmail.com
- ✅ Address: Ward No 5, House No 568, Oblic 44, Santaji Nagar, Kanhan, Nagpur - 441401
- ✅ Products: Premium Steam Coal, Indian Coal, Indonesian Coal, Pet Coke
- ✅ 10,000+ Tonnes delivered

### Products Page: http://localhost:3000/products
- ✅ Filter by category
- ✅ Product specifications
- ✅ Quote requests

### Admin Panel: http://localhost:3000/admin/login
- Username: `admin`
- Password: `admin123`
- ✅ Manage products
- ✅ View inquiries

## 🚨 If You Don't Want to Set Up MongoDB Right Now

The website works perfectly with sample data! You can:
1. Browse the website
2. Test all features
3. See how it looks
4. Set up MongoDB later when ready

## 📞 Need Help?

If you need help with MongoDB setup:
1. The website works without it for testing
2. MongoDB Atlas has good documentation
3. The connection string format is very important
4. Make sure to replace `<password>` with your actual password

## 🎯 Next Steps After MongoDB Setup

1. **Test admin panel** - Add/edit products
2. **Test contact forms** - Submit inquiries
3. **Deploy to production** - Use Vercel (free)
4. **Add your domain** - Update environment variables

Your Jai Mata Di Services website is ready! 🎉