import sharp from "sharp";
import fs from "fs";
import path from "path";

const SOURCE = "C:\\lumexforge\\lumexforge-images";
const OUT = path.join(process.cwd(), "public", "images");

const jobs = [
  {
    src: "lumexforge-logo.jfif",
    dest: "lumexforge-logo.png",
    width: null,
    height: null,
    format: "png",
    removeBlackBg: true,
  },
  {
    src: "lumexforge-hero.png",
    dest: "lumexforge-hero.jpg",
    width: 1920,
    height: 1080,
    format: "jpg",
    fit: "cover",
  },
  {
    src: "hero-background.jfif",
    dest: null, // fallback hero if lumexforge-hero fails - we'll prefer lumexforge-hero.png
    skip: true,
  },
  {
    src: "og-image.png",
    dest: "og-image.jpg",
    width: 1200,
    height: 630,
    format: "jpg",
    fit: "cover",
  },
  {
    src: "proteinsnap-hero.png",
    dest: "proteinsnap-hero.jpg",
    width: 1600,
    height: 1000,
    format: "jpg",
    fit: "cover",
  },
  {
    src: "amora-artwork.jfif",
    dest: "amora-artwork.jpg",
    width: 1600,
    height: 1000,
    format: "jpg",
    fit: "cover",
  },
  {
    src: "kepaso-artwork.jfif",
    dest: "kepaso-artwork.jpg",
    width: 1600,
    height: 1000,
    format: "jpg",
    fit: "cover",
  },
  {
    src: "future-products-arwork.jfif",
    dest: "future-products-artwork.jpg",
    width: 1600,
    height: 1000,
    format: "jpg",
    fit: "cover",
  },
  {
    src: "apple-touch-icon.jfif",
    dest: "apple-touch-icon.png",
    width: 180,
    height: 180,
    format: "png",
    fit: "cover",
  },
  {
    src: "proteinsnap-mobile.png",
    dest: "proteinsnap-mobile.png",
    width: 1170,
    height: 2532,
    format: "png",
    fit: "cover",
  },
  {
    src: "proteinsnap-screenshot-2.png",
    dest: "proteinsnap-screenshot-2.png",
    width: 1600,
    height: 1000,
    format: "png",
    fit: "cover",
  },
];

async function audit() {
  const files = fs.readdirSync(SOURCE);
  const rows = [];
  for (const file of files) {
    const full = path.join(SOURCE, file);
    const stat = fs.statSync(full);
    const meta = await sharp(full).metadata();
    rows.push({
      file,
      format: path.extname(file).slice(1).toUpperCase(),
      width: meta.width,
      height: meta.height,
      bytes: stat.size,
      kb: (stat.size / 1024).toFixed(1),
    });
  }
  return rows;
}

function removeNearBlackBackground(pipeline) {
  // Flatten onto transparent - works for logos on black
  return pipeline.ensureAlpha().raw().toBuffer({ resolveWithObject: true }).then(({ data, info }) => {
    const { width, height, channels } = info;
    for (let i = 0; i < data.length; i += channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (r < 30 && g < 30 && b < 30) {
        data[i + 3] = 0;
      }
    }
    return sharp(data, { raw: { width, height, channels } });
  });
}

async function processJob(job) {
  if (job.skip) return null;
  const srcPath = path.join(SOURCE, job.src);
  if (!fs.existsSync(srcPath)) {
    return { dest: job.dest, error: `Source missing: ${job.src}` };
  }

  const destPath = path.join(OUT, job.dest);
  let pipeline = sharp(srcPath);

  if (job.removeBlackBg) {
    pipeline = await removeNearBlackBackground(pipeline);
  }

  if (job.width && job.height) {
    pipeline = pipeline.resize(job.width, job.height, {
      fit: job.fit || "inside",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    });
  } else if (job.format === "png" && job.removeBlackBg) {
    // keep as-is dimensions
  }

  if (job.format === "jpg") {
    pipeline = pipeline.jpeg({ quality: 82, progressive: true, mozjpeg: true });
  } else if (job.format === "png") {
    pipeline = pipeline.png({ compressionLevel: 9, palette: job.dest === "lumexforge-logo.png" });
  }

  await pipeline.toFile(destPath);
  const stat = fs.statSync(destPath);
  return { dest: job.dest, bytes: stat.size, kb: (stat.size / 1024).toFixed(1) };
}

async function main() {
  const mode = process.argv[2] || "process";
  if (mode === "audit") {
    const rows = await audit();
    console.log(JSON.stringify(rows, null, 2));
    return;
  }

  fs.mkdirSync(OUT, { recursive: true });
  const auditBefore = await audit();
  const results = [];
  for (const job of jobs) {
    const r = await processJob(job);
    if (r) results.push(r);
  }
  console.log("AUDIT_BEFORE:", JSON.stringify(auditBefore));
  console.log("PROCESSED:", JSON.stringify(results));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
