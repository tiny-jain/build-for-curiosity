---
name: build-for-curiosity
description: Design and build tactile, curiosity-led web experiences from visual references and iterative feedback. Use for interactive collections, playful object-based interfaces, discovery games, and atmospheric browser toys where feel and exploration are central. Not for ordinary landing pages, generic Three.js setup, or writing about a past build.
---

# Build for Curiosity

Build experiences people want to touch again. Start with a meaningful object interaction, then give it a reason to exist. Treat art direction, interaction feel, and product rules as separate decisions that must work together.

Use plain language with designers. Translate their observations into implementation hypotheses without requiring them to supply technical diagnoses.

## Establish the experience contract

For a new experience, state these briefly before implementation; infer reasonable defaults from the request rather than turning this into a questionnaire:

- **Feeling:** what should the interaction evoke?
- **Object:** what does the person manipulate?
- **Action:** what can they physically do with it?
- **Clue:** what invites that action or suggests a possibility?
- **Payoff:** what visibly or audibly changes?
- **Return reason:** why try a second action after the first success?
- **Boundaries:** what must stay, what must not be added, and what is the smallest useful slice?

For an existing experience, recover this contract from the implementation and the user's decisions. A narrow polish request does not require a new product proposal.

Keep intentions distinct from results: “should feel satisfying” is a design target, not evidence of player enjoyment.

## Turn references into decisions, not copies

Extract what matters: composition, material, palette, motion, feedback, and interaction. Identify which parts of a reference are visual inspiration and which are requested functionality. An editor in a reference does not imply a player-facing editor; a dashboard around a demo does not imply the demo needs a dashboard.

Propose a coherent direction tied to the user's idea. Do not default to tarot cards, dark gold styling, or any example in this skill. Preserve credit and licenses when actually reusing third-party work; references are not permission to redistribute assets or instructions.

Inspect the existing project before choosing tools. Retain working interaction and rendering code. Use CSS, canvas, or Three.js according to the interaction required, not as a badge of sophistication. A fixed-camera illustrated scene and a freely orbitable 3D environment are different asset requirements.

## Build the smallest convincing interaction

Make one representative object work through its full interaction before multiplying the catalog:

1. At rest, it reads clearly at the intended size.
2. On hover, focus, or touch, it suggests what can be done.
3. During manipulation, it follows input without accidental competing actions.
4. On release or completion, it settles into an understandable state.

Define click-versus-drag behaviour explicitly. Keep ambient motion, input-driven motion, and outcome animations independently controllable. A rotating object should not accidentally flip because the pointer was released; a decorative animation should not own its logical position.

Use a simple implementation until a perceptual problem justifies more complexity. Do not add an asset-generation service, physics engine, or post-processing pipeline solely because a reference used one.

When choosing depth, background animation, surface finish, or feedback treatment, read [interaction-patterns.md](references/interaction-patterns.md).

## Make feedback an experiment

Translate each material critique into a short working record:

**Observed problem → likely cause → smallest change → acceptance check.**

For example: “I can't see it moving” → movement may be too subtle at the actual display size → change one motion parameter → observe the same region over several seconds at normal zoom.

Do not change speed, layout, lighting, and camera together unless the evidence requires it. Keep enough of the earlier state to compare and undo your own unsuccessful experiment without reverting unrelated work.

After the change, report what was actually observed. If browser inspection is unavailable, distinguish implementation and automated checks from unverified visual quality.

## Add a reason to experiment

For exploration-focused products, prefer a loop with four distinct moments:

**Invitation → response → discovery → another possibility.**

The invitation need not disclose the answer. A shared pulse, a change in sound, or an object leaning toward another can invite an experiment. The response must distinguish a real opportunity from decoration; do not show a success-like signal for every pair.

Make failure readable without implying lost progress where none was lost. For low-stakes discovery, a brief recoil or neutral response may work better than an error modal. Do not impose penalty-free play on a game whose intended tension depends on risk.

If there are challenges, consider separating discovering an answer from submitting it. This preserves the choice to explore after satisfying the prompt. Multiple accepted answers should be authored and validated, not inferred from arbitrary name matching.

For recipes or unlock chains, define a closed content set before wiring animations:

- Every input and output exists.
- Each intended discovery is reachable from the starting state.
- Alternate routes to the same output have deliberate reward behaviour.
- Ingredient consumption, repeat rewards, submission, and persistence are explicit product choices.

Do not expand the catalog to fill a reference image. Respect the agreed slice and stop for playtesting when requested.

## Keep rules independent from spectacle

Layer the experience rather than rebuilding it wholesale:

- **Content:** stable IDs, artwork references, names, relationships, accepted answers.
- **Rules:** valid actions, eligibility, outcomes, rewards, progression.
- **Interaction:** focus, drag, inspect, rotate, flip, candidate target.
- **Presentation:** animation, light, sound, particles, contextual copy.
- **Persistence:** versioned logical state and useful settled poses, not animation timers or temporary pointer state.

Resolve each action once. A repeated click, interrupted reveal, or reload must not duplicate rewards or erase a valid discovery. Use animation to present an outcome, not as the sole record that the outcome happened.

Do not replace existing Three.js objects just to add rules. Connect the rule layer through events or explicit function calls and render the resulting state with existing components.

## Teach with a light touch

Keep the manipulable objects central. Prefer a meaningful reaction and a short contextual cue to instructions explaining an invisible mechanic.

Add a starting screen or compact help only if it supports the requested experience. If used, distinguish Begin from Continue, make dismissal predictable, provide a way to reopen help, and do not reset progress when entering the experience. Instruction copy must describe the implemented controls, including touch alternatives.

Give every decorative control a purpose. Remove ornamental arrows and competing effects when they dilute the action. Keep functional controls discoverable, keyboard-operable, and labelled even when their visual treatment is minimal.

## Check feel separately from correctness

Test the changed journey, not just a successful build. Scale the checks to the work:

- **Presentation:** normal display size, relevant angles, front and back, readability during movement.
- **Input:** mouse, keyboard, and touch equivalents; click/drag separation; repeated input.
- **Rules when changed:** valid, invalid, repeated, and alternate outcomes; non-consumption or consumption as specified.
- **Persistence when changed:** reload after a committed action, Continue, unavailable storage, older saves.
- **Comfort and access:** narrow layout, reduced motion, focus visibility, reachable controls.

Use isolated test state for experiments that change progress. Do not clear the user's save to obtain a fresh screenshot. Report which checks ran, which failed, and which remain unverified.

Automated correctness cannot establish fun. Ask the user to try the smallest playable slice and give one behavioural question, such as: “After the first discovery, did you want to try another action without being told?” Do not invent playtest outcomes.

## Handoff

Summarize the perceptible change, preserved behaviours, evidence, and next decision in plain language. Include the preview or files the user can try.

Skill use does not authorize publishing, paid generation, account changes, or retries around an access denial. Deploy only within the user's requested workflow. If publishing fails, preserve local work and distinguish local completion from the live version.
