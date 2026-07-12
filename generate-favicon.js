const fs = require('fs');
const width = 16;
const height = 16;
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
const dir = Buffer.alloc(16);
dir.writeUInt8(width, 0);
dir.writeUInt8(height, 1);
dir.writeUInt8(0, 2);
dir.writeUInt8(0, 3);
dir.writeUInt16LE(1, 4);
dir.writeUInt16LE(32, 6);
const dib = Buffer.alloc(40);
dib.writeUInt32LE(40, 0);
dib.writeInt32LE(width, 4);
dib.writeInt32LE(height * 2, 8);
dib.writeUInt16LE(1, 12);
dib.writeUInt16LE(32, 14);
dib.writeUInt32LE(0, 16);
dib.writeUInt32LE(width * height * 4, 20);
dib.writeInt32LE(3780, 24);
dib.writeInt32LE(3780, 28);
dib.writeUInt32LE(0, 32);
dib.writeUInt32LE(0, 36);
const pixels = Buffer.alloc(width * height * 4);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = ((height - 1 - y) * width + x) * 4;
    const shape = x >= 4 && x < 12 && y >= 5 && y < 11;
    const [r, g, b] = shape ? [245, 158, 11] : [31, 41, 55];
    pixels[idx] = b;
    pixels[idx + 1] = g;
    pixels[idx + 2] = r;
    pixels[idx + 3] = 255;
  }
}
const maskRowBytes = Math.ceil(width / 32) * 4;
const mask = Buffer.alloc(maskRowBytes * height);
dir.writeUInt32LE(header.length + dir.length, 8);
dir.writeUInt32LE(dib.length + pixels.length + mask.length, 12);
fs.writeFileSync('public/favicon.ico', Buffer.concat([header, dir, dib, pixels, mask]));
console.log('OK');
