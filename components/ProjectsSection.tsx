'use client'

import ProjectCard from '@/components/ProjectCard'

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

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-16 sm:py-24 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold">
                        My <span className="text-primary-500">Projects</span>
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
                            featured={index === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection