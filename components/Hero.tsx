'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/teaching-3.jpeg"
                    alt="Background"
                    fill
                    className="object-cover opacity-10"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900/90 via-dark-800/90 to-dark-900/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                       

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6"
                        >
                            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium border border-primary-500/20">
                                Full Stack Developer & Trainer
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            <span className="bg-gradient-to-r from-primary-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Fatima Arshad
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                        >
                            Passionate Full Stack Developer with 3+ years of experience in web and app development.
                            International hackathon participant and coding instructor helping others learn and grow.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                        >
                            <Link
                                href="/projects"
                                className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                            >
                                View My Work
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex justify-center space-x-6"
                        >
                            <a
                                href="https://github.com/shad10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-dark-700 hover:bg-dark-600 rounded-lg transition-all duration-200 hover:scale-110 text-gray-300 hover:text-white"
                            >
                                <Github className="h-6 w-6" />
                            </a>
                            <a
                                href="https://linkedin.com/in/2a184/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-dark-700 hover:bg-dark-600 rounded-lg transition-all duration-200 hover:scale-110 text-gray-300 hover:text-white"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href="mailto:your@email.com"
                                className="p-3 bg-dark-700 hover:bg-dark-600 rounded-lg transition-all duration-200 hover:scale-110 text-gray-300 hover:text-white"
                            >
                                <Mail className="h-6 w-6" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero 