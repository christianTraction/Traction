# Railway CLI Login - Step by Step

## What We're Doing
We're going to log you into Railway CLI so I can deploy and manage your website from the command line.

---

## Step-by-Step Instructions

### Step 1: Open Terminal
1. Press `Cmd + Space` (opens Spotlight)
2. Type "Terminal"
3. Press Enter

### Step 2: Navigate to Your Project
In Terminal, type this and press Enter:
```bash
cd ~/Traction
```

### Step 3: Log Into Railway
Type this and press Enter:
```bash
railway login
```

### Step 4: What Will Happen
1. **Your browser will open automatically** to Railway's website
2. **You'll see a page** asking you to authorize the CLI
3. **Click "Authorize"** or "Allow"
4. **Terminal will show**: "Logged in successfully" or similar

### Step 5: Verify It Worked
After you see "Logged in successfully" in Terminal, type this to check:
```bash
railway whoami
```

You should see your email address or username.

---

## That's It!

Once you're logged in, come back and tell me, and I'll:
- Check your deployment status
- Get your live URL
- Help manage your website

---

## Troubleshooting

**Browser didn't open?**
- Go to: https://railway.app/cli
- You'll see instructions there

**Still not working?**
- Make sure you have a Railway account (sign up at railway.app if needed)
- Try the command again



