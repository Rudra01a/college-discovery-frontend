import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { collegeService } from '@/backend/services/collegeService';
import { CollegeDetailClient } from './CollegeDetailClient'; interface Props { params: Promise<{ slug: string }>;
} export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; try { const { data } = await collegeService.getCollegeBySlug(slug); return { title: data.name, description: data.shortDescription, openGraph: { title: data.name, description: data.shortDescription, images: [{ url: data.coverImage, width: 1200, height: 630, alt: data.name }], }, }; } catch { return { title: 'College Not Found' }; }
} export async function generateStaticParams() { const { data } = await collegeService.getColleges({}); return data.map((college) => ({ slug: college.slug }));
} export default async function CollegeDetailPage({ params }: Props) { const { slug } = await params; let result; try { result = await collegeService.getCollegeBySlug(slug); } catch { notFound(); } return <CollegeDetailClient college={result.data} reviews={result.reviews} />;
}
