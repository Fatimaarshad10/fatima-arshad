'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiDocker,
    SiPython, SiGitlab, SiOpenai, SiAmazon, SiWordpress
} from 'react-icons/si'

const skills = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
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
        <div
            className="flex flex-col items-center justify-center rounded-xl shadow-md p-6 transition-transform duration-200 hover:scale-105 group"
            style={{ backgroundColor: '#0000', border: '2px solid #5c7f6c' }}
        >
            <Icon className={`w-10 h-10 mb-3 ${skill.color} transition-colors duration-200 group-hover:text-[#5c7f6c]`} />
            <span className="text-base font-semibold text-gray-200 group-hover:text-[#5c7f6c] transition-colors duration-200">{skill.name}</span>
        </div>
    );
};

const AnimatedSkills = () => {
    return (
        <section className="w-full" style={{ backgroundColor: '#0000' }}>
            <div className="max-w-7xl px-4 sm:px-6 lg:px-20 mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-left text-white mb-2">
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #5c7f6c 60%, #fff 100%)' }}>Skills</span>
                </h1>
                <p className="text-lg text-gray-400 mb-10 text-left">Technologies I Use</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnimatedSkills;