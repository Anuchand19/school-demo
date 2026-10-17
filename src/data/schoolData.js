// R.J SCHOOL — Institutional Configuration & Content Data Model

export const SCHOOL_CONFIG = {
  name: "R.J",
  shortName: "R.J",
  tagline: "Excellence Through Education",
  subtagline: "An education built around curiosity, character and the confidence to explore what comes next.",
  logo: "/rj-logo.png",
  location: "Coimbatore, Tamil Nadu, India",
  locationBadge: "Coimbatore, Tamil Nadu",
  estYear: "R.J School",
  cityCountry: "Coimbatore, India",
  locationFull: "Coimbatore, Tamil Nadu, India",
  fullAddress: "R.J Campus, Coimbatore, Tamil Nadu, India",
  phone: "+91 422 298 0000",
  email: "admissions@rjschool.edu.in",
  admissionsEmail: "admissions@rjschool.edu.in",
  website: "www.rjschool.edu.in",
  established: "R.J School",
  hours: "Monday – Friday 8:30 AM – 4:00 PM",
  isDemoNotice: "R.J School · Excellence Through Education",
  philosophy: "Learning should give students the confidence to ask better questions, explore their interests and contribute meaningfully to the world around them.",
  stats: [
    { value: "1:12", label: "TEACHER / STUDENT", sub: "Individual mentorship & dialogue" },
    { value: "40+", label: "ACTIVITIES", sub: "Sport, arts, clubs & community" },
    { value: "K–12", label: "LEARNING STAGES", sub: "From Foundation to Secondary" }
  ]
};

// Re-export as SCHOOL_INFO for backward compatibility
export const SCHOOL_INFO = SCHOOL_CONFIG;

// 5 Institutional Values for About Page
export const INSTITUTIONAL_VALUES = [
  {
    id: "curiosity",
    name: "Curiosity",
    short: "01",
    tagline: "Learning starts with wondering why.",
    description: "Students are encouraged to explore their interests, ask thoughtful questions and see learning as an ongoing adventure of discovery.",
    quote: "Questions are the beginning of all meaningful learning."
  },
  {
    id: "character",
    name: "Character",
    short: "02",
    tagline: "Doing the right thing when nobody is looking.",
    description: "Integrity, kindness and accountability form the foundation of how our students treat one another and interact with the wider world.",
    quote: "Character is built through everyday decisions and habits."
  },
  {
    id: "respect",
    name: "Respect",
    short: "03",
    tagline: "Valuing different perspectives, backgrounds and experiences.",
    description: "We listen generously, communicate with empathy and celebrate the diverse viewpoints and traditions within our school community.",
    quote: "Respect begins with the humility to listen carefully to others."
  },
  {
    id: "courage",
    name: "Courage",
    short: "04",
    tagline: "Trying new things and learning from mistakes.",
    description: "Growth requires stepping into unfamiliar territory, testing new ideas, asking for help, and treating setbacks as necessary steps forward.",
    quote: "The courage to try is where genuine confidence is formed."
  },
  {
    id: "community",
    name: "Community",
    short: "05",
    tagline: "Growing together and supporting one another.",
    description: "A school thrives when students, educators and families collaborate with mutual trust, shared responsibility and genuine care.",
    quote: "We learn best in a community where everyone belongs."
  }
];

// Three Core Pillars for Homepage
export const PILLARS = [
  {
    number: "01",
    title: "CURIOSITY",
    subtitle: "Inquiry without boundaries",
    description: "Questions are the beginning of meaningful learning. Students are encouraged to investigate, experiment and look beyond the obvious.",
    image: "/images/rj/rj-classroom-session.png"
  },
  {
    number: "02",
    title: "CHARACTER",
    subtitle: "Ethical agency & empathy",
    description: "Learning is also about how we treat others, respond to challenges and contribute to the communities around us.",
    image: "/images/rj/rj-students-celebration.png"
  },
  {
    number: "03",
    title: "CAPABILITY",
    subtitle: "Turning ideas into action",
    description: "Students develop the knowledge, skills and confidence to turn ideas into action across academic disciplines and real-world challenges.",
    image: "/images/rj/rj-student-achievement.png"
  }
];

// Academics Stages (The 4 V4 Learning Stages)
export const ACADEMIC_DIVISIONS = [
  {
    id: "early-years",
    title: "EARLY YEARS",
    navLabel: "EARLY YEARS",
    subtitle: "Curiosity, Movement & Discovery",
    ageRange: "Ages 3 – 5",
    grades: "Pre-KG – UKG",
    focus: "Play, Language, Early numeracy, Social development, Creative exploration",
    description: "The early years are built around curiosity, movement, conversation and discovery.",
    learningApproach: "Children learn through structured play, storytelling, sensory exploration and hands-on investigation. Educators foster natural curiosity and early language development in warm, welcoming studio classrooms.",
    coreSubjects: [
      "Early Literacy & Storytelling",
      "Foundational Numeracy & Patterning",
      "Sensory & Nature Exploration",
      "Creative Arts & Music",
      "Social-Emotional Development",
      "Physical Movement & Motor Skills"
    ],
    activities: [
      "Botanical discovery in school gardens",
      "Sensory water and sand investigation",
      "Collaborative block and model building",
      "Daily circle reflection and expressive arts"
    ],
    environment: "Sunlit ateliers with child-height natural timber materials, dedicated outdoor play spaces, and cozy reading corners.",
    image: "/images/rj/rj-students-celebration.png"
  },
  {
    id: "primary",
    title: "PRIMARY",
    navLabel: "PRIMARY",
    subtitle: "Foundational Mastery & Broad Inquiry",
    ageRange: "Ages 6 – 10",
    grades: "Grades 1 – 5",
    focus: "Literacy, Numeracy, Science, Languages, Arts, Physical education",
    description: "Students develop strong foundations while beginning to make connections across different areas of learning.",
    learningApproach: "Curiosity is channeled into structured inquiry. Students build solid mathematical reasoning, reading fluency, scientific inquiry habits, and expressive communication through project work and collaborative investigations.",
    coreSubjects: [
      "English Language & Literature",
      "Conceptual Mathematics",
      "Inquiry Science & Nature Studies",
      "Second Language (Tamil / Hindi / French)",
      "Social Studies & Global Awareness",
      "Visual Arts, Music & Physical Education"
    ],
    activities: [
      "Hands-on science experiments",
      "Junior robotics and coding clubs",
      "Creative writing and storytelling workshops",
      "Track, football, and swimming coaching"
    ],
    environment: "Modular, light-filled classrooms with writeable surfaces, cohort mini-libraries, and immediate access to outdoor green courtyards.",
    image: "/images/rj/rj-student-achievement.png"
  },
  {
    id: "middle-school",
    title: "MIDDLE SCHOOL",
    navLabel: "MIDDLE SCHOOL",
    subtitle: "Ownership, Research & Problem Solving",
    ageRange: "Ages 11 – 13",
    grades: "Grades 6 – 8",
    focus: "Independent learning, Research, Problem solving, Collaboration, Technology, Creative expression",
    description: "Students begin taking greater ownership of their learning and exploring more complex questions.",
    learningApproach: "Subject specialists guide students through formal laboratory sciences, deep analytical reading, historical research, and computational thinking, helping young people develop independent work habits and personal voice.",
    coreSubjects: [
      "Integrated Sciences (Physics, Chemistry, Biology)",
      "Algebra, Geometry & Applied Mathematics",
      "Literature & Analytical Writing",
      "World History, Civics & Geography",
      "Computer Science & Digital Making",
      "Modern Languages & Performing Arts"
    ],
    activities: [
      "Model United Nations and debate team",
      "Interdisciplinary innovation projects",
      "Music ensemble and drama productions",
      "Competitive athletics and team sports"
    ],
    environment: "Subject-dedicated science and computer labs, design studios, collaborative study rooms, and quiet reading terraces.",
    image: "/images/rj/rj-classroom-session.png"
  },
  {
    id: "secondary",
    title: "SECONDARY",
    navLabel: "SECONDARY",
    subtitle: "Depth, Independence & Perspective",
    ageRange: "Ages 14 – 18",
    grades: "Grades 9 – 12",
    focus: "Advanced academics, Research, Career exploration, Leadership, University preparation",
    description: "Older students develop the depth, independence and perspective needed for their next stage.",
    learningApproach: "Collegiate-style seminars, advanced subject coursework, independent research projects, and dedicated career and university counselling prepare students to step out into the world as confident, principled contributors.",
    coreSubjects: [
      "Advanced Mathematics & Statistics",
      "Physics, Chemistry, Biology & Environmental Studies",
      "Economics, Business Studies & Global Perspectives",
      "World Literature & Academic Writing",
      "Computer Science & Systems Thinking",
      "Fine Arts, Film Studies & Music"
    ],
    activities: [
      "Student government and peer mentorship",
      "Community service and environmental initiatives",
      "Independent research capstone papers",
      "Inter-school athletic fixtures and symposia"
    ],
    environment: "Seminar conference rooms, quiet university study carrels, specialized research laboratories, and college advising center.",
    image: "/images/rj/rj-stage-performance.png"
  }
];

// Academic Philosophy / "How We Teach" - 4 Editorial Blocks (ASK, EXPLORE, CREATE, REFLECT)
export const ACADEMIC_PHILOSOPHY_BLOCKS = [
  {
    id: "ask",
    step: "01",
    title: "ASK",
    headline: "Students begin with questions.",
    description: "Every meaningful inquiry begins with curiosity. Students are taught to look beneath the surface, question initial assumptions, and formulate problems clearly before jumping to answers."
  },
  {
    id: "explore",
    step: "02",
    title: "EXPLORE",
    headline: "They investigate ideas through different perspectives.",
    description: "Students gather evidence, test ideas against data, examine multiple viewpoints, and read widely to build deep conceptual understanding across disciplines."
  },
  {
    id: "create",
    step: "03",
    title: "CREATE",
    headline: "They apply knowledge through projects and experiences.",
    description: "Knowledge becomes real when put into practice. Students design prototypes, write papers, create artwork, conduct experiments, and collaborate on shared solutions."
  },
  {
    id: "reflect",
    step: "04",
    title: "REFLECT",
    headline: "They consider what they learned and where it can take them next.",
    description: "Learning is completed through thoughtful reflection. Students assess what worked, analyze setbacks, recognize their growth, and connect their learning to the wider community."
  }
];

// Campus Areas (6 Purpose-Built Zones)
export const CAMPUS_AREAS = [
  {
    id: "classrooms",
    tag: "LEARNING SPACES",
    title: "THE CLASSROOMS",
    description: "Bright, flexible spaces designed for discussion and focused study. Naturally lit rooms with adaptable furniture facilitate both collaborative teamwork and independent study.",
    caption: "Classroom Presentation & Academic Lecture Hall · R.J School",
    image: "/images/rj/rj-classroom-session.png"
  },
  {
    id: "library",
    tag: "KNOWLEDGE HUB",
    title: "THE LIBRARY & STUDY SUITES",
    description: "A quiet heart of the school with curated collections and quiet study zones. Students browse physical books, access digital research tools, and read in calm reading alcoves.",
    caption: "Academic Recognition & Scholarly Resource Centre",
    image: "/images/rj/rj-student-achievement.png"
  },
  {
    id: "science-tech",
    tag: "CAMPUS ARCHITECTURE",
    title: "MAIN ACADEMIC FACILITY",
    description: "Multi-storey modern campus building housing scientific laboratories, smart learning studios, and state-of-the-art administrative facilities.",
    caption: "Main Academic Building & Facilities · R.J School",
    image: "/images/rj/rj-campus-building.png"
  },
  {
    id: "arts",
    tag: "CREATIVE & PERFORMING ARTS",
    title: "STAGE & CULTURAL VENUE",
    description: "Dedicated stage venue and open amphitheatre for musical drama, annual day performances, and student cultural celebrations.",
    caption: "Cultural Performing Stage & Festivities",
    image: "/images/rj/rj-stage-performance.png"
  },
  {
    id: "sport",
    tag: "STUDENT LIFE",
    title: "STUDENT RECREATION & COMMUNITY",
    description: "High-quality open spaces and facilities supporting vibrant school life, physical activities, and student camaraderie.",
    caption: "Student Community & School Spirit",
    image: "/images/rj/rj-students-celebration.png"
  },
  {
    id: "outdoors",
    tag: "CAMPUS GROUNDS",
    title: "ENTRANCE & OUTDOOR SPACES",
    description: "Open courtyards, trees and gardens where students and families are welcomed each morning under our iconic entrance arch.",
    caption: "Campus Entrance & Green Environs",
    image: "/images/rj/rj-campus-entrance-day.png"
  }
];

// Alias for backwards compatibility
export const CAMPUS_TOUR_SECTIONS = CAMPUS_AREAS;

// Student Life Six Core Categories
export const STUDENT_LIFE_DOMAINS = [
  {
    id: "sport",
    title: "SPORT & SCHOOL LIFE",
    label: "Student Spirit & Physical Wellbeing",
    subcategories: "Athletics · Physical Fitness · Team Activities · Sportsmanship",
    description: "Joyful celebrations, physical vitality, and teamwork fostering healthy habits and camaraderie across the school grounds.",
    image: "/images/rj/rj-students-celebration.png"
  },
  {
    id: "arts",
    title: "PERFORMING ARTS",
    label: "Cultural & Stage Productions",
    subcategories: "Music · Dance · Drama · Annual Day Festivities",
    description: "Dedicated stage performance spaces give students avenues to showcase artistic talent, drama, musical choreography, and stage presence.",
    image: "/images/rj/rj-stage-performance.png"
  },
  {
    id: "clubs",
    title: "STUDENT SOCIETIES",
    label: "Academic Recognition & Projects",
    subcategories: "Science Circles · Book Clubs · Debate · Coding",
    description: "Weekly student-run societies and academic forums recognizing student milestones and intellectual dedication.",
    image: "/images/rj/rj-student-achievement.png"
  },
  {
    id: "leadership",
    title: "LEADERSHIP & FORUMS",
    label: "Student Voice & Presentations",
    subcategories: "Student Council · Peer Mentoring · Academic Symposia",
    description: "Through collaborative seminars and lecture presentations, students build the poise and clarity to express ideas with confidence.",
    image: "/images/rj/rj-classroom-session.png"
  },
  {
    id: "community",
    title: "COMMUNITY",
    label: "Faculty Mentorship & Family Partnerships",
    subcategories: "Mentorship · Community Celebrations · Parent Dialogues",
    description: "Engaged mentorship between experienced educators, caring staff, and families supporting every student's learning journey.",
    image: "/images/rj/rj-staff-community.png"
  },
  {
    id: "trips",
    title: "CAMPUS TRADITIONS",
    label: "Festivals & Outdoor Gatherings",
    subcategories: "Campus Walkthroughs · Special Assemblies · Celebrations",
    description: "Memorable school traditions, annual assemblies, and gatherings under our welcoming campus arch in Coimbatore.",
    image: "/images/rj/rj-campus-entrance-day.png"
  }
];

// Student Life Institutional Events
export const STUDENT_EVENTS = [
  {
    date: "OCTOBER 2026",
    title: "ANNUAL STAGE PERFORMANCE & MUSIC FESTIVAL",
    category: "Cultural Performance",
    description: "An evening of student orchestral music, choral performances, and dramatic presentations on the main campus stage.",
    image: "/images/rj/rj-stage-performance.png"
  },
  {
    date: "NOVEMBER 2026",
    title: "INTER-SCHOOL SCIENCE & INNOVATION SYMPOSIUM",
    category: "Academic Showcase",
    description: "Student scientific investigations, robotics demonstrations, and research papers presented to faculty and academic peers.",
    image: "/images/rj/rj-student-achievement.png"
  },
  {
    date: "DECEMBER 2026",
    title: "ANNUAL ATHLETIC MEET & HOUSE CHAMPIONSHIPS",
    category: "Sport & Athletics",
    description: "Track and field fixtures, team relays, and sportsmanship awards celebrating athletic dedication and house spirit.",
    image: "/images/rj/rj-students-celebration.png"
  },
  {
    date: "JANUARY 2027",
    title: "COMMUNITY OPEN DAY & CAMPUS DISCOVERY",
    category: "Admissions Event",
    description: "Prospective families tour modern learning studios, meet senior faculty members, and explore daily life at R.J.",
    image: "/images/rj/rj-campus-entrance-day.png"
  }
];

