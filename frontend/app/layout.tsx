import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { APP_NAME, APP_DESCRIPTION, APP_URL } from '@/lib/constants'; const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter',
}); export const metadata: Metadata = { title: { default: `${APP_NAME} — Find & Compare Colleges in India`, template: `%s | ${APP_NAME}`, }, description: APP_DESCRIPTION, keywords: ['college discovery', 'college comparison', 'IIT', 'IIM', 'MBBS', 'engineering colleges India', 'best colleges India'], authors: [{ name: 'CollegeDiscover' }], metadataBase: new URL(APP_URL), openGraph: { type: 'website', locale: 'en_IN', url: APP_URL, title: `${APP_NAME} — Find & Compare Colleges in India`, description: APP_DESCRIPTION, siteName: APP_NAME, }, twitter: { card: 'summary_large_image', title: `${APP_NAME} — Find & Compare Colleges in India`, description: APP_DESCRIPTION, }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, }, },
}; export default function RootLayout({ children,
}: Readonly<{ children: React.ReactNode;
}>) { return ( <html lang="en" suppressHydrationWarning className={inter.variable}> <body className="min-h-screen flex flex-col"> <Providers> <Navbar /> <main className="flex-1">{children}</main> <Footer /> </Providers> </body> </html> );
}
