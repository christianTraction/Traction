# Fix Database Connection Issue

## The Problem
Your app is trying to connect to `postgres.railway.internal` which isn't resolving. This means the internal Railway hostname isn't working.

## The Solution
Use the **public** DATABASE_URL instead of the internal one.

## Steps to Fix

### Step 1: Get the Public DATABASE_URL
1. In Railway, open your **Postgres database**
2. Go to **"Variables"** tab
3. Find `DATABASE_URL` 
4. **IMPORTANT**: Look for the one that has a **public hostname** like:
   - `containers-us-west-2.railway.app` or
   - `*.railway.app` (NOT `*.railway.internal`)
5. Copy the **full** DATABASE_URL value

### Step 2: Update in Your App
1. Go to your **Traction app** (not the database)
2. Go to **"Variables"** tab
3. Find `DATABASE_URL`
4. Click the three dots (⋮) → **Edit**
5. **Delete** the current value
6. **Paste** the public DATABASE_URL from your database
7. **Save**

### Step 3: Verify Format
The DATABASE_URL should:
- Start with `postgresql://`
- Have a hostname like `containers-us-west-2.railway.app` (NOT `railway.internal`)
- Include port `:5432`
- Include database name `/railway`

Example:
```
postgresql://postgres:password@containers-us-west-2.railway.app:5432/railway
```

### Step 4: Wait for Redeploy
Railway will automatically redeploy. Wait 2-3 minutes, then test the form again.

## Alternative: Link Services
If both services are in the same project, Railway should auto-link them. Make sure:
- Both "Traction" app and "Postgres" database are in the same Railway project
- They're in the same environment (production)

## After Fix
Once updated, check the logs again. You should see:
- "DATABASE_URL is set (length: XXX chars)"
- No more "ENOTFOUND" errors
- Form submissions should work!

