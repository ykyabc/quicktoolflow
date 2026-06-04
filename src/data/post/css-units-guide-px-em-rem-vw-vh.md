---
title: 'CSS Units Explained: The Complete Guide to px, em, rem, vw, and vh'
excerpt: 'Master CSS units once and for all. Learn when to use px, em, rem, vw, and vh with practical examples and a free conversion tool.'
publishDate: 2026-05-26
category: 'Developer Tools'
tags:
  - css
  - web development
  - responsive design
  - front-end
  - css units
author: 'QuickToolFlow'
---

Choosing the right CSS unit can make or break your responsive design. This guide breaks down every major CSS unit and shows you exactly when to use each one.

## Absolute Units: px

**px** (pixels) is the most commonly used CSS unit. It is an absolute unit, meaning 1px always represents one pixel on the screen. Because it is fixed, px gives you precise control over sizing.

```css
.box {
  width: 300px;
  height: 200px;
  font-size: 16px;
}
```

**When to use px:** fixed-width borders, shadows, small precise adjustments like 1px lines and icon sizes.

**When to avoid px:** font sizes (use rem instead) and layout widths on responsive designs.

## Relative Units: em and rem

### em — Relative to the Element

**em** is a relative unit. It is calculated based on the font-size of the current element. If no font-size is set, it falls back to the browser default of 16px.

```css
/* If parent has font-size: 20px */
.child {
  font-size: 2em; /* = 40px */
  padding: 1.5em; /* = 30px */
}
```

**The problem with em:** When you nest multiple elements, em calculations compound. A 1.2em inside a 1.2em inside a 1.2em quickly becomes unpredictable.

```css
.parent {
  font-size: 16px;
}
.child {
  font-size: 1.2em;
} /* 19.2px */
.grandchild {
  font-size: 1.2em;
} /* 23.04px — surprise! */
```

### rem — Relative to the Root

**rem** stands for "root em." Unlike em, rem is always relative to the root html element's font-size.

```css
html {
  font-size: 16px;
}

h1 {
  font-size: 2.4rem;
} /* 38.4px */
p {
  font-size: 1rem;
} /* 16px */
small {
  font-size: 0.875rem;
} /* 14px */
```

**Why rem is better than em for most cases:**

- No compounding issue — all values reference the same base
- Predictable across nested elements
- Users can scale your entire UI by changing their browser font-size

**Common rem setup for easier math:**

```css
html {
  font-size: 62.5%; /* 62.5% of 16px = 10px, so 1rem = 10px */
}

h1 {
  font-size: 2.4rem;
} /* 24px */
p {
  font-size: 1.6rem;
} /* 16px */
```

### em vs rem: When to Use Each

| Use Case                          | Best Unit                  |
| --------------------------------- | -------------------------- |
| Font sizes                        | rem                        |
| Padding and margins in components | em (scales with font-size) |
| Global layout spacing             | rem                        |
| Media queries                     | rem                        |
| Multi-column layouts              | %                          |

## Viewport Units: vw, vh, vmin, vmax

### vw and vh

**1vw** equals 1% of the viewport width. **1vh** equals 1% of the viewport height.

```css
.hero {
  width: 100vw; /* full width */
  height: 100vh; /* full height */
  font-size: 5vw; /* scales with viewport */
}
```

**Common use cases:** full-screen hero sections, responsive typography, edge-to-edge layouts.

**Mobile caution:** On mobile browsers, 100vh can be taller than the visible area because it includes the address bar. Use 100dvh (dynamic viewport height) in modern browsers to fix this.

### vmin and vmax

**vmin** is 1% of the viewport's smaller dimension. **vmax** is 1% of the larger dimension.

**When to use:** elements that must always fit on screen, square elements that adapt to orientation, typography that should scale based on the smaller dimension.

## Quick Reference Cheat Sheet

| Unit | Relative To                 | Best For                            |
| ---- | --------------------------- | ----------------------------------- |
| px   | Screen pixels               | Borders, shadows, precise sizes     |
| em   | Current element font-size   | Component-level padding and margin  |
| rem  | Root html font-size         | Font sizes, global spacing          |
| vw   | 1% of viewport width        | Full-width layouts, responsive text |
| vh   | 1% of viewport height       | Full-screen sections                |
| vmin | 1% of smaller viewport side | Always-visible elements             |
| vmax | 1% of larger viewport side  | Scale-to-viewport elements          |

## Convert CSS Units Instantly

Need to convert between px, em, rem, vw, and vh? Use our free [CSS Unit Converter](/tools/css-unit-converter/) to convert values instantly in your browser with a live preview.

## Conclusion

The best approach is to combine units strategically. Use rem for font sizes and global spacing. Use em for component-level padding and margins that should scale with text. Use px for borders and fixed-size elements. Use vw and vh for full-screen layouts and responsive typography. Understanding when to use each CSS unit will make your designs more responsive, accessible, and maintainable across all devices and screen sizes.

## Related QuickToolFlow Tools

- [CSS Unit Converter](/tools/css-unit-converter/) for converting common CSS units.
- [Color Converter](/tools/color-converter/) for translating design colors into CSS-ready formats.
- [Lorem Image Placeholder](/tools/lorem-image-placeholder/) for testing fixed and responsive image dimensions.
