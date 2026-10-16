// Post-build check: finds words glued together across inline elements in the built HTML,
// e.g. `smart software</span><span>for` → "softwarefor". Astro drops line breaks between
// inline elements, so these are easy to introduce and hard to spot by eye.
// Fails the build (exit 1) when anything is found. Usage: node scripts/check-text.mjs [dist]
import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2] ?? 'dist';
// Words that are intentionally built from separate elements
const ALLOW = new Set([]);

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.name.endsWith('.html') ? [full] : [];
  });

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
  const asRead = words(html.replace(/<[^>]+>/g, '')); // inline tags removed: what people read
  const separated = words(html.replace(/<[^>]+>/g, ' ')); // inline tags as word breaks
  const glued = [...asRead].filter((w) => !separated.has(w) && !ALLOW.has(w));
  if (glued.length > 0) {
    problems += glued.length;
    console.error(`✗ ${path.relative(root, file)}: ${glued.join(', ')}`);
  }
}

if (problems > 0) {
  console.error(`\ncheck-text: ${problems} run-together word(s). Add {' '} between the inline elements.`);
  process.exit(1);
}
console.log('check-text: no run-together words found');
