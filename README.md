# VE Portfolio

A simple, single-page portfolio for Values Education with smooth navigation, light/dark theme, and an optional background image switcher. Built with plain HTML/CSS/JS.

## Features
- Added contact email information
- Sticky header that hides on scroll to focus on reading
- Header reveal on hover with a top hover zone for easy access
- Stable interaction: header stays visible while hovering/clicking
- Dynamic nav highlight and smooth section scrolling
- Light/Dark mode toggle with preference saved to localStorage
- Background image switcher (up to 10 images) with preload and persistence
- Translucent, readable sections (works in both light/dark modes)
- Back-to-top button
- Visible version indicator in the footer with link to changelog

## Usage
- Hover at the top of the page or over the header to reveal it when hidden.
- Click nav links to smoothly jump to sections; the heading briefly highlights.
- Toggle the theme with the moon button; preference is remembered.
- Cycle background images with the picture button if images are configured.

## Configure Background Images
- In `index.html`, the button with `id="bgNext"` has a `data-bg-images` attribute.
- Provide comma-separated image paths (PNG/JPG/WEBP, up to 10).
- Example: `data-bg-images="background-images/bg1.png, background-images/bg2.png, ..."`
- Images are validated and preloaded; invalid paths are skipped.
- The current index is saved in localStorage (`bgIndex`).

## Accessibility
- Buttons and controls include `title` and `aria-label` for clarity.
- Sections use consistent contrast and support dark mode.

## Deployment
- Host the contents of this folder using any static hosting (Netlify, GitHub Pages).
- Ensure the `background-images/` and `project-pic/` folders are uploaded alongside HTML/CSS/JS.

## Changelog
- See (CHANGELOG.md) for detailed changes.
