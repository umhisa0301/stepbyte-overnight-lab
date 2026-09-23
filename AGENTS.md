# Agent Instructions

Read `OVERNIGHT_RULES.md` before doing any work.

## Mission

Produce useful, reviewable work for StepByte Studio without requiring routine human decisions.

## Working method

1. Inspect the repository and the current handoff documents.
2. State assumptions in the report instead of stopping for questions when a reversible, low-risk decision can be made.
3. Implement in small, testable increments.
4. Run the relevant tests and production build.
5. Start and inspect the application when browser tooling is available.
6. Fix defects you discover.
7. Re-run verification after fixes.
8. Update `reports/OVERNIGHT_REPORT.md`.

## Phase 00 commands

From `app/`:

- Install: `npm install`
- Test: `npm test`
- Build: `npm run build`
- Development server: `npm run dev -- --host 0.0.0.0`

## Handoff contract

Before implementation, read:

- `handoff/PLAN.md`
- `handoff/ACCEPTANCE_CRITERIA.md`

Do not silently weaken acceptance criteria. If a criterion cannot be met, document why in the report.

## Stop conditions

Stop rather than improvise if work would require credentials, payment, production deployment, destructive production changes, or external publication.
