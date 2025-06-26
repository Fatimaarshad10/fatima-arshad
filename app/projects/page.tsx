import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, Github, Calendar, Code } from 'lucide-react'

const techColors: Record<string, string> = {
    'React': 'bg-cyan-900 text-cyan-300',
    'Node.js': 'bg-green-900 text-green-300',
    'MongoDB': 'bg-green-800 text-green-200',
    'Stripe': 'bg-indigo-900 text-indigo-300',
    'Next.js': 'bg-gray-800 text-gray-200',
    'TypeScript': 'bg-blue-900 text-blue-300',
    'Socket.io': 'bg-gray-900 text-gray-300',
    'PostgreSQL': 'bg-blue-800 text-blue-200',
    'React Native': 'bg-cyan-800 text-cyan-200',
    'Firebase': 'bg-yellow-900 text-yellow-200',
    'Redux': 'bg-purple-900 text-purple-300',
    'Chart.js': 'bg-pink-900 text-pink-200',
    'Python': 'bg-yellow-800 text-yellow-300',
    'FastAPI': 'bg-green-900 text-green-200',
    'OpenAI': 'bg-teal-900 text-teal-200',
    'WebSocket': 'bg-blue-900 text-blue-200',
    'Tailwind CSS': 'bg-cyan-900 text-cyan-200',
    'Framer Motion': 'bg-pink-900 text-pink-200',
    'Vue.js': 'bg-green-900 text-green-200',
    'OpenWeather API': 'bg-blue-900 text-blue-200',
};

const shadowColors = [
    'shadow-cyan-500/30',
    'shadow-green-500/30',
    'shadow-blue-500/30',
    'shadow-pink-500/30',
    'shadow-yellow-500/30',
    'shadow-purple-500/30',
    'shadow-orange-500/30',
    'shadow-emerald-500/30',
];

const projects = [
    {
        name: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: '/api/placeholder/400/300',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        year: '2024',
        category: 'Full Stack'
    },
    {
        name: 'Task Management App',
        description: 'Collaborative task management with real-time updates and team features.',
        tech: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL'],
        image: '/api/placeholder/400/300',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        year: '2024',
        category: 'Web App'
    },
    {
        name: 'Mobile Fitness Tracker',
        description: 'Cross-platform app for tracking workouts, nutrition, and fitness goals.',
        tech: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
        image: '/api/placeholder/400/300',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        year: '2023',
        category: 'Mobile'
    },
    {
        name: 'AI Chat Application',
        description: 'Real-time chat application with AI-powered responses and sentiment analysis.',
        tech: ['Python', 'FastAPI', 'OpenAI', 'WebSocket'],
        image: '/api/placeholder/400/300',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        year: '2023',
        category: 'AI/ML'
    },
    {
        name: 'Portfolio Website',
        description: 'Modern portfolio website built with Next.js and Tailwind CSS.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        image: '/api/placeholder/400/300',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        year: '2024',
        category: 'Frontend'
    },
    {
        name: 'Weather Dashboard',
        description: 'Real-time weather dashboard with location-based forecasts and interactive maps.',
        tech: ['Vue.js', 'Node.js', 'OpenWeather API', 'Chart.js'],
        image: '/api/placeholder/400/300',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        year: '2023',
        category: 'Web App'
    }
]

import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
    return (
        <main className="bg-dark-900 text-dark-500">
            <div className="pt-24">
                <section className="py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-extrabold">
                                My <span className="text-primary-400">Projects</span>
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
                                A collection of my work, from full-stack applications to AI-powered tools.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    title={project.name}
                                    description={project.description}
                                    image={project.image}
                                    technologies={project.tech}
                                    liveUrl={project.liveUrl}
                                    githubUrl={project.githubUrl}
                                    featured={index === 0} // Example: make the first project featured
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
} 