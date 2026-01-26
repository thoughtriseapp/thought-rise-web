

# Hero Value Props Strip Implementation

## Overview
Add a 3-column feature highlights strip at the bottom of the Hero section, remove the wave transition, and create a clean flat cutoff to the "How It Works" section.

## Content to Display
The three value propositions extracted from your content:

| Feature | Icon | Title | Brief Description |
|---------|------|-------|-------------------|
| 1 | Book icon | Scripture Affirmations | Faith-based daily encouragement |
| 2 | Sparkles icon | Powerful Motivation | Start each morning inspired |
| 3 | Target icon | Goal Reminders | Stay focused on your dreams |

## Visual Design

```text
+------------------------------------------------------------------+
|                        HERO SECTION                               |
|   (animated morphing background continues behind everything)     |
|                                                                   |
|        [iPhone]           Elevate Your Days,                     |
|                          Transform Your Mornings.                 |
|                          [App Store] [Play Store]                |
|                                                                   |
+------------------------------------------------------------------+
|  Semi-transparent strip (bg-background/80 backdrop-blur)         |
|                                                                   |
|    [Book]              [Sparkles]            [Target]            |
|   Scripture            Powerful              Goal                |
|  Affirmations         Motivation           Reminders             |
|  Faith-based          Start each           Stay focused          |
|  encouragement        morning inspired     on your dreams        |
|                                                                   |
+------------------------------------------------------------------+
|                    HOW IT WORKS SECTION                          |
|                   (flat edge, no wave)                           |
+------------------------------------------------------------------+
```

## Technical Implementation

### File: `src/components/Hero.tsx`

**1. Remove the wave SVG**
Delete the bottom wave div entirely (lines 149-154)

**2. Add value props data array**
```tsx
const valueProps = [
  {
    icon: BookOpen,
    title: 'Scripture Affirmations',
    description: 'Faith-based daily encouragement'
  },
  {
    icon: Sparkles,
    title: 'Powerful Motivation', 
    description: 'Start each morning inspired'
  },
  {
    icon: Target,
    title: 'Goal Reminders',
    description: 'Stay focused on your dreams'
  }
];
```

**3. Add new imports**
```tsx
import { BookOpen, Sparkles, Target } from 'lucide-react';
```

**4. Add value props strip component**
Position at the bottom of the hero section with:
- Semi-transparent background (`bg-background/80`) with backdrop blur
- 3-column responsive grid
- Circular icon containers matching the warm color palette
- Staggered animation on load
- Full width to create the flat cutoff effect

**5. Adjust section padding**
Reduce bottom padding on main content container to accommodate the new strip

## Styling Details

- **Icon containers**: 48x48px circles with `bg-primary/20` background, `text-primary` icon color
- **Titles**: Cormorant Garamond font (font-heading), uppercase, tracking-wide
- **Descriptions**: Inter font, muted-foreground color, smaller text
- **Strip background**: Slight opacity with backdrop blur to distinguish from animated background while still showing movement
- **Responsive**: Stack vertically on mobile with centered alignment

## Animation

Each value prop animates in with:
- Fade up effect
- 0.2s stagger delay between items
- Triggered on page load (not scroll-based since it is part of hero)

## Result

- Clean flat transition between Hero and How It Works sections
- Value propositions are immediately visible without scrolling on most screens
- The morphing background still shows through the semi-transparent strip
- Maintains the warm, modern aesthetic of the site

