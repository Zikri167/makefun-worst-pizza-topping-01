// The Worst Pizza Topping — deadpan one-liner entry.
// Deterministic: writes one fixed line, no network, no randomness.
import { writeFileSync } from 'node:fs';

const LINE =
  // One wet sock, steamed in the cheese: the topping is the joke, the
  // deadpan sales voice is the twist. Written verbatim, no trailing newline.
  'Try our new pizza topped with one wet sock, gently steamed in the cheese, it tastes like a gym bag left in a hot car, and somehow it\'s still the best thing we sell.';

// Entry must be a single line under 200 characters — enforce it here so a
// bad edit fails loudly instead of shipping an oversized entry.
if (LINE.length >= 200) {
  throw new Error(`entry too long: ${LINE.length} characters (max 199)`);
}

writeFileSync('/output/entry.txt', LINE, 'utf8');
