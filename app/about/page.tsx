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

export default function AboutPage() {
    const timeline = [
        {
            year: "2024",
            title: "Senior Full Stack Developer",
            description: "Leading development teams and mentoring junior developers",
            company: "Tech Company"
        },
        {
            year: "2023",
            title: "International Hackathon Winner",
            description: "Won first place in a global coding competition",
            company: "Global Hackathon"
        },
        {
            year: "2022",
            title: "Started Teaching",
            description: "Began training students in web development",
            company: "Code Academy"
        },
        {
            year: "2021",
            title: "First Full Stack Project",
            description: "Built and deployed my first complete application",
            company: "Freelance"
        }
    ]

    const achievements = [
        { number: "3+", label: "Years Experience", icon: Calendar },
        { number: "50+", label: "Projects Completed", icon: Code },
        { number: "600+", label: "Students Trained", icon: Users },
        { number: "2+", label: "Hackathons Participated", icon: Award }
    ]

    const skills = [
        { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
        { category: "Backend", skills: ["Node.js", "Express", "Python", "Django", "FastAPI"] },
        { category: "Database", skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"] },
        { category: "DevOps", skills: ["AWS", "Docker", "CI/CD", "Git", "Linux"] }
    ]

    return (
        <main className="min-h-screen bg-dark-900">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            About <span className="gradient-text">Me</span>
                        </h1>

                    </motion.div>
                </div>
            </section>

            {/* Personal Story */}
            <section className="py-20 bg-dark-800">
                <div className="flex flex-col items-center mb-10">
                    <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-lg border-4 border-primary-500">
                        <Image
                            src="/assets/fatima_main.jpg"
                            alt="Fatima Arshad"
                            fill
                            className="object-cover"
                            sizes="192px"
                            priority
                        />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className=" items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">
                                My <span className="gradient-text">Journey</span>
                            </h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    I started my journey in web development with a simple curiosity about how websites work.
                                    What began as a hobby quickly turned into a passion that has shaped my career.
                                </p>
                                <p>
                                    Over the past 3+ years, I've worked on diverse projects ranging from e-commerce platforms
                                    to mobile applications, always pushing the boundaries of what's possible with modern technology.
                                </p>
                                <p>
                                    My experience in international hackathons has taught me the importance of rapid prototyping,
                                    teamwork, and thinking outside the box to solve complex problems.
                                </p>
                                <p>
                                    As a trainer, I've helped over 100 students learn web development, sharing not just technical
                                    skills but also the mindset needed to succeed in this fast-paced industry.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-dark-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            My <span className="gradient-text">Timeline</span>
                        </h2>
                        <p className="text-xl text-gray-400">
                            Key milestones in my professional journey
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-500/20"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                        <div className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300">
                                            <div className="text-primary-400 font-semibold mb-2">{item.year}</div>
                                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-400 mb-2">{item.description}</p>
                                            <div className="text-sm text-primary-300">{item.company}</div>
                                        </div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="relative z-10">
                                        <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900"></div>
                                    </div>

                                    <div className="w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Grid */}
            <section className="py-20 bg-dark-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Technical <span className="gradient-text">Skills</span>
                        </h2>
                        <p className="text-xl text-gray-400">
                            Technologies and tools I work with
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-dark-700 p-6 rounded-xl border border-dark-600"
                            >
                                <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
                                <div className="space-y-2">
                                    {skillGroup.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                            <span className="text-gray-300">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
} 