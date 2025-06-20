import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Portfolio - Full Stack Developer & Trainer',
    description: 'Professional portfolio of a Full Stack Developer with 3+ years of experience in web and app development, international hackathon participant, and coding instructor.',
    keywords: 'Full Stack Developer, Web Development, App Development, React, Next.js, Node.js, Trainer, Portfolio',
    authors: [{ name: 'Your Name' }],
    creator: 'Your Name',
    openGraph: {
        title: 'Portfolio - Full Stack Developer & Trainer',
        description: 'Professional portfolio showcasing web and app development expertise',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-dark-900 text-white`}>
                {children}
            </body>
        </html>
    )
} 