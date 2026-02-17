# BACH Contracting — Landing Page

A modern, responsive landing page for a construction and interior design company. Built as a freelance project to showcase professional web development skills.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

## Overview

BACH is a licensed contracting company specializing in renovations, new construction, roofing, electrical, plumbing, and painting. This landing page was designed to:

- Establish credibility and trust with potential clients
- Showcase completed projects through a visual portfolio
- Generate leads via clear calls-to-action
- Provide a professional online presence

## Features

- **Fully Responsive** — Mobile-first design that works on all devices
- **Performance Optimized** — Next.js Image optimization, lazy loading, modern AVIF format
- **SEO Ready** — Meta tags, Open Graph, robots.txt, sitemap.xml
- **Clean Architecture** — Component-based structure with TypeScript
- **Smooth UX** — Scroll-based navbar transitions, hover states, mobile slide-out menu

## Tech Stack

| Technology              | Purpose                      |
| ----------------------- | ---------------------------- |
| Next.js 16 (App Router) | React framework with SSR/SSG |
| React 19                | UI components                |
| Tailwind CSS 4          | Utility-first styling        |
| TypeScript              | Type safety                  |
| Lucide React            | Icon library                 |

## Project Structure

```
app/
├── layout.tsx      # Root layout with metadata & fonts
├── page.tsx        # Home page (assembles all sections)
├── globals.css     # Tailwind config & custom CSS variables
├── robots.ts       # SEO: search engine crawl rules
└── sitemap.ts      # SEO: page index for search engines

components/
├── Navbar.tsx      # Fixed header with scroll state
├── Hero.tsx        # Hero section with CTA
├── About.tsx       # Company info & statistics
├── Services.tsx    # Service offerings grid
├── Portfolio.tsx   # Project showcase gallery
├── WhyBach.tsx     # Testimonial & trust section
├── CTA.tsx         # Call-to-action banner
└── Footer.tsx      # Contact info & links
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Design Decisions

**Why Next.js App Router?**
Server components reduce JavaScript sent to the browser. Only interactive components (Navbar, WhyBach) use client-side React.

**Why Tailwind CSS?**
Rapid development with design consistency. Custom color tokens defined in CSS variables for easy theming.

**Why AVIF images?**
30-50% smaller than WebP with better quality. Supported in all modern browsers.

**Why no animation library?**
Per client requirements — clean, professional, minimal. CSS transitions only where they add value.

## Contact

Built by Cheezy Mansour — Available for freelance web development projects.

- Email: mansourwcheezy@gmail.com
