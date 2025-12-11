# FX Master - Global Payment Platform 💰

A modern, responsive landing page for FX Master built with Next.js 16, React 19, and Tailwind CSS v4.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 with App Router, React 19, TypeScript
- **Tailwind CSS v4**: Latest Tailwind with CSS-first configuration
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Real-time Currency Conversion**: Live exchange rates from API
- **Interactive Components**: Dropdowns, accordions, carousels
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter cards
- **Performance**: Optimized images with Next.js Image component

## 📦 Project Structure

```
Fx-master/
├── public/
│   ├── icons/          # SVG icons
│   ├── images/         # Images and assets
│   └── brands/         # Brand logos
├── src/
│   ├── app/
│   │   ├── globals.css # Global styles with Tailwind
│   │   ├── layout.tsx  # Root layout with metadata
│   │   └── page.tsx    # Home page
│   └── components/
│       ├── Header.tsx       # Navigation header
│       ├── Hero.tsx         # Hero section with currency converter
│       ├── Conversion.tsx   # Brand carousel section
│       ├── Works.tsx        # How it works section
│       ├── Mobile.tsx       # Mobile app section
│       ├── Security.tsx     # Security features
│       ├── Choose.tsx       # Why choose us section
│       ├── Questions.tsx    # FAQ accordion
│       ├── Contact.tsx      # Contact CTA
│       └── Hi.tsx           # Footer
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm, yarn, pnpm, or bun

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Key Components

### 1. Header Component (`src/components/Header.tsx`)
- Responsive navigation with mobile menu
- Glassmorphic design with backdrop blur
- Smooth transitions and animations
- Mobile hamburger menu with slide-in animation

### 2. Hero Section (`src/components/Hero.tsx`)
- **Real-time currency converter** with live API integration
- Interactive dropdowns for currency selection
- Live exchange rate calculations
- Transfer fee display
- Country flags with currency codes
- Responsive design for all screen sizes

### 3. Conversion Section (`src/components/Conversion.tsx`)
- Brand carousel with auto-advance
- Pagination dots for navigation
- Trusted by leading companies showcase
- Gradient backgrounds and modern styling

### 4. Works Section (`src/components/Works.tsx`)
- Step-by-step process explanation
- Icon-based feature cards
- Large image showcase
- Call-to-action buttons
- Floating decorative icons

### 5. Mobile App Section (`src/components/Mobile.tsx`)
- **App store download badges** (Google Play & App Store)
- QR code for easy download
- Feature highlights with icons
- Phone mockup showcase
- Responsive layout for mobile/tablet/desktop

### 6. Security Section (`src/components/Security.tsx`)
- Security feature cards
- FCA authorization badge
- Encryption and compliance highlights
- Feature strip with key security points

### 7. Choose Section (`src/components/Choose.tsx`)
- Grid layout of features
- Image overlays with gradient
- Hover effects
- Feature descriptions

### 8. FAQ Section (`src/components/Questions.tsx`)
- Accordion-style questions and answers
- Smooth expand/collapse animations
- Gradient numbering badges
- Responsive design

### 9. Contact Section (`src/components/Contact.tsx`)
- Call-to-action buttons
- Gradient button styles
- Support and consultation options

### 10. Footer (`src/components/Hi.tsx`)
- Social media links (Instagram, Facebook, YouTube, X, LinkedIn)
- Company information
- Responsive layout
- Dark gradient background

## 🔧 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`

Example:
```tsx
import NewSection from "@/components/NewSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <NewSection />
      {/* ... other components */}
    </>
  );
}
```

### Modifying Colors

Update the Tailwind theme in `src/app/globals.css`:

```css
:root {
  --primary: #2563eb;
  --secondary: #1e40af;
}

@theme inline {
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
}
```

### API Configuration

The Hero section uses the FX Master API for exchange rates. Update the API endpoint and key in `src/components/Hero.tsx`:

```typescript
const res = await fetch(
  "https://fxmaster-prod-apim.azure-api.net/fxmaster-api-prod-clone/API-FX-100-App",
  {
    headers: { fx_key: "YOUR_API_KEY" },
  }
);
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## 🎯 Performance Optimization

- Next.js Image component for optimized images
- Lazy loading for components
- CSS-in-JS with Tailwind for minimal CSS
- Server-side rendering for SEO
- Automatic code splitting

## 🔒 Security Features Highlighted

- ✅ FCA Authorization & Regulation
- ✅ Bank-level encryption
- ✅ 24/7 fraud monitoring
- ✅ KYC/AML compliance
- ✅ PCI DSS standards
- ✅ Real-time tracking

## 📦 Dependencies

### Production Dependencies
- `next`: ^16.0.1 - React framework
- `react`: 19.2.0 - UI library
- `react-dom`: 19.2.0 - React DOM renderer
- `lucide-react`: ^0.553.0 - Icon library
- `react-icons`: ^5.5.0 - Additional icons
- `@headlessui/react`: ^2.2.9 - Unstyled UI components
- `world-countries`: ^5.1.0 - Country data

### Development Dependencies
- `typescript`: ^5 - Type safety
- `tailwindcss`: ^4 - Utility-first CSS
- `@tailwindcss/postcss`: ^4 - Tailwind PostCSS plugin
- `eslint`: ^9 - Code linting
- `@types/*` - TypeScript definitions

## 🌐 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS v4](https://tailwindcss.com/docs) - utility-first CSS framework
- [React Documentation](https://react.dev) - learn React
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - typed JavaScript

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

All rights reserved © 2024 FX Master

## 🤝 Support

For support, email support@fxmaster.com or visit our website.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
