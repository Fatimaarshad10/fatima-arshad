import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Portfolio - Full Stack Developer & Trainer',
    description: 'Professional portfolio of a Full Stack Developer with 3+ years of experience in web and app development, international hackathon participant, and coding instructor.',
    keywords: 'Full Stack Developer, Web Development, App Development, React, Next.js, Node.js, Trainer, Portfolio',
    authors: [{ name: 'Fatima Arshad' }],
    creator: 'Fatima Arshad',
    openGraph: {
        title: 'Portfolio - Full Stack Developer & Trainer',
        description: 'Professional portfolio showcasing web and app development expertise',
        type: 'website',
    },
}

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-dark-900 text-dark-600`}>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}