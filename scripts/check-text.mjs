// Post-build check for words glued together in the built HTML. Fails the build (exit 1).
// Astro drops the line break between inline content, so these are easy to introduce:
//   1. across inline elements:   `smart software</span><span>for`     → "softwarefor"
//   2. after an {expression}:    `the people at {site.name}\n who`     → "MuchLogicwho"
//   3. before brackets / after full stops: `2022</strong>\n (PDPA)` → "2022(PDPA)"
// Fix by adding {' '} at the end of the line. Usage: node scripts/check-text.mjs [dist]
import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2] ?? 'dist';
// Real words that the patterns below would otherwise flag
const ALLOW = new Set(['Sri Lankan']);

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.name.endsWith('.html') ? [full] : [];
  });

// Values from site.ts that are often interpolated into sentences ({site.name}, country)
const siteSource = fs.readFileSync(new URL('../src/data/site.ts', import.meta.url), 'utf8');
const interpolated = [
  siteSource.match(/\bname: '([^']+)'/)?.[1],
  siteSource.match(/\bcountry: '([^']+)'/)?.[1],
].filter(Boolean);
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const textPatterns = [
  // 2. interpolated value directly followed by a lowercase letter ("MuchLogicwho")
  ...interpolated.map((v) => new RegExp(`${escapeRe(v)}[a-z]\\w*`, 'g')),
  // 3a. word glued to an opening bracket ("2022(PDPA)")
  /[\p{L}\p{N}]\((?![)\s])[^)]{1,30}\)/gu,
  // 3b. sentence end glued to the next sentence ("launch.We")
  /\b[a-z]{2,}[.!?][A-Z][a-z]+/g,
];

// Block-level elements that create a visual (and accessible) boundary between words.
// Inline elements (a, span, label, button, strong…) are NOT boundaries: Astro drops the
// whitespace around them, so "in the\n<a>privacy" renders as "in theprivacy".
const boundary =
  /<\/?(?:p|div|li|ul|ol|h[1-6]|section|header|footer|nav|main|article|figure|figcaption|dl|dt|dd|br|option|select|textarea|input|form|fieldset|legend|summary|details|blockquote|table|tr|td|th|dialog)\b[^>]*>/gi;
const words = (text) => new Set(text.split(/[^\p{L}\p{N}’']+/u).filter((w) => w.length > 2));

let problems = 0;
for (const file of walk(root)) {
  const html = fs
    .readFileSync(file, 'utf8')
    .replace(/<(script|style|svg)[\s\S]*?<\/\1>/gi, ' ')
    .replace(boundary, ' ')
    // Separate controls side by side (e.g. two buttons in a flex row) are announced separately,
    // so treat tag-to-tag adjacency of links/buttons/labels as a boundary. Text touching them
    // directly ("in the<a>privacy") is still caught.
    .replace(/>\s*(<(?:a|button|label)\b)/gi, '> $1')
    .replace(/(<\/(?:a|button|label)>)\s*</gi, '$1 <');
  const readText = html.replace(/<[^>]+>/g, ''); // inline tags removed: what people read

  // 1. glued across inline elements
  const separated = words(html.replace(/<[^>]+>/g, ' '));
  const found = [...words(readText)].filter((w) => !separated.has(w));

  // 2 + 3. text-level patterns
  for (const pattern of textPatterns) {
    for (const match of readText.matchAll(pattern)) found.push(match[0]);
  }

  const issues = [...new Set(found)].filter((w) => !ALLOW.has(w));
  if (issues.length > 0) {
    problems += issues.length;
    console.error(`✗ ${path.relative(root, file)}: ${issues.join(', ')}`);
  }
}

if (problems > 0) {
  console.error(`\ncheck-text: ${problems} run-together word(s). Add {' '} at the end of the line before them.`);
  process.exit(1);
}
console.log('check-text: no run-together words found');
