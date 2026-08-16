import { readFile } from "node:fs/promises";

const expected = JSON.parse(
  await readFile(new URL("../expected-findings.json", import.meta.url), "utf8"),
);

if (!Array.isArray(expected) || expected.length < 7) {
  throw new Error("expected-findings.json must describe every fixture category.");
}

for (const finding of expected) {
  for (const field of ["type", "provider", "access", "confidence", "source", "name"]) {
    if (typeof finding[field] !== "string" || finding[field].length === 0) {
      throw new Error(`Fixture finding is missing ${field}.`);
    }
  }

  const source = finding.source.match(/^(.*?)(?::(\d+))?$/);
  if (!source) throw new Error(`Fixture finding has an invalid source: ${finding.source}`);

  const content = await readFile(new URL(`../${source[1]}`, import.meta.url), "utf8");
  if (source[2] && !content.split(/\r?\n/)[Number(source[2]) - 1]) {
    throw new Error(`Fixture source line does not exist: ${finding.source}`);
  }
}

console.log(`Fixture contract is valid (${expected.length} expected findings).`);
