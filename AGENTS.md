# Agent Execution Guidelines & Governance

## System Overview
This document defines operational protocols for AI subagents working on the **CS Studio** codebase.

## Directory Standards
- `src/components/common`: Shared generic UI elements (buttons, inputs, cards, dialogs).
- `src/components/pedagogy`: Educational modules, interactive quizzes, step-by-step guides.
- `src/components/presenter`: Slide components, presenter views, timer overlays, control panels.
- `src/components/security`: Auth hooks, role guards, permission boundary wrappers.
- `src/lib`: Core utility functions, helpers, API clients, and shared hooks.
- `src/data/punjab-11`: Static curriculum data schema and JSON files for Punjab Grade 11 CS.

## Quality & Verification Rules
1. Every code modification must pass `npm run build` with zero errors or warnings.
2. All components must enforce strict TypeScript types.
3. No inline style overrides when Tailwind CSS utilities can achieve the design.
4. Maintain modular layout boundaries across `(auth)`, `admin`, and `learn` route segments.
