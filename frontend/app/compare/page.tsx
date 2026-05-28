import type { Metadata } from 'next';
import { ComparePageClient } from './ComparePageClient'; export const metadata: Metadata = { title: 'Compare Colleges', description: 'Side-by-side comparison of colleges — fees, ratings, placements, and more.',
}; export default function ComparePage() { return <ComparePageClient />;
}
