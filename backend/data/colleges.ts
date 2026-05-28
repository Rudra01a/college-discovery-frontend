import { College, Course, Facility, Review } from '@/types/college';

const facilities: Facility[] = [
  { id: 'hostel', name: 'Hostel', icon: 'building', available: true },
  { id: 'library', name: 'Library', icon: 'book-open', available: true },
  { id: 'sports', name: 'Sports Complex', icon: 'trophy', available: true },
  { id: 'cafeteria', name: 'Cafeteria', icon: 'utensils', available: true },
  { id: 'lab', name: 'Research Labs', icon: 'flask-conical', available: true },
  { id: 'wifi', name: 'Wi-Fi Campus', icon: 'wifi', available: true },
  { id: 'medical', name: 'Medical Center', icon: 'heart-pulse', available: true },
  { id: 'transport', name: 'Transport', icon: 'bus', available: true },
  { id: 'gym', name: 'Gymnasium', icon: 'dumbbell', available: false },
  { id: 'auditorium', name: 'Auditorium', icon: 'mic', available: true },
];

const makeGallery = (keywords: string[]): string[] =>
  keywords.map(
    (kw, i) =>
      `https://images.unsplash.com/photo-${
        [
          '1562774053-701939374585',
          '1523050854058-8df90110c9f1',
          '1541339907198-e08756dedf3f',
          '1607237138185-eedd9c632b0b',
          '1562774053-701939374585',
          '1580582932707-520aed937b7b',
        ][i % 6]
      }?w=800&q=80&fit=crop`
  );

export const mockColleges: College[] = [
  // ── 1 ──────────────────────────────────────────────────────────────────────
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay',
    shortName: 'IIT Bombay',
    slug: 'iit-bombay',
    logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Mumbai', state: 'Maharashtra', country: 'India', pincode: '400076' },
    type: 'Government',
    category: ['Engineering'],
    established: 1958,
    affiliation: 'Autonomous (Institute of National Importance)',
    rating: 4.8,
    totalReviews: 2340,
    ranking: { nirf: 3, qs: 149, india: 3 },
    fees: { min: 200000, max: 250000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 2100000,
      highestPackage: 25000000,
      placementRate: 96,
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Goldman Sachs', 'McKinsey'],
    },
    courses: [
      { id: 'iitb-btech-cs', name: 'B.Tech Computer Science', duration: '4 Years', degree: 'B.Tech', totalSeats: 120, fees: 230000, eligibility: 'JEE Advanced', mode: 'Full-time' },
      { id: 'iitb-btech-ee', name: 'B.Tech Electrical Engineering', duration: '4 Years', degree: 'B.Tech', totalSeats: 80, fees: 230000, eligibility: 'JEE Advanced', mode: 'Full-time' },
      { id: 'iitb-mtech', name: 'M.Tech (Various)', duration: '2 Years', degree: 'M.Tech', totalSeats: 400, fees: 60000, eligibility: 'GATE', mode: 'Full-time' },
    ],
    facilities,
    description:
      'IIT Bombay is one of the premier engineering institutions of India and is recognized as one of the top universities in Asia. Known for its research output, alumni network, and world-class faculty, it attracts the brightest minds across the country.',
    shortDescription:
      'Premier engineering institute ranked #3 in India with world-class research facilities and outstanding placement record.',
    highlights: ['NIRF Rank #3', '96% Placement Rate', '₹2.1 Cr Avg Package', '160+ Acre Campus'],
    contactInfo: { email: 'info@iitb.ac.in', phone: '+91-22-2572-2545', website: 'https://www.iitb.ac.in' },
    isFeatured: true,
    isTrending: true,
    tags: ['Top Ranked', 'IIT', 'Engineering', 'Research'],
  },
  // ── 2 ──────────────────────────────────────────────────────────────────────
  {
    id: 'iit-delhi',
    name: 'Indian Institute of Technology Delhi',
    shortName: 'IIT Delhi',
    slug: 'iit-delhi',
    logo: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'New Delhi', state: 'Delhi', country: 'India', pincode: '110016' },
    type: 'Government',
    category: ['Engineering'],
    established: 1961,
    affiliation: 'Autonomous (Institute of National Importance)',
    rating: 4.8,
    totalReviews: 1980,
    ranking: { nirf: 2, qs: 185, india: 2 },
    fees: { min: 210000, max: 260000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 2300000,
      highestPackage: 28000000,
      placementRate: 97,
      topRecruiters: ['Google', 'Microsoft', 'Apple', 'Deutsche Bank', 'Bain & Co'],
    },
    courses: [
      { id: 'iitd-btech-cs', name: 'B.Tech Computer Science', duration: '4 Years', degree: 'B.Tech', totalSeats: 116, fees: 240000, eligibility: 'JEE Advanced', mode: 'Full-time' },
      { id: 'iitd-btech-me', name: 'B.Tech Mechanical Engineering', duration: '4 Years', degree: 'B.Tech', totalSeats: 100, fees: 240000, eligibility: 'JEE Advanced', mode: 'Full-time' },
    ],
    facilities,
    description:
      'IIT Delhi, established in 1961, is one of the top engineering and research institutions in India. Situated in the heart of the capital, it has produced alumni who lead top global corporations and research institutions.',
    shortDescription:
      'NIRF Rank #2 engineering institute in New Delhi with exceptional placements and cutting-edge research programs.',
    highlights: ['NIRF Rank #2', '97% Placement Rate', '₹2.3 Cr Avg Package', '320 Acre Campus'],
    contactInfo: { email: 'info@iitd.ac.in', phone: '+91-11-2659-7135', website: 'https://home.iitd.ac.in' },
    isFeatured: true,
    isTrending: false,
    tags: ['Top Ranked', 'IIT', 'Engineering', 'Research'],
  },
  // ── 3 ──────────────────────────────────────────────────────────────────────
  {
    id: 'iim-ahmedabad',
    name: 'Indian Institute of Management Ahmedabad',
    shortName: 'IIM Ahmedabad',
    slug: 'iim-ahmedabad',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Ahmedabad', state: 'Gujarat', country: 'India', pincode: '380015' },
    type: 'Government',
    category: ['MBA'],
    established: 1961,
    affiliation: 'Autonomous (Institute of National Importance)',
    rating: 4.9,
    totalReviews: 1654,
    ranking: { nirf: 1, india: 1 },
    fees: { min: 2300000, max: 2300000, currency: 'INR', per: 'program' },
    placements: {
      averagePackage: 3500000,
      highestPackage: 90000000,
      placementRate: 100,
      topRecruiters: ['McKinsey', 'BCG', 'Bain', 'Goldman Sachs', 'Amazon'],
    },
    courses: [
      { id: 'iima-pgp', name: 'Post Graduate Programme (MBA)', duration: '2 Years', degree: 'MBA', totalSeats: 415, fees: 2300000, eligibility: 'CAT 99+ percentile', mode: 'Full-time' },
      { id: 'iima-pgpx', name: 'PGP for Executives', duration: '1 Year', degree: 'MBA', totalSeats: 80, fees: 2800000, eligibility: 'CAT / GMAT, 5 yr experience', mode: 'Full-time' },
    ],
    facilities,
    description:
      "IIM Ahmedabad is India's premier management institution and consistently ranks #1 in MBA programs. Known for its rigorous pedagogy, case study method, and an alumni network spanning Fortune 500 companies globally.",
    shortDescription:
      'India\'s #1 MBA institution with 100% placement record, average package of ₹35 LPA, and legendary alumni network.',
    highlights: ['NIRF Rank #1 (MBA)', '100% Placement', '₹35 LPA Avg Package', '₹9 Cr Highest Package'],
    contactInfo: { email: 'admission@iima.ac.in', phone: '+91-79-6632-4000', website: 'https://www.iima.ac.in' },
    isFeatured: true,
    isTrending: true,
    tags: ['Top Ranked', 'IIM', 'MBA', 'Management'],
  },
  // ── 4 ──────────────────────────────────────────────────────────────────────
  {
    id: 'aiims-delhi',
    name: 'All India Institute of Medical Sciences Delhi',
    shortName: 'AIIMS Delhi',
    slug: 'aiims-delhi',
    logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'New Delhi', state: 'Delhi', country: 'India', pincode: '110029' },
    type: 'Government',
    category: ['Medical'],
    established: 1956,
    affiliation: 'Autonomous (Institute of National Importance)',
    rating: 4.9,
    totalReviews: 2100,
    ranking: { nirf: 1, india: 1 },
    fees: { min: 6000, max: 6000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 1500000,
      highestPackage: 5000000,
      placementRate: 98,
      topRecruiters: ['AIIMS Hospitals', 'Apollo', 'Fortis', 'Max Healthcare', 'WHO'],
    },
    courses: [
      { id: 'aiims-mbbs', name: 'MBBS', duration: '5.5 Years', degree: 'MBBS', totalSeats: 107, fees: 6000, eligibility: 'NEET UG (Top 50)', mode: 'Full-time' },
      { id: 'aiims-md', name: 'MD / MS', duration: '3 Years', degree: 'MD/MS', totalSeats: 350, fees: 12000, eligibility: 'NEET PG', mode: 'Full-time' },
    ],
    facilities,
    description:
      "AIIMS Delhi is the pinnacle of medical education in India. With a fully subsidized fee structure, world-class hospital attached to the campus, and faculty who are national authorities in their fields, it remains every medical aspirant's dream institution.",
    shortDescription:
      "India's most prestigious medical college with near-zero fees, world-class hospital, and research excellence.",
    highlights: ['NIRF Rank #1 (Medical)', '98% Placement', 'Fees: ₹6,000/yr', 'Attached Hospital'],
    contactInfo: { email: 'director@aiims.edu', phone: '+91-11-2658-8500', website: 'https://www.aiims.edu' },
    isFeatured: true,
    isTrending: true,
    tags: ['Top Ranked', 'AIIMS', 'Medical', 'Government'],
  },
  // ── 5 ──────────────────────────────────────────────────────────────────────
  {
    id: 'nit-trichy',
    name: 'National Institute of Technology Tiruchirappalli',
    shortName: 'NIT Trichy',
    slug: 'nit-trichy',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Tiruchirappalli', state: 'Tamil Nadu', country: 'India', pincode: '620015' },
    type: 'Government',
    category: ['Engineering'],
    established: 1964,
    affiliation: 'Autonomous (NIT)',
    rating: 4.5,
    totalReviews: 1230,
    ranking: { nirf: 8, india: 8 },
    fees: { min: 130000, max: 180000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 1200000,
      highestPackage: 8000000,
      placementRate: 89,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'L&T', 'Samsung'],
    },
    courses: [
      { id: 'nitt-btech-cs', name: 'B.Tech Computer Science', duration: '4 Years', degree: 'B.Tech', totalSeats: 120, fees: 155000, eligibility: 'JEE Main', mode: 'Full-time' },
      { id: 'nitt-btech-ce', name: 'B.Tech Civil Engineering', duration: '4 Years', degree: 'B.Tech', totalSeats: 120, fees: 145000, eligibility: 'JEE Main', mode: 'Full-time' },
    ],
    facilities,
    description:
      'NIT Trichy is consistently ranked among the top NITs in India and is known for its excellent placement record, research culture, and strong alumni connections. The sprawling riverside campus hosts state-of-the-art labs and sports facilities.',
    shortDescription:
      'Top-ranked NIT with excellent placements, strong alumni network, and vibrant campus life on the banks of River Kaveri.',
    highlights: ['NIRF Rank #8', '89% Placement Rate', '₹12 LPA Avg Package', '800 Acre Campus'],
    contactInfo: { email: 'directornitt@nitt.edu', phone: '+91-431-250-3000', website: 'https://www.nitt.edu' },
    isFeatured: false,
    isTrending: true,
    tags: ['NIT', 'Engineering', 'Government'],
  },
  // ── 6 ──────────────────────────────────────────────────────────────────────
  {
    id: 'bits-pilani',
    name: 'Birla Institute of Technology and Science, Pilani',
    shortName: 'BITS Pilani',
    slug: 'bits-pilani',
    logo: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Pilani', state: 'Rajasthan', country: 'India', pincode: '333031' },
    type: 'Deemed',
    category: ['Engineering'],
    established: 1964,
    affiliation: 'Deemed University',
    rating: 4.6,
    totalReviews: 1780,
    ranking: { nirf: 18, india: 18 },
    fees: { min: 480000, max: 520000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 1800000,
      highestPackage: 15000000,
      placementRate: 94,
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Uber', 'Flipkart'],
    },
    courses: [
      { id: 'bits-be-cs', name: 'B.E. Computer Science', duration: '4 Years', degree: 'B.E.', totalSeats: 200, fees: 500000, eligibility: 'BITSAT', mode: 'Full-time' },
      { id: 'bits-be-mech', name: 'B.E. Mechanical Engineering', duration: '4 Years', degree: 'B.E.', totalSeats: 100, fees: 480000, eligibility: 'BITSAT', mode: 'Full-time' },
    ],
    facilities,
    description:
      "BITS Pilani is India's premier private engineering institution. Its unique dual-degree programs, practice school (industry internship) model, and highly entrepreneurial culture set it apart from other private colleges.",
    shortDescription:
      "India's top private engineering college known for dual-degree programs, practice school, and a prolific startup ecosystem.",
    highlights: ['NIRF Rank #18', '94% Placement Rate', '₹18 LPA Avg Package', 'Unique Practice School'],
    contactInfo: { email: 'admissions@pilani.bits-pilani.ac.in', phone: '+91-1596-242-192', website: 'https://www.bits-pilani.ac.in' },
    isFeatured: true,
    isTrending: false,
    tags: ['Private', 'Engineering', 'BITSAT', 'Deemed'],
  },
  // ── 7 ──────────────────────────────────────────────────────────────────────
  {
    id: 'vit-vellore',
    name: 'Vellore Institute of Technology',
    shortName: 'VIT Vellore',
    slug: 'vit-vellore',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Vellore', state: 'Tamil Nadu', country: 'India', pincode: '632014' },
    type: 'Deemed',
    category: ['Engineering'],
    established: 1984,
    affiliation: 'Deemed University',
    rating: 4.2,
    totalReviews: 3200,
    ranking: { nirf: 11, india: 11 },
    fees: { min: 195000, max: 240000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 800000,
      highestPackage: 5000000,
      placementRate: 82,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant'],
    },
    courses: [
      { id: 'vit-btech-cs', name: 'B.Tech Computer Science', duration: '4 Years', degree: 'B.Tech', totalSeats: 900, fees: 220000, eligibility: 'VITEEE', mode: 'Full-time' },
      { id: 'vit-btech-ece', name: 'B.Tech Electronics & Communication', duration: '4 Years', degree: 'B.Tech', totalSeats: 600, fees: 210000, eligibility: 'VITEEE', mode: 'Full-time' },
    ],
    facilities,
    description:
      'VIT Vellore is one of the largest private universities in India, known for its vibrant campus life, extensive industry connections, and focus on holistic student development. It attracts students from all over the country and abroad.',
    shortDescription:
      'Large private deemed university with strong industry tie-ups, vibrant campus culture, and high enrollment rates.',
    highlights: ['NIRF Rank #11', '82% Placement Rate', '2000+ Recruiters', 'International Collaborations'],
    contactInfo: { email: 'ugadmission@vit.ac.in', phone: '+91-416-220-2020', website: 'https://vit.ac.in' },
    isFeatured: false,
    isTrending: true,
    tags: ['Private', 'Engineering', 'Deemed', 'Large Campus'],
  },
  // ── 8 ──────────────────────────────────────────────────────────────────────
  {
    id: 'nlsiu-bangalore',
    name: 'National Law School of India University',
    shortName: 'NLSIU Bangalore',
    slug: 'nlsiu-bangalore',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Bengaluru', state: 'Karnataka', country: 'India', pincode: '560072' },
    type: 'Government',
    category: ['Law'],
    established: 1987,
    affiliation: 'Autonomous (National Law University)',
    rating: 4.7,
    totalReviews: 890,
    ranking: { nirf: 1, india: 1 },
    fees: { min: 230000, max: 250000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 1800000,
      highestPackage: 6000000,
      placementRate: 95,
      topRecruiters: ['AZB & Partners', 'Trilegal', 'Khaitan & Co', 'Cyril Amarchand Mangaldas', 'Shardul Amarchand'],
    },
    courses: [
      { id: 'nlsiu-ballb', name: 'B.A. LL.B. (Hons)', duration: '5 Years', degree: 'LL.B.', totalSeats: 80, fees: 245000, eligibility: 'CLAT', mode: 'Full-time' },
      { id: 'nlsiu-llm', name: 'LL.M.', duration: '1 Year', degree: 'LL.M.', totalSeats: 30, fees: 200000, eligibility: 'CLAT PG', mode: 'Full-time' },
    ],
    facilities,
    description:
      "NLSIU Bangalore is India's #1 law school and the pioneer of the five-year integrated law program in India. Its rigorous curriculum, moot court culture, and placement in top-tier law firms make it the ultimate destination for law aspirants.",
    shortDescription:
      "India's top-ranked law school, pioneer of the BA LLB program, with exceptional corporate law placements.",
    highlights: ['NIRF Rank #1 (Law)', '95% Placement Rate', '₹18 LPA Avg Package', 'Pioneered 5-yr Law Program'],
    contactInfo: { email: 'registrar@nls.ac.in', phone: '+91-80-2321-3160', website: 'https://nls.ac.in' },
    isFeatured: false,
    isTrending: false,
    tags: ['Law', 'Government', 'CLAT', 'Top Ranked'],
  },
  // ── 9 ──────────────────────────────────────────────────────────────────────
  {
    id: 'srm-chennai',
    name: 'SRM Institute of Science and Technology',
    shortName: 'SRM Chennai',
    slug: 'srm-chennai',
    logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Chennai', state: 'Tamil Nadu', country: 'India', pincode: '603203' },
    type: 'Deemed',
    category: ['Engineering'],
    established: 1985,
    affiliation: 'Deemed University',
    rating: 4.0,
    totalReviews: 2800,
    ranking: { nirf: 23, india: 23 },
    fees: { min: 270000, max: 320000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 700000,
      highestPackage: 4000000,
      placementRate: 78,
      topRecruiters: ['TCS', 'Wipro', 'Infosys', 'Capgemini', 'HCL'],
    },
    courses: [
      { id: 'srm-btech-cs', name: 'B.Tech Computer Science', duration: '4 Years', degree: 'B.Tech', totalSeats: 1200, fees: 300000, eligibility: 'SRMJEEE / JEE Main', mode: 'Full-time' },
    ],
    facilities,
    description:
      'SRM Institute of Science and Technology is one of India\'s largest private universities with over 50,000 students. It has multiple campuses and offers a wide range of engineering and science programs with strong industry linkages.',
    shortDescription:
      'One of India\'s largest private universities with 50,000+ students, multiple campuses, and wide program offerings.',
    highlights: ['50,000+ Students', 'Multiple Campuses', '78% Placement Rate', 'International Programs'],
    contactInfo: { email: 'admissions@srmist.edu.in', phone: '+91-44-2745-6000', website: 'https://www.srmist.edu.in' },
    isFeatured: false,
    isTrending: false,
    tags: ['Private', 'Engineering', 'Large Campus', 'Deemed'],
  },
  // ── 10 ─────────────────────────────────────────────────────────────────────
  {
    id: 'manipal-university',
    name: 'Manipal Academy of Higher Education',
    shortName: 'Manipal University',
    slug: 'manipal-university',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Manipal', state: 'Karnataka', country: 'India', pincode: '576104' },
    type: 'Deemed',
    category: ['Engineering', 'Medical', 'MBA'],
    established: 1953,
    affiliation: 'Deemed University',
    rating: 4.3,
    totalReviews: 2100,
    ranking: { nirf: 14, india: 14 },
    fees: { min: 220000, max: 800000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 900000,
      highestPackage: 5000000,
      placementRate: 83,
      topRecruiters: ['Accenture', 'Deloitte', 'TCS', 'Infosys', 'Barclays'],
    },
    courses: [
      { id: 'mahe-btech-cs', name: 'B.Tech Computer Science', duration: '4 Years', degree: 'B.Tech', totalSeats: 300, fees: 350000, eligibility: 'MU-OET', mode: 'Full-time' },
      { id: 'mahe-mbbs', name: 'MBBS', duration: '5.5 Years', degree: 'MBBS', totalSeats: 250, fees: 800000, eligibility: 'NEET UG', mode: 'Full-time' },
    ],
    facilities,
    description:
      "Manipal University is a multi-disciplinary institution offering programs in engineering, medicine, pharmacy, management, and more. Known for its international collaborations and a truly cosmopolitan campus experience.",
    shortDescription:
      'Multi-disciplinary deemed university offering engineering, medical, and management programs with strong international ties.',
    highlights: ['NIRF Rank #14', 'Multi-disciplinary', '83% Placement Rate', '30,000+ Students'],
    contactInfo: { email: 'admissions@manipal.edu', phone: '+91-820-292-2001', website: 'https://manipal.edu' },
    isFeatured: false,
    isTrending: true,
    tags: ['Private', 'Multi-disciplinary', 'Deemed', 'International'],
  },
  // ── 11 ─────────────────────────────────────────────────────────────────────
  {
    id: 'du-delhi',
    name: 'University of Delhi',
    shortName: 'Delhi University',
    slug: 'du-delhi',
    logo: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'New Delhi', state: 'Delhi', country: 'India', pincode: '110007' },
    type: 'Government',
    category: ['Arts & Science', 'Commerce'],
    established: 1922,
    affiliation: 'Central University',
    rating: 4.2,
    totalReviews: 4500,
    ranking: { nirf: 13, qs: 521, india: 13 },
    fees: { min: 15000, max: 80000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 600000,
      highestPackage: 3000000,
      placementRate: 72,
      topRecruiters: ['Deloitte', 'PwC', 'KPMG', 'EY', 'Bain & Co'],
    },
    courses: [
      { id: 'du-bcom', name: 'B.Com (Hons)', duration: '3 Years', degree: 'B.Com', totalSeats: 500, fees: 20000, eligibility: 'CUET', mode: 'Full-time' },
      { id: 'du-bsc', name: 'B.Sc (Hons) Statistics', duration: '3 Years', degree: 'B.Sc', totalSeats: 300, fees: 18000, eligibility: 'CUET', mode: 'Full-time' },
    ],
    facilities,
    description:
      "The University of Delhi is one of India's largest and most prestigious universities, comprising 90+ colleges across North and South campuses. Its rich history, vibrant campus life, and diverse student community make it unique.",
    shortDescription:
      'India\'s largest central university with 90+ colleges, affordable fees, and a legendary campus culture in the heart of Delhi.',
    highlights: ['90+ Colleges', 'NIRF Rank #13', 'Lowest Fees', '300,000+ Students'],
    contactInfo: { email: 'registrar@du.ac.in', phone: '+91-11-2766-7011', website: 'https://du.ac.in' },
    isFeatured: false,
    isTrending: false,
    tags: ['Government', 'Arts & Science', 'Commerce', 'Central University'],
  },
  // ── 12 ─────────────────────────────────────────────────────────────────────
  {
    id: 'iit-madras',
    name: 'Indian Institute of Technology Madras',
    shortName: 'IIT Madras',
    slug: 'iit-madras',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Chennai', state: 'Tamil Nadu', country: 'India', pincode: '600036' },
    type: 'Government',
    category: ['Engineering'],
    established: 1959,
    affiliation: 'Autonomous (Institute of National Importance)',
    rating: 4.9,
    totalReviews: 2050,
    ranking: { nirf: 1, qs: 227, india: 1 },
    fees: { min: 200000, max: 250000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 2000000,
      highestPackage: 30000000,
      placementRate: 95,
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Apple', 'NVIDIA'],
    },
    courses: [
      { id: 'iitm-btech-cs', name: 'B.Tech Computer Science', duration: '4 Years', degree: 'B.Tech', totalSeats: 126, fees: 230000, eligibility: 'JEE Advanced', mode: 'Full-time' },
    ],
    facilities,
    description:
      "IIT Madras is India's #1 engineering institution (NIRF 2023) with a forested campus in Chennai that is home to deer and wildlife. Known for exceptional research output and a thriving entrepreneurial ecosystem.",
    shortDescription:
      "India's #1 ranked engineering institution with a forested campus, world-class research, and a booming startup ecosystem.",
    highlights: ['NIRF Rank #1', '95% Placement Rate', '₹20 LPA Avg Package', 'IITM Research Park'],
    contactInfo: { email: 'doa@iitm.ac.in', phone: '+91-44-2257-8000', website: 'https://www.iitm.ac.in' },
    isFeatured: true,
    isTrending: true,
    tags: ['Top Ranked', 'IIT', 'Engineering', 'Research'],
  },
  // ── 13 ─────────────────────────────────────────────────────────────────────
  {
    id: 'iim-bangalore',
    name: 'Indian Institute of Management Bangalore',
    shortName: 'IIM Bangalore',
    slug: 'iim-bangalore',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Bengaluru', state: 'Karnataka', country: 'India', pincode: '560076' },
    type: 'Government',
    category: ['MBA'],
    established: 1973,
    affiliation: 'Autonomous (Institute of National Importance)',
    rating: 4.8,
    totalReviews: 1120,
    ranking: { nirf: 2, india: 2 },
    fees: { min: 2400000, max: 2400000, currency: 'INR', per: 'program' },
    placements: {
      averagePackage: 3300000,
      highestPackage: 85000000,
      placementRate: 100,
      topRecruiters: ['McKinsey', 'BCG', 'Bain', 'Goldman Sachs', 'Accenture'],
    },
    courses: [
      { id: 'iimb-pgp', name: 'Post Graduate Programme (MBA)', duration: '2 Years', degree: 'MBA', totalSeats: 430, fees: 2400000, eligibility: 'CAT 98+ percentile', mode: 'Full-time' },
    ],
    facilities,
    description:
      "IIM Bangalore is India's #2 management institution and is renowned globally for its research, entrepreneurship focus, and internationally acclaimed faculty. Its lush 100-acre campus in Bengaluru's tech hub is an added advantage.",
    shortDescription:
      "India's #2 MBA institution with 100% placement, ₹33 LPA average package, and a top-ranked research faculty.",
    highlights: ['NIRF Rank #2 (MBA)', '100% Placement', '₹33 LPA Avg Package', 'Global Top-20 MBA'],
    contactInfo: { email: 'pgpoffice@iimb.ac.in', phone: '+91-80-2699-3000', website: 'https://www.iimb.ac.in' },
    isFeatured: true,
    isTrending: false,
    tags: ['Top Ranked', 'IIM', 'MBA', 'Management'],
  },
  // ── 14 ─────────────────────────────────────────────────────────────────────
  {
    id: 'jadavpur-university',
    name: 'Jadavpur University',
    shortName: 'Jadavpur University',
    slug: 'jadavpur-university',
    logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Kolkata', state: 'West Bengal', country: 'India', pincode: '700032' },
    type: 'Government',
    category: ['Engineering', 'Arts & Science'],
    established: 1955,
    affiliation: 'State University',
    rating: 4.4,
    totalReviews: 1340,
    ranking: { nirf: 12, india: 12 },
    fees: { min: 40000, max: 100000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 900000,
      highestPackage: 5000000,
      placementRate: 80,
      topRecruiters: ['TCS', 'Wipro', 'Cognizant', 'IBM', 'PwC'],
    },
    courses: [
      { id: 'ju-btech-cs', name: 'B.E. Computer Science', duration: '4 Years', degree: 'B.E.', totalSeats: 60, fees: 55000, eligibility: 'WBJEE', mode: 'Full-time' },
    ],
    facilities,
    description:
      'Jadavpur University is one of Eastern India\'s premier institutions, offering engineering, science, and arts programs. Known for producing high-caliber engineers and researchers, it offers exceptional value with very affordable fees.',
    shortDescription:
      'Eastern India\'s premier state university with affordable fees, strong academics, and a rich intellectual culture.',
    highlights: ['NIRF Rank #12', 'Affordable Fees', '80% Placement Rate', 'Rich Heritage Since 1955'],
    contactInfo: { email: 'registrar@jadavpuruniversity.in', phone: '+91-33-2414-6666', website: 'https://jadavpuruniversity.in' },
    isFeatured: false,
    isTrending: false,
    tags: ['Government', 'Engineering', 'State University', 'Affordable'],
  },
  // ── 15 ─────────────────────────────────────────────────────────────────────
  {
    id: 'symbiosis-pune',
    name: 'Symbiosis International University',
    shortName: 'Symbiosis Pune',
    slug: 'symbiosis-pune',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Pune', state: 'Maharashtra', country: 'India', pincode: '412115' },
    type: 'Deemed',
    category: ['MBA', 'Law', 'Arts & Science'],
    established: 2002,
    affiliation: 'Deemed University',
    rating: 4.1,
    totalReviews: 1890,
    ranking: { nirf: 30, india: 30 },
    fees: { min: 200000, max: 600000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 1100000,
      highestPackage: 4000000,
      placementRate: 85,
      topRecruiters: ['Deloitte', 'PwC', 'KPMG', 'Accenture', 'EY'],
    },
    courses: [
      { id: 'siu-mba', name: 'MBA (Marketing / Finance / HR)', duration: '2 Years', degree: 'MBA', totalSeats: 240, fees: 500000, eligibility: 'SNAP', mode: 'Full-time' },
      { id: 'siu-ballb', name: 'B.A. LL.B.', duration: '5 Years', degree: 'LL.B.', totalSeats: 120, fees: 200000, eligibility: 'SLAT', mode: 'Full-time' },
    ],
    facilities,
    description:
      'Symbiosis International University is a premier private university in Pune known for its diverse student body, strong MBA and law programs, and international academic environment.',
    shortDescription:
      'Multi-disciplinary private university in Pune known for MBA, law, and a culturally diverse international campus.',
    highlights: ['Multi-disciplinary', 'SNAP Entrance', 'International Campus', '85% Placement Rate'],
    contactInfo: { email: 'info@siu.edu.in', phone: '+91-20-3912-1100', website: 'https://www.siu.edu.in' },
    isFeatured: false,
    isTrending: true,
    tags: ['Private', 'MBA', 'Law', 'Deemed'],
  },
  // ── 16 ─────────────────────────────────────────────────────────────────────
  {
    id: 'iit-kharagpur',
    name: 'Indian Institute of Technology Kharagpur',
    shortName: 'IIT Kharagpur',
    slug: 'iit-kharagpur',
    logo: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Kharagpur', state: 'West Bengal', country: 'India', pincode: '721302' },
    type: 'Government',
    category: ['Engineering'],
    established: 1951,
    affiliation: 'Autonomous (Institute of National Importance)',
    rating: 4.7,
    totalReviews: 1780,
    ranking: { nirf: 5, qs: 271, india: 5 },
    fees: { min: 200000, max: 250000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 1700000,
      highestPackage: 20000000,
      placementRate: 94,
      topRecruiters: ['Google', 'Microsoft', 'Adobe', 'Qualcomm', 'Schlumberger'],
    },
    courses: [
      { id: 'iitkgp-btech-cs', name: 'B.Tech Computer Science', duration: '4 Years', degree: 'B.Tech', totalSeats: 105, fees: 230000, eligibility: 'JEE Advanced', mode: 'Full-time' },
    ],
    facilities,
    description:
      "IIT Kharagpur is India's oldest IIT, established in 1951. Its 2100-acre campus is one of the largest in Asia. Known for producing industry leaders, CEOs, and innovators across the globe.",
    shortDescription:
      "India's oldest IIT with a 2100-acre campus, exceptional research legacy, and strong global alumni network.",
    highlights: ['NIRF Rank #5', 'Oldest IIT (1951)', '2100 Acre Campus', '94% Placement Rate'],
    contactInfo: { email: 'adm@adm.iitkgp.ac.in', phone: '+91-3222-255-221', website: 'https://www.iitkgp.ac.in' },
    isFeatured: false,
    isTrending: false,
    tags: ['Top Ranked', 'IIT', 'Engineering', 'Oldest IIT'],
  },
  // ── 17 ─────────────────────────────────────────────────────────────────────
  {
    id: 'amity-noida',
    name: 'Amity University Noida',
    shortName: 'Amity Noida',
    slug: 'amity-noida',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Noida', state: 'Uttar Pradesh', country: 'India', pincode: '201313' },
    type: 'Private',
    category: ['Engineering', 'MBA', 'Law', 'Arts & Science'],
    established: 2005,
    affiliation: 'Private University',
    rating: 3.9,
    totalReviews: 3100,
    ranking: { nirf: 45, india: 45 },
    fees: { min: 350000, max: 500000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 650000,
      highestPackage: 3000000,
      placementRate: 73,
      topRecruiters: ['TCS', 'Wipro', 'Infosys', 'HCL', 'Accenture'],
    },
    courses: [
      { id: 'amity-btech-cs', name: 'B.Tech Computer Science', duration: '4 Years', degree: 'B.Tech', totalSeats: 600, fees: 450000, eligibility: 'Amity JEE / JEE Main', mode: 'Full-time' },
    ],
    facilities,
    description:
      'Amity University is a prominent private university chain in India with a sprawling campus in Noida. It offers a vast range of programs and has invested heavily in infrastructure, international collaborations, and industry partnerships.',
    shortDescription:
      'Large private university in Noida with wide program range, modern infrastructure, and strong corporate connections.',
    highlights: ['40,000+ Students', 'Modern Infrastructure', '73% Placement Rate', 'International Tie-ups'],
    contactInfo: { email: 'admissions@amity.edu', phone: '+91-120-439-2000', website: 'https://www.amity.edu' },
    isFeatured: false,
    isTrending: false,
    tags: ['Private', 'Engineering', 'MBA', 'Large Campus'],
  },
  // ── 18 ─────────────────────────────────────────────────────────────────────
  {
    id: 'iit-roorkee',
    name: 'Indian Institute of Technology Roorkee',
    shortName: 'IIT Roorkee',
    slug: 'iit-roorkee',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Roorkee', state: 'Uttarakhand', country: 'India', pincode: '247667' },
    type: 'Government',
    category: ['Engineering'],
    established: 1847,
    affiliation: 'Autonomous (Institute of National Importance)',
    rating: 4.6,
    totalReviews: 1540,
    ranking: { nirf: 6, qs: 369, india: 6 },
    fees: { min: 200000, max: 250000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 1600000,
      highestPackage: 18000000,
      placementRate: 92,
      topRecruiters: ['Google', 'Microsoft', 'Schlumberger', 'Texas Instruments', 'ONGC'],
    },
    courses: [
      { id: 'iitr-btech-cs', name: 'B.Tech Computer Science', duration: '4 Years', degree: 'B.Tech', totalSeats: 100, fees: 230000, eligibility: 'JEE Advanced', mode: 'Full-time' },
    ],
    facilities,
    description:
      "IIT Roorkee, founded in 1847, is the oldest technical institution in Asia. It has a rich engineering heritage and is particularly known for civil and structural engineering, hydrology, and earthquake engineering research.",
    shortDescription:
      "Asia's oldest technical institution (founded 1847) with strong civil engineering heritage and excellent research output.",
    highlights: ['NIRF Rank #6', 'Asia\'s Oldest Tech Institute', '92% Placement Rate', '₹16 LPA Avg Package'],
    contactInfo: { email: 'doap@iitr.ac.in', phone: '+91-1332-284-011', website: 'https://www.iitr.ac.in' },
    isFeatured: false,
    isTrending: false,
    tags: ['Top Ranked', 'IIT', 'Engineering', 'Heritage'],
  },
  // ── 19 ─────────────────────────────────────────────────────────────────────
  {
    id: 'nift-delhi',
    name: 'National Institute of Fashion Technology Delhi',
    shortName: 'NIFT Delhi',
    slug: 'nift-delhi',
    logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'New Delhi', state: 'Delhi', country: 'India', pincode: '110016' },
    type: 'Government',
    category: ['Design'],
    established: 1986,
    affiliation: 'Autonomous (Statutory Body)',
    rating: 4.3,
    totalReviews: 780,
    ranking: { nirf: 1, india: 1 },
    fees: { min: 180000, max: 220000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 700000,
      highestPackage: 3000000,
      placementRate: 88,
      topRecruiters: ['Myntra', 'Nykaa', 'Zara', 'H&M', 'Fabindia'],
    },
    courses: [
      { id: 'nift-bfd', name: 'B.F.D. Fashion Design', duration: '4 Years', degree: 'B.F.D.', totalSeats: 60, fees: 200000, eligibility: 'NIFT Entrance', mode: 'Full-time' },
      { id: 'nift-bftech', name: 'B.F.Tech', duration: '4 Years', degree: 'B.F.Tech', totalSeats: 60, fees: 200000, eligibility: 'NIFT Entrance', mode: 'Full-time' },
    ],
    facilities,
    description:
      "NIFT Delhi is the flagship campus of India's premier fashion education institution. It produces designers who go on to work with global luxury brands and build successful Indian fashion labels.",
    shortDescription:
      "India's #1 fashion design institution producing designers who work with leading global and Indian fashion brands.",
    highlights: ['Rank #1 (Design)', '88% Placement Rate', 'Industry Collaborations', 'Global Design Exposure'],
    contactInfo: { email: 'director.delhi@nift.ac.in', phone: '+91-11-2656-7222', website: 'https://nift.ac.in' },
    isFeatured: false,
    isTrending: true,
    tags: ['Design', 'Government', 'Fashion', 'Creative'],
  },
  // ── 20 ─────────────────────────────────────────────────────────────────────
  {
    id: 'christ-bangalore',
    name: 'CHRIST (Deemed to be University)',
    shortName: 'Christ University',
    slug: 'christ-bangalore',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&q=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80&fit=crop',
    gallery: makeGallery(['campus', 'lab', 'library', 'sports', 'hostel', 'auditorium']),
    location: { city: 'Bengaluru', state: 'Karnataka', country: 'India', pincode: '560029' },
    type: 'Deemed',
    category: ['Arts & Science', 'Commerce', 'MBA', 'Law'],
    established: 1969,
    affiliation: 'Deemed University',
    rating: 4.0,
    totalReviews: 2300,
    ranking: { nirf: 39, india: 39 },
    fees: { min: 80000, max: 250000, currency: 'INR', per: 'year' },
    placements: {
      averagePackage: 550000,
      highestPackage: 2500000,
      placementRate: 75,
      topRecruiters: ['Deloitte', 'EY', 'KPMG', 'Accenture', 'Wipro'],
    },
    courses: [
      { id: 'christ-bcom', name: 'B.Com (Hons)', duration: '3 Years', degree: 'B.Com', totalSeats: 400, fees: 90000, eligibility: 'Christ Entrance Test', mode: 'Full-time' },
      { id: 'christ-bba', name: 'BBA', duration: '3 Years', degree: 'BBA', totalSeats: 300, fees: 100000, eligibility: 'Christ Entrance Test', mode: 'Full-time' },
    ],
    facilities,
    description:
      "CHRIST University in Bengaluru is known for its disciplined academic environment, strong BCom and BBA programs, and a well-maintained campus. It is a popular choice among students from across South India.",
    shortDescription:
      "Premier deemed university in Bengaluru known for disciplined academics, strong commerce programs, and vibrant campus life.",
    highlights: ['Disciplined Academics', '75% Placement Rate', 'Affordable Fees', 'Bengaluru Location'],
    contactInfo: { email: 'admission@christuniversity.in', phone: '+91-80-4012-9100', website: 'https://christuniversity.in' },
    isFeatured: false,
    isTrending: false,
    tags: ['Private', 'Arts & Science', 'Commerce', 'Deemed'],
  },
];

export const getFeaturedColleges = (): College[] =>
  mockColleges.filter((c) => c.isFeatured);

export const getTrendingColleges = (): College[] =>
  mockColleges.filter((c) => c.isTrending);

export const getCollegeById = (id: string): College | undefined =>
  mockColleges.find((c) => c.id === id);

export const getCollegeBySlug = (slug: string): College | undefined =>
  mockColleges.find((c) => c.slug === slug);
