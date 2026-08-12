---
title: "How to Set up Usability Tests"
description: "You are not your user. Despite your tenure, subject-matter expertise, and past success implementing new features, you are not your user. You might think you’re very similar to your user…."
date: 2022-01-11
categories: ["UX"]
categoryPath: "ux"
heroImage: "/images/2022/01/usability-test-tips.png"
---

You are not your user. Despite your tenure, subject-matter expertise, and past success implementing new features, you are not your user. You might think you’re very similar to your user. It’s possible your motivations, emotions, and priorities overlap with those of your users, however if your product is not aligned with your user’s [mental model](https://www.nngroup.com/articles/mental-models/), they will abandon your product in search of something that more closely meets their needs.

How can you, as a UX designer, determine your users’ beliefs, identify their motivations, and respond to their pain points? Once you have that knowledge, how do you turn it into steps an organization can take to improve their product?

> You are not your user!
>
> [Tweet](http://twitter.com/share?&text=You%20are%20not%20your%20user!&url=https%3A%2F%2Fuxhawk.com%2Fux%2Fhow-to-set-up-usability-tests%2F&via=uxhawk)

Usability testing is a great way to learn from your users and prioritize the addition/redesign of content into a product. Here are some tips on how to get started with a usability test.

## State Your Research Objectives, Hypotheses, and Metrics

Stating your research objectives, hypotheses, and documenting ahead of time which performance metrics you plan to record helps prevent cognitive biases from creeping into your analyses. It’s normal to bring expectations into a usability test (I think credit card form A will have higher success rates than form B; I expect users to report low levels of comprehension for menu labels), but expectations can lead to confirmation biases. A confirmation bias leads the mind to agree with data/information which confirms existing beliefs while discarding information that challenges it.

> Usability testing is a great way to learn from your users and prioritize the addition/redesign of content into a product.
>
> [Tweet](http://twitter.com/share?&text=Usability%20testing%20is%20a%20great%20way%20to%20learn%20from%20your%20users%20and%20prioritize%20the%20addition%2Fredesign%20of%20content%20into%20a%20product.%20&url=https%3A%2F%2Fuxhawk.com%2Fux%2Fhow-to-set-up-usability-tests%2F&via=uxhawk)

It would be a major failure of UX research to ignore valuable feedback that contradicts your expectations. State your research objectives and metrics early on so you cannot cherry-pick the quotes, video clips, and survey results that confirm your expectations.

### Structuring Research Objectives

Research objectives describe the goals you’re hoping to accomplish at the conclusion of the study. They are the foundation upon which you can create hypotheses and select appropriate performance metrics. Here are some examples of good and bad research objectives:

| Bad Objective | Good Objective |
| --- | --- |
| See what users think about different product landing pages | Evaluate perceptions and emotional reactions to product landing pages |
| Find out if users can complete the cart checkout process | Measure success and error rates in payment workflows originating from the cart |
| Look at how users navigate site menus | Assess navigation behavior and comprehension of menu labels |

### Review with Stakeholders

UX’ers don’t operate in isolation. We’re part of multi-dimensional teams of developers, product owners, and QA engineers (to name a few). All members of a team should have the opportunity to provide input on what a study’s research objectives are because these same team members will be impacted by the outcomes of the research. As such, they need to understand how design recommendations are identified and where they are coming from.

> UX’ers don’t operate in isolation. We’re part of multi-dimensional teams of developers, product owners, and QA engineers
>
> [Tweet](http://twitter.com/share?&text=UX%E2%80%99ers%20don%E2%80%99t%20operate%20in%20isolation.%20We%E2%80%99re%20part%20of%20multi-dimensional%20teams%20of%20developers%2C%20product%20owners%2C%20and%20QA%20engineers&url=https%3A%2F%2Fuxhawk.com%2Fux%2Fhow-to-set-up-usability-tests%2F&via=uxhawk)

Design solutions that alleviate pain-points identified in a usability study need to be prioritized and budgeted into a product’s roadmap. If design solutions arise seemingly out of the blue, stakeholders may be less inclined to allocate resources to these updates. However, framing design enhancements around previously agreed upon goals can encourage buy-in and help teams become better aligned with user needs, not just business priorities.

### Defining Hypotheses

With group consensus on research objectives, it’s time to focus on defining hypotheses. Each research objective should be paired with at least one hypothesis. Each hypothesis should state which metric you plan to use for comparisons. In addition to the metric, you can (optionally) add a *why* to your hypothesis. This will encourage you to take a closer look at your UI to see how well content and workflows align with your persona’s needs.
Here are hypotheses and *whys* added to the objectives from the previous section:

| Objective | Hypotheses | Why |
| --- | --- | --- |
| Evaluate perceptions and emotional reactions to product landing pages | Post-test survey questions will show a higher satisfaction rating for landing page A | Media on page A is accompanied by ratings and reviews |
| Measure success and error rates in payment workflows originating from the cart | The most prevalent source of errors in the checkout will be credit card number validation | Inline validation does not align with common web patterns |
| Assess navigation behavior and comprehension of menu labels | Users will directly (and successfully) use links to navigate to sub-pages | Previous card-sorting research established the user’s language for category/menu/link labels |

### Selecting Performance Metrics

The metrics you choose for a given study depend first on the fidelity of your prototype (e.g., Is it paper? Clickable Invision prototypes? Is it a demo environment?). A usability test does not need complex data to be insightful. Difficulty ratings, success rates, and a satisfaction questionnaire are more than enough to highlight areas for improvement. See the table below for recommendations on how to select metrics based on your test environment.

|  |  |  |  |
| --- | --- | --- | --- |
| Metric | Low Fidelity | Medium Fidelity | High Fidelity |
| Difficulty Rating | ✅ | ✅ | ✅ |
| Time on task | ❌ | ❌ | ✅ |
| Successful task completion | ✅ | ✅ | ✅ |
| Comprehension (button/link/menu labels) | ✅ | ✅ | ✅ |
| Satisfaction | ✅ | ✅ | ✅ |
| Errors | ✅ | ✅ | ✅ |

Most metrics can be used across all levels of prototype fidelity. Avoid using time on task as a metric in most situations since database sizes, internet speeds, and follow-up questions may artificially inflate the metric.

## Recruiting Participants

### Compensation

Nothing’s free. Have a budget in mind with ideas on how to compensate participants for their time:

- Cash
- Gift certificates
- Free use of your product for a given amount of time

Show initiative by getting in contact with finance departments to establish procedures that can be used to issue the payments to participants.

### Demographics

Hopefully, your product has personas. If not, please take a look at some of my recommendations on how to create personas.

Take a look at the objectives again, but now consider which product personas are most likely to interact with a given page or workflow.

**Objectives**

- Evaluate user reactions to product landing pages
- Measure success and error rates in payment workflows originating from the cart
- Assess comprehension of menu labels

Perhaps the product landing pages you’re testing are for your female personas in the 18-24 age range. Alternatively, the updates to the payments workflow could be for guest users, as opposed to members. Since you’re targeting a guest, you might be able to select a novice persona, or someone that has not yet been fully onboarded into the product.

> Research objectives describe the goals you’re hoping to accomplish at the conclusion of the study.
>
> [Tweet](http://twitter.com/share?&text=Research%20objectives%20describe%20the%20goals%20you%E2%80%99re%20hoping%20to%20accomplish%20at%20the%20conclusion%20of%20the%20study.%20&url=https%3A%2F%2Fuxhawk.com%2Fux%2Fhow-to-set-up-usability-tests%2F&via=uxhawk)

If you’re at all uncertain about demographics or personas, confirm your assumptions with stakeholders. Work with stakeholders ahead of time so they don’t say, “I don’t trust this finding because it wasn’t used by someone that’d actually complete this workflow.”

Target the agreed upon demographics and experience levels through craigslist advertisements, email campaigns directed to existing users, social media, or third-party companies like [usertesting.com](http://usertesting.com).

### Sample Size

How many participants need to be in a usability test? Nielsen Norman Group has said it best.

> Summary: The answer is 5, except when it’s not. Most arguments for using more test participants are wrong, but some tests should be bigger and some smaller.
>
> Nielsen Norman Group

<https://www.nngroup.com/articles/how-many-test-users/>

## Prepare Testing Materials

You should have some versions of the following [testing artifacts](/ux/usability-test-template/) to successfully complete a usability study:

- Prototype or testing environment
- Intro and welcome
- Scenario
- Tasks
- Follow-up questions

I tailor testing materials to create a 45-60 minute testing session.

- **Intro/Scenario:** 10 minutes
- **Tasks/Survey Questions:** 20 minutes
- **Follow-up questions:** 15 minutes

If you’re testing in person, participants may need:

- Driving directions or public transportation recommendations
- Parking passes
- Building security access
- Water, snacks, bathroom access

If you’re testing remotely, participants may need:

- Permission to access prototype/test environment (e.g., VPN access, guest credentials)
- Links to teleconferencing
- Personal computers, tablets, phones

### Pilot Session

A pilot session is for practice. Pilot sessions are probably the second most important step of this entire process, directly after defining research objectives to remove cognitive biases. Pilot sessions are a time to test out *everything*. Detect and fix errors with your prototype, tasks, and instructions *before* you have your first actual participant.

If you don’t run a pilot session, your first participant will be an expensive and ebarrassing practice.

Pilot sessions are especially important when you invite stakeholders to observe live sessions. It’s unprofessional to be unprepared. Demonstrate to everyone that you’re dedicated to successful data collection and improving the product by ensuring participants can access everything they need ahead of time.

## Moderating Tips

If you haven’t seen it already, please review some of my tips on how to [effectively moderate a usability test](/ux/how-to-moderate-a-usability-test/).

## Analyze Data

You spent the time crafting research objectives, stating hypotheses, and carefully screening participants, now it’s time to dig into the data to see how your product can be improved.

Start first by answering your research questions. Do this by averaging scores on satisfaction questionnaires and difficulty ratings, tallying the number of errors or successfully completed tasks, or count up the number of positive/negative comments about a given feature.

> If you don’t run a pilot session, your first participant will be an expensive and ebarrassing practice.
>
> [Tweet](http://twitter.com/share?&text=If%20you%20don%E2%80%99t%20run%20a%20pilot%20session%2C%20your%20first%20participant%20will%20be%20an%20expensive%20and%20ebarrassing%20%20practice.%26nbsp%3B&url=https%3A%2F%2Fuxhawk.com%2Fux%2Fhow-to-set-up-usability-tests%2F&via=uxhawk)

Compile all the metrics you stated in your objectives, if anything is missing, go back to the session recordings to bolster areas where your notes or data are lacking.

### Prioritize Observations

Usability issues should be prioritized based on their impact to overall UX and the success of the product. Three categories to start with are:

- **Low**: Rarely noticed, minor issues around styling, design inconsistencies, or bumps in the road that participants may/may not notice. Resolving these low priority issues contributes to a highly-polished and professional look-and-feel in a product.
- **Medium:** Participants sometimes notice these issues and occasionally fail to complete their task, must search for work arounds, or struggle to align their mental models with that of the product.
- **High:** Participants usually notice these issues. These issues lead to high levels of frustration, error rates, and reflect very poorly on the structure and organization of the product. Failing to resolve high level usability issues will have a negative impact on the live product and the success of the business.

When you’re writing and categorizing your observations, remember, don’t blame the user (link).

### Propose Design Updates

Rather than saying to your product team *Hey, I found 14 usability issues* followed by a mic drop as you walk away, present design recommendations alongside a given issue.

Recommendations do not need to be final, ready-to-implement UI enhancements, rather, they should be (at minimum) conversation starters that lead to further brainstorming and solutions. Additionally, consider re-writing acceptance criteria, user stories, or creating new user stories altogether to adequately capture the behavior of the enhancement.

## Summary

You are not your user! Designing without testing means you’re making assumptions which could be way off base. Usability testing is an opportunity to learn from your users and make improvements to your product. When you’re getting ready to launch a usability test, be sure to:

- State your research objectives, hypotheses, and metrics
- Recruit participants that align with persona demographics for a given task
- Run a pilot session
- Prioritize observations based on criticality
- Don’t blame the user
- Propose design solutions
