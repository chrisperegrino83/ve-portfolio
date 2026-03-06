# Changelog

All notable changes to this project are documented here. Follow semantic versioning: MAJOR.MINOR.PATCH.

## [1.0.0] - 2026-03-06
- Navigation updated to: Kaibigan, Purok, Kapitbahay, Matatanda, Kolehiyo, Haiskul, Elementarya, Reflection
- Added Reflection section and content
- Implemented background image switcher (bg1.png → bg10.png) with persistence
- Confirmed PNG support; fixed background layering and preload validation
- Made main background transparent; added translucent, readable sections for light/dark modes
- Added tooltips; theme button tooltip now dynamic (Switch to Dark/Light)
- Updated project images and intro avatar to project-pic/
- Renamed background images folder to background-images/; updated all references
- Added back-to-top button and smooth scroll with nav highlight
- Prepared dist/ and dist.zip for deployment; added deploy README

## [Unreleased]
- Added visible version indicator in footer with link to changelog
- Defined VERSION constant in index.js and rendered to #siteVersion
- Synced dist and dist.zip to include version badge for deployment
