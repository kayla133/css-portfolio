# WDD 331R Portfolio

**Student:** Makayla Hansen
**Semester:** Fall 2026
**Live Site:** [View Site](https://kayla133.github.io/css-portfolio/)

- This site now supports dark mode.

## About

This repository is my portfolio for WDD 331R: Advanced CSS.
Each week I add new pages and styles as I work through the course
assignments. The site deploys automatically to GitHub Pages on
every push to main.

## Pages

- [Home](index.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)\
- [Layered Components](unit-2/index.html)\
- [Visual Effects Showcase](unit-3/visual-effects/index.html)
- [Editorial Grid](unit-4/grid-layouts/editorial.html)
- [Subgrid Card Grid](unit-4/grid-layouts/cards.html)
- [Container Query Component](unit-4/advanced/container-demo.html)
- [Sticky Section Headers](unit-4/advanced/sticky-demo.html)
- [Resume](resume.html)
- [Contact](contact.html)

The printable resume is available at [Resume](resume.html), and the site
includes a styled contact form at [Contact](contact.html).

## Typography

The typography system uses a modular scale from `--font-size-xs` through
`--font-size-3xl`. Semantic roles map reusable sizes to purpose: body text,
captions, small and large headings, and display text.

Heading and display sizes use `clamp()` for fluid sizing, growing smoothly
between minimum and maximum viewport-based values. Body text and compact
labels keep smaller, stable sizes for readability.

The custom heading font is **Agrave Pro**, loaded from Google Fonts in
`index.html` and exposed through `--font-family-heading`. Body text uses the
system sans-serif stack through `--font-family-body`.

## Build Tool
Tool: PostCSS
Running Instructions: 
- In the Terminal, run the following commands:
  - npm install
  - npm run build
- To exit the build, Ctrl + C

## File Structure

portfolio/
  css/
    base/
      elements.css
      reset.css
    components/
    layout/
    tokens/
      colors.css
      variables.css
    utilities/
      utilities.css
    main.css
  dist/
    styles.css
  index.html
  README.md 
