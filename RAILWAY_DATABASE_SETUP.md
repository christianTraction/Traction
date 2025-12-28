# Railway Database Setup Guide

## Step 1: Add PostgreSQL Database to Railway

1. **Go to your Railway dashboard**: https://railway.app/
2. **Open your "Traction" project**
3. **Click "New"** → **"Database"** → **"Add PostgreSQL"**
4. **Wait for it to provision** (takes ~30 seconds)

## Step 2: Connect Database to Your App

1. **In Railway**, click on your **PostgreSQL database**
2. **Go to the "Variables" tab**
3. **Copy the `DATABASE_URL`** (it looks like: `postgresql://user:password@host:port/database`)

## Step 3: Add Environment Variable to Your App

1. **In Railway**, go back to your **Traction app** (not the database)
2. **Click "Variables" tab**
3. **Click "New Variable"**
4. **Add:**
   - **Name**: `DATABASE_URL`
   - **Value**: Paste the `DATABASE_URL` you copied from the database
5. **Click "Add"**

## Step 4: Redeploy Your App

Railway will automatically detect the new environment variable and redeploy. Or you can:
- Go to "Deployments" tab
- Click "Redeploy" on the latest deployment

## Step 5: Test It!

1. **Go to your live site**: https://traction-production-f071.up.railway.app
2. **Submit the form** with a test email
3. **Check Railway logs** to see if it saved:
   - Go to your app in Railway
   - Click "Deployments" → Latest deployment → "View Logs"
   - You should see: "New lead saved: { id: 1, email: '...', ... }"

## Step 6: View Your Submissions

You can view all submissions by visiting:
- `https://traction-production-f071.up.railway.app/api/leads`

Or I can create a simple admin page for you to view them in a nicer format!

---

## Troubleshooting

**If you see database connection errors:**
- Make sure `DATABASE_URL` is set in your app's environment variables
- Make sure the database is running (check Railway dashboard)
- Wait a few minutes after adding the database (it needs time to provision)

**Need help?** Let me know what error you see!


