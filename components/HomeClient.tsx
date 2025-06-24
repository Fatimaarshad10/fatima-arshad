'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import AboutPage from '@/app/about/page'
import ProjectsPage from '@/app/projects/page'

export default function HomeClient() {

    return (
        <main className="min-h-screen">
            <Navigation />
            <section id="home">
                <Hero />
                <AboutPage/>
                <ProjectsPage/>
            </section>
            <Footer />
        </main>
    )
} 