# Choosing the illusion

Read when tuning the look or feel of a manipulable object. These are decision aids, not a required visual style or feature checklist.

## Depth: choose by what the viewer can inspect

| Desired experience | First approach to consider | What to check |
| --- | --- | --- |
| A printed object that feels physical | Thin real object, flat artwork, believable edge and shadow | Side view remains coherent; front and back align |
| A subject that feels separate from its setting | Masked layers, restrained parallax, independent atmosphere | Subject does not drift or double; edges remain clean |
| A sculptural subject seen from many directions | Actual geometry with a coherent silhouette | Side and rear views contain valid detail |
| An atmospheric room behind fixed interactions | Illustrated backdrop with constrained camera | Object perspective matches the backdrop |
| A freely explorable room | Modeled environment | No flat backdrop is exposed as a substitute for missing geometry |

Do not translate “make it feel 3D” directly into extrusion. Ask what perceptual cue is missing: thickness, separation, lighting, or full spatial form. For detailed printed illustrations, stretching the image into a raised mesh often exposes distorted sides. Use displacement only when the asset and viewing angles support it.

## Motion: decide what is allowed to move

Separate three treatments:

- **Ambient:** mist, water, clouds, or sparse particles that sustain atmosphere.
- **Responsive:** tilt, a reflection, or a surface glint tied to input.
- **Consequential:** an unmistakable change tied to discovery, placement, or submission.

Choose a stable visual anchor. If the subject should remain still, exclude it from background warping and moving overlays. Protect borders, labels, and other printed details too. Synchronize texture and emissive sampling so a glowing surface does not appear doubled.

Judge ambient movement over time at the real object size, not a magnified asset preview. “Subtle” should mean restrained, not imperceptible. Stop or simplify nonessential motion for reduced-motion users without removing feedback needed to understand an action.

## Feedback: distinguish a possibility from an outcome

| Moment | Possible treatment | Avoid |
| --- | --- | --- |
| Object becomes actionable | Small lift, outline, focus treatment | Constant dramatic motion on every object |
| Compatible objects approach | Shared local glow, gentle attraction, short contextual phrase | Revealing the entire recipe before the player experiments |
| Invalid action | Short recoil and readable neutral feedback | A success-shaped animation followed by a failure message |
| First discovery | Clear reveal, recognisable new object, brief emphasis | Consuming inputs when the rules promise they remain |
| Repeated discovery | Shorter acknowledgement and existing result | Duplicate collection entries or repeat first-discovery rewards |
| Optional submission | Distinct target and confirmation | Advancing the round merely because an answer was discovered |

Keep proximity previews reversible. Commit an outcome only at the specified release or confirmation point; moving past a compatible object should not accidentally combine it.

## Product choices from Card Alchemy, not universal rules

Our card experiment used reusable ingredients, an unchanged table between rounds, and deliberate submission after discovery. This reduced the cost of experimentation. A crafting survival game may need consumption; a puzzle may need a reset; a competitive game may need time pressure. Reuse the reasoning, not the specific rule set.

The rejected raised-art experiment taught us to inspect depth from the side. The initially invisible background movement taught us to judge motion at normal scale. Neither finding implies that all depth or all subtle animation is wrong.

## Transfer the method to another product

- **A sound garden:** move objects near each other to hear a possible harmony, commit a pairing to reveal a new sound, and choose when to save the composition. Do not add cards or tarot styling.
- **An interactive museum cabinet:** inspect an object, notice a related detail, place it beside another to reveal context. The reward can be understanding rather than points.
- **An existing product viewer:** if the request is only to improve rotation feel, tune the input and settling behaviour. Do not add discovery mechanics, collections, or a game loop.

Use these examples to preserve scope while applying the same perceptual reasoning.
