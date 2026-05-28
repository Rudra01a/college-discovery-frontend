import { College, CollegeListResponse } from '../../frontend/types/college';
import { FilterState } from '../../frontend/types/filters';
import { mockColleges, getCollegeById, getCollegeBySlug } from '../data/colleges';
import { getReviewsByCollegeId } from '../data/reviews';

const ITEMS_PER_PAGE = 9;

// Simulate async API call with artificial delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function applyFilters(colleges: College[], filters: Partial<FilterState>): College[] {
  let result = [...colleges];

  // Search
  if (filters.search) {
    const q = filters.search.toLowerCase();
    result = result.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.shortName.toLowerCase().includes(q) ||
        c.location.city.toLowerCase().includes(q) ||
        c.location.state.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  // Category filter
  if (filters.category && filters.category.length > 0) {
    result = result.filter((c) =>
      c.category.some((cat) => filters.category!.includes(cat))
    );
  }

  // Type filter
  if (filters.type && filters.type.length > 0) {
    result = result.filter((c) => filters.type!.includes(c.type));
  }

  // Location filter
  if (filters.location && filters.location.length > 0) {
    result = result.filter((c) =>
      filters.location!.some(
        (loc) =>
          c.location.city.toLowerCase().includes(loc.toLowerCase()) ||
          c.location.state.toLowerCase().includes(loc.toLowerCase())
      )
    );
  }

  // Fees range filter
  if (filters.feesMin !== undefined) {
    result = result.filter((c) => c.fees.max >= filters.feesMin!);
  }
  if (filters.feesMax !== undefined) {
    result = result.filter((c) => c.fees.min <= filters.feesMax!);
  }

  // Rating filter
  if (filters.ratingMin !== undefined && filters.ratingMin > 0) {
    result = result.filter((c) => c.rating >= filters.ratingMin!);
  }

  return result;
}

function applySorting(colleges: College[], sortBy: FilterState['sortBy']): College[] {
  const sorted = [...colleges];
  switch (sortBy) {
    case 'rating_desc':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'fees_asc':
      return sorted.sort((a, b) => a.fees.min - b.fees.min);
    case 'fees_desc':
      return sorted.sort((a, b) => b.fees.max - a.fees.max);
    case 'name_asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'ranking_asc':
      return sorted.sort(
        (a, b) => (a.ranking.nirf ?? 999) - (b.ranking.nirf ?? 999)
      );
    case 'newest':
      return sorted.sort((a, b) => b.established - a.established);
    default:
      return sorted;
  }
}

export const collegeService = {
  async getColleges(filters: Partial<FilterState> = {}): Promise<CollegeListResponse> {
    await delay(600); // Simulate network latency

    const filtered = applyFilters(mockColleges, filters);
    const sorted = applySorting(filtered, filters.sortBy ?? 'rating_desc');

    const page = filters.page ?? 1;
    const total = sorted.length;
    const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
    const data = sorted.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    return { data, total, page, limit: ITEMS_PER_PAGE, totalPages };
  },

  async getCollegeById(id: string) {
    await delay(400);
    const college = getCollegeById(id);
    if (!college) throw new Error(`College with id "${id}" not found`);
    const reviews = getReviewsByCollegeId(id);
    return { data: college, reviews };
  },

  async getCollegeBySlug(slug: string) {
    await delay(400);
    const college = getCollegeBySlug(slug);
    if (!college) throw new Error(`College with slug "${slug}" not found`);
    const reviews = getReviewsByCollegeId(college.id);
    return { data: college, reviews };
  },

  async getFeaturedColleges() {
    await delay(300);
    return mockColleges.filter((c) => c.isFeatured);
  },

  async getTrendingColleges() {
    await delay(300);
    return mockColleges.filter((c) => c.isTrending);
  },

  async searchColleges(query: string) {
    await delay(250);
    const q = query.toLowerCase();
    return mockColleges.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.shortName.toLowerCase().includes(q) ||
        c.location.city.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q))
    );
  },
};
