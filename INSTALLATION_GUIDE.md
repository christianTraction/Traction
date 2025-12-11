# Installation Guide for Traction

## What We're Installing

**Node.js** - This is like the engine that runs your website. It's a program that lets your computer understand and run the code we wrote.

**npm** - This comes with Node.js. It's like an app store for code libraries. We use it to download all the tools our website needs.

## Step-by-Step Installation

### Option 1: Install Node.js Directly (Easiest for Non-Technical Users)

1. **Open your web browser** and go to: https://nodejs.org/

2. **Download the LTS version** (it will say "LTS" - this means "Long Term Support" and is the most stable version)
   - You'll see a big green button that says something like "Download Node.js (LTS)"
   - This will download a file to your Downloads folder

3. **Open the downloaded file** (it will be called something like `node-v20.x.x.pkg`)

4. **Follow the installation wizard:**
   - Click "Continue" through the screens
   - Click "Install" when prompted
   - You may need to enter your computer password
   - Wait for it to finish (usually takes 1-2 minutes)

5. **Verify it worked:**
   - Open Terminal (you can find it in Applications > Utilities)
   - Type: `node --version` and press Enter
   - You should see a version number like `v20.x.x`
   - Type: `npm --version` and press Enter
   - You should see a version number like `10.x.x`

### Option 2: Install Using Homebrew (If you prefer command line)

If you want to use Homebrew (a package manager for Mac), I can help you install that first, then Node.js.

## After Node.js is Installed

Once Node.js is installed, come back here and I'll help you install all the project dependencies!

---

## What Happens Next?

After Node.js is installed, we'll run:
```bash
npm install
```

This command will:
- Read the `package.json` file (which lists all the tools we need)
- Download all those tools from the internet
- Save them in a folder called `node_modules`
- This usually takes 2-5 minutes depending on your internet speed

Then you'll be ready to run your website!