// Admissions 4-Step Roadmap
export const ADMISSIONS_4_STEPS = [
  {
    step: "01",
    title: "ENQUIRE",
    description: "Reach out to learn more about the school, request prospectus materials, and ask any initial questions."
  },
  {
    step: "02",
    title: "VISIT",
    description: "Tour the campus, see classrooms in action, and speak with our educators about your child's learning journey."
  },
  {
    step: "03",
    title: "APPLY",
    description: "Complete the online application form and submit supporting academic records and documentation."
  },
  {
    step: "04",
    title: "JOIN",
    description: "Receive an admissions decision, attend family orientation, and prepare for your child's first day at school."
  }
];

// Admissions Required Documents Checklist
export const REQUIRED_DOCUMENTS_LIST = [
  "Copy of Student's Official Birth Certificate or Passport",
  "Academic Transcripts or Progress Reports from the previous two years",
  "Completed Teacher Recommendation or Evaluation Form",
  "Medical and Immunization History summary signed by a physician",
  "Recent passport-sized photographs of student and parents / guardians"
];

// Admissions Demo FAQs
export const ADMISSIONS_FAQS = [
  {
    q: "What ages do you accept?",
    a: "We welcome students from Pre-KG through Grade 12 across our four learning divisions: Early Years, Primary, Middle School, and Secondary. This section provides answers to common questions for demonstration purposes."
  },
  {
    q: "Can we visit the campus before applying?",
    a: "Yes, we encourage campus tours and open days so families can see the school in person, observe classrooms in session, and meet our teachers."
  },
  {
    q: "What does the admissions process look like?",
    a: "It includes an initial inquiry, campus visit, application submission and a friendly student interaction designed to understand your child's learning style."
  },
  {
    q: "When should we apply?",
    a: "Applications typically open in the autumn for the following academic year, with limited rolling admissions depending on seat availability. This section provides answers to common questions about admissions, age criteria, campus visits, and application timelines for demonstration purposes."
  }
];

// School Community & Faculty Leadership
export const LEADERSHIP_TEAM = [
  {
    name: "Faculty & Staff Community",
    role: "School Directorate & Academic Mentors",
    degrees: "Dedicated Educators & Educational Specialists",
    quote: "Our goal is to nurture thoughtful, capable young people who are ready to make a positive contribution to the world.",
    bio: "The faculty and educational leadership at R.J bring together experienced educators committed to intellectual depth, character formation, and patient mentorship.",
    image: "/images/rj/rj-staff-community.png"
  },
  {
    name: "Academic Mentors",
    role: "Secondary & High School Faculty",
    degrees: "Subject Specialists",
    quote: "Older students thrive when treated with intellectual respect and given real ownership of their learning.",
    bio: "Guiding students through seminar pedagogy, research portfolios, and academic excellence.",
    image: "/images/rj/rj-classroom-session.png"
  },
  {
    name: "Foundational Educators",
    role: "Primary School Faculty",
    degrees: "Early Childhood Specialists",
    quote: "Foundations matter. When young children feel secure and curious, their ability to learn expands exponentially.",
    bio: "Fostering literacy, inquiry, and transdisciplinary project work across the foundational years.",
    image: "/images/rj/rj-student-achievement.png"
  },
  {
    name: "Student Life & Wellbeing",
    role: "Co-Curricular & Student Support",
    degrees: "Mentorship & Pastoral Care",
    quote: "Character is forged not in theory, but in how we play, collaborate, and support one another each day.",
    bio: "Supporting student spirit, cultural celebrations, sports coaching, and community service programs.",
    image: "/images/rj/rj-students-celebration.png"
  }
];

// Editorial News / Campus Dispatches
export const EDITORIAL_NEWS = [
  {
    id: "news-1",
    featured: true,
    date: "ANNUAL DAY",
    category: "CULTURAL CELEBRATION",
    title: "Annual Stage Performance Lights Up R.J Campus",
    summary: "Students across grades captivated parents and faculty with an evening of music, dance, and dramatic expression on the illuminated main stage.",
    image: "/images/rj/rj-stage-performance.png"
  },
  {
    id: "news-2",
    featured: false,
    date: "ACADEMICS",
    category: "PRESENTATIONS",
    title: "Interactive Classroom Sessions & Seminar Presentations",
    summary: "Inside our lecture auditorium where learners engage in lively dialogue, multimedia presentations, and collaborative academic discovery.",
    image: "/images/rj/rj-classroom-session.png"
  },
  {
    id: "news-3",
    featured: false,
    date: "STUDENT HONOURS",
    category: "RECOGNITION",
    title: "Academic Recognition & Book Awards Assembly",
    summary: "Faculty and leadership recognize student dedication, scholarly achievements, and reading milestones during the term honours ceremony.",
    image: "/images/rj/rj-student-achievement.png"
  }
];

// Student Life Tabs on Homepage
export const STUDENT_LIFE_TABS = [
  {
    id: "sport",
    title: "COMMUNITY",
    label: "School Spirit, Friendship & Celebrations",
    image: "/images/rj/rj-students-celebration.png",
    description: "Students celebrating milestones, building lasting camaraderie, and thriving in an encouraging school environment."
  },
  {
    id: "art",
    title: "STAGE & ARTS",
    label: "Cultural Celebrations & Stage Productions",
    image: "/images/rj/rj-stage-performance.png",
    description: "Spectacular stage performances, musical dramas, and festive celebrations under illuminated concert lighting."
  },
  {
    id: "clubs",
    title: "LEARNING SESSIONS",
    label: "Lectures, Seminars & Presentations",
    image: "/images/rj/rj-classroom-session.png",
    description: "Interactive multimedia lectures and collaborative academic seminars in our dedicated presentation auditoriums."
  },
  {
    id: "leadership",
    title: "ACHIEVEMENT",
    label: "Merit Recognition & Academic Honors",
    image: "/images/rj/rj-student-achievement.png",
    description: "Formal book prizes, academic honors, and teacher mentorship recognizing hard work and excellence."
  },
  {
    id: "community",
    title: "FESTIVALS",
    label: "Campus Illuminations & Evening Events",
    image: "/images/rj/rj-illuminated-entrance.png",
    description: "Evening community gatherings, illuminated festival arches, and vibrant celebrations that light up the campus."
  }
];

// Campus Asymmetric Grid for Homepage
export const CAMPUS_ASYMMETRIC_GRID = [
  {
    label: "LEARNING STUDIOS",
    size: "large",
    image: "/images/rj/rj-classroom-session.png",
    caption: "Academic classrooms and seminar halls supporting interactive presentations and collaborative inquiry."
  },
  {
    label: "MAIN BUILDING",
    size: "small",
    image: "/images/rj/rj-campus-building.png",
    caption: "Multi-storey campus building housing smart learning facilities and administration."
  },
  {
    label: "COURTYARD & GATE",
    size: "small",
    image: "/images/rj/rj-school-gate.png",
    caption: "Historic entrance gates and paved courtyards greeting students every morning."
  },
  {
    label: "CAMPUS ENTRANCE",
    size: "large",
    image: "/images/rj/rj-campus-entrance-day.png",
    caption: "Iconic entrance archway with lush hedges and evergreen trees in Coimbatore."
  }
];

// DEDICATED SPORTS PROGRAM DATA
export const SPORTS_PROGRAM_DATA = {
  hero: {
    heading: "PLAY. PERFORM. EXCEL.",
    subheading: "Discover a culture of discipline, teamwork, confidence and sporting excellence.",
    tagline: "SPORTS AT R.J",
    image: "/images/sports/sports-hero.jpg"
  },
  introduction: {
    badge: "ATHLETIC PHILOSOPHY",
    heading: "MORE THAN A GAME",
    narrative: "At R.J, sport is an indispensable cornerstone of character formation. We believe physical education instills values that last a lifetime—teaching students how to lead under pressure, support teammates in moments of difficulty, and pursue mastery with humility.",
    image: "/images/sports/sports-intro.jpg",
    values: [
      { name: "Discipline", desc: "Consistency in training, respect for rules, and personal accountability." },
      { name: "Teamwork", desc: "Collaborative trust that places the group's success above personal glory." },
      { name: "Confidence", desc: "Self-assurance forged through rigorous preparation and overcoming challenges." },
      { name: "Leadership", desc: "Inspiring peers by example both on the pitch and in campus life." },
      { name: "Physical Fitness", desc: "Lifelong health, endurance, agility, and balanced physical wellbeing." },
      { name: "Competitive Spirit", desc: "Playing with passion, dignity, resilience, and gracious sportsmanship." }
    ]
  }
};

// 8 Official Sports Categories
export const SPORTS_CATEGORIES = [
  {
    id: "football",
    name: "Football",
    tagline: "Vision, Precision & Pitch Awareness",
    description: "Tactical understanding, stamina and cooperative passing on our regulation grass turf under licensed coaches.",
    image: "/images/sports/football.jpg",
    season: "Monsoon & Winter",
    grades: "Grades 3–12",
    teams: "Under-14, Under-17, Senior XI"
  },
  {
    id: "cricket",
    name: "Cricket",
    tagline: "Tradition, Technique & Strategic Prowess",
    description: "Mastery of batting technique, seam bowling, spin craft, and tactical fielding on dedicated turf wickets.",
    image: "/images/sports/cricket.jpg",
    season: "Autumn & Spring",
    grades: "Grades 4–12",
    teams: "Junior XI, Colts, Varsity XI"
  },
  {
    id: "basketball",
    name: "Basketball",
    tagline: "Agility, Speed & Transition Play",
    description: "Fast-break transitions, perimeter shooting and disciplined defense on full-size synthetic outdoor and indoor courts.",
    image: "/images/sports/basketball.jpg",
    season: "Year-Round",
    grades: "Grades 4–12",
    teams: "Boys & Girls Squads"
  },
  {
    id: "volleyball",
    name: "Volleyball",
    tagline: "Coordination, Spiking & Defensive Grit",
    description: "Agile court positioning, aerial spikes, and cohesive teamwork across boys and girls competitive squads.",
    image: "/images/sports/volleyball.jpg",
    season: "Winter Term",
    grades: "Grades 6–12",
    teams: "Middle & Senior Teams"
  },
  {
    id: "badminton",
    name: "Badminton",
    tagline: "Reflexes, Precision & Footwork Speed",
    description: "Lightning reflexes, footwork speed, and technical stroke play on tournament-grade wooden courts.",
    image: "/images/sports/badminton.jpg",
    season: "Year-Round",
    grades: "Grades 3–12",
    teams: "Singles & Doubles Squads"
  },
  {
    id: "table-tennis",
    name: "Table Tennis",
    tagline: "Focus, Spin Dynamics & Rapid Reaction",
    description: "Spin dynamics, hand-eye coordination, and tactical rally management in our dedicated indoor sports pavilion.",
    image: "/images/sports/table-tennis.jpg",
    season: "Year-Round",
    grades: "Grades 2–12",
    teams: "Junior & Senior Ranks"
  },
  {
    id: "athletics",
    name: "Athletics",
    tagline: "Pace, Power & Competitive Endurance",
    description: "Track sprints, middle distance, high jump, and relay coordination on our 400m synthetic running track.",
    image: "/images/sports/athletics.jpg",
    season: "Winter Term",
    grades: "Grades 1–12",
    teams: "Track & Field House Teams"
  },
  {
    id: "swimming",
    name: "Swimming",
    tagline: "Fluidity, Cardiovascular Strength & Form",
    description: "Stroke refinement, cardiovascular endurance, and competition readiness in our 25-metre heated swimming facility.",
    image: "/images/sports/swimming.jpg",
    season: "Spring & Summer",
    grades: "Grades 1–12",
    teams: "Aquatic Racing Team"
  }
];

// Sports Achievements Statistics
export const SPORTS_ACHIEVEMENTS = [
  {
    value: "24+",
    number: 24,
    suffix: "+",
    label: "SPORTS EVENTS",
    description: "Annual inter-house meets, invitational fixtures, and state tournaments hosted across campus."
  },
  {
    value: "650+",
    number: 650,
    suffix: "+",
    label: "STUDENT ATHLETES",
    description: "Active competitors training weekly under qualified faculty coaches and sports mentors."
  },
  {
    value: "18",
    number: 18,
    suffix: "",
    label: "COMPETITIVE TEAMS",
    description: "Structured school squads across age tiers participating in district and zonal leagues."
  },
  {
    value: "32",
    number: 32,
    suffix: "",
    label: "CHAMPIONSHIPS",
    description: "Regional trophies, individual medals, and fair-play honors earned in recent athletic seasons."
  }
];

// 6 Sporting Facilities
export const SPORTS_FACILITIES = [
  {
    id: "football-ground",
    title: "Football Ground",
    category: "Outdoor Arena",
    specs: "FIFA-Standard Grass Turf · Floodlit",
    description: "Full-size natural grass pitch surrounded by athletic runoffs, spectator seating, and perimeter fencing, designed for school league fixtures and daily afternoon training.",
    image: "/images/sports/facility-football.jpg",
    badge: "OUTDOOR ARENA"
  },
  {
    id: "basketball-court",
    title: "Basketball Court",
    category: "Outdoor & Indoor Courts",
    specs: "FIBA Regulation · Shock-Absorbent Surface",
    description: "High-traction cushioned polyurethane courts equipped with pro-grade glass backboards, LED night lighting, and dedicated training hoops for multi-tier practices.",
    image: "/images/sports/facility-basketball.jpg",
    badge: "REGULATION HARDCOURT"
  },
  {
    id: "cricket-ground",
    title: "Cricket Ground & Nets",
    category: "Turf Oval",
    specs: "Natural Pitch · 3 Practice Nets",
    description: "Expansive green outfield with rolled turf center wicket, electronic scoreboard, and covered batting cages supporting video stroke analysis and bowler speed drills.",
    image: "/images/sports/facility-cricket.jpg",
    badge: "TURF OVAL"
  },
  {
    id: "indoor-sports-hall",
    title: "Indoor Sports Pavilion",
    category: "Indoor Complex",
    specs: "Sprung Maple Flooring · Climate Controlled",
    description: "Multi-court indoor arena housing international-standard badminton courts, table tennis stations, gymnastics apparatus, and physical conditioning equipment.",
    image: "/images/sports/facility-indoor-hall.jpg",
    badge: "MULTI-SPORT COMPLEX"
  },
  {
    id: "athletics-track",
    title: "Athletics Track",
    category: "Track & Field",
    specs: "400-Metre · 8-Lane Polyurethane Track",
    description: "All-weather synthetic running surface certified for sprint events, hurdles, and long-distance meets, with dedicated long-jump pits and high-jump mats.",
    image: "/images/sports/facility-track.jpg",
    badge: "ALL-WEATHER TRACK"
  },
  {
    id: "swimming-pool",
    title: "Swimming Pool",
    category: "Aquatic Center",
    specs: "25-Metre · 6 Competition Lanes",
    description: "Heated semi-Olympic pool equipped with anti-wave lane dividers, starting blocks, electronic timing boards, and qualified full-time lifeguard surveillance.",
    image: "/images/sports/facility-pool.jpg",
    badge: "AQUATIC ARENA"
  }
];

