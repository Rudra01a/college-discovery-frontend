import { CollegeCategory, CollegeType } from './college';

export interface FilterState {
  search: string;
  category: CollegeCategory[];
  type: CollegeType[];
  location: string[];
  feesMin: number;
  feesMax: number;
  ratingMin: number;
  sortBy: SortOption;
  page: number;
}

export type SortOption =
  | 'rating_desc'
  | 'fees_asc'
  | 'fees_desc'
  | 'name_asc'
  | 'ranking_asc'
  | 'newest';

export interface FilterOption<T = string> {
  label: string;
  value: T;
  count?: number;
}

export const DEFAULT_FILTERS: FilterState = {
  search: '',
  category: [],
  type: [],
  location: [],
  feesMin: 0,
  feesMax: 5000000,
  ratingMin: 0,
  sortBy: 'rating_desc',
  page: 1,
};

export const SORT_OPTIONS: FilterOption<SortOption>[] = [
  { label: 'Highest Rated', value: 'rating_desc' },
  { label: 'Fees: Low to High', value: 'fees_asc' },
  { label: 'Fees: High to Low', value: 'fees_desc' },
  { label: 'Name: A to Z', value: 'name_asc' },
  { label: 'Best Ranking', value: 'ranking_asc' },
  { label: 'Newest First', value: 'newest' },
];
