export const APP_NAME = 'CollegeDiscover';
export const APP_DESCRIPTION = 'Find, compare, and shortlist the best colleges across India';
export const APP_URL = 'https://college-discover.vercel.app';


export const ITEMS_PER_PAGE = 9;
export const MAX_COMPARE = 3;

export const COLLEGE_CATEGORIES = [
  { label: 'Engineering', value: 'Engineering', icon: '🔧' },
  { label: 'Medical', value: 'Medical', icon: '🏥' },
  { label: 'MBA', value: 'MBA', icon: '💼' },
  { label: 'Law', value: 'Law', icon: '⚖️' },
  { label: 'Arts & Science', value: 'Arts & Science', icon: '🎨' },
  { label: 'Commerce', value: 'Commerce', icon: '📊' },
  { label: 'Design', value: 'Design', icon: '✏️' },
  { label: 'Architecture', value: 'Architecture', icon: '🏛️' },
] as const;

export const COLLEGE_TYPES = [
  { label: 'Government', value: 'Government' },
  { label: 'Private', value: 'Private' },
  { label: 'Deemed', value: 'Deemed' },
  { label: 'Autonomous', value: 'Autonomous' },
] as const;

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Delhi', 'Gujarat', 'Karnataka', 'Kerala',
  'Maharashtra', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh',
  'West Bengal', 'Uttarakhand',
] as const;

export const FEES_RANGES = [
  { label: 'Under ₹1 Lakh/yr', min: 0, max: 100000 },
  { label: '₹1L – ₹5L/yr', min: 100000, max: 500000 },
  { label: '₹5L – ₹10L/yr', min: 500000, max: 1000000 },
  { label: 'Above ₹10L/yr', min: 1000000, max: 5000000 },
] as const;

export const NAV_LINKS = [
  { label: 'Colleges', href: '/colleges' },
  { label: 'Compare', href: '/compare' },
  { label: 'Saved', href: '/saved' },
] as const;

export const STATS = [
  { label: 'Colleges Listed', value: '10,000+' },
  { label: 'Students Helped', value: '1M+' },
  { label: 'Reviews', value: '5 Lakh+' },
  { label: 'Expert Mentors', value: '2,000+' },
] as const;
