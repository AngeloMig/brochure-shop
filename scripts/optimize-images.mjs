// Creates resized WebP copies of the local photos in public/images so phones
// download small files. Runs automatically before `dev` and `build`; only
// re-renders files that changed. Output: public/images/sized/<name>-<width>.webp
import { readdir, stat, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('public/images');
const OUT = path.join(ROOT, 'sized');
export const WIDTHS = [480, 800, 1200, 1800];
const exts = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'sized') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (exts.has(path.extname(entry.name).toLowerCase())) yield full;
  }
}

await mkdir(OUT, { recursive: true });
let made = 0;
const manifest = {}; // key → [width, height] of the original, so pages know each photo's shape
for await (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file).replace(/\.[^.]+$/, '').replaceAll(path.sep, '__');
  const src = await stat(file);
  const { width = 0, height = 0 } = await sharp(file).metadata();
  manifest[rel] = [width, height];
  for (const w of WIDTHS.filter((w) => w < width + 200)) {
    const out = path.join(OUT, `${rel}-${w}.webp`);
    const done = await stat(out).catch(() => null);
    if (done && done.mtimeMs >= src.mtimeMs) continue;
    await sharp(file).resize({ width: Math.min(w, width), withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
    made++;
  }
}
await writeFile(path.join(OUT, 'manifest.json'), JSON.stringify(manifest));
console.log(`[images] ${made ? `${made} resized` : 'up to date'}`);
