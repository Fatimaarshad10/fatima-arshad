'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'
import { motion } from 'framer-motion'
import {
    Code,
    Smartphone,
    Globe,
    Users,
    Award,
    Zap,
    Database
} from 'lucide-react'
import { SiReact, SiNodedotjs } from 'react-icons/si'

export default function HomeClient() {
    // Sample project data
    const featuredProjects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
            image: "/api/placeholder/400/300",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            featured: true
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: "/api/placeholder/400/300",
            technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com"
        },
        {
            title: "Mobile Fitness Tracker",
            description: "Cross-platform mobile app for tracking workouts, nutrition, and fitness goals with data visualization and social features.",
            image: "/api/placeholder/400/300",
            technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com"
        }
    ]

    // Sample blog data
    const recentBlogs = [
        {
            title: "Building Scalable React Applications",
            excerpt: "Learn the best practices for building large-scale React applications with proper state management and performance optimization.",
            image: "/api/placeholder/400/300",
            category: "React",
            date: "Dec 15, 2024",
            readTime: "8 min read",
            slug: "building-scalable-react-applications",
            featured: true
        },
        {
            title: "Next.js 14: What's New and Exciting",
            excerpt: "Explore the latest features in Next.js 14 including the new app router, server components, and improved performance.",
            image: "/api/placeholder/400/300",
            category: "Next.js",
            date: "Dec 10, 2024",
            readTime: "6 min read",
            slug: "nextjs-14-whats-new"
        },
        {
            title: "Mastering TypeScript for Better Code",
            excerpt: "A comprehensive guide to using TypeScript effectively in your projects for better type safety and developer experience.",
            image: "/api/placeholder/400/300",
            category: "TypeScript",
            date: "Dec 5, 2024",
            readTime: "10 min read",
            slug: "mastering-typescript"
        }
    ]

    const skills = [
        { name: "Frontend Development", icon: SiReact, description: "React, Next.js, TypeScript, Tailwind CSS" },
        { name: "Backend Development", icon: SiNodedotjs, description: "Node.js, Express, Python, Django" },
        { name: "Database & Cloud", icon: Database, description: "MongoDB, PostgreSQL, AWS, Firebase" },
    ]

    const stats = [
        { number: "3+", label: "Years Experience", icon: Award },
        { number: "50+", label: "Projects Completed", icon: Code },
        { number: "600+", label: "Students Trained", icon: Users },
        { number: "2+", label: "Hackathons Participated", icon: Zap },
    ]

    return (
        <main className="min-h-screen bg-dark-900">
            <Navigation />
            <Hero />

            {/* Skills Section */}
            <section className="py-20 bg-dark-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Skills & <span className="gradient-text">Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Specialized in modern web technologies and mobile development with a focus on creating scalable, user-friendly applications.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-dark-700 p-6 rounded-xl border border-dark-600 hover:border-primary-500/50 transition-all duration-300 group"
                            >
                                <div className="p-3 bg-primary-500/10 rounded-lg w-fit mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                                    <skill.icon className="h-8 w-8 text-primary-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                                <p className="text-gray-400">{skill.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-dark-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="p-4 bg-primary-500/10 rounded-full w-fit mx-auto mb-4">
                                    <stat.icon className="h-8 w-8 text-primary-400" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 bg-dark-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            A showcase of my recent work, demonstrating expertise in full-stack development, mobile apps, and modern web technologies.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <a
                            href="/projects"
                            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                        >
                            View All Projects
                            <Globe className="ml-2 h-5 w-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Recent Blog Posts */}
            <section className="py-20 bg-dark-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Latest <span className="gradient-text">Blog Posts</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Sharing insights about web development, best practices, and the latest technologies in the industry.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentBlogs.map((blog, index) => (
                            <BlogCard key={index} {...blog} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <a
                            href="/blog"
                            className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                        >
                            Read All Posts
                            <Code className="ml-2 h-5 w-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
} 