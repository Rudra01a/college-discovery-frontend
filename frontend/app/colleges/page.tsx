import type { Metadata } from 'next';
import CollegesListingContent from './CollegesListingContent'; export const metadata: Metadata = { title: 'Browse Colleges', description: 'Search, filter, and compare colleges across India. Filter by category, fees, rating, location and more.',
}; export default function CollegesPage() { return ( <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div className="mb-6"> <h1 className="text-2xl font-bold text-[#111111] mb-1"> Browse Colleges </h1> <p className="text-[#6b7280] text-sm"> Find the right college with powerful search and filter tools </p> </div> <CollegesListingContent /> </div> );
}
