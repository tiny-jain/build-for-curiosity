# Build for Curiosity

**Build experiences people want to touch again.**

A reusable agent skill for product designers and builders making tactile, playful web experiences. It turns visual references and feedback into small implementation experiments—not a one-shot prompt or a fixed visual template.

## What it helps you do

- Start with one convincing object interaction before building an entire product.
- Turn “this doesn't feel right” into a specific change and an observable check.
- Design clues, reactions, and discoveries that invite another experiment.
- Choose appropriate depth and motion instead of adding effects indiscriminately.
- Keep game rules, interaction, presentation, and saved progress separate.
- Check the experience in a browser rather than assuming a successful build means it feels good.

The central loop is **invitation → response → discovery → another possibility**.

## Install in Codex

Ask Codex:

```text
Use $skill-installer to install the skill from
https://github.com/tiny-jain/build-for-curiosity
The skill lives at the repository root (path: .).
Install it with the name build-for-curiosity.
```

Alternatively, copy this repository's files into your personal skill folder named `build-for-curiosity`. Keep `SKILL.md`, `references/`, and `agents/` together.

## Try it

```text
Use $build-for-curiosity to help me build an interactive sound garden.
Start with one object I can move and one meaningful reaction.
Propose the smallest useful version before writing code.
```

```text
Use $build-for-curiosity to refine my existing object viewer.
The rotation feels awkward. Keep the current architecture and focus
only on the interaction—not a redesign or a new game.
```

Bring an idea, a reference if you have one, and feedback from actually trying the result. The skill guides the process; it does not supply an application, art assets, browser tooling, or a promise that every first result will work.

## Where it came from

Written from the iteration process behind [Card Alchemy](https://card-alchemy.vercel.app/): backgrounds whose movement was initially hard to see, an unsuccessful raised-art experiment, better card inspection, and separating discovery from challenge submission.

The skill was authored separately from the third-party skills used during that project. It captures the design decisions and lessons from our iterations rather than reproducing another author's instructions. Card Alchemy is a case study, not a required aesthetic or game template.

## Contents

- [SKILL.md](SKILL.md): the agent workflow.
- [Interaction patterns](references/interaction-patterns.md): guidance for depth, motion, and feedback.
- [Codex metadata](agents/openai.yaml): display name and example invocation.

No API keys or paid services are required by the skill itself. The tools you choose for implementation or asset generation may have their own requirements.
