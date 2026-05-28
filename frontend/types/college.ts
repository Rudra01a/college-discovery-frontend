export interface College {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  logo: string;
  coverImage: string;
  gallery: string[];
  location: {
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
  type: CollegeType;
  category: CollegeCategory[];
  established: number;
  affiliation: string;
  rating: number;
  totalReviews: number;
  ranking: {
    nirf?: number;
    qs?: number;
    india?: number;
  };
  fees: {
    min: number;
    max: number;
    currency: string;
    per: string;
  };
  placements: {
    averagePackage: number;
    highestPackage: number;
    placementRate: number;
    topRecruiters: string[];
  };
  courses: Course[];
  facilities: Facility[];
  description: string;
  shortDescription: string;
  highlights: string[];
  contactInfo: {
    email: string;
    phone: string;
    website: string;
  };
  isFeatured: boolean;
  isTrending: boolean;
  tags: string[];
}

export interface Course {
  id: string;
  name: string;
  duration: string;
  degree: string;
  totalSeats: number;
  fees: number;
  eligibility: string;
  mode: 'Full-time' | 'Part-time' | 'Online';
}

export interface Facility {
  id: string;
  name: string;
  icon: string;
  available: boolean;
}

export interface Review {
  id: string;
  collegeId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  batch: string;
  program: string;
  helpful: number;
  createdAt: string;
}

export type CollegeType = 'Government' | 'Private' | 'Deemed' | 'Autonomous';

export type CollegeCategory =
  | 'Engineering'
  | 'Medical'
  | 'MBA'
  | 'Law'
  | 'Arts & Science'
  | 'Commerce'
  | 'Design'
  | 'Architecture';

export interface CollegeListResponse {
  data: College[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface CollegeDetailResponse {
  data: College;
  reviews: Review[];
}
