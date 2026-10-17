const http = require('http');

const paths = [
  '/',
  '/about',
  '/academics',
  '/sports',
  '/facilities',
  '/campus',
  '/events',
  '/student-life',
  '/gallery',
  '/admissions',
  '/admissions/apply',
  '/admissions/visit',
  '/contact',
  '/rj-logo.png',
  '/rj-campus-building.png',
  '/images/sports/sports-hero.jpg',
  '/images/sports/sports-intro.jpg',
  '/images/sports/sports-cta.jpg',
  '/images/sports/football.jpg',
  '/images/sports/cricket.jpg',
  '/images/sports/basketball.jpg',
  '/images/sports/volleyball.jpg',
  '/images/sports/badminton.jpg',
  '/images/sports/table-tennis.jpg',
  '/images/sports/athletics.jpg',
  '/images/sports/swimming.jpg',
  '/images/sports/facility-football.jpg',
  '/images/sports/facility-basketball.jpg',
  '/images/sports/facility-cricket.jpg',
  '/images/sports/facility-indoor-hall.jpg',
  '/images/sports/facility-track.jpg',
  '/images/sports/facility-pool.jpg',
  '/images/rj/rj-hero-campus.png',
  '/images/rj/rj-campus-entrance-day.png',
  '/images/rj/rj-school-gate.png',
  '/images/rj/rj-campus-building.png',
  '/images/rj/rj-students-celebration.png',
  '/images/rj/rj-staff-community.png',
  '/images/rj/rj-stage-performance.png',
  '/images/rj/rj-student-achievement.png',
  '/images/rj/rj-classroom-session.png',
  '/images/rj/rj-illuminated-entrance.png',
  '/images/rj/rj-evening-campus.png'
];

async function verify() {
  let passed = 0;
  let failed = 0;
  for (const p of paths) {
    await new Promise((resolve) => {
      http.get('http://127.0.0.1:5173' + p, (res) => {
        if (res.statusCode === 200) {
          console.log(`[PASS 200] ${p} (${res.headers['content-type']})`);
          passed++;
        } else {
          console.error(`[FAIL ${res.statusCode}] ${p}`);
          failed++;
        }
        resolve();
      }).on('error', (err) => {
        console.error(`[ERR] ${p}: ${err.message}`);
        failed++;
        resolve();
      });
    });
  }
  console.log(`\nVerification Complete: ${passed} Passed, ${failed} Failed.`);
  process.exit(failed > 0 ? 1 : 0);
}

verify();
