---
order: 2
title: "AI Document Authoring"
subtitle: "Enhancing workflow efficiency with AI"
date: 2026-02-20
tags: ["AI"]
thumbnail: "/images/2026/02/doc-editor-1.png"
---

This is one of four Precedent case studies — the AI Document Authoring. For the system-level view, see [Law Firm AI Ecosystem](/ux-projects/law-firm-ai-ecosystem/); for the onboarding flow, see [AI Ecosystem Onboarding](/ux-projects/ai-ecosystem-onboarding/); for data review flow, see [Human-in-the-loop AI Review](/ux-projects/human-in-the-loop-ai-review/).

## Overview

### How This Project Started

This project didn’t come from a roadmap. It came from three signals pointing at the same problem.

First, I noticed our customer success managers were scheduling three — sometimes four — one-hour sessions just to teach new firms how to customize and author demand letters. When onboarding requires four hours of live instruction, that isn’t a training problem; it’s a product problem.

To test that hunch, I used AI to analyze our support ticket trends. The most common request, by volume, was help creating and managing the demand letter. Then I went to the source: in interviews with four paralegals, the most common complaint was the same — authoring the demand letter was simply too hard.

Three independent signals — onboarding cost, ticket data, and user interviews — converged on one surface. I didn’t wait for the project to be assigned. I built the project plan, designed the new authoring workflows, and pitched leadership to secure engineering resources. That pitch became Demand Composer.

#### My over-arching goal

Create an industry-leading, AI-enabled document authoring experience that makes demand letters dramatically easier to create and manage — cutting the support and onboarding burden that was consuming customer success capacity and slowing law firms down.

![](/images/2026/02/Official-Color.png)

## Phase 1

### Interaction Design: Pattern Research & Review

A text editor is one of the most convention-bound surfaces in software. Users bring deep, hard-won expectations from years in Google Docs, Notion, and Word, and violating those expectations reads as broken, not innovative. This is Jakob’s Law in practice: users spend most of their time in other products, so they judge yours by the conventions learned there. Familiarity wasn’t a constraint on innovation — it was the foundation that let the genuinely novel part, the AI workflow, feel approachable instead of alien.

So before sketching anything, I audited how those tools handle the fundamentals of editing to understand the mental models I needed to honor. That gave me a stable foundation of familiar interactions, which is exactly what let the genuinely new part, the AI generation and review workflow, feel approachable instead of alien.

I found the best patterns for AI word processing included:

- Keyboard shortcuts for menus
- Salient edit, read only, and animation states
- Left and right drawer menus with vertical navigation

With some concepts together, it was time to review patterns with engineering to compile requirements.

### Requirements Gathering

I like to include engineering teams in my design process as early as possible. That helps create a shared language, challenges assumptions, and gets teams aligned on MVP scope.

During this initial phase of collaboration, I worked with engineers to prioritize the list of features we’d need to support day 1:

- Create tables populated with user data
- Add AI-generated narratives
- Review & cross check data used to generate AI narratives
- Insert summaries of medical treatments
- Add templates of legal boilerplate text

![](/images/2026/02/Mockuppp.png)

## Phase 2

### Rapid Prototyping and Usability Testing

Next, the focus shifted to translating patterns into tangible experiences through rapid prototyping in Figma. The goal was to build interactive flows that accurately simulated the AI-enabled word processor’s core functions. A central principle during this stage was ensuring that the AI integration and the general experience design felt intuitive, trustworthy, and auditable. By creating these targeted, clickable prototypes, it became much easier to evaluate how naturally users could navigate the workspace without experiencing cognitive overload.

With the prototypes ready, the next step was getting them in front of actual users for usability testing. Observing how people interacted with the toolsets provided critical, reality-based feedback on where the friction points were. This initiated a tight iteration loop: analyzing the user testing data, adjusting the Figma designs to resolve usability hurdles, and re-testing to validate the improvements. Once the designs were refined and backed by solid user data, the final step of the phase involved reviewing the outcomes with product managers and engineers. This ensured the proposed solutions not only solved the users’ problems but aligned with the product roadmap and were technically feasible to build.

#### Usability Testing

I ran moderated, think-aloud sessions with 8 legal professionals (2attorneys, 6 paralegals), each working through two realistic scenarios: drafting a Facts of Loss narrative and building a medical treatment table for a rear-end collision case. Three findings drove the next iteration:

**1. Participants couldn’t tell what the AI had touched.** During think-aloud, reviewers repeatedly paused to ask whether a passage was AI-generated, something a colleague had edited, or finalized text — and every moment of uncertainty about provenance made them re-read the entire section from scratch. Trust wasn’t about the quality of the prose; it was about knowing its origin. I redesigned the section blocks to include AI-status indicators so every block of content visibly declares whether it was human or AI generated.

