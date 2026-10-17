const path = require('path');
const sharp = require('sharp');
const fs = require('fs');

const srcPath = 'C:/Users/chand/.gemini/antigravity/brain/0376a988-d108-4143-859b-d971761e9fce/.user_uploaded/media_1790003969677.png';

async function main() {
  console.log('Reading source image:', srcPath);
  const inputBuffer = fs.readFileSync(srcPath);

  // We want a clean, high-resolution architectural presentation
  // Source is 240x160 (3:2 ratio).
  // Target: 1440x960 (6x Lanczos3 super-sampling) with subtle edge enhancement
  const pipeline = sharp(inputBuffer)
    .resize(1440, 960, {
      kernel: sharp.kernel.lanczos3,
      fit: 'fill'
    })
    .sharpen({
      sigma: 1.2,
      m1: 1.0,
      m2: 2.0
    })
    .modulate({
      brightness: 1.01,
      saturation: 1.04
    });

  const targets = [
    path.resolve('public/images/rj/rj-hero-campus.png'),
    path.resolve('public/rj-campus-building.png'),
    path.resolve('public/rj-campus-building-hd.png'),
    path.resolve('src/assets/hero.png')
  ];

  const pngBuffer = await pipeline.clone().png({ compressionLevel: 8 }).toBuffer();
  for (const t of targets) {
    fs.writeFileSync(t, pngBuffer);
    console.log('Saved PNG to:', t, 'Size:', pngBuffer.length);
  }

  const jpgBuffer = await pipeline.clone().jpeg({ quality: 98, chromaSubsampling: '4:4:4' }).toBuffer();
  fs.writeFileSync('public/images/rj/rj-hero-campus.jpg', jpgBuffer);
  fs.writeFileSync('public/rj-campus-building.jpg', jpgBuffer);
  console.log('Saved JPG, Size:', jpgBuffer.length);

  const webpBuffer = await pipeline.clone().webp({ quality: 98, effort: 6 }).toBuffer();
  fs.writeFileSync('public/images/rj/rj-hero-campus.webp', webpBuffer);
  console.log('Saved WebP, Size:', webpBuffer.length);
}

main().catch(console.error);
