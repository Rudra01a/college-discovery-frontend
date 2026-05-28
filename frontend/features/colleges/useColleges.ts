import { useQuery } from '@tanstack/react-query';
import { collegeService } from '@/backend/services/collegeService';
import { FilterState } from '@/types/filters';

export const collegeKeys = {
  all: ['colleges'] as const,
  lists: () => [...collegeKeys.all, 'list'] as const,
  list: (filters: Partial<FilterState>) => [...collegeKeys.lists(), filters] as const,
  details: () => [...collegeKeys.all, 'detail'] as const,
  detail: (id: string) => [...collegeKeys.details(), id] as const,
  featured: () => [...collegeKeys.all, 'featured'] as const,
  trending: () => [...collegeKeys.all, 'trending'] as const,
};

export function useColleges(filters: Partial<FilterState> = {}) {
  return useQuery({
    queryKey: collegeKeys.list(filters),
    queryFn: () => collegeService.getColleges(filters),
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: (prev) => prev, // Keep previous data while loading
  });
}


export function useCollege(slug: string) {
  return useQuery({
    queryKey: collegeKeys.detail(slug),
    queryFn: () => collegeService.getCollegeBySlug(slug),
    staleTime: 1000 * 60 * 10, // 10 minutes
    enabled: Boolean(slug),
  });
}


export function useFeaturedColleges() {
  return useQuery({
    queryKey: collegeKeys.featured(),
    queryFn: () => collegeService.getFeaturedColleges(),
    staleTime: 1000 * 60 * 30, // 30 minutes — relatively static
  });
}


export function useTrendingColleges() {
  return useQuery({
    queryKey: collegeKeys.trending(),
    queryFn: () => collegeService.getTrendingColleges(),
    staleTime: 1000 * 60 * 30,
  });
}
