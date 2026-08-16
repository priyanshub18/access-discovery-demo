// Intentionally fake and non-functional. It exists only to exercise the
// hard-coded-secret detector; do not replace it with a real credential.
const deliberatelyFakeOpenAiToken = "sk-proj-NOT_A_REAL_CREDENTIAL_0123456789";

export function fixtureSecretReference(): string {
  return deliberatelyFakeOpenAiToken;
}
