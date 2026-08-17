---
order: 12
title: "Eye Tracking"
subtitle: "Capturing and assessing attention patterns"
company: "Fors Marsh Group"
date: 2022-01-10
tags: ["Usability Testing", "UX", "UX Research"]
thumbnail: "/images/2022/01/eye-tracking-featured.png"
---

A US government financial website existed to help ordinary people navigate some of the highest-stakes moments of their financial lives — buying a home, dealing with debt collectors, disputing a credit report. But the agency had limited evidence about how visitors actually moved through the site: what drew their attention, what they skipped, and whether the most important content was even being seen. Self-reported feedback couldn’t answer those questions; attention had to be measured directly. That’s where this study came in — combining moderated usability testing with Tobii eye tracking to capture objective attention data alongside subjective experience.

## My Role & Team

I wore four hats on this study:

- **Moderator** for the in-person usability testing sessions
- **Tech lead** for the [Tobii](https://www.tobii.com/) eye tracking hardware and software
- **Analyst** for the behavioral and eye tracking data
- **Author** — synthesizing findings into a summative report for the client

> **[PLACEHOLDER — team]** *Add who else was on the Fors Marsh team (e.g., a second researcher/notetaker, project director, client-side stakeholders) and what each owned.*

## The Problem

The directive: identify opportunities to improve the website by collecting objective and subjective UX data, and by evaluating navigation patterns and the usage of the most salient UI controls.

Behind that directive sat a genuine measurement gap. Traditional usability testing tells you what users did and what they say they experienced — but a content-heavy site lives or dies by attention: whether users actually read the guidance, notice the navigation aids, and find the controls designed to help them. Eye tracking closes the gap between what users report and where their eyes actually went.

> **[PLACEHOLDER — stakes]** *If you can share it, add why the client commissioned the study at that moment — e.g., a redesign being planned, traffic/engagement concerns, or a mandate to improve self-service outcomes.*

## Research & Process

### Methods

- Data collection via in-person moderated usability tests
- Participants recruited through local advertisements and screened with a financial literacy survey
- 60 minute sessions
- [Think aloud protocols](https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/)
- Tobii eye tracking capturing gaze data throughout task performance

### Scenarios

These tasks gave users the opportunity to interact with a variety of functions within the application without focusing on one area for too long.

**Q1**
Imagine you are looking for financial advice on how to buy a home. Locate the section of the site that would help educate you.

**Q2**
You have heard about a lot of credit card scams in the news. Locate the section of the site that would help you learn about common scams and how to avoid them.

**Q3**
A friend of yours has been receiving calls from a debt collector. Please find a piece of information that would help them deal with a debt collector that is being aggressive.

**Q4**
Please submit a complaint about a bank that you believe is violating its terms of service with you as a customer.

**Q5**
Search through the site until you believe you’ve located the most important information about how to resolve issues with your credit report.

**Q6**
What advice does this app have about the use of money transfer apps like PayPal and Venmo?

### Satisfaction Questionnaire

Users responded to [Likert scale](https://www.surveymonkey.com/mp/likert-scale/) questions to share their perceived difficulty ratings, overall satisfaction, and confidence during their interactions. The Nielsen Norman Group’s [guide to measuring perceived usability](https://www.nngroup.com/articles/measuring-perceived-usability/) was a great survey design resource.

**Q1**
I thought there was too much inconsistency in this system.

**Q2**
I had to work hard to complete each of my tasks.

**Q3**
Overall, the app was easy to use.

**Q4**
I was able to successfully accomplish what I was asked to do.

Results indicated the site had room for improvement in terms of its perceived usability. Survey results, combined with eye tracking, suggested long, dense blocks of content were a pain point for users.

## Flows

> **[FLOW DIAGRAM PLACEHOLDER]** — *Spec: one diagram of the participant’s journey through the study — recruitment via local ads → financial literacy screening → in-lab session (calibration → warm-up → six task scenarios with think-aloud + gaze capture → satisfaction questionnaire) → analysis (heat maps, gaze plots, survey data) → summative report. Annotate where objective data (eye tracking) and subjective data (think-aloud, Likert) enter the pipeline, since triangulating the two was the study’s method argument.*

## The Findings

*(This research engagement’s deliverable was evidence, not interface design — so this section walks through what the eye tracking data showed, organized by finding.)*

### Reading Pattern

- Attention dissipates as users progress down the page.
- Users focus on paragraph content, rather than UI elements like tags, social links, and call outs.

![](/images/2022/01/Heat-map_credit-report_N4.png)

### Gaze Plots

- On search pages, tags and filters receive a great deal of attention.
- Users pay little attention to search results further down the page.

![](/images/2022/01/Money-Transfer-Category_first-20seconds.png)

### Salient UI Elements

- The preferred method to navigate to specific content is with tags, not FAQs.
- “Other Categories” should be broken into additional sections for clearer IA.

![](/images/2022/01/Ask-CFPB-Home-Page-All-Tasks_N9.png)

### Scanning Search Results

- The first few search results receive the bulk of attention.
- Users pay partial attention to left-margin filters. They conduct a new search rather than interact with the filters.

![](/images/2022/01/Heat_Search-Results-Pages_Left-Filets_P3-10-T135679.png)

## Key Decisions & Pivot Points

**Designing tasks for coverage, not depth.** The six scenarios were deliberately spread across the site’s functions — education, scams, debt collection, complaints, credit reports, payment apps — so no single area monopolized gaze data. Eye tracking findings are only as generalizable as the surfaces they sample; a study that spent all six tasks in one section would have produced a confident, narrow answer to the wrong question.

**Triangulating attention with perception.** Pairing the eye tracking with a satisfaction questionnaire was a methodological decision, not a formality: gaze data shows where attention went, but only self-report shows whether users experienced the effort as reasonable. The study’s headline finding — dense content blocks as a pain point — emerged precisely from combining the two, where fading attention (objective) met “I had to work hard” agreement (subjective).

> **[PLACEHOLDER — honest pivot]** *Add one thing that had to change mid-study: e.g., a calibration or hardware issue that cost sessions, a task that had to be reworded after early participants misread it, or a recruiting/screening adjustment.*

## Collaboration

> **[PLACEHOLDER — collaboration]** *Describe how you worked with the client and the research team, and why: how findings were reviewed with agency stakeholders, how the report was structured for the client’s decision-making, and any working sessions where eye tracking evidence was walked through with the site’s design/content owners.*

## Outcomes

> **[PLACEHOLDER — outcomes]** *This section needs the payoff: what did the client do with the findings? E.g., recommendations adopted (breaking up dense content blocks, restructuring “Other Categories,” elevating tags in the IA, deprioritizing FAQ pathways), any follow-up measurement, and the report’s reception. Even one concrete “the site changed X because this study showed Y” closes the loop.*

## What I’d Do Differently

**[PLACEHOLDER — verify this reflection matches reality, or replace with your own]** The study established where attention went; it couldn’t establish what that cost users in outcomes, because tasks were scored by completion rather than by the quality of what participants took away. A user can “find” the debt collection guidance while their gaze data shows they read a third of it. Given another pass, I’d add brief comprehension probes after content-heavy tasks — pairing “did they see it” with “did it land” — and I’d push for a follow-up study after the client’s changes shipped, so the heat maps could show a before-and-after instead of a diagnosis alone.
