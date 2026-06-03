import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');
const IMAGES = ['landing hero.webp', 'route hero.webp', 'ship.webp'];

async function optimizeImages() {
  for (const img of IMAGES) {
    const imgPath = path.join(PUBLIC_DIR, img);
    const tempPath = path.join(PUBLIC_DIR, `temp-${img}`);
    
    try {
      const metadata = await sharp(imgPath).metadata();
      console.log(`Optimizing ${img}... Original size: ${metadata.width}x${metadata.height}`);
      
      await sharp(imgPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 70 })
        .toFile(tempPath);
      
      await fs.rename(tempPath, imgPath);
      console.log(`Optimized ${img} successfully.`);
    } catch (e) {
      console.error(`Error optimizing ${img}:`, e);
    }
  }
}

optimizeImages();
