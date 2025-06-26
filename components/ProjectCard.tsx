'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    featured?: boolean
}

const ProjectCard = ({
    title,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
    featured = false
}: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative flex flex-col bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
        >
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                {featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-medium rounded-full border border-primary-500/30">
                        Featured
                    </span>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-dark-500 mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-dark-600 mb-4 line-clamp-3 flex-grow">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-dark-700 text-dark-600 text-xs rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex items-center justify-end space-x-2">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-dark-600 hover:text-primary-400 transition-colors duration-300"
                            title="View on GitHub"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-dark-600 hover:text-primary-400 transition-colors duration-300"
                            title="View Live"
                        >
                            <ExternalLink className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard 