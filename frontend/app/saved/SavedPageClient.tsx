'use client';

import Link from 'next/link';
import { Heart, Trash2, GitCompare } from 'lucide-react';
import { useAuthStore } from '@/features/auth/authStore';
import { useSavedStore } from '@/features/saved/savedStore';
import { useCompareStore } from '@/features/compare/compareStore';
import { CollegeCard } from '@/components/college/CollegeCard';
import { EmptyState } from '@/components/feedback/EmptyState';
import { Button } from '@/components/ui/Button';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function SavedPageClient() {
  const { isAuthenticated } = useAuthStore();
  const { savedColleges, clearAll } = useSavedStore();
  const { compareList } = useCompareStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Please login to view saved colleges');
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  const handleClearAll = () => {
    clearAll();
    toast.success('All saved colleges removed');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111111] flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" /> Saved Colleges
          </h1>
          <p className="text-[#6b7280] text-sm mt-1">
            {savedColleges.length} college{savedColleges.length !== 1 ? 's' : ''} saved
          </p>
        </div>
        <div className="flex items-center gap-3">
          {compareList.length > 0 && (
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 h-8 px-3 text-sm font-medium rounded-xl bg-gray-50 text-[#111111] hover:bg-gray-100 transition-colors"
            >
              <GitCompare className="h-4 w-4" /> View Compare ({compareList.length})
            </Link>
          )}
          {savedColleges.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Trash2 className="h-4 w-4" />}
              onClick={handleClearAll}
            >
              Clear All
            </Button>
          )}
        </div>
      </div>
      {savedColleges.length === 0 ? (
        <EmptyState
          icon={<Heart className="h-8 w-8" />}
          title="No saved colleges yet"
          description="Browse colleges and click the heart icon to save them here for quick access."
          action={
            <Link
              href="/colleges"
              className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-xl bg-[#111111] text-white hover:bg-black transition-colors"
            >
              Explore Colleges
            </Link>
          }
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      )}
    </div>
  );
}
