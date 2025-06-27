'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutSection = () => {
    return (
        <section id="about" className="py-16 sm:py-24 bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold">
                        <span className="text-primary-500">About</span> Me
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
                        A passionate developer and educator on a mission to build exceptional digital experiences.
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="prose prose-invert prose-lg text-dark-600"
                    >
                        <p>
                            My journey into web development began with a simple curiosity about how websites work. This curiosity quickly blossomed into a passion that has driven my career for the past three years.
                        </p>
                        <p>
                            I've had the privilege of working on a wide range of projects, from e-commerce platforms to mobile apps, always striving to push the boundaries of what's possible with modern technology. My participation in international hackathons has honed my skills in rapid prototyping, teamwork, and creative problem-solving.
                        </p>
                        <p>
                            As a dedicated trainer, I've empowered over 600 students to master web development, sharing not only technical expertise but also the mindset required to thrive in this dynamic industry.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-80 h-80">
                            <Image
                                src="/assets/fatima_main.jpg"
                                alt="Fatima Arshad"
                                width={320}
                                height={320}
                                className="relative  object-cover shadow-2xl border-4"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection