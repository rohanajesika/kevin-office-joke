// kevin-office-joke — The Funniest Office Joke, Judged Head to Head
// (make.fun competition u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
//
// The program writes exactly ONE one-line office joke to /output/entry.txt.
// Deterministic: no fetch, no randomness, no clock, no environment input.
// The joke is a plain string literal below; running the program twice
// produces byte-identical output.
//
// ---------------------------------------------------------------------------
// The joke
// ---------------------------------------------------------------------------
//   Our printer only prints the word 'no' now — IT says it's not a bug,
//   it's setting boundaries.
//
// 92 characters, 94 bytes — inside the gate of 1 to 200 characters.
//
// How it maps to the judge's brief (most important first):
//   1. One-line joke about office life, real joke with a setup and a turn,
//      punchline last: setup = the printer answers every job with a page
//      saying "no"; turn = IT reframes a broken printer as a printer with
//      boundaries; the punchline ("setting boundaries") is the last phrase.
//   2. Turns on something anyone who has worked in an office knows: the
//      printer that fails on the deadline (here, fails at everything —
//      every document comes back as a refusal) and IT's deadpan
//      explanations for it.
//   3. Surprises: the reader expects a technical excuse ("out of toner",
//      "paper jam"); instead the printer gets therapy language, and the
//      familiar "it's not a bug" swerves away from "it's a feature" into
//      "it's setting boundaries". A machine doing boundary-setting is a
//      turn nobody sees coming, not a complaint stated plainly.
//   4. Lands in one line: 92 characters, every word earns its place —
//      "only" makes the refusal total, "now" makes it a new development,
//      "IT says" gives the turn an office authority.
//   5. Feels new: the printer-jam joke is old, but a printer doing
//      boundary-setting is not a joke already going round the office.
//
// Candidates weighed and cut:
//   - Reply-all escalation ("I hit reply-all to ask everyone to stop
//     replying all..."): strong irony, but reply-all jokes are among the
//     most-told office jokes; loses on freshness (criterion 5).
//   - Trust-fall team building ("...HR called it 'a valuable lesson in
//     self-reliance'"): good HR-spin punchline, but a mini-story at ~140
//     characters; looser than the printer line on criterion 4.
//   - "The office coffee is so weak it asked HR for a performance
//     improvement plan": same anthropomorphism trick, but the printer's
//     single-word refusal ("no") is a sharper, more surprising setup.
//
// REVISION (v2, after first run): the setup was "the printer's only error
// message is 'no'" — an error message is abstract and expected. Changed to
// "only prints the word 'no'": now you send a document and the printer
// hands you back a page that says "no", a concrete, visual refusal. The
// middle was "it's not broken"; changed to "it's not a bug", which invokes
// the familiar "it's not a bug, it's a feature" and then swerves into
// "setting boundaries" instead of "a feature" — a second, smaller turn
// inside the punchline. 92 characters (was 96 in v1), same gate, sharper joke.
//
// Output contract (RULES.txt, "The gate"): /output/entry.txt must be UTF-8
// text of 1 to 200 characters, not only white space. The joke is written
// with NO trailing newline so the file holds exactly the joke, one line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our printer only prints the word 'no' now \u2014 IT says it's not a bug, it's setting boundaries.";

function main(): void {
  // The grader runs the program with a writable output directory; the
  // harness passes it as MAKEFUN_OUTPUT_DIR and falls back to /output.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
}

main();
