# DESIGN.md

## Overview

Sentiment / Lab is a two-color editorial instrument for a transparent lexicon demo. The page moves from sentence input to a visible signal without pretending that a fixed word list is a model.

## Colors

- Paper `#f4f0e8` is the ground; ink `#202a31` is the reading panel.
- Blue `#2355a5` marks controls and method labels.
- Red `#d94a3d` marks negative words and the edge of the spectrum.
- Yellow `#f4c44e` marks positive words and the active reading.

## Typography

- Georgia is the human editorial voice for the headline and sentence surface.
- Courier New carries lexicon labels, token counts, and method notes.
- Display type uses tight tracking and a short measure; body copy stays readable and calm.

## Layout

- A generous editorial opening leads to one split workbench: sentence on the left, reading on the right.
- The workbench keeps input and result visible together; mobile stacks the two instruments in the same order.
- Samples sit directly under the textarea so the demo is testable within seconds.

## Elevation & Depth

Depth comes from the ink reading field, paper contrast, and hairline rules. No decorative shadows or glass effects are used.

## Shapes

Rectangular paper panels, a diamond spectrum marker, and compact rectangular hit chips. Corners stay square to reinforce a lab instrument rather than a generic card UI.

## Components

- Sentence textarea with sample and clear controls.
- Spectrum meter with explicit negative, neutral, and positive labels.
- Signed lexicon-hit chips and an honest no-known-words empty state.
- Method footer that states the fixed word-list and browser-only boundary.

## Do's and Don'ts

- Do keep the scoring mechanism visible and copy technically honest.
- Do preserve the paper/ink split across future states.
- Don't add model-confidence language, fake analytics, or a remote-processing claim.
- Don't turn the result into a generic KPI card.
