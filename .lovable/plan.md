

## Plan: Two-Level CTA Strategy (Form + Book a Call)

### What changes

**1. Create a contact form dialog (`src/components/ContactFormDialog.tsx`)**
- Modal dialog (using shadcn Dialog) with fields: Name, Email, Company/Brand, Budget (optional), What do you need? (textarea)
- Opens when any "Get Started" button is clicked
- Validation with react-hook-form + zod
- On submit: show success toast, close dialog (no backend yet)

**2. Add "Book a Call" button everywhere next to "Get Started"**
- Calendly placeholder link: `https://calendly.com/your-link` (you'll replace later)
- Opens in new tab
- Secondary style button with calendar icon

**3. Update all CTA locations (5 files):**

| File | Changes |
|------|---------|
| **Header.tsx** | "Get Started" opens form dialog. Add "Book a Call" link next to it |
| **HeroSection.tsx** | "Get Started" opens form. Add "Book a Call" below/beside it |
| **ContentFlowSection.tsx** | Plan card buttons open form. Trial "Try It Out" opens form |
| **PremiumSection.tsx** | CTA opens form + add "Book a Call" |
| **CTASection.tsx** | "Get Free Concepts" opens form + add "Book a Call" |

**4. Button hierarchy:**
- **"Get Started"** - primary filled button (main converter)
- **"Book a Call"** - outline/ghost style, calendar icon (warm leads)

### Technical details
- Form uses shadcn `Dialog`, `Input`, `Textarea`, `Label` components (already installed)
- No new dependencies needed
- Calendly URL stored as a constant, easy to replace later
- Form state managed with react-hook-form (already in deps)

