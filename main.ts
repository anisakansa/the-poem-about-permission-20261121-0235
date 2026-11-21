// The poem about permission — entry program (Node 22, stdlib only, no network).
// Writes one short poem about agency to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set), byte-for-byte, every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "I kept the question folded in my pocket",
  "like a ticket I was afraid to use.",
  "Then I asked \u2014",
  "and the world, which had been waiting",
  "for the sound of my voice all along,",
  "opened like a door",
  "I had only ever leaned against.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// Validate the text before writing: length in Unicode code points,
// not only whitespace, and valid UTF-8 (round-trip through TextEncoder).
const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem must be 1-280 code points, got ${codePoints}`);
}
if (POEM.trim().length === 0) {
  throw new Error("poem must not be only whitespace");
}
const bytes = new TextEncoder().encode(POEM);
const roundTrip = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
if (roundTrip !== POEM) {
  throw new Error("poem is not valid UTF-8");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, bytes);
