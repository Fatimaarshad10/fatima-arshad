'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const experiences = [
    {
        company: 'Cybergen',
        role: 'MERN Stack Developer',
        date: 'Sep 2024 – June 2025',
        highlights: [
            'Leading development teams and mentoring junior developers.'
        ]
    },
    {
        company: 'Global Hackathon',
        role: 'International Hackathon Winner',
        date: '2024',
        highlights: [
            'Won first place in a global coding competition.'
        ]
    },
    {
        company: 'Saylani Institute SMIT - Faisalabad',
        role: 'Full Stack Developer Instructor',
        date: 'May 2023 – Present',
        highlights: [
            'Trained over 600 students in Web Development and Web Designing.'
        ]
    },
    {
        company: 'Naxtech',
        role: 'Node.js Backend Developer',
        date: 'Aug 2023 – Feb 2024',
        highlights: [
            'Built and deployed complete applications.'
        ]
    },
];

export default function ExperienceSection() {
    const [active, setActive] = useState(0);

    return (
        <section id="experience" className="py-20" style={{ backgroundColor: '#000' }}>
            <div className="max-w-7xl px-4 sm:px-6 lg:px-20 mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-left text-white mb-10">
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #5c7f6c 60%, #fff 100%)' }}>Experience</span>
                </h1>
            </div>
            <div className="max-w-7xl  px-4 sm:px-6 lg:px-20 flex flex-col md:flex-row gap-8">
                {/* Left: Companies/roles */}
                <div className="md:w-1/4 flex flex-col relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#5c7f6c33', zIndex: 0 }} />
                    {experiences.map((exp, idx) => (
                        <button
                            key={exp.company}
                            onClick={() => setActive(idx)}
                            className={`text-left px-6 py-2  text-base md:text-lg border-l-4 transition-all duration-200 focus:outline-none relative z-10 ${active === idx
                                ? 'font-semibold' : ''}`}
                            style={active === idx
                                ? { borderColor: '#5c7f6c', color: '#5c7f6c', background: '#0000' }
                                : { borderColor: 'transparent', color: '#aaa', background: 'transparent' }}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>

                {/* Right: Details */}
                <div className="md:w-3/4">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-xl p-8 shadow-lg min-h-[180px] flex flex-col justify-center"
                        style={{ border: '2px solid #5c7f6c', background: '#0000' }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {experiences[active].role} <span className="text-primary-400">@{experiences[active].company}</span>
                        </h3>
                        <div className="text-gray-400 font-mono mb-4 text-base">{experiences[active].date}</div>
                        <ul className="space-y-3">
                            {experiences[active].highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2 text-lg text-gray-300">
                                    <span className="text-primary-400 mt-1"><ArrowRight size={18} /></span>
                                    <span>{h}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 