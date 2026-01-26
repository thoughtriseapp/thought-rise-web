

## Mobile Hero Section Adjustments

Two small tweaks to the Hero section on mobile devices:

### Changes

1. **Smaller headline on mobile**
   - Current: `text-5xl` on mobile
   - Change to: `text-4xl` on mobile (keeping `sm:text-5xl` and `lg:text-6xl` for larger screens)

2. **More padding above the iPhone mockup**
   - Add top margin to the iPhone mockup container on mobile
   - Add `mt-4 lg:mt-0` to the mockup wrapper so it has extra spacing on mobile but none on desktop

### File to Update
- `src/components/Hero.tsx` (lines 25 and 110)

