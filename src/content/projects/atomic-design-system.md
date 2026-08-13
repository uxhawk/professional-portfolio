---
order: 8
title: "Atomic Design System"
subtitle: "Creating and maintaining robust design systems"
company: "Precedent"
date: 2025-11-19
tags: ["Design Systems", "UI", "UX"]
thumbnail: "/images/2025/11/Macbook-Pro-Dark-Background-1.png"
---

## The Problem

Before creating this system, Precedent’s two apps were accumulating UI debt: components rebuilt per-squad, styles drifting between Claim Companion and Demand Composer, and handoffs that leaned on redlines and memory. Every new feature paid a consistency tax — engineers rebuilding patterns that already existed, re-specifying states that had already been decided. The library existed to make the right way the fast way.

## Designs

### **How Design and Engineering Actually Worked**

**Tokens as the contract.** Color, type, and spacing tokens were defined once in Figma and mirrored in code, so a token change propagated to both sides. Design and engineering could disagree about many things — never about the base values.

**Component APIs agreed before build.** For each component, the engineers and I aligned on props, variants, and states before either Figma or Storybook work began — eliminating the class of handoff mismatch where the designed component and the built component share a name but not a shape.

**Storybook as the source of truth.** I built and reviewed components in Storybook myself, testing implementation directly against design specs. “1:1 design-to-development alignment” was verified, not assumed — and having a designer in the codebase meant discrepancies got fixed in minutes, not tickets.

**A lightweight contribution process.** Squads proposed new components via Slack; we reviewed them in weekly UX reviews — so the system grew with the product instead of forking under it.

I chose this model because our two-squad structure made drift the default outcome. The system had to make consistency cheaper than divergence, or it would be routed around.

### Why Atomic?

The library follows <a href="https://atomicdesign.bradfrost.com/chapter-2/" target="_blank" rel="noopener">Brad Frost’s atomic design methodology</a>: atoms (tokens, icons, base inputs) compose into molecules (form fields, table cells), then organisms (tables, cards, navigation), then templates. I chose it because a two-app ecosystem needs guaranteed consistency at the lowest level — if the atoms match, the apps can’t drift far.

### Adoption & Impact

- **45 components across 4 categories**, consumed by both Precedent applications
- **80% of production UI** built from system components within four months
- **Visual QA defects reduced by 30%** after adoption

### Figma designs

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 0.5rem; display: block; margin-inline: auto; width: 100%; max-width: 800px; aspect-ratio: 16 / 9; height: auto;" width="800" height="450" src="https://embed.figma.com/design/WkDW44YAWJKOHzF9mvMeaq/Atomic-design-system?node-id=13218-302&embed-host=share" allowfullscreen title="Atomic Design System — Figma file"></iframe>
