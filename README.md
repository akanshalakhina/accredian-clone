# Accredian Enterprise Page (Partial Clone)

This project is a partial clone of the Accredian Enterprise website built for the **Full Stack Developer Intern assignment**.

## Live Submission
- **Vercel Deployment:** `ADD_YOUR_VERCEL_URL_HERE`
- **GitHub Repository:** `ADD_YOUR_GITHUB_REPO_URL_HERE`
- **Submission Form:** https://docs.google.com/forms/d/e/1FAIpQLSeC-GbWRJNCY5ja3nFV8a2G4ChP4Ar_7lMZSbLAtcKRP0oJ2Q/viewform

---

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

Open: http://localhost:3000

### Production Build
```bash
npm run build
npm run start
```

---

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

## API Details

### `POST /api/lead`
Accepts JSON body:
```json
{
  "name": "string",
  "email": "string",
  "company": "string",
  "size": "string",
  "message": "string"
}
```

Response (success):
```json
{
  "ok": true,
  "lead": {
    "id": "...",
    "createdAt": "...",
    "name": "...",
    "email": "...",
    "company": "...",
    "size": "...",
    "message": "..."
  }
}
```

---

## Improvements With More Time
- Match more visual details for closer parity with the reference site
- Integrate persistent storage (Supabase/Postgres) instead of in-memory mock store
- Add automated tests (Playwright + RTL)
- Improve accessibility audit score (keyboard focus checks + ARIA refinements)
- Add analytics/event tracking for lead funnel

