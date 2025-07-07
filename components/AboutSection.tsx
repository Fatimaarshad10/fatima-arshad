'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from "react";

const AboutSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    return (
        <section id="about" className="py-16 sm:py-24 bg-dark relative">
            <div className="px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold">
                        <span className="text-primary-500">About</span> Me
                    </h1>

                </motion.div>

                <div className="mt-8 flex flex-col lg:flex-row gap-8 items-center justify-center    ">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center order-2 lg:order-1"
                    >
                        <div className="relative w-full max-w-sm h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg">
                            <div className="absolute inset-0 z-0 rounded-xl" />
                            <video
                                ref={videoRef}
                                src="/assets/students.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                                onMouseEnter={() => videoRef.current?.pause()}
                                onMouseLeave={() => videoRef.current?.play()}
                            />
                            <div className="absolute inset-0 bg-black/50 rounded-xl pointer-events-none " />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative prose prose-invert prose-sm text-dark-600 lg:pl-8 p-4 backdrop-blur-sm z-10 text-justify">
                            <p>
                                My journey began with a passion for art and digital drawing, which soon evolved into a fascination with technology. At 13, I was creating digital sketches; today, I build scalable web applications.
                            </p>
                            <p>
                                Transitioning from art to programming was challenging, especially in male-dominated spaces. Through perseverance, I taught myself full-stack development and delivered real-world MERN projects.
                            </p>
                            <p>
                                This journey inspired me to become an educator. I have trained over 600 students, empowering beginners to find their path in tech. Teaching has strengthened my confidence, communication, and sense of purpose.
                            </p>
                            <p>
                                Now, I work as a full-stack developer, collaborate globally, and contribute to international hackathons. I am <span className="text-primary-500 font-bold">Fatima Arshad</span> — a creator, motivator, and passionate problem-solver on a mission to make an impact through technology.
                            </p>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection