# Easy Installation Guide

## What We're Doing

I'm going to help you install:
1. **Homebrew** - A tool that makes installing other software easy on Mac
2. **Node.js** - The engine that runs your website

## Quick Installation (Copy & Paste These Commands)

### Step 1: Install Homebrew

Open **Terminal** (Applications > Utilities > Terminal) and paste this command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**What will happen:**
- It will ask for your Mac password (type it and press Enter - you won't see the characters as you type, that's normal!)
- It will download and install Homebrew
- This takes about 2-5 minutes
- You'll see lots of text scrolling - that's normal!

**When it's done**, you'll see something like "Installation successful!"

### Step 2: Install Node.js

After Homebrew is installed, paste this command in Terminal:

```bash
brew install node
```

**What will happen:**
- It will download and install Node.js
- This takes about 3-5 minutes
- You'll see progress messages

### Step 3: Verify It Worked

Type these two commands (one at a time) to check:

```bash
node --version
npm --version
```

You should see version numbers like `v20.x.x` and `10.x.x`

### Step 4: Install Project Dependencies

Once Node.js is installed, come back and I'll run:
```bash
npm install
```

This will install all the tools your website needs!

---

## Need Help?

If you get stuck at any step, just let me know what error message you see and I'll help you fix it!


