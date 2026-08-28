# KBG Component System


## Overview

KBG is built using reusable UI components.

Every visual element should have:
- Clear purpose
- Consistent styling
- Responsive behavior
- Defined interaction states


---

# Global Components


## Navigation

Purpose:

Main website navigation system.


Contains:

- Logo
- Section links
- Language switcher
- Optional music control


States:

- Default
- Hover
- Active


Behavior:

Navigation should remain minimal and premium.


---


# Hero Component


Purpose:

First visual introduction of KBG.


Contains:

- Background video/image
- Brand statement
- Main title
- Call to action


Style:

- Cinematic
- Large typography
- Strong contrast


---


# Card Component


Purpose:

Interactive brand guide modules.


Card represents one concept of the brand system.


Structure:


Card

├── Artwork Layer
│
├── Icon
│
├── Title
│
├── Subtitle
│
├── Interaction Layer
│
└── Content Layer



---


# Card Variants


## Default

Contains:

- Artwork
- Icon
- Title
- Subtitle


---


## Hover

Changes:

- Elevation
- Shadow depth
- Lighting
- Skeleton eye glow
- Small movement


---


## Open

Interaction:

Card opens from the center.

Concept:

A gate opening.


Animation:

- Left and right separation
- Slow cinematic movement
- Content reveal


---


# Modal / Content Layer


Purpose:

Display card detailed information.


Requirements:

- Dynamic height
- Support 20-300 words
- Responsive text area


Contains:

- Title
- Description
- Additional media if needed


---


# Button Component


Purpose:

Interactive actions.


Style:

- Rounded
- Minimal
- Premium


States:

- Default
- Hover
- Active


---


# Image Component


Purpose:

Display:

- Card artwork
- Background images
- Brand assets


Rules:

- Preserve original proportions
- Avoid unwanted cropping
- Support transparent PNG


---


# Audio Component


Purpose:

Brand music experience.


Contains:

- Play/Pause
- Progress
- Volume control


Style:

Minimal and immersive.


---


# Responsive Rules


Every component must support:


Desktop:

Large spacing
Full experience


Tablet:

Reduced spacing
Adaptive sizes


Mobile:

Single column layout
Touch optimized interactions
