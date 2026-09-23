# StepByte Overnight Lab

A safe sandbox for testing whether AI agents can create useful, reviewable assets for StepByte Studio while the owner is offline.

## Phase 00 — Factory validation

The first goal is not production deployment. It is to prove this path works reliably:

1. GitHub is the source of truth.
2. An AI agent works only inside this repository / a task branch.
3. It can install dependencies, implement a small change, build, test, and self-review.
4. It records what it did in `reports/OVERNIGHT_REPORT.md`.
5. Production systems, VPS, app stores, social accounts, and production data remain untouched.
6. A human reviews the result before anything is merged or deployed.

## Repository layout

- `app/` — disposable web app used for Phase 00 validation.
- `handoff/` — plan and acceptance criteria passed between agents.
- `reports/` — overnight execution reports.
- `experiments/` — one folder per later experiment.
- `.cursor/` — Cursor cloud environment hints.
- `AGENTS.md` — agent operating instructions.
- `OVERNIGHT_RULES.md` — non-negotiable safety and completion rules.

## Phase 00 success criteria

The factory is ready when a cloud agent can independently:

- inspect the repository;
- install dependencies;
- make an intentional change;
- run tests;
- run a production build;
- start the app and visually verify it when browser tooling is available;
- fix defects it finds;
- write an overnight report;
- return the work for human review.

No production deployment is part of Phase 00.
