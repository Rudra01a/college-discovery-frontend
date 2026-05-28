import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { College } from '@/types/college';

const MAX_COMPARE = 3;

interface CompareStore {
  compareList: College[];
  addToCompare: (college: College) => { success: boolean; message: string };
  removeFromCompare: (collegeId: string) => void;
  isInCompare: (collegeId: string) => boolean;
  clearCompare: () => void;
  canAddMore: () => boolean;
}

export const useCompareStore = create<CompareStore>()(
  persist(
    (set, get) => ({
      compareList: [],

      addToCompare: (college) => {
        const state = get();
        if (state.isInCompare(college.id)) {
          return { success: false, message: 'College already in compare list' };
        }
        if (state.compareList.length >= MAX_COMPARE) {
          return {
            success: false,
            message: `You can compare at most ${MAX_COMPARE} colleges at a time`,
          };
        }
        set((s) => ({ compareList: [...s.compareList, college] }));
        return { success: true, message: `${college.shortName} added to compare` };
      },

      removeFromCompare: (collegeId) => {
        set((s) => ({
          compareList: s.compareList.filter((c) => c.id !== collegeId),
        }));
      },

      isInCompare: (collegeId) => {
        return get().compareList.some((c) => c.id === collegeId);
      },

      clearCompare: () => set({ compareList: [] }),

      canAddMore: () => get().compareList.length < MAX_COMPARE,
    }),
    {
      name: 'college-discovery-compare',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
