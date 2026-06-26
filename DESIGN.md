---
name: TangTang Homepage
description: TangTang 的个人品牌主页 — 快手工程师，专业·科技·个性
colors:
  ink-deep: "#ffffff"
  ink-secondary: "rgba(255,255,255,0.75)"
  ink-muted: "rgba(255,255,255,0.45)"
  kuaishou-orange: "#FF4906"
  accent-blue: "#4e97d8"
  surface-overlay: "rgba(37,68,103,0.75)"
  surface-dark: "#1a1a2e"
  surface-card: "rgba(255,255,255,0.06)"
  border-subtle: "rgba(255,255,255,0.12)"
typography:
  display:
    fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', -apple-system, sans-serif"
    fontSize: "clamp(2rem, 6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', -apple-system, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'SF Mono', 'Fira Code', 'Source Code Pro', Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
components:
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-deep}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
  nav-link-hover:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink-deep}"
  nav-link-active:
    backgroundColor: "rgba(255,255,255,0.1)"
    textColor: "{colors.ink-deep}"
  avatar-ring:
    backgroundColor: "transparent"
    rounded: "{rounded.full}"
    size: "120px"
  modal-overlay:
    backgroundColor: "rgba(0,0,0,0.7)"
    rounded: "{rounded.lg}"
---

# Design System: TangTang Homepage

## 1. Overview

**Creative North Star: "The Engineer's Signal"**

This system is built on the conviction that technical identity should feel as precise as the code it represents. The interface is a broadcast — not a brochure. Dark surfaces absorb attention and push content forward; every element earns its place through function and contrast, not decoration. The Bing wallpaper backdrop grounds the page in the world while the overlaid content asserts a distinct, personal frequency.

The palette speaks quietly but confidently: deep-space darks, clean whites, and one sharp signal color — Kuaishou orange — reserved for the single most important moment on any screen. Typography is set for reading at a glance: large name, small commentary, clear hierarchy. Motion is intentional: the iUp cascade introduces content with weight, not whimsy.

This system explicitly rejects the aesthetics of over-engineered portfolios: no particle systems, no CSS gradients pretending to be "futuristic", no glassmorphism piled on top of glassmorphism. It also rejects the opposite failure — the blank white résumé page that signals nothing.

**Key Characteristics:**
- Dark, immersive full-bleed backgrounds (Bing wallpaper or solid deep-space dark)
- Single accent color (Kuaishou orange `#FF4906`) used sparingly — max one usage per screen
- White text hierarchy with opacity-stepped supporting text
- Monospace labels for technical context (stack, metadata, captions)
- Entrance animations are cascaded and purposeful; no idle animations

## 2. Colors: The Signal Palette

A near-monochromatic dark system with one high-contrast brand signal and a supporting blue for links.

### Primary
- **Kuaishou Orange** (`#FF4906`): The sole saturated accent. Used on exactly one element per screen — the active nav state, a CTA, or a key highlight. Its rarity is its power.

### Secondary
- **Signal Blue** (`#4e97d8`): Links, interactive text, secondary highlights. Cooler counterpoint to the orange.

### Neutral
- **Pure White** (`#ffffff`): Primary display text — names, headings, key labels.
- **Soft White** (`rgba(255,255,255,0.75)`): Body text, descriptions, secondary copy.
- **Ghost White** (`rgba(255,255,255,0.45)`): Muted captions, placeholders, disabled states.
- **Slate Overlay** (`rgba(37,68,103,0.75)`): The dark film over the Bing wallpaper — deep blue-grey that reads as almost-black while preserving wallpaper texture.
- **Deep Space** (`#1a1a2e`): Solid dark background used only by the Resume page. Blog, About and NoteDetail carry the Bing wallpaper (with the slate overlay) like the home page.
- **Frosted Card** (`rgba(255,255,255,0.06)`): Subtle surface for nav and card containers against dark backgrounds.
- **Hairline Border** (`rgba(255,255,255,0.12)`): Dividers, card outlines, input borders. Barely visible.

### Named Rules
**The One Signal Rule.** Kuaishou orange (`#FF4906`) appears on at most one element per screen. It is a signal, not a theme. Using it twice on the same screen cancels both uses.

**The Overlay Calibration Rule.** The wallpaper overlay (`cover-slate`) must keep the wallpaper visible as texture, not erase it. Target ~40% wallpaper bleed-through. If the overlay reads as solid black, it is too dark.

## 3. Typography

**Display Font:** PingFang SC (with Hiragino Sans GB, Microsoft YaHei, -apple-system, sans-serif fallback)
**Body Font:** Same family — PingFang SC carries both display and body weight
**Mono/Label Font:** SF Mono / Fira Code / Source Code Pro (with Consolas fallback)

**Character:** The primary family is PingFang SC — Apple's CJK-first sans with strong Chinese coverage and clean Latin glyphs; it handles both English and Chinese. Monospace (SF Mono / Fira Code / Source Code Pro) is reserved strictly for technical metadata, never for body prose.

### Hierarchy
- **Display** (700, `clamp(2rem, 6vw, 3.5rem)`, 1.1): The name "TangTang" — the single biggest text on the page.
- **Headline** (400, `clamp(1.25rem, 3vw, 1.75rem)`, 1.3): Subtitle / tagline. One per page.
- **Body** (400, `1rem`, 1.7): Hitokoto quote, page descriptions. Max 65ch line length.
- **Label** (400, `0.8rem`, monospace, `letter-spacing: 0.05em`): Stack tags, captions, attribution (`—「source」`). Always lowercase or sentence case, never shouting caps.

### Named Rules
**The Mono Boundary Rule.** The mono family (SF Mono / Fira Code / Source Code Pro) is used exclusively for technical metadata — attribution lines, stack labels, code snippets. It must never appear in navigation, headings, or body prose.

## 4. Elevation

This system is **flat by default, lifted by state**. Dark surfaces have no ambient shadows; they sit flush and let color and opacity carry hierarchy. Shadows appear only in two conditions: the avatar ring (permanent, structural) and modal backdrops (transient, focus-trapping).

### Shadow Vocabulary
- **Avatar Ring** (`box-shadow: 0 0 0 2px rgba(255,255,255,0.5), 0 2px 20px 3px rgba(0,0,0,0.25)`): Structural — defines the avatar circle against any wallpaper background.
- **Modal Backdrop** (`background: rgba(0,0,0,0.7)`): Transient — dims the entire page when the WeChat QR modal is open.

### Named Rules
**The Flat-By-Default Rule.** No box-shadow on nav items, cards, or containers at rest. Hover states may use a very subtle background fill (`rgba(255,255,255,0.06)`) — never a shadow.

## 5. Components

### Navigation
The nav is the primary wayfinding surface. It renders only on Home, inline with the panel content — never in a fixed header bar (inner pages use back-links).
- **Container:** Pill-shaped, `rgba(0,0,0,0.35)` fill + hairline border + subtle blur.
- **Link rest/hover:** Transparent at rest, `rgba(255,255,255,0.07)` fill on hover, full-radius pill.
- **Active state:** Semi-transparent white fill (`rgba(255,255,255,0.1)`) with a small Kuaishou-orange indicator dot — orange appears only as the dot, never as a full background.
- **Typography:** Body font, `0.82rem`, not monospace, sentence case.
- **Mobile:** Collapses to a hamburger toggle; the list shows/hides via `display` toggle (no bounce animation).
- **Items:** `/` 首页, `/notes` 记录, `/resume` 简历, `/about` 关于 (max 4).

### Avatar
The signature component. A 112×112 circle with a hover scale + overlay interaction (not a 3D flip).
- **Default face:** GitHub avatar photo (`avatars.githubusercontent.com/florencemalis0-ui`, cache-busted daily).
- **Hover face:** Overlay fades in showing "Be Brave" + "2026 · 向前"; the whole button scales to `1.04`.
- **Ring:** Structural ring — white hairline + soft Kuaishou-orange glow + drop shadow; always present, intensifies on hover.
- **Interaction:** Triggers WeChat QR modal on click.

### WeChat QR Modal
- **Backdrop:** `rgba(0,0,0,0.7)` full-screen overlay.
- **Container:** Centered, `border-radius: 16px`, white background, drop shadow.
- **Dismiss:** Click outside or × button closes.

### Inner Pages (Blog / About / NoteDetail / Resume)
- **Blog / About / NoteDetail:** Full-bleed Bing wallpaper with the slate overlay — real content pages, not placeholders.
- **Resume:** The only solid-dark inner page (`#1a1a2e`, no wallpaper). Centered column: badge + title + description + back link.
- **Back link:** Pill-shaped, `border: 1px solid rgba(255,255,255,0.2)`, transparent fill, `hover: rgba(255,255,255,0.08)`.

### Entrance Animation (iUp)
Not a visual component but documented here because it defines perceived quality.
- **Default state:** `opacity: 0; transform: translateY(20px)`.
- **Active state:** `opacity: 1; transform: translateY(0); transition: 0.4s ease`.
- **Cascade:** 150ms stagger per element, 300ms initial delay.
- **Reduced motion override:** Required. `@media (prefers-reduced-motion: reduce)` must remove transforms and snap opacity directly.

## 6. Do's and Don'ts

### Do:
- **Do** use Kuaishou orange (`#FF4906`) on exactly one interactive element per screen.
- **Do** keep wallpaper bleed-through at ~40% — the `cover-slate` overlay is a veil, not a blackout.
- **Do** use `clamp()` for all display and headline sizes — the page must look intentional on mobile and 4K.
- **Do** use monospace (Source Code Pro) exclusively for technical metadata and attribution.
- **Do** include `@media (prefers-reduced-motion: reduce)` for every CSS transition and animation.
- **Do** cascade entrance animations with 150ms stagger. Uniform simultaneous reveals feel mechanical.
- **Do** keep body line length at ≤65ch for any paragraph longer than two lines.

### Don't:
- **Don't** use particle effects, CSS noise textures, or animated gradients — this is not a 2019 "creative portfolio".
- **Don't** use a white or light background on any page in this system. Every surface is dark.
- **Don't** use glassmorphism (heavy `backdrop-filter: blur`) as a design feature. The overlay is structural, not decorative.
- **Don't** put Kuaishou orange on more than one element. Two orange elements on the same screen means neither is special.
- **Don't** use the same monospace font in navigation or headings — it signals code, not content.
- **Don't** animate CSS layout properties (width, height, top, left). Animate only transform and opacity.
- **Don't** build a résumé-style white-background page for any route. Every surface is dark — inner pages either carry the Bing wallpaper (Blog/About/NoteDetail) or use solid `#1a1a2e` (Resume).
- **Don't** add more than 3 items to the main navigation. Cognitive load over breadth.
