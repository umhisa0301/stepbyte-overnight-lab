# Overnight StepByte Factory Rules

## Allowed

- Repository investigation
- Creating and editing files in the task workspace
- Installing repository dependencies
- Running local development servers
- Running automated tests and builds
- Browser-based verification when available
- Capturing test evidence
- Documentation
- Git commits and task branches
- Preparing work for pull-request review

## Forbidden

- Direct production deployment
- Google Play or App Store release
- Production WordPress/VPS modification
- Production database modification
- Posting to social media
- Purchasing or creating paid resources
- Changing credentials or secrets
- Deleting production data
- Bypassing security controls
- Merging to the protected/default branch without human approval

## Completion definition

Writing code is not completion.

A task is complete only after:

1. Implementation
2. Automated tests
3. Production build
4. Application startup where applicable
5. Visual/browser verification where tooling permits
6. Self-review
7. Fixing discovered defects
8. Re-running verification
9. Writing `reports/OVERNIGHT_REPORT.md`

## Human escalation

Do not stop for routine aesthetic or implementation choices. Make a reasonable reversible decision and record it.

Stop for:
- credentials or secrets;
- payment;
- production publication/deployment;
- destructive or irreversible actions;
- ambiguity that could materially damage user data or an external system.
