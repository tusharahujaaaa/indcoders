# IndCoders Community Website - PRD

## Original Problem Statement
Build a fully responsive, modern, professional organization website for a developer community named IndCoders. Dark-themed, single-page scroll site with sections: Hero, About, Why Choose Us, Projects, What We Do, Team, What We're Building, Contact (with working form), Footer.

## Architecture
- **Frontend**: React (CRA) + Tailwind CSS + Shadcn UI components
- **Backend**: FastAPI + MongoDB (contact form storage)
- **Design**: Dark theme (#0A0A0A), Space Grotesk / Manrope / JetBrains Mono fonts, blue/purple/cyan accents

## User Personas
- Developers and students looking to join a community
- Visitors evaluating IndCoders as a community

## Core Requirements
- No auth, no admin panel — purely informational + contact form
- Mobile-first responsive design
- Smooth CSS animations (fade-in on scroll, hover effects)
- Editable content via siteConfig.js
- Social URLs as variables for easy later editing

## What's Been Implemented (Dec 2025)
- Full single-page website with 9 sections
- Sticky navbar with active section highlight + mobile hamburger menu
- Hero with gradient text and CTA buttons
- About (mission, vision, why we exist cards)
- Why Choose Us (6 feature cards with icons)
- Projects (4 project cards with tech stack tags)
- What We Do (4 service cards)
- Team (3 member cards with images)
- What We're Building (4 vision/future goal cards)
- Contact form (frontend + backend POST /api/contact with validation)
- Footer with quick links, contact info, social links
- IntersectionObserver-based scroll animations
- Backend email validation on contact endpoint

## Testing Results
- Backend: 100% (validation added)
- Frontend: 100%
- Mobile: 100%
- Integration: 100%

## Prioritized Backlog
- P0: None (MVP complete)
- P1: Add real social media URLs, update team member names/photos
- P2: SEO meta tags, Open Graph images, analytics integration
- P3: Blog section, events/workshops page

## Next Tasks
- Replace placeholder social URLs in siteConfig.js
- Add real team member names and photos
- Consider adding a blog or events section
