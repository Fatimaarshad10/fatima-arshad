import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, Github, Calendar, Code } from 'lucide-react'

const projects = [
    {
        name: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        year: '2024',
        category: 'Full Stack'
    },
    {
        name: 'Task Management App',
        description: 'Collaborative task management with real-time updates and team features.',
        tech: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        year: '2024',
        category: 'Web App'
    },
    {
        name: 'Mobile Fitness Tracker',
        description: 'Cross-platform app for tracking workouts, nutrition, and fitness goals.',
        tech: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        year: '2023',
        category: 'Mobile'
    },
    {
        name: 'AI Chat Application',
        description: 'Real-time chat application with AI-powered responses and sentiment analysis.',
        tech: ['Python', 'FastAPI', 'OpenAI', 'WebSocket'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        year: '2023',
        category: 'AI/ML'
    },
    {
        name: 'Portfolio Website',
        description: 'Modern portfolio website built with Next.js and Tailwind CSS.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        year: '2024',
        category: 'Frontend'
    },
    {
        name: 'Weather Dashboard',
        description: 'Real-time weather dashboard with location-based forecasts and interactive maps.',
        tech: ['Vue.js', 'Node.js', 'OpenWeather API', 'Chart.js'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        year: '2023',
        category: 'Web App'
    }
]

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-dark-900">
            <Navigation />
            <section className="pt-32 pb-20 bg-dark-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            My <span className="gradient-text">Projects</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A collection of my work showcasing different technologies and solutions. Each project represents a unique challenge and learning experience.
                        </p>
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group relative">
                                {/* Project Card */}
                                <div className="bg-dark-800 rounded-xl border border-dark-700 p-6 hover:border-primary-500/50 transition-all duration-300 h-full flex flex-col">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <span className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full">
                                                    {project.category}
                                                </span>
                                                <span className="text-gray-500 text-sm">{project.year}</span>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-200">
                                                {project.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded border border-dark-600"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-dark-700">
                                        <div className="flex space-x-3">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                                                title="Live Demo"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                                title="Source Code"
                                            >
                                                <Github className="h-4 w-4" />
                                            </a>
                                        </div>
                                        <div className="flex items-center space-x-1 text-gray-500 text-sm">
                                            <Code className="h-3 w-3" />
                                            <span>{project.tech.length} tech</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <Footer />
        </main>
    )
} 