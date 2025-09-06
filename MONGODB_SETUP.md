# MongoDB Setup Guide

## 🗄️ Quick MongoDB Setup

### Option 1: MongoDB Atlas (Recommended - Free)

1. **Go to MongoDB Atlas**
   - Visit: https://cloud.mongodb.com
   - Sign up for a free account

2. **Create a Free Cluster**
   - Click "Build a Database"
   - Choose "M0 Sandbox" (Free tier)
   - Select a cloud provider and region
   - Click "Create Cluster"

3. **Create Database User**
   - Go to "Database Access" in left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Username: `jaimatadiuser`
   - Password: Generate a secure password (save it!)
   - Database User Privileges: "Read and write to any database"
   - Click "Add User"

4. **Whitelist IP Address**
   - Go to "Network Access" in left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" in left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://jaimatadiuser:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

6. **Update .env.local**
   - Replace `<password>` with your actual password
   - Change database name from `test` to `jaimatadiservices`
   - Final format: `mongodb+srv://jaimatadiuser:yourpassword@cluster0.xxxxx.mongodb.net/jaimatadiservices?retryWrites=true&w=majority`

### Option 2: Local MongoDB (Advanced)

If you prefer local development:

1. **Install MongoDB Community Server**
   - Download from: https://www.mongodb.com/try/download/community
   - Install and start MongoDB service

2. **Use Local Connection String**
   ```
   MONGODB_URI=mongodb://localhost:27017/jaimatadiservices
   ```

## 🔧 Update Your .env.local

Replace the content in `.env.local` with:

```env
# Replace with your actual MongoDB connection string
MONGODB_URI=mongodb+srv://yourusername:yourpassword@yourcluster.mongodb.net/jaimatadiservices?retryWrites=true&w=majority

# Generate a secure JWT secret (32+ characters)
JWT_SECRET=jaimatadiservices2024supersecretjwtkey32chars

# Development URL
NEXTAUTH_URL=http://localhost:3000

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🚀 After Setup

1. **Install dependencies** (if not done):
   ```bash
   npm install
   ```

2. **Seed the database**:
   ```bash
   npm run seed-simple
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

## 🆘 Quick Test Without MongoDB

If you want to test the website without setting up MongoDB right now, I can create a version that works with local JSON data.