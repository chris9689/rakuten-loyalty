---
name: Omotenashi Digital
colors:
  surface: '#f6faff'
  surface-dim: '#d2dbe4'
  surface-bright: '#f6faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ecf5fe'
  surface-container: '#e6eff8'
  surface-container-high: '#e0e9f2'
  surface-container-highest: '#dbe4ed'
  on-surface: '#141d23'
  on-surface-variant: '#5d3f3b'
  inverse-surface: '#293138'
  inverse-on-surface: '#e9f2fb'
  outline: '#926f69'
  outline-variant: '#e7bdb6'
  surface-tint: '#c00201'
  primary: '#920000'
  on-primary: '#ffffff'
  primary-container: '#bf0000'
  on-primary-container: '#ffcbc3'
  inverse-primary: '#ffb4a8'
  secondary: '#ae2f34'
  on-secondary: '#ffffff'
  secondary-container: '#ff6b6b'
  on-secondary-container: '#6d0010'
  tertiary: '#633e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#825400'
  on-tertiary-container: '#ffcf94'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930000'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b0'
  on-secondary-fixed: '#410006'
  on-secondary-fixed-variant: '#8c1520'
  tertiary-fixed: '#ffddb5'
  tertiary-fixed-dim: '#ffb957'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#f6faff'
  on-background: '#141d23'
  surface-variant: '#dbe4ed'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is rooted in the philosophy of **Omotenashi**—anticipating user needs with precision, care, and hospitality. It balances the energetic commercial legacy of Japanese fintech with a refined, modern aesthetic that prioritizes clarity over density.

The style is **Corporate Modern with a Soft Tactile edge**. It utilizes a "White Space First" approach to counter the information density typical of commerce apps, creating a premium atmosphere that feels both professional and accessible. The visual language conveys intelligence and reliability, ensuring users feel secure while managing finances or browsing high-end marketplaces.

**Target Audience:** Mobile-first consumers and investors who value efficiency, brand loyalty, and a premium digital experience.
**Emotional Response:** Trusted, empowered, rewarded, and calm.

## Colors

This design system employs a high-contrast palette anchored by a signature crimson to drive brand recognition and action.

- **Primary (Rakuten Red):** Reserved for the most critical actions, branding, and status indicators. It should be used sparingly on surfaces to maintain its impact.
- **Secondary (Warm Coral):** Used for secondary interactions, promotional banners, and soft highlights. It bridges the gap between the aggressive primary red and the neutral backgrounds.
- **Tertiary (Loyalty Gold):** Strictly dedicated to "Points," "Membership Levels," and "Rewards." This creates a distinct visual lane for the loyalty ecosystem.
- **Neutrals:** A range of cool and warm grays. `#F8F9FA` is the standard canvas, while `#FFFFFF` is used for elevated cards and containers to create a "layered" look.
- **Semantic Colors:** Success (Green), Warning (Amber), and Error (Red) follow standard fintech conventions but are softened to match the brand's rounded aesthetic.

## Typography

The typography system prioritizes legibility across complex data sets. By pairing **Plus Jakarta Sans** for headings and labels with **Noto Sans** for body text, the system achieves a friendly yet technical balance.

- **Headlines:** Use Plus Jakarta Sans with tighter letter spacing for a modern, high-end feel. 
- **Body:** Noto Sans is used for its exceptional readability in both Japanese and Latin scripts, maintaining a neutral tone.
- **Data Display:** For financial figures and point balances, use Plus Jakarta Sans Bold to ensure numbers are the focal point of the interface.
- **Hierarchy:** Maintain clear vertical rhythm by using `body-md` for general content and `label-lg` for all interactive metadata.

## Layout & Spacing

This design system follows a **Fluid Grid** model optimized for mobile-first commerce. The spacing rhythm is built on a 4px baseline, ensuring all elements align to a consistent mathematical scale.

- **Mobile Layout:** 4-column grid with 16px side margins and 16px gutters.
- **Tablet/Desktop:** 12-column grid with 24px gutters and maximum container width of 1200px.
- **Vertical Spacing:** Use `lg` (24px) to separate distinct content blocks and `md` (16px) for elements within a single group (e.g., product image to product title).
- **Safe Areas:** Adhere to platform-specific safe areas for bottom navigation and notched displays.

## Elevation & Depth

To maintain a "clean" feel while providing depth, this design system uses **Tonal Layering** combined with **Ambient Shadows**.

- **Level 0 (Background):** `#F8F9FA`. Used for the main app canvas.
- **Level 1 (Cards/Surfaces):** `#FFFFFF`. White cards sit on the light gray background with a very soft, diffused shadow (`y: 4px, blur: 12px, opacity: 0.04, color: #000000`).
- **Level 2 (Active/Floating):** Used for bottom sheets and floating action buttons. These use a more pronounced shadow (`y: 8px, blur: 20px, opacity: 0.08`).
- **Interactive Depth:** When a card is pressed, it should subtly scale down (98%) rather than increasing shadow depth, mimicking a physical press.

## Shapes

The shape language is characterized by **Generous Radii**. This "Soft Modern" approach removes the clinical feel of traditional fintech and replaces it with a more approachable, lifestyle-oriented aesthetic.

- **Standard Elements:** Buttons and small input fields use a 12px radius.
- **Containers:** Large cards, product modules, and promotional banners use a 16px to 24px radius (`rounded-xl` and `rounded-2xl`).
- **Icons:** Use rounded caps and joins to ensure visual harmony with the UI components. Avoid sharp 90-degree angles wherever possible.

## Components

### Buttons
- **Primary:** Solid Rakuten Red with white text. 16px-24px height, bold weight.
- **Secondary:** White background with a 1px border of Warm Coral and Coral text.
- **Ghost:** Transparent background with Neutral-700 text, used for less frequent actions like "Cancel."

### Cards
- **Product Card:** White surface, 16px radius, subtle shadow. Price is displayed in `headline-md` using Rakuten Red.
- **Loyalty Card:** Utilizes a gradient background (Warm Coral to Gold) to differentiate financial status from commercial products.

### Loyalty Progress Bars
- 8px height, rounded caps. Background track is a 10% opacity version of the accent color. The progress fill uses the Tertiary Gold.

### Input Fields
- Outlined style with a 1px `#DEE2E6` border. On focus, the border transitions to Rakuten Red with a soft 4px outer glow.

### Bottom Navigation
- Fixed blur background (Glassmorphism effect) or solid white. Active states are indicated by the Primary Red icon and a small 4px dot indicator underneath.

### Chips
- Used for category filtering. Pill-shaped (fully rounded). Inactive: Gray background; Active: Black background with white text for high contrast.