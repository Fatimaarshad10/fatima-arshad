'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <section className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#000' }}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/teaching-1.jpg')" }}
                />
                {/* Color Overlay */}
                <div className="absolute inset-0 bg-black/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center">
                <div className="max-w-7xl  px-4 sm:px-6 lg:px-20">
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6"
                        >
                            <span className="inline-block px-4 py-2" style={{ backgroundColor: '#5c7f6c22', color: '#5c7f6c', border: '1px solid #5c7f6c55', borderRadius: '9999px', fontWeight: 500 }}>
                                Full Stack Developer & Trainer
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-4xl lg:text-7xl font-bold mb-6"
                        >
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #5c7f6c 60%, #fff 100%)' }}>
                                Fatima Arshad
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                        >
                            Passionate Full Stack Developer with 3+ years of experience in web and app development.
                            International hackathon participant and coding instructor helping others learn and grow.
                            Passionate Full Stack Developer with 3+ years of experience in web and app development.
                            International hackathon participant and coding instructor helping others learn and grow.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-left items-left mb-12"
                        >
                            <Link
                                href="/projects"
                                className="inline-flex items-center px-4 py-2 border-2 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                                style={{ borderColor: '#5c7f6c', color: '#5c7f6c' }}
                                onMouseOver={e => { e.currentTarget.style.backgroundColor = '#5c7f6c'; e.currentTarget.style.color = '#fff'; }}
                                onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#5c7f6c'; }}
                            >
                                View My Work
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero 