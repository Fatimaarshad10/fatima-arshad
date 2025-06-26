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
        <section id="experience" className="py-16 sm:py-24 bg-dark-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold">
                        Professional <span className="text-primary-400">Experience</span>
                    </h2>
                    <p className="mt-4 text-lg text-dark-600">My journey in the world of technology.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4 flex flex-col">
                        {experiences.map((exp, idx) => (
                            <button
                                key={exp.company}
                                onClick={() => setActive(idx)}
                                className={`text-left p-4 rounded-lg transition-all duration-300 focus:outline-none ${active === idx ? 'bg-dark-700 text-primary-400' : 'text-dark-600 hover:bg-dark-700/50 hover:text-dark-500'}`}
                            >
                                <span className="font-semibold">{exp.company}</span>
                            </button>
                        ))}
                    </div>

                    <div className="md:w-3/4">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-dark-800 rounded-xl p-8 shadow-lg border border-dark-700"
                        >
                            <h3 className="text-2xl font-bold text-dark-500 mb-1">
                                {experiences[active].role}
                            </h3>
                            <p className="text-primary-400 font-medium mb-2">@{experiences[active].company}</p>
                            <p className="text-dark-600 font-mono text-sm mb-4">{experiences[active].date}</p>
                            <ul className="space-y-3">
                                {experiences[active].highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-primary-500 mt-1 flex-shrink-0">
                                            <ArrowRight size={18} />
                                        </span>
                                        <span className="text-dark-600">{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
} 