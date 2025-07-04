'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiDocker,
    SiPython, SiGitlab, SiOpenai, SiAmazon, SiWordpress
} from 'react-icons/si'

const skills = [
    { name: "React", icon: SiReact, color: "text-cyan-400 " },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-200" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    { name: "Python", icon: SiPython, color: "text-yellow-500" },
    { name: "GitLab", icon: SiGitlab, color: "text-orange-500" },
    { name: "OpenAI", icon: SiOpenai, color: "text-teal-400" },
    { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
    { name: "WordPress", icon: SiWordpress, color: "text-blue-400" },
];

const SkillCard = ({ skill }: { skill: any }) => {
    const Icon = skill.icon;
    return (
        <motion.div
            className="bg-dark-800 border border-dark-700 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10"
            whileHover={{ y: -5 }}
        >
            <Icon className={`w-12 h-12 ${skill.color}`} />
            <span className="font-semibold text-dark-500">{skill.name}</span>
        </motion.div>
    );
};

const AnimatedSkills = () => {
    return (
        <section className="py-16 sm:py-24 bg-dark-300 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold">
                        My <span className="text-primary-400">Toolkit</span>
                    </h2>
                    <p className="mt-4 text-lg text-dark-600">The technologies I use to build modern web experiences.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <SkillCard skill={skill} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnimatedSkills;