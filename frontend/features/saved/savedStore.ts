import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { College } from '@/types/college';

interface SavedStore {
  savedColleges: College[];
  save: (college: College) => void;
  remove: (collegeId: string) => void;
  isSaved: (collegeId: string) => boolean;
  clearAll: () => void;
}

export const useSavedStore = create<SavedStore>()(
  persist(
    (set, get) => ({
      savedColleges: [],

      save: (college) => {
        const already = get().isSaved(college.id);
        if (!already) {
          set((state) => ({ savedColleges: [...state.savedColleges, college] }));
        }
      },

      remove: (collegeId) => {
        set((state) => ({
          savedColleges: state.savedColleges.filter((c) => c.id !== collegeId),
        }));
      },

      isSaved: (collegeId) => {
        return get().savedColleges.some((c) => c.id === collegeId);
      },

      clearAll: () => set({ savedColleges: [] }),
    }),
    {
      name: 'college-discovery-saved',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
