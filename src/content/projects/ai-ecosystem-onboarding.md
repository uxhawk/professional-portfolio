---
order: 4
title: "AI Ecosystem Onboarding"
subtitle: "Securing engagement with novel workflows"
company: "Precedent"
date: 2025-12-19
tags: ["AI", "Onboarding", "UX"]
thumbnail: "/images/2026/08/ai-ecosystem-onboarding.png"
---

This is one of four Precedent case studies — the adoption and growth story. For the system-level view, see <a href="/projects/law-firm-ai-ecosystem/" target="_blank" rel="noopener">Law Firm AI Ecosystem</a>; for the AI-review interaction model, see <a href="/projects/human-in-the-loop-ai-review/" target="_blank" rel="noopener">Human-in-the-Loop AI Review</a>; for the editor’s process story, see <a href="/projects/ai-document-authoring/" target="_blank" rel="noopener">AI Document Authoring</a>.

## Context & Team

Demand Composer had proven its core value — 75% of law firm demand letters were authored in it within months of launch — but every new firm still onboarded the expensive way: a customer success manager running live, one-hour training sessions, three or sometimes four per firm. The product that automated demand letters had entirely manual onboarding.

I owned this project end to end: strategy, the business case for tooling, the design of every intervention, and the measurement plan that judged them. I worked with our CSM team— whose calendars were the problem — engineering on Userflow integration, and marketing on the email sequence. As with Demand Composer itself, I didn’t wait for this to be assigned: I advocated for the budget to license Userflow, a digital adoption platform (DAP), and built the plan that justified the spend.

![](/images/2026/08/svg_vector_2026-08-07.png)

## The Problem

Two gaps made onboarding hard, and I named them in Nielsen Norman’s terms because that’s what they were:

**Match between system and the real world.** Lawyers arrive with a deep mental model of demand letters — and no mental model of AI-assisted authoring software. The distance between “I’m writing a demand for my client” and “I’m managing documents, extraction pipelines, and LLM narratives” is exactly the gap onboarding had to bridge.

**Error prevention — fear of the final commit.** In a domain where the output is staked on six-figure settlements, new users hesitated at every irreversible-feeling action. Onboarding couldn’t just teach features; it had to build the confidence to press send.

And operationally: human-powered onboarding doesn’t scale. Every CSM hour spent re-teaching the same five tasks was an hour not spent on retention — and the support inbox showed the same questions arriving again and again after the sessions ended.

## Process

### Heuristics as strategy, not checklist

Rather than brainstorm features, I mapped each onboarding intervention to the usability heuristic it served — which meant each one carried its own success metric from day one:

| Heuristic | Intervention | Target metric |
| --- | --- | --- |
| Help and documentation | In-app how-to guide library | Reduce emails to customer success managers |
| Recognition over recall | Getting-started checklists | Increase engagement with product features |
| Flexibility and efficiency of use | DAP-guided workflows | Shorter “time on desk” per demand |
| Consistency and standards | Welcome email sequence | Replace live training sessions |

### The interventions

**Resource Center.** A persistent, collapsible in-app hub — the single front door to onboarding. It houses the getting-started checklist with a live progress bar, the how-to guide library, “What’s new in Composer,” a contact channel, and a product-market-fit survey.

**Getting-started checklist.** Five tasks chosen to walk a new user through the product’s actual value path, not its feature list: edit an exhibit, review a case’s strengths, manage medical treatments, update imaging findings, compose an AI narrative. Completing the checklist means you’ve experienced the human-in-the-loop workflow once, end to end.

**How-to guide library.** Dozens of searchable guides covering the highest-ticket-volume tasks — creating demands, sending for AI processing, editing demand details, uploading exhibits, managing medical treatments — written so support could deflect to them and CSMs could link them instead of scheduling calls.

**Welcome email sequence.** A five-part educational drip (“1 of 5: Perfecting your exhibits in Demand Composer”…) designed for the inbox lawyers actually live in — built to Outlook rendering constraints, each with one unambiguous next action deep-linking back into the product. The sequence was designed to replace a full hour of live training.

**PMF instrument.** Inside the Resource Center, the [Sean Ellis product-market-fit question](https://pmfsurvey.com) — “How would you feel if you could no longer use Composer?” — turning onboarding real estate into a continuous signal of product love.

### Measurement built in from the start

Because every intervention had a pre-declared metric, I could evaluate them like experiments rather than launches: independent-samples t-tests comparing firms with and without each intervention, and a chi-square test for the PMF distribution. The results — including the ones that didn’t go my way — are below.

![](/images/2026/08/image-86.png)

![](/images/2026/08/image-87.png)

![](/images/2026/08/image-88.png)

![](/images/2026/08/image-89.png)

### Flows

![](/images/2026/08/2.png)

## Key Decisions & Pivot Points

**Buying, not building, the guidance layer.** I advocated for licensing Userflow rather than asking engineering to build checklists, tooltips, and surveys from scratch — trading budget for speed and freeing engineering for the product itself. Pitching that spend, with the measurement plan as justification, was the project’s first deliverable.

**Reporting the null results.** Three of my five hypotheses failed to reach significance — and I presented them that way to leadership, p-values and all. Checklists didn’t significantly move feature engagement (p = 0.054). The DAP alone didn’t significantly shorten time on desk (p = 0.059). The PMF distribution didn’t significantly shift (p = 0.053). All three hovered just above the threshold — directional, promising, and honestly not proven. The alternative — rounding p = 0.054 down to a success story — would have corrupted every future measurement the team ran.

Below: release notes and the expanded Resource Center — the one-stop shop for in-app guidance.

![](/images/2026/08/case-intel-populated.png)

![](/images/2026/08/Digital-medicals-page.png)

## Outcomes

**What worked, with the statistics:**

- **How-to guides significantly reduced onboarding support emails.** Independent-samples t-test: t(24) = 2.064, p = 0.049 — firms with the guide library generated measurably fewer emails to customer success during onboarding than firms without it.
- **The email sequence replaced a one-hour live training session**, removing roughly 24 hours of meetings per month from the customer success managers’ onboarding workload — recurring capacity handed back to the team every month.

**What didn’t reach significance — reported honestly:**

- Checklists → case intelligence engagement: t(20) = 1.17, p = 0.054 — directional, not significant.
- DAP → time on desk: t(42) = 2.01, p = 0.059 — directional, not significant.
- PMF shift: χ²(44), p = 0.053 — not significant.

**Context the project operated in:** Composer held a 68% product-market-fit score (“very disappointed” without it) and reached $5M ARR in under two years — onboarding’s job was to protect and extend that trajectory as new firms arrived.

## What I’d Do Differently

The honest reading of three p-values between 0.049 and 0.059 is that the studies were underpowered — sample sizes in the twenties and forties can’t reliably detect the effect sizes onboarding interventions produce. Given another pass, I’d pool cohorts across quarters before judging, and pre-register the minimum detectable effect so “not significant” and “no effect” stop being confusable. I’d also instrument time-on-desk at the task level rather than the demand level — the DAP likely helps specific steps, and a whole-demand metric averages that signal away.