**2. Correcting the AI cost more than it should.** In the table scenario, I asked participants to add a diagnosis the AI had “missed” from the orthopedist’s records. Watching them hunt through nested menus to make a two-second conceptual fix was the clearest friction in the study — 7 participants said they’d sooner rebuild the table in Word than fight the menus. I flattened and streamlined the manipulation menus for generated content, putting the most common corrections — add a row, edit a cell, adjust a column — one interaction away.

**3. Confidence tracked with editability, not accuracy.** The counterintuitive finding: participants didn’t trust the AI more when its output was *better* — they trusted it more when they could see how easily they could *change* it. The moment a participant successfully made their first small correction, their posture toward the entire draft shifted from skeptical audit to normal editing. That insight promoted direct editing from an escape hatch to a first-class mode, and it shaped the accept / edit / regenerate triad that defines the final product: the fastest path to trust was proving the human is always one click from control.

### Introduction and Warm-Up (5 minutes)

*Goal: Establish rapport, explain the think-aloud protocol, and understand their baseline workflow.*

- Before we dive into the tool, can you walk me through your current process for drafting a bodily injury demand? What are the most time-consuming parts?
- How do you currently handle summarizing medical records, like imaging findings or treatment history?
- We are going to be testing a new workspace. As you work through the tasks, please think aloud, tell me what you’re looking at, what you’re trying to do, and if anything surprises or frustrates you.

### Task 1: Generating Narratives (15 minutes)

*Scenario: You are starting a new demand package for a client involved in a rear-end collision. You need to draft the ‘Facts of Loss’ and the initial ‘Injury Narrative’.*

- **Prompting the Action:** Show me how you would use Demand Composer to generate the initial draft for the Facts of Loss.
- **Observation Probes:**
  - What are your initial impressions of the text the system just generated?
  - How closely does this output match the tone and structure you would typically use?
  - If you needed to expand on the client’s specific pain points in this narrative, how would you go about adjusting the AI’s draft?
  - Talk to me about how confident you feel using this generated narrative in a final demand package.

### Task 2: Generating and Editing Tables (15 minutes)

*Scenario: The narrative is looking good. Now, you need to add a structured summary of the client’s medical treatments, specific diagnoses, and MRI findings.*

- **Prompting the Action:** Walk me through how you would create a table summarizing the client’s physical therapy sessions and MRI results.
- **Observation Probes:**
  - What are your thoughts on the way the AI organized the treatment data into this table?
  - Let’s say the AI missed a secondary diagnosis from the orthopedist. Show me how you would correct or add that information to the table.
  - How intuitive is the process of modifying the columns or rows compared to the tools you currently use?
  - If you needed to reformat this medical table to highlight the total cost of treatments, how would you approach that?

### Post-Task Wrap-Up and System Perception (10 minutes)

*Goal: Capture overall impressions, trust levels, and perceived efficiency.*

- Overall, how would you describe your experience today?
- What was the most frustrating part of interacting with the AI-generated text or tables?
- If you had a magic wand and could change one thing about how the AI generates the injury narratives, what would it be?
- How do you feel about the balance between the AI doing the heavy lifting and the amount of manual editing you had to do?
- In what scenarios would you hesitate to use this tool for a real case?

#### Story Creation and Project Categorization

Following the usability sessions, I synthesized qualitative feedback to identify patterns in user behavior and pinpoint areas for improvement. This data directly informed the next round of Figma iterations.

For instance, based on how users handled the injury narratives and medical tables, I refined the editing states, improved AI-status indicators, and streamlined the menus for manipulating generated content. By grounding these design updates in real user data, the final UI resolved the identified usability hurdles while building greater user trust in the AI’s output.

Once the revised designs were locked in, the focus shifted to project categorization and story creation to bridge the gap between design and engineering. The holistic experience was deconstructed into logical feature categories—such as narrative text generation, table data manipulation, and document formatting.

From these categories, granular user stories were authored to define specific Frontend (FE) and Backend (BE) requirements. FE stories focused on UI components, text editor interactions, and state management, while BE stories detailed the AI prompt handling, data processing, and necessary API integrations. This structured categorization provided the engineering team with clear, testable acceptance criteria for a smooth implementation.

![](/images/2026/02/Mockup.png)

## Phase 3

### Engineering Collaboration

