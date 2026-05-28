import type { Metadata } from 'next';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { CategoryBrowser } from './components/CategoryBrowser';
import { FeaturedCollegesSection } from './components/FeaturedCollegesSection';
import { TrendingSection } from './components/TrendingSection'; export const metadata: Metadata = { title: 'Find & Compare Colleges in India', description: 'Discover and compare the best engineering, medical, MBA, law, and design colleges in India. Search by location, fees, ratings, and more.',
}; export default function HomePage() { return ( <div className="flex flex-col"> <HeroSection /> <StatsSection /> <CategoryBrowser /> <FeaturedCollegesSection /> <TrendingSection /> </div> );
}
