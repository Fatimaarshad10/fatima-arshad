'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
    Award,
    Users,
    Code,
    BookOpen,
    Globe,
    Zap,
    Calendar,
    MapPin,
    Mail,
} from 'lucide-react'
import AnimatedSkills from '@/components/AnimatedSkills'
import ExperienceSection from '@/components/ExperienceSection'

export default function AboutPage() {


    const skills = [
        { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
        { category: "Backend", skills: ["Node.js", "Express", "Python", "Django", "FastAPI"] },
        { category: "Database", skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"] },
        { category: "DevOps", skills: ["AWS", "Docker", "CI/CD", "Git", "Linux"] }
    ]

    return (
        <main className="min-h-screen" style={{ backgroundColor: '#000' }}>

            {/* Hero Section */}
            <section className='pt-32' style={{ backgroundColor: '#000' }}>
                <div className="max-w-7xl  px-4 sm:px-6 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #5c7f6c 60%, #fff 100%)' }}>About</span> Me
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Personal Story */}
            <section>
                <div className="max-w-7xl  px-4 sm:px-6 lg:px-20">
                    <div className="flex flex-col md:flex-row items-center md:items-stretch mb-10 gap-8 border-b pb-10" style={{ borderColor: '#5c7f6c' }}>
                        {/* Left: Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/2 flex items-center justify-center text-center md:text-left"
                        >
                            <div className="space-y-4 text-gray-300 max-w-2xl">
                                <p>
                                    I started my journey in web development with a simple curiosity about how websites work.
                                    What began as a hobby quickly turned into a passion that has shaped my career.
                                    Over the past 3+ years, I've worked on diverse projects ranging from e-commerce platforms
                                    to mobile applications, always pushing the boundaries of what's possible with modern technology.
                                    My experience in international hackathons has taught me the importance of rapid prototyping,
                                    teamwork, and thinking outside the box to solve complex problems.
                                    As a trainer, I've helped over 600 students learn web development, sharing not just technical
                                    skills but also the mindset needed to succeed in this fast-paced industry.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/2 flex items-center justify-center"
                        >
                            <div className="relative w-48 h-48 md:w-80 md:h-80 flex items-center justify-center">
                                {/* Hand-drawn border SVG overlay */}
                                <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none select-none z-10">
                                    <rect x="8" y="8" width="304" height="304" rx="24" stroke="#fff" strokeWidth="4" strokeDasharray="16 12 8 10 12 18" strokeLinecap="round" />
                                </svg>
                                {/* Profile image */}
                                <div className="relative w-full h-full overflow-hidden shadow-lg rounded-xl z-20">
                                    <Image
                                        src="/assets/fatima_main.jpg"
                                        alt="Fatima Arshad"
                                        fill
                                        className="object-cover"
                                        sizes="320px"
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Bio Text */}

                    </div>
                </div>
            </section>
            <ExperienceSection />
            <AnimatedSkills />
        </main>
    )
} 