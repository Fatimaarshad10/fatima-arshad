'use client'

import ProjectCard from '@/components/ProjectCard'

const projects = [
 {
        name: 'Molar App',
        description: 'Real-time weather dashboard with location-based forecasts and interactive maps.',
        tech: ['Vue.js', 'Node.js', 'OpenWeather API', 'Chart.js'],
        image: "/assets/molar.png",
        liveUrl: '',
        year: '2025',
        category: 'frontend'
    },

{
        name: 'Pine Straw University',
        description: 'Modern portfolio website built with Next.js and Tailwind CSS.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        image: "/assets/pinestraw.png",
        liveUrl: 'https://pinestrawuniversity.com/',
        year: '2024',
        category: 'Frontend'
    },
    {
        name: '321Vets',
        description: 'Real-time chat application with AI-powered responses and sentiment analysis.',
        tech: ['Python', 'FastAPI', 'OpenAI', 'WebSocket'],
        image: "/assets/321.png",
        liveUrl: 'https://321vets.com/',
        year: '2023',
        category: 'AI/ML'
    },
      
       {
        name: 'Tech Wizz',
        description: 'Cross-platform app for tracking workouts, nutrition, and fitness goals.',
        tech: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
        image: "/assets/427shots_so.png",
        githubUrl: 'https://github.com/Fatimaarshad10/NextJS-Portfolio-',
        year: '2024',
        category: 'Frontend'
    },
        {
        name: "Let's Play App ",
        description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
        tech: [ 'Node.js', 'Postgresql', 'schedular', 'Express.js'],
        image: "/assets/Let's_play.png",
        githubUrl: 'https://github.com/NaxtechGit/Event-Management-System-Backend-',
        year: '2024',
        category: 'Full Stack'
    },
     {
        name: 'Profiler',
        description: 'Cross-platform app for tracking workouts, nutrition, and fitness goals.',
        tech: ['Node js', 'lambda', 'sqs', 'redis' , 'openai'],
        image: "/assets/profiler_01.png",
        liveUrl: 'https://dtkcfwfq66241.cloudfront.net/',
        year: '2024',
        category: 'Backend developer'
    },
  
   
     
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