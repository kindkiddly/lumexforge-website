import sharp from "sharp";
import fs from "fs";
import path from "path";

const OUT = path.join(process.cwd(), "public", "images");
const SOURCE = "C:\\lumexforge\\lumexforge-images";

async function compressMobile() {
  const src = path.join(SOURCE, "proteinsnap-mobile.png");
  const dest = path.join(OUT, "proteinsnap-mobile.png");
  await sharp(src)
    .resize(1170, 2532, {
      fit: "inside",
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 9, effort: 10, palette: true, quality: 80 })
    .toFile(dest);
  console.log("mobile", fs.statSync(dest).size);
}

async function compressScreenshot2() {
  const src = path.join(SOURCE, "proteinsnap-screenshot-2.png");
  const dest = path.join(OUT, "proteinsnap-screenshot-2.png");
  await sharp(src)
    .resize(1600, 1000, {
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 9, effort: 10, palette: true, quality: 75 })
    .toFile(dest);
  let size = fs.statSync(dest).size;
  if (size > 500000) {
    await sharp(src)
      .resize(1600, 1000, { fit: "cover", position: "centre", kernel: sharp.kernel.lanczos3 })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(path.join(OUT, "proteinsnap-screenshot-2.jpg"));
    console.log("screenshot2 used jpg fallback", fs.statSync(path.join(OUT, "proteinsnap-screenshot-2.jpg")).size);
    fs.unlinkSync(dest);
  } else {
    console.log("screenshot2 png", size);
  }
}

async function createFavicon() {
  const src = path.join(OUT, "apple-touch-icon.png");
  await sharp(src).resize(32, 32).png().toFile(path.join(process.cwd(), "app", "icon.png"));
  // Keep svg as fallback; also add favicon in public
  await sharp(src).resize(32, 32).png().toFile(path.join(OUT, "favicon.png"));
}

async function listSizes() {
  const files = fs.readdirSync(OUT);
  for (const f of files) {
    const s = fs.statSync(path.join(OUT, f));
    const meta = await sharp(path.join(OUT, f)).metadata();
    console.log(`${f}: ${meta.width}x${meta.height} ${(s.size/1024).toFixed(1)}KB`);
  }
}

async function main() {
  await compressMobile();
  await compressScreenshot2();
  await createFavicon();
  await listSizes();
}

main();
