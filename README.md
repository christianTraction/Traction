# Traction Landing Page

A modern, production-ready landing page for Traction built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚂 Deploying to Railway

1. **Connect your repository** to Railway
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Node Version: 18 or higher

3. **Environment Variables** (if needed):
   - Add any required environment variables in Railway's dashboard

4. **Deploy!** Railway will automatically detect Next.js and configure accordingly.

## 📁 Project Structure

```
Traction/
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.ts          # Form submission API endpoint
│   ├── globals.css               # Global styles with Tailwind
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main landing page
├── components/
│   ├── FeatureItem.tsx           # Reusable feature component
│   ├── TestimonialCard.tsx       # Testimonial card component
│   ├── FAQItem.tsx               # FAQ accordion component
│   └── Metric.tsx                # Metric display component
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎨 Features

- ✅ Fully responsive (mobile-first design)
- ✅ Dark theme (slate/emerald palette)
- ✅ All sections from specification implemented
- ✅ Form submission API route
- ✅ Smooth scrolling navigation
- ✅ Accessible components
- ✅ TypeScript for type safety

## 📝 Notes

- The form at the bottom submits to `/api/lead` which currently logs the data. In production, you'll want to integrate with a database or email service.
- All content is hard-coded in the page component as requested.
- The design uses Tailwind's utility classes for styling.

