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

## [1.1.0] - 2026-03-06
- Added visible version indicator in footer with link to changelog
- Defined VERSION constant in index.js and rendered to #siteVersion
- Synced dist and dist.zip to include version badge for deployment
- Hide entire header on scroll; reveal only on hover for distraction-free reading
- Added top hover zone (120px) to easily reveal header/nav when hidden
- Stabilized interactions with a temporary reveal lock to prevent flicker during clicks
- Ensured nav links and buttons remain clickable while header is visible
- Justified article paragraph text for improved readability
- Improved footer readability in dark mode using theme variables; links inherit text color
- Updated index.html with headerHoverZone element

## [1.2.0] - 2026-03-07
- Added a contact form to message the developer through an email.
