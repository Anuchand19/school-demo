const fs = require('fs');
const path = require('path');

const filePath = path.resolve('src/data/schoolData.js');
let content = fs.readFileSync(filePath, 'utf8');

// The exact image mapping according to sections:
const fixes = [
  // PILLARS
  { find: /title:\s*"CURIOSITY"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-classroom-session.png') },
  { find: /title:\s*"CHARACTER"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-students-celebration.png') },
  { find: /title:\s*"CAPABILITY"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-student-achievement.png') },

  // ACADEMIC_DIVISIONS
  { find: /id:\s*"early-years"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-students-celebration.png') },
  { find: /id:\s*"primary"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-student-achievement.png') },
  { find: /id:\s*"middle-school"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-classroom-session.png') },
  { find: /id:\s*"secondary"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-stage-performance.png') },

  // CAMPUS_AREAS
  { find: /id:\s*"classrooms"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-classroom-session.png') },
  { find: /id:\s*"library"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-student-achievement.png') },
  { find: /id:\s*"science-tech"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-campus-building.png') },
  { find: /id:\s*"arts"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-stage-performance.png') },
  { find: /id:\s*"sport"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-students-celebration.png') },
  { find: /id:\s*"outdoors"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-campus-entrance-day.png') },

  // STUDENT_LIFE_DOMAINS
  { find: /title:\s*"SPORT & SCHOOL LIFE"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-students-celebration.png') },
  { find: /title:\s*"PERFORMING ARTS"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-stage-performance.png') },
  { find: /title:\s*"STUDENT SOCIETIES"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-student-achievement.png') },
  { find: /title:\s*"LEADERSHIP & FORUMS"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-classroom-session.png') },
  { find: /title:\s*"COMMUNITY"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-staff-community.png') },
  { find: /title:\s*"CAMPUS TRADITIONS"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-campus-entrance-day.png') },

  // LEADERSHIP_TEAM
  { find: /name:\s*"Faculty & Staff Community"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-staff-community.png') },
  { find: /name:\s*"Academic Mentors"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-classroom-session.png') },
  { find: /name:\s*"Foundational Educators"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-student-achievement.png') },
  { find: /name:\s*"Student Life & Wellbeing"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-students-celebration.png') },

  // EDITORIAL_NEWS
  { find: /id:\s*"news-1"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-stage-performance.png') },
  { find: /id:\s*"news-2"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-classroom-session.png') },
  { find: /id:\s*"news-3"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-student-achievement.png') },

  // STUDENT_LIFE_TABS
  { find: /title:\s*"COMMUNITY"[\s\S]*?label:\s*"School Spirit[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-students-celebration.png') },
  { find: /title:\s*"STAGE & ARTS"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-stage-performance.png') },
  { find: /title:\s*"LEARNING SESSIONS"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-classroom-session.png') },
  { find: /title:\s*"ACHIEVEMENT"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-student-achievement.png') },
  { find: /title:\s*"FESTIVALS"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-illuminated-entrance.png') },

  // CAMPUS_ASYMMETRIC_GRID
  { find: /label:\s*"LEARNING STUDIOS"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-classroom-session.png') },
  { find: /label:\s*"MAIN BUILDING"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-campus-building.png') },
  { find: /label:\s*"COURTYARD & GATE"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-school-gate.png') },
  { find: /label:\s*"CAMPUS ENTRANCE"[\s\S]*?image:\s*"\/images\/rj\/\.png"/, replace: (m) => m.replace('/images/rj/.png', '/images/rj/rj-campus-entrance-day.png') }
];

let fixCount = 0;
for (const fix of fixes) {
  const match = content.match(fix.find);
  if (match) {
    const updated = fix.replace(match[0]);
    content = content.replace(match[0], updated);
    fixCount++;
  } else {
    console.warn('Could not match pattern:', fix.find);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Applied ${fixCount} fixes to ${filePath}. Remaining broken:`, (content.match(/\/images\/rj\/\.png/g) || []).length);
