# HeartCare Advanced Cardiac Centre — Project Documentation

## Sitemap

```
/                           Home
/about                      About Dr. Arjun Mehta
/services                   All Cardiology Services
/services/[slug]            Individual Service Detail (10 pages)
/technology                 Advanced Cardiac Technology
/success-stories            Patient Success Stories
/appointment                Book Appointment (multi-step flow)
/appointment/success        Appointment Confirmation
/blog                       Heart Health Blog
/blog/[slug]                Individual Blog Articles (6 articles)
/faq                        FAQ (32 questions, 7 categories)
/contact                    Contact & Inquiry Form
/careers                    Careers & Application
/privacy                    Privacy Policy
/terms                      Terms & Conditions
/cookies                    Cookie Policy
/admin                      CMS Admin Dashboard
/sitemap.xml                SEO Sitemap
/robots.txt                 Search Engine Directives
```

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#0A1628` | Primary brand, headers, CTAs |
| Navy 600 | `#1A3A5C` | Secondary dark surfaces |
| Medical White | `#FAFBFD` | Page backgrounds |
| Medical Blue | `#4A90D9` | Accents, links, icons |
| Medical Blue Light | `#E8F2FC` | Section backgrounds |
| Silver | `#C0C8D4` | Borders, muted text |
| Accent Red | `#E63946` | Emergency CTAs |
| Accent Green | `#2A9D8F` | Success states |
| Accent Gold | `#C9A227` | Awards, ratings |

### Typography

- **Display:** Outfit — Headlines, hero text, section titles
- **Body:** Inter — Paragraphs, UI labels, forms
- **Scale:** Display 3xl–5xl, Section 2xl–4xl, Body base–lg

### Spacing & Layout

- Container: max-w-7xl, px-4/6/8 responsive
- Section padding: py-16 md:py-24 lg:py-28
- Border radius: rounded-2xl (cards), rounded-full (buttons)
- Shadows: premium (subtle), premium-lg (elevated), glow (blue accent)

### Component System

| Component | Purpose |
|-----------|---------|
| `Header` | Fixed nav with scroll glass effect |
| `Footer` | 4-column site map + contact |
| `FloatingButtons` | Sticky appointment, WhatsApp, emergency |
| `PageHero` | Inner page hero with navy gradient |
| `Section` | Reusable section with GSAP reveal |
| `AppointmentCTA` | Conversion block (default + compact) |
| `FAQAccordion` | Animated FAQ expand/collapse |
| `card-premium` | Standard elevated card pattern |
| `btn-primary/secondary/accent` | CTA button variants |

---

## Animation Strategy (GSAP)

- **Hero:** Staggered fade-up for title, subtitle, CTA, image, badges
- **Scroll reveals:** ScrollTrigger on `.reveal-item` elements (opacity + y: 40→0)
- **Parallax:** Floating medical elements in hero/CTA sections
- **Heart pulse:** CSS keyframe on logo icon
- **Hover:** Card lift (-translate-y-1), image scale (1.05), button scale
- **FAQ:** CSS grid-rows transition for smooth accordion
- **Counters:** GSAP number animation on stats (ready via useCounterAnimation)

---

## Mobile Responsiveness

- Mobile-first Tailwind breakpoints (sm/md/lg)
- Hamburger nav below lg
- Sticky bottom "Book Appointment" bar on mobile
- Floating emergency call button (mobile only)
- Grid collapses: 4→2→1 columns
- Appointment time slots: 3-column grid with scroll
- Admin sidebar: slide-in drawer on mobile

---

## SEO Strategy

### Meta Tags
Every page has unique title + description via `createMetadata()`.

### Schema Markup
- `Physician` schema for Dr. Arjun Mehta
- `MedicalClinic` schema for HeartCare Centre
- Implemented in root layout via JSON-LD

### Local SEO
- NAP consistency (Name, Address, Phone) across all pages
- Google Maps embed on Contact page
- Jaipur + Rajasthan geo-targeted keywords
- `/sitemap.xml` with all pages
- `/robots.txt` blocking /admin

### Google Business Profile Recommendations
1. Claim listing at Statue Circle, C-Scheme, Jaipur
2. Add all services as GBP services
3. Upload cath lab and clinic photos
4. Collect Google reviews (link from success stories)
5. Post weekly heart health tips (sync with blog)
6. Enable messaging and appointment booking
7. Add emergency phone as secondary number

---

## Conversion Optimization

1. **Sticky Book Appointment** — Desktop floating + mobile bottom bar
2. **WhatsApp** — Fixed bottom-right green button
3. **Emergency Call** — Red button on mobile, header on desktop
4. **Trust indicators** — Badges, awards, stats, NABH accreditation
5. **Social proof** — Testimonials on home + dedicated success stories
6. **Multi-step appointment** — Reduces friction, builds commitment
7. **CTA blocks** — After every major content section
8. **FAQ** — Addresses objections pre-appointment

---

## Admin CMS

**URL:** `/admin`  
**Demo Password:** `heartcare2025`

### Capabilities
- Dashboard with appointment/service/blog stats
- Manage appointments (confirm/cancel)
- View doctors, services, blog posts, testimonials, FAQs
- View clinic information
- Data persisted in localStorage (upgrade to database for production)

---

## Running the Project

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
npm start        # Production server
```

---

## Production Recommendations

1. Replace localStorage CMS with PostgreSQL + API routes
2. Add real email/SMS via Twilio + SendGrid for appointments
3. Integrate Razorpay for consultation payments
4. Add Google Analytics 4 + conversion tracking
5. Replace Unsplash placeholders with real clinic photography
6. Implement proper auth (NextAuth) for admin panel
7. Add rate limiting on forms
8. Deploy on Vercel with custom domain heartcarejaipur.com
