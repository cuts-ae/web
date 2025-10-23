# Cuts - Healthy Food Delivery Platform

A beautiful, investor-ready marketing website for Cuts, UAE's first nutrition-focused food delivery platform.

## 🎨 Design Philosophy

This website is built with a warm, inviting, and community-focused design language:

- **Color Palette**: Soft whites, fresh greens, warm yellows
- **Typography**: Large, readable, accessible
- **Animations**: Smooth, delightful, performant
- **Tone**: Welcoming, not corporate

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19.1.0 with Server Components
- **TypeScript**: Strict mode
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
app/
├── page.tsx              # Home page
├── restaurants/          # For Restaurants page
├── drivers/              # For Drivers page
├── about/                # About page
├── contact/              # Contact page
├── layout.tsx            # Root layout with Navigation & Footer
└── globals.css           # Global styles & design tokens

components/
├── navigation.tsx        # Sticky navigation with mobile menu
├── footer.tsx            # Footer with links & social
└── ui/                   # Reusable UI components
    ├── button.tsx
    ├── card.tsx
    └── container.tsx
```

## 🎯 Features

### Pages
- **Home**: Hero, problem/solution, features, map, social proof, CTA
- **For Restaurants**: Benefits, how it works, requirements, CTA
- **For Drivers**: Benefits, how it works, requirements, stats, CTA
- **About**: Story, mission, vision, values, investor section
- **Contact**: Contact form, contact info, map

### Components
- Responsive navigation with sticky behavior
- Smooth scroll animations with Framer Motion
- Mobile-friendly with hamburger menu
- Reusable UI components (Button, Card, Container)
- SEO optimized with metadata for all pages

## 🚀 Getting Started

### Development
```bash
npm run dev          # Start dev server with hot reload
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build
```bash
npm run build        # Production build
npm run start        # Start production server
```

### Linting
```bash
npm run lint         # Run ESLint
```

## 🎨 Design System

### Colors
- **Primary**: Fresh Green (#10B981, #34D399)
- **Accent Yellow**: #FCD34D, #FDE68A
- **Accent Orange**: #FB923C (for CTAs)
- **Backgrounds**: #FEFEFE, #FFFBF5
- **Neutrals**: Gray scale from 50-900

### Typography
- **Font**: Geist Sans (primary), Geist Mono (code)
- **Sizes**: Generous, accessible (4xl-7xl for headlines)

### Spacing
- Generous whitespace
- Sections: py-24 (96px vertical padding)
- Components: Rounded corners (rounded-2xl, rounded-3xl)

## 📱 Responsive Design

- **Mobile-first** approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactions
- Optimized for both mobile and desktop

## ♿ Accessibility

- WCAG AA compliant
- Semantic HTML
- Keyboard navigation
- Screen reader friendly
- Focus indicators

## 🚀 Deployment

Ready to deploy to:
- Vercel (recommended)
- Netlify
- AWS
- Self-hosted

## 📝 Notes for Investors

This website is designed to:
- Showcase the product vision clearly
- Demonstrate professionalism and attention to detail
- Build trust with warm, approachable design
- Highlight market opportunity and traction
- Provide clear CTAs for customers, restaurants, and drivers

## 🔗 Links

- Repository: https://github.com/cuts-ae/web.git
- Contact: hello@cut.ae

---

© 2025 Cut. Made with care in UAE.
