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

## Install with the Skills CLI

```bash
npx skills add tiny-jain/build-for-curiosity --skill build-for-curiosity
```

Choose your agent when prompted. For Codex specifically:

```bash
npx skills add tiny-jain/build-for-curiosity --skill build-for-curiosity --agent codex
```

The public repository is the installation source. Skills.sh directory discovery is
based on CLI installation telemetry, not a separate publishing command. A working
installation does not guarantee immediate search or leaderboard visibility.

## Install as a Codex plugin

This repository also contains a skills-only plugin and a repository marketplace:

```bash
codex plugin marketplace add tiny-jain/build-for-curiosity
```

Then open the plugin browser in a compatible desktop client, select
**Aditi Jain's Plugins**, and install **Build for Curiosity**. Restart the client
if the marketplace is not yet visible. Choose either the standalone skill or
plugin installation to avoid duplicate copies of the same workflow.

Repository distribution is separate from approval and publication in OpenAI's
public Plugins Directory. This README does not claim a public directory listing.

## Alternative: install the standalone skill in Codex

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
- [Plugin manifest](plugins/build-for-curiosity/plugin.json): skills-only plugin metadata.
- [Repository marketplace](.agents/plugins/marketplace.json): plugin discovery for compatible clients.

## Maintaining the plugin package

The root skill files are the source of truth. After editing them, regenerate the
plugin's bundled copies and validate the package:

```bash
node scripts/package-plugin.mjs
```

To create a submission ZIP (requires the `zip` command):

```bash
node scripts/package-plugin.mjs /tmp/build-for-curiosity-plugin-1.0.0.zip
```

The ZIP includes only the manifest, original icon, and bundled skill files. It
does not include repository history, the game, personal files, credentials, hooks,
or MCP servers. Public directory submission still requires developer verification
and OpenAI's review process.

No API keys or paid services are required by the skill itself. The tools you choose for implementation or asset generation may have their own requirements.
