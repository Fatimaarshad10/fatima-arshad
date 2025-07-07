'use client'

import ProjectCard from '@/components/ProjectCard'

const projects = [
    {
        name: 'Molar (Dental Practice Management)',
        description: 'A comprehensive dental practice management application. Features include patient records, appointment scheduling, billing, and secure communication. Built as a modern web app for dental professionals. My role: PERN Stack Developer (React, Node.js, Express, PostgreSQL, EmailJS).',
        tech: ['PostgreSQL', 'Express', 'React', 'Node.js', 'EmailJS'],
        image: "/assets/molar.png",
        liveUrl: 'https://app.molarlabs.com/login',
        year: '2024',
        category: 'Full Stack'
    },

    {
        name: 'Pine Straw University',
        description: 'Modern portfolio website built with Next.js and Tailwind CSS. Includes a Pine Straw Calculator app with authentication, a calculation page for pine straw needs, and PDF download functionality. Developed core features using Node.js, Express, HTML, and JavaScript.',
        tech: ['HTML', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express'],
        image: "/assets/pinestraw.png",
        liveUrl: 'https://pinestrawuniversity.com/',
        year: '2024',
        category: 'Frontend'
    },
    {
        name: '321Vets',
        description: 'Real-time chat application with AI-powered responses and sentiment analysis. Developed using React.js with a modular component structure and custom details pages for enhanced user experience.',
        tech: ['React', 'Tailwind CSS',],
        image: "/assets/321.png",
        liveUrl: 'https://321vets.com/',
        year: '2023',
        category: 'AI/ML'
    },

    {
        name: 'Tech Wizz',
        description: 'Business portfolio website built with Next.js, integrated with Notion for content management, and enhanced with Framer Motion animations for a dynamic user experience.',
        tech: ['Next.js', 'Notion', 'Framer Motion', 'React', 'Firebase', 'Redux', 'Chart.js'],
        image: "/assets/427shots_so.png",
        githubUrl: 'https://github.com/Fatimaarshad10/NextJS-Portfolio-',
        year: '2024',
        category: 'Frontend'
    },
    {
        name: "Let's Play App ",
        description: 'Event management system with robust scheduling features. Backend managed using Node.js, Express, Socket.io, and PostgreSQL to handle real-time events and user interactions.',
        tech: ['Node.js', 'Express', 'Socket.io', 'PostgreSQL'],
        image: "/assets/Let's_play.png",
        githubUrl: 'https://github.com/NaxtechGit/Event-Management-System-Backend-',
        year: '2024',
        category: 'Full Stack'
    },
    {
        name: 'Profiler',
        description: 'Job management system featuring a QR scanner and advanced search algorithms. Utilizes Redis, AWS Lambda, OpenAI, and Node.js for fast, intelligent job matching and management.',
        tech: ['Node.js', 'AWS Lambda', 'Redis', 'OpenAI', 'QR Scanner'],
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