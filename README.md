# Accredian Enterprise Page

## Live Submission
- **Vercel Deployment:** `ADD_YOUR_VERCEL_URL_HERE`


## Assignment Checklist

### 1) Landing Page
- [x] Landing page with all major sections (Hero, Trusted By, Why Us, Programs, Testimonials, Contact)
- [x] Navigation menu
- [x] Footer

### 2) Functional Requirements
- [x] Responsive layout for mobile + desktop
- [x] Clean, structured UI
- [x] Reusable UI components (`Button`, `Badge`, shared section container styles)
- [x] Smooth navigation between sections (anchor links + smooth scrolling)

### 3) Mandatory Tech Requirements
- [x] Next.js with App Router
- [x] Functional components and hooks
- [x] Tailwind CSS styling
- [x] API integration (lead form submits to Next.js API route)
- [x] Ready for Vercel deployment
- [x] Functional login navigation (`/login` demo page)

### Bonus
- [x] Lead capture form
- [x] Data stored via API route (in-memory mock persistence for demo)

---

## Tech Stack
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**

---

## Local Setup

### Prerequisites
- Node.js 20+
- npm 10+

### Installation
```bash
git clone <your-repo-url>
cd accredian-clone
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

---

## Project Approach

## Project Approach

1. **Section-first architecture**
   - Broke the landing page into focused, reusable section components.
2. **Data-driven content**
   - Kept static copy and arrays in `src/lib/data.ts` to avoid hardcoding in JSX.
3. **Reusable UI primitives**
   - Centralized common styles/behaviors in `Button` and `Badge` components.
4. **Client boundaries kept minimal**
   - Used client components only where interactivity was needed (`Navbar`, `ProgramsSection`, `ContactSection`).
5. **Form + API flow**
   - Lead form submits to `/api/lead` route with validation and mock persistence.

---

## AI Usage (Required Disclosure)

### Where AI helped
- Initial component scaffolding and section decomposition
- Tailwind utility drafting for layout and spacing
- Draft README structure and checklist formatting
- Suggestions for form-validation and API route shape



### What was manually modified/improved
- Improved section linking and IDs for smooth navigation
- Implemented and verified real client ↔ API integration for form submission
- Added robust form states (loading, error, success)
- Refined assignment mapping/checklist for requirement traceability
- Ran lint and production build checks, then fixed issues if found

---


## Improvements With More Time
- Match more visual details for closer parity with the reference site
- Integrate persistent storage (Supabase/Postgres) instead of in-memory mock store
- Add automated tests (Playwright + RTL)
- Improve accessibility audit score (keyboard focus checks + ARIA refinements)
- Add analytics/event tracking for lead funnel
