import type { Metadata } from 'next';
import { SavedPageClient } from './SavedPageClient'; export const metadata: Metadata = { title: 'Saved Colleges', description: 'View and manage your saved colleges. Compare or remove colleges from your saved list.',
}; export default function SavedPage() { return <SavedPageClient />;
}