**Why we worked this way.** None of these collaboration methods were defaults — we chose them. I chose staging-environment design QA over static handoff docs because our highest-risk surface — editor states and AI interactions — only breaks in real browsers, never in Figma. Daily alignment replaced a weekly sync, when two mid-week scope changes cost us days of reconciliation; the rule we settled on was that any decision changing what users see gets made same-day, together. And I brought operations in during testing rather than after launch because admins were the users most likely to inherit our mistakes silently.

During Phase 3, my collaboration with the engineering team was critical for bridging the gap between the final designs and the live product. I worked closely with both front-end and back-end developers throughout their sprint cycles, actively participating in design QA sessions and reviewing staging environments. By comparing the coded builds directly against the Figma prototypes, I provided detailed, actionable feedback to ensure pixel-perfect alignment between my design intent and the final engineering output. This tight feedback loop was especially important for fine-tuning the UI states and the interactions within the AI-generated text and medical tables.

### Product Management Collaboration

In tandem with engineering, I maintained constant alignment with Product Managers to ensure the developed features stayed true to the core user requirements defined during our usability testing. We collaborated daily to prioritize the user stories we had mapped out and made strategic adjustments to the scope whenever technical constraints arose. This partnership ensured that the integrity of the Demand Composer experience wasn’t compromised during development, and that the final deliverables successfully hit our target milestones for the release.

### Operations Collaboration

Beyond the end-user experience, I partnered closely with the operations team to guarantee the new tools actively improved internal workflows. We reviewed the Demand Composer’s implementation to ensure the features directly enhanced admin efficiency, specifically looking at how the tool reduced the manual overhead required to process and format complex injury narratives and medical records. By integrating operations feedback during the testing phase, I helped refine the tool so that it seamlessly supported the broader operational goals and scaling needs of the business.

### Sales & Go-To-Market Collaboration

Finally, as the features approached launch, I collaborated with the sales and marketing teams to support a successful rollout. I provided them with high-fidelity visual assets, guided product walkthroughs, and clear documentation on the new AI capabilities and their specific user benefits. This cross-functional alignment ensured that external product announcements and company news were highly accurate and compelling when the Demand Composer went live, empowering the sales team to effectively demonstrate the value of the new workspace to clients.

![](/images/2026/02/Space-Gray.png)

## Outcomes

### Business Impact

- **Reduced onboarding support tickets by 22%** in the first three months, per HubSpot data. Because the editor honored conventions attorneys already knew from Google Docs and Word, they got productive with far less hand-holding.
- **Cut time to a first-draft narrative from hours to seconds**, letting attorneys start from a structured draft instead of a blank page.
- **75% of law firm demand letters were authored in Demand Composer within 2 months of launch**, replacing previously manual Word workflows — adoption we tracked as our primary success metric because usage, not sentiment, proves trust.

### User Impact

- Attorneys draft, edit, and regenerate in a single workspace instead managing an ecosystem with multiple touch points.
- Section-level generation gave attorneys fine-grained control, making regeneration fast and low-risk rather than an all-or-nothing rewrite.
- Auditable output let attorneys verify each generated claim against source records, so they trusted the draft enough to actually use it.

### Design Impact

- Established an AI authoring pattern (section-level generation, direct edit, and instruct-to-regenerate) that became a reusable model for content creation across Precedent.
- Proved that grounding a novel AI experience in familiar editor conventions is what makes it feel trustworthy instead of alien.
- Showed that in high-stakes drafting, the win isn’t fully automated output, it’s giving experts precise, low-friction control over what the AI produces.

## Final Designs

![](/images/2026/02/editing_018.png)

![](/images/2026/02/editing_019.png)

![](/images/2026/02/editing_020.png)

![](/images/2026/02/editing_021.png)

![](/images/2026/02/editing_022.png)

![](/images/2026/02/Demand-drafting-editor-1.png)

![](/images/2026/02/Demand-drafting-editor-01.png)

![](/images/2026/02/Demand-drafting-editor-2.png)

![](/images/2026/02/Demand-drafting-editor-3.png)

![](/images/2026/02/Demand-drafting-editor-4.png)

![](/images/2026/02/Demand-drafting-editor.png)

![](/images/2026/02/editing_024.png)

![](/images/2026/02/editing_025.png)

![](/images/2026/02/editing_026.png)

![](/images/2026/02/editing_031.png)

![](/images/2026/02/editing_032.png)

![](/images/2026/02/Frame-427319966.png)

![](/images/2026/02/editing_033.png)

![](/images/2026/02/editing_034.png)

![](/images/2026/02/editing_035.png)

![](/images/2026/02/editing_036.png)

![](/images/2026/02/Frame-427319948.png)

![](/images/2026/02/Frame-427319950.png)

![](/images/2026/02/Frame-427319952.png)
