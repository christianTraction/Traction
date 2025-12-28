#!/bin/bash

# Installation script for Homebrew and Node.js
# This script will install Homebrew first, then Node.js

echo "🚀 Starting installation process..."
echo ""
echo "Step 1: Installing Homebrew..."
echo "This may ask for your Mac password - that's normal!"
echo ""

# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Check if Homebrew was installed successfully
if command -v brew &> /dev/null; then
    echo ""
    echo "✅ Homebrew installed successfully!"
    echo ""
    echo "Step 2: Installing Node.js..."
    echo "This will take a few minutes..."
    echo ""
    
    # Install Node.js
    brew install node
    
    echo ""
    echo "✅ Node.js installed successfully!"
    echo ""
    echo "Step 3: Verifying installation..."
    node --version
    npm --version
    echo ""
    echo "🎉 All done! Node.js and npm are now installed."
else
    echo ""
    echo "⚠️  Homebrew installation may have failed or needs manual setup."
    echo "Please check the output above for any errors."
fi


