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
- Full single-page website with 9 sections + CTA section
- Sticky navbar with active section highlight + mobile hamburger menu
- Hero with gradient text and CTA buttons
- About (mission, vision, why we exist cards)
- Why Choose Us (6 feature cards with icons)
- Projects (4 project cards with tech stack tags)
- What We Do (4 service cards)
- Team (3 member cards with images, role badges, taglines)
- What We're Building (timeline layout with phase indicators)
- Contact form (frontend + backend POST /api/contact with validation)
- CTA section before footer ("Ready to Stop Watching and Start Building?")
- Footer with quick links, contact info, social links
- IntersectionObserver-based scroll animations
- Backend email validation on contact endpoint

### Iteration 3: Button Centering + Content Overhaul (Dec 2025)
- Fixed global button text alignment with inline-flex + items-center + justify-center on all buttons
- Added global CSS rule for button centering in index.css
- Rewrote all content to be benefit-driven and conversion-focused
- Updated button labels: "Get Started", "Explore Our Work", "Talk to Us", "Join IndCoders Now", "Send Message"
- Updated headings: "Built by Developers, for Developers", "Projects That Solve Real Problems", "What Makes Us Different", "Our Roadmap", "Your Next Level Starts Here"
- All project descriptions rewritten with clear value propositions
- Team roles and descriptions made more professional
- Building section roadmap content strengthened with specifics
- Rewrote all content to be natural, conversational, developer-authentic
- Stronger hero headline: "Where Developers Don't Just Learn — They Build"
- Removed arrow icon from hero, added live dot indicator badge
- Building section redesigned with timeline layout (Now/Next/Soon/Vision phases)
- Added CTA section before footer
- Contact heading updated to "Let's Build Something Together"
- Team cards enhanced with role badges and taglines
- Improved spacing (py-28/py-40), section dividers, typography hierarchy
- Consistent card styling across all sections

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
