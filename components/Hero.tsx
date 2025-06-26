'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-dark-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/assets/fatima_main.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/80 to-dark-900" />
            </div>

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4"
                >
                    <span className="inline-block bg-primary-500/10 text-primary-400 border border-primary-500/20 px-4 py-2 rounded-full font-medium">
                        Full-Stack Developer & Corporate Trainer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-extrabold mb-4 text-dark-500"
                >
                    Fatima Arshad
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-dark-600 mb-8 max-w-3xl mx-auto"
                >
                    I build high-performance web applications and empower teams with the latest technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/projects"
                        className="group inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-dark-900 font-semibold rounded-lg transition-all duration-300 hover:bg-primary-600 transform hover:scale-105"
                    >
                        Explore My Work
                        <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center px-6 py-3 bg-dark-800 text-dark-500 font-semibold rounded-lg transition-all duration-300 hover:bg-dark-700 hover:text-primary-400 transform hover:scale-105"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero 