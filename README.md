# Access discovery demo repository

This is a safe, intentionally non-deployable fixture repository for validating Decawork's access discovery.

It contains references to:

- environment and CI secret names, never their real values;
- OpenAI, GitHub, Slack, and AWS SDK dependencies;
- a Slack webhook reference;
- a known Stripe API host;
- dynamic outbound requests that **must remain blocked**;
- a clearly fake hard-coded OpenAI-shaped string, solely to test value-free secret detection.

## Validate the fixture contract

```sh
npm run validate:fixture
```

## Validate Decawork discovery

1. Commit and push this repository to a Git host.
2. Select its default branch in Decawork and run repository analysis.
3. Compare the discovery output with [`expected-findings.json`](./expected-findings.json).
4. Confirm that every finding includes provider, access, confidence, and source evidence, and that no secret values appear in the result.
5. Confirm that the dynamic partner request, SDK-only integrations, CI action, and hard-coded-secret finding prevent approval until they are resolved or removed.

The sample is deliberately expected to be blocked. It validates the fail-closed path; it is not an application template.
