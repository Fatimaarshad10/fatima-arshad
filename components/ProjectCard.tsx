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
            className={`group relative bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300 ${featured ? 'ring-2 ring-primary-500/20' : ''
                }`}
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200 text-white"
                        >
                            <ExternalLink className="h-5 w-5" />
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors duration-200 text-white"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                {featured && (
                    <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full mb-3">
                        Featured Project
                    </span>
                )}

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                    {title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-dark-700 text-gray-300 text-xs rounded-full border border-dark-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* View Project Button */}
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                        {featured ? 'Featured Project' : 'View Details'}
                    </span>
                    <Eye className="h-4 w-4 text-gray-500 group-hover:text-primary-400 transition-colors duration-200" />
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard 