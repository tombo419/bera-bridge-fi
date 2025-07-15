# Bera Bridge

A Finnish digital culture publication website focused on exploring digital culture, gaming, and online risks.

## Overview

Bera Bridge is a Next.js-based website that serves as a digital publication platform covering topics related to digital culture, gaming, technology, and their impact on society. The site features news articles, analysis pieces, and research content in Finnish.

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Frontend**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Project Structure

```
├── app/                          # Next.js app directory
│   ├── globals.css              # Global CSS styles
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Homepage
│   └── [article-routes]/        # Individual article pages
├── components/                   # Reusable React components
│   ├── ui/                      # shadcn/ui components
│   ├── footer.tsx               # Site footer
│   ├── navigation.tsx           # Navigation component
│   └── theme-provider.tsx       # Theme provider
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── public/                      # Static assets and images
├── styles/                      # Additional CSS files
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Features

- **Multi-category content**: News, analysis, gaming, technology, and research articles
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Article management**: Individual pages for each article with dynamic routing
- **Newsletter signup**: Email subscription functionality
- **SEO optimized**: Meta tags and structured data
- **Analytics integration**: Google Analytics tracking

## Content Categories

- **Uutiset** (News): Breaking news and current events
- **Analyysit** (Analysis): In-depth analysis pieces
- **Pelaaminen** (Gaming): Gaming industry and esports content
- **Teknologia** (Technology): Technology trends and developments
- **Tutkimus** (Research): Research articles and studies

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd bera-bridge.fi

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

### Available Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Configuration

### Next.js Configuration

The project uses Next.js 15 with the following key configurations:
- TypeScript build errors ignored during builds
- ESLint ignored during builds
- Unoptimized images for deployment flexibility

### Tailwind CSS

Custom design system with:
- CSS variables for theming
- shadcn/ui integration
- Custom color palette
- Responsive breakpoints

### shadcn/ui Setup

The project uses shadcn/ui components with:
- Default styling approach
- Lucide icons
- CSS variables for theming
- TypeScript support

## Content Management

Articles are managed through individual route directories in the `app/` folder. Each article has its own page component with:
- Unique URL slug
- Article metadata
- Content structure
- Related images

## Deployment

The project is configured for easy deployment with:
- Static export capabilities
- Optimized builds
- Image optimization settings
- Production-ready configurations

## Analytics

Google Analytics is integrated for tracking:
- Page views
- User engagement
- Content performance
- Newsletter signups

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software. All rights reserved.

## Contact

- Email: info@bera-bridge.fi
- Editorial: toimitus@bera-bridge.fi# Force deployment
