'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const volunteerWork = [
    {
        organization: 'Code in Place',
        role: 'Section Leader (Part-time)',
        date: 'Apr 2025 – Jun 2025 · 3 mos',
        location: 'United States · Remote',
        highlights: [
            'Volunteered as a Section Leader, teaching international students problem-solving, Karel, and Python programming.',
            'Engaged students with interactive activities and supported their learning journey.'
        ],
        certificateLink: 'https://digitalcredential.stanford.edu/check/6A90631386ACD84D19D2AD9D6292CEBF9F14C93C2AA1124BD96A5B584B47E201RWVxR1l6Zkx0YXVNaUNwVUYxdlppTjBlUEhZcjJkd3daS1Rncm53TWZMOW1QOUxv'
    },
    {
        organization: 'iCodeGuru',
        role: 'Instructor (Part-time)',
        date: 'May 2024 – Jul 2024 · 3 mos',
        location: 'Silicon Valley, California, United States · Remote',
        highlights: [
            'Trained students in Python fundamentals: variables, data types, control structures, functions, and basic data structures.',
            'Focused on instructor development and Python programming skills.'
        ],
        projectLink: 'https://github.com/Fatimaarshad10/PythonTeachingVolunteers'
    },

];

const certificates = [
    {
        title: 'First Hackathon: Emma (AI Therapist App)',
        issuer: 'lablab.ai GPT-4o Hackathon',
        date: 'June 2024',
        links: [
            { label: 'GitHub', url: 'https://github.com/Fatimaarshad10/dr_emma' },
            { label: 'Hackathon Event', url: 'https://lablab.ai/event/hello-gpt-4o-ai-challenge/mental-health-gpt4o/emma-mental-health' },
            { label: 'Profile', url: 'https://lablab.ai/u/@fatimaarshad10/clxuet54m001z10o5c2rxh7fe' }
        ],
        highlights: [
            'Emma is a trusted mental health support companion: using AI-powered expertise and evidence-based techniques like CBT and DBT to tailor therapy sessions to users’ specific contexts and personality preferences.',
            'Developed for a lablab.ai hackathon. My role: UI/UX Design, Content, and Development.',
            'Emma uses GPT-4o, voice-to-text, and text-to-speech APIs to provide 24/7 personalized mental health support.',
            'Value: Enhances awareness and proactive management of mental well-being by tailoring resources to individual needs.'
        ]
    },
    {
        title: 'Social Media Post Optimizer',
        issuer: 'lablab.ai Hackathon',
        date: '2024',
        links: [
            { label: 'Project', url: 'https://lablab.ai/u/@fatimaarshad10/cm0fgqwff0041e7ih5agnic7f' },
            { label: 'GitHub', url: 'https://github.com/zulfiqaralimir/AI-Powered-SocialMediaPostOptimizer_LLM' }
        ],
        highlights: [
            'The Social Media Post Optimizer is a powerful tool designed to enhance your social media presence by optimizing both text and images.',
            'Input your post and image to receive AI-generated suggestions for engagement, including keywords, tags, and content enhancements.',
            'The app analyzes image quality (brightness, contrast, sharpness, color), predicts likes/comments/reposts, and provides sentiment/readability analysis.',
            'Visualize engagement with a bar chart and get actionable tips to optimize your social media strategy. User-friendly interface for easy content enhancement.'
        ]
    },
    {
        title: 'Code in Place: Certificate of Completion',
        issuer: 'Stanford University',
        date: 'Apr 2024 – Jun 2024',
        links: [
            { label: 'View Certificate', url: 'https://codeinplace.stanford.edu/cip4/certificate/kruxyj' }
        ],
        highlights: [
            "Certificate of Completion for learning Python in Stanford University's Code in Place program."
        ]
    },
    {
        title: 'CS50x Puzzle Day 2025',
        issuer: 'CS50',
        date: 'Apr 2025',
        links: [
            { label: 'View Certificate', url: 'https://certificates.cs50.io/474376aa-e757-4913-8b22-dfaf4126c212.pdf?size=letter' }
        ],
        highlights: [
            'Certificate of participation in CS50x Puzzle Day 2025.'
        ]
    },
    {
        title: 'React (Basic)',
        issuer: 'HackerRank',
        date: 'Feb 2023',
        links: [
            { label: 'View Certificate', url: 'https://www.hackerrank.com/certificates/639938e47ff9' }
        ],
        highlights: [
            'Credential ID: https://www.hackerrank.com/certificates/639938e47ff9'
        ]
    }
];

const VolunteerCertificatesSection = () => {
    const [activeTab, setActiveTab] = useState<'volunteer' | 'certificates'>('volunteer');
    const [openVolunteer, setOpenVolunteer] = useState<number | null>(0);
    const [openCert, setOpenCert] = useState<number | null>(0);

    return (
        <section id="volunteer-certificates" className="py-16 sm:py-24 bg-dark-800/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold">
                        Volunteer Work & <span className="text-primary-400">Certificates</span>
                    </h2>
                    <p className="mt-4 text-lg text-dark-600">Giving back and continuous learning.</p>
                </div>
                {/* Tabs */}
                <div className="flex justify-center mb-8 gap-4">
                    <button
                        className={`px-6 py-2 rounded-t-lg font-semibold transition-colors duration-200 focus:outline-none ${activeTab === 'volunteer' ? 'bg-primary-400 text-white' : 'bg-dark-700 text-dark-400 hover:bg-dark-600'}`}
                        onClick={() => setActiveTab('volunteer')}
                    >
                        Volunteer Experience
                    </button>
                    <button
                        className={`px-6 py-2 rounded-t-lg font-semibold transition-colors duration-200 focus:outline-none ${activeTab === 'certificates' ? 'bg-primary-400 text-white' : 'bg-dark-700 text-dark-400 hover:bg-dark-600'}`}
                        onClick={() => setActiveTab('certificates')}
                    >
                        Certificates
                    </button>
                </div>
                {/* Tab Content */}
                <div className="bg-dark-900 rounded-b-xl shadow-lg p-6">
                    {activeTab === 'volunteer' && (
                        <div className="w-full max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold text-primary-400 mb-6 text-center">Volunteer Work</h3>
                            <div className="relative border-l-2 border-primary-400 pl-4 mx-auto" style={{ maxWidth: '100%' }}>
                                {volunteerWork.map((item, idx) => (
                                    <div key={idx} className="mb-4">
                                        <div className="flex items-center cursor-pointer" onClick={() => setOpenVolunteer(openVolunteer === idx ? null : idx)}>
                                            <div className="w-4 h-4 bg-primary-400 rounded-full mr-4 border-2 border-dark-800 z-10" />
                                            <div className="flex-1">
                                                <span className="font-semibold text-dark-500">{item.role}</span> @ <span className="text-primary-400">{item.organization}</span>
                                                <span className="block text-dark-600 font-mono text-xs">{item.date}</span>
                                            </div>
                                            <span className="ml-2 text-primary-400">
                                                {openVolunteer === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </span>
                                        </div>
                                        {openVolunteer === idx && (
                                            <motion.ul
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-2 ml-8 space-y-2"
                                            >
                                                {item.certificateLink && (
                                                    <li className="mb-2">
                                                        <a href={item.certificateLink} target="_blank" rel="noopener noreferrer" className="text-primary-400 underline hover:text-primary-300 transition-colors text-sm font-semibold">
                                                            View Certificate
                                                        </a>
                                                    </li>
                                                )}
                                                {item.projectLink && (
                                                    <li className="mb-2">
                                                        <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className="text-primary-400 underline hover:text-primary-300 transition-colors text-sm font-semibold">
                                                            View Project
                                                        </a>
                                                    </li>
                                                )}
                                                {item.highlights.map((h, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-primary-500 mt-1 flex-shrink-0"><ArrowRight size={16} /></span>
                                                        <span className="text-dark-600">{h}</span>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === 'certificates' && (
                        <div className="w-full max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold text-primary-400 mb-6 text-center">Certificates</h3>
                            <div className="relative border-l-2 border-primary-400 pl-4 mx-auto" style={{ maxWidth: '100%' }}>
                                {certificates.map((cert, idx) => (
                                    <div key={idx} className="mb-4">
                                        <div className="flex items-center cursor-pointer" onClick={() => setOpenCert(openCert === idx ? null : idx)}>
                                            <div className="w-4 h-4 bg-primary-400 rounded-full mr-4 border-2 border-dark-800 z-10" />
                                            <div className="flex-1">
                                                <span className="font-semibold text-dark-500">{cert.title}</span>
                                                <span className="block text-dark-600 font-mono text-xs">{cert.issuer} &mdash; {cert.date}</span>
                                            </div>
                                            <span className="ml-2 text-primary-400">
                                                {openCert === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </span>
                                        </div>
                                        {openCert === idx && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-2 ml-8"
                                            >
                                                {cert.links && Array.isArray(cert.links) && (
                                                    <div className="mb-2 flex flex-wrap gap-3">
                                                        {cert.links.map((link, i) => (
                                                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary-400 underline hover:text-primary-300 transition-colors text-sm font-semibold">
                                                                {link.label}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                                <ul className="space-y-2 mt-2">
                                                    {cert.highlights && cert.highlights.map((h, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <span className="text-primary-500 mt-1 flex-shrink-0"><ArrowRight size={16} /></span>
                                                            <span className="text-dark-600">{h}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VolunteerCertificatesSection; 