import sharp from 'sharp';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

const outDir = path.join(process.cwd(), 'public/images/proteinsnaps/calculators');

/** Unsplash License — free use. See ATTRIBUTION.txt in outDir. */
const photos = [
  {
    file: 'grain-bowl.webp',
    url: 'https://unsplash.com/photos/U5goTEzbOzU/download?force=true&w=1400',
    name: 'Calorie calculator hero',
  },
  {
    file: 'smoothie-bowl.webp',
    url: 'https://unsplash.com/photos/tB2MPTiSrsg/download?force=true&w=1400',
    name: 'Macro calculator hero',
  },
  {
    file: 'protein-bowl.webp',
    url: 'https://unsplash.com/photos/lCzfUBEOuTA/download?force=true&w=1400',
    name: 'Protein calculator hero',
  },
];

async function fetchBuffer(url) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function processHero(buf) {
  const size = 1360;
  const base = sharp(buf).rotate().resize(size, size, { fit: 'cover', position: 'centre' });
  const { data, info } = await base
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const nx = (x / width - 0.5) * 2;
      const ny = (y / height - 0.5) * 2;
      const edge = Math.min(1, Math.hypot(nx * 0.92, ny * 0.88));
      const fade = edge <= 0.55 ? 1 : 1 - (edge - 0.55) / 0.45;
      const a = data[i + 3] * Math.max(0, Math.min(1, fade));
      data[i + 3] = Math.round(a);
    }
  }

  return sharp(data, { raw: { width, height, channels } })
    .webp({ quality: 84, effort: 4 })
    .toBuffer();
}

await mkdir(outDir, { recursive: true });

for (const p of photos) {
  process.stdout.write(`Fetching ${p.file}… `);
  const raw = await fetchBuffer(p.url);
  const webp = await processHero(raw);
  await writeFile(path.join(outDir, p.file), webp);
  console.log(`OK (${(webp.length / 1024).toFixed(0)} KB)`);
}

const attribution = `# Calculator hero images (Unsplash)

Calorie — grain-bowl.webp
  Photo: Leanna Myers — bowl of rice and vegetables
  https://unsplash.com/photos/U5goTEzbOzU

Macro — smoothie-bowl.webp
  Photo: Jakub Pabis — açaí bowl with sliced bananas
  https://unsplash.com/photos/43VMTJ1WfsM

Protein — protein-bowl.webp
  Photo: Imad 786 — chicken and chickpeas salad
  https://unsplash.com/photos/lCzfUBEOuTA

Licensed under the Unsplash License: https://unsplash.com/license
`;

await writeFile(path.join(outDir, 'ATTRIBUTION.txt'), attribution);
console.log('Done.');
