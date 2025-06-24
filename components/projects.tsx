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

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-dark-900">
            <Navigation />
            <section className="pt-32 pb-20 bg-dark-900">
                <div className="max-w-7xl  px-4 sm:px-6 lg:px-20">
                    <div className="text-left mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-left text-white mb-2">
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #5c7f6c 60%, #fff 100%)' }}>Skills</span>
                        </h1>

                    </div>

                    {/* Project List - 3 per row, colored shadow */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col items-center gap-6 rounded-2xl p-4 md:p-6 shadow-lg border border-dark-700 bg-dark-800 ${shadowColors[idx % shadowColors.length]}`}
                            >
                                {/* Image/Preview at Top */}
                                <div className="w-full flex items-center justify-center">
                                    <div className="bg-white/5 rounded-2xl overflow-hidden shadow-md flex items-center justify-center w-full h-[160px] md:h-[180px]">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                </div>
                                {/* Details at Bottom */}
                                <div className="w-full flex flex-col justify-center">
                                    <div className="mb-2 flex items-center gap-3">
                                        <span className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full">
                                            {project.category}
                                        </span>
                                        <span className="text-gray-500 text-sm">{project.year}</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className={`px-2 py-1 text-xs rounded border border-dark-600 font-semibold ${techColors[tech] || 'bg-dark-700 text-gray-300'}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                                            title="Live Demo"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors duration-200"
                                            title="Source Code"
                                        >
                                            <Github className="h-5 w-5" />
                                        </a>
                                        <div className="flex items-center space-x-1 text-gray-500 text-sm ml-auto">
                                            <Code className="h-4 w-4" />
                                            <span>{project.tech.length} tech</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
} 