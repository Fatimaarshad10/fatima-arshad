import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import AnimatedSkills from '@/components/AnimatedSkills'
import ProjectsSection from '@/components/ProjectsSection'
import { getSortedPostsData } from '@/lib/posts'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Page() {
    const allPosts = getSortedPostsData()
    const recentPosts = allPosts.slice(0, 3)

    return (
        <>
            <Hero />
            <AboutSection />
            <ExperienceSection />
            <AnimatedSkills />
            <ProjectsSection />

            <section className="py-20 md:py-32 bg-dark-800">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-500">
                            Recent Insights
                        </h2>
                        <Link
                            href="/blog"
                            className="group inline-flex items-center text-primary-500 hover:text-primary-400 transition-colors"
                        >
                            <span>View All Posts</span>
                            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentPosts.map(post => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}