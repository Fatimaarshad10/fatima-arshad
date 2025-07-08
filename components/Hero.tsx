'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-dark-900 overflow-hidden pt-20">
            {/* Section-wide gradient overlay (below lines/blobs, above black) */}
            <div className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: "linear-gradient(135deg, #00af91 0%, #121212 100%)",
                    opacity: 0.5,
                }}
            />
            {/* Grid lines background (SVG) */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff55" strokeWidth="2" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            {/* Abstract blob shape (SVG) */}


            {/* Grid background overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full opacity-30" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(120,120,180,0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(120,120,180,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }} />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/80 to-dark-900" />
            </div>

            {/* Main content: two columns */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 gap-8 pt-8">
                {/* Left: Text */}
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-4"
                    >
                        <span className="inline-block bg-primary-500/10 text-primary-400 border border-primary-500/20 px-3 py-2 md:px-4 md:py-2 rounded-full font-medium text-sm md:text-base">
                            Full-Stack Developer & Corporate Trainer
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-white"
                    >
                        Fatima Arshad
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sm sm:text-base md:text-lg text-dark-400 mb-8 max-w-xl text-justify"
                    >
                        I'm a Full Stack Developer and Trainer with hands-on industry experience and a strong background in teaching. I've worked with various international clients on full-scale web and mobile development projects. So far, I've trained over 600 students, many of whom are now thriving in the tech industry.

                        My passion for learning fuels my commitment to teaching and building high-quality digital solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="/assets/Fatima_Arshad.pdf"
                            download
                            className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-primary-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-600 transform hover:scale-105 shadow-lg text-sm md:text-base"
                        >
                            <span className="mr-2">Download CV</span>
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-dark-800 text-primary-400 font-semibold rounded-lg transition-all duration-300 hover:bg-dark-700 hover:text-white transform hover:scale-105 border border-primary-500/30 text-sm md:text-base"
                        >
                            Contact Now
                        </Link>
                    </motion.div>
                </div>

                {/* Right: Image with accent shape and badge */}
                <div className="relative flex-1 flex justify-center items-center mt-8 md:mt-0">
                    {/* Accent shape behind image */}
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
                        {/* Top left accent line */}
                        <div className="absolute left-0 top-[-12px] sm:top-[-16px] h-1 sm:h-1.5 w-16 sm:w-20 bg-primary-400 rounded-full"></div>

                        <div className="absolute left-[-12px] sm:left-[-16px] top-0 h-16 sm:h-20 w-1 sm:w-1.5 bg-primary-400 rounded-full"></div>
                        {/* Bottom right accent line */}
                        <div className="absolute right-[-12px] sm:right-[-16px] bottom-0 h-16 sm:h-20 w-1 sm:w-1.5 bg-primary-400 rounded-full"></div>
                        <div className="absolute right-0 bottom-[-12px] sm:bottom-[-16px] h-1 sm:h-1.5 w-16 sm:w-20 bg-primary-400 rounded-full"></div>

                        {/* Main image */}
                        <div className="w-full h-full rounded overflow-hidden shadow-xl">
                            <Image
                                src="/assets/fatima_main.jpg"
                                alt="Fatima Arshad"
                                fill
                                className="object-cover rounded"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero 