'use client'; import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CollegeCard } from '@/components/college/CollegeCard';
import { CollegeCardSkeleton } from '@/components/feedback/Skeleton';
import { ErrorState } from '@/components/feedback/ErrorState';
import { useFeaturedColleges } from '@/features/colleges/useColleges'; export function FeaturedCollegesSection() { const { data: colleges, isLoading, error, refetch } = useFeaturedColleges(); return ( <section className="py-14 bg-gray-50 "> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex items-end justify-between mb-8"> <div> <h2 className="text-2xl font-bold text-[#111111] mb-1"> Featured Colleges </h2> <p className="text-[#6b7280] text-sm"> Top-ranked institutions hand-picked for you </p> </div> <Link href="/colleges" className="inline-flex items-center gap-2 h-8 px-3 text-sm font-medium rounded-xl text-[#444444] hover:bg-gray-100 :bg-slate-800 transition-colors" > View all <ArrowRight className="h-4 w-4" /> </Link> </div> {error ? ( <ErrorState onRetry={refetch} /> ) : ( <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {isLoading ? Array.from({ length: 6 }).map((_, i) => <CollegeCardSkeleton key={i} />) : colleges?.map((college) => ( <CollegeCard key={college.id} college={college} /> ))} </div> )} </div> </section> );
}
