const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'sports');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const images = {
  'sports-hero.jpg': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80',
  'sports-intro.jpg': 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80',
  'sports-cta.jpg': 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1600&q=80',
  'football.jpg': 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80',
  'cricket.jpg': 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
  'basketball.jpg': 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
  'volleyball.jpg': 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
  'badminton.jpg': 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
  'table-tennis.jpg': 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=800&q=80',
  'athletics.jpg': 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80',
  'swimming.jpg': 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
  'facility-football.jpg': 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1000&q=80',
  'facility-basketball.jpg': 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?auto=format&fit=crop&w=1000&q=80',
  'facility-cricket.jpg': 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=80',
  'facility-indoor-hall.jpg': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80',
  'facility-track.jpg': 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1000&q=80',
  'facility-pool.jpg': 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1000&q=80'
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

(async () => {
  for (const [filename, url] of Object.entries(images)) {
    const dest = path.join(dir, filename);
    if (!fs.existsSync(dest) || fs.statSync(dest).size < 1000) {
      process.stdout.write('Downloading ' + filename + '... ');
      try {
        await download(url, dest);
        console.log('OK (' + fs.statSync(dest).size + ' bytes)');
      } catch (e) {
        console.log('FAIL: ' + e.message);
      }
    } else {
      console.log(filename + ' already exists');
    }
  }
  console.log('All sports image assets ready!');
})();
