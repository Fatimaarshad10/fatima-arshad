import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Users, Clock, Award, BookOpen, Code, Smartphone, Palette } from 'lucide-react'

const courses = [
    {
        title: "Web & Mobile Development",
        institution: "Saylani Welfare Trust",
        description: "Comprehensive course covering modern web development and mobile app creation using React, React Native, and Node.js.",
        duration: "6 months",
        students: "50+",
        image: "/api/placeholder/400/250",
        category: "Full Stack",
        topics: ["React", "React Native", "Node.js", "MongoDB", "Firebase"],
        icon: Code
    },
    {
        title: "Web Designing",
        institution: "Saylani Welfare Trust",
        description: "Complete web design course focusing on UI/UX principles, HTML/CSS, JavaScript, and modern design tools.",
        duration: "4 months",
        students: "40+",
        image: "/api/placeholder/400/250",
        category: "Design",
        topics: ["HTML/CSS", "JavaScript", "UI/UX", "Figma", "Responsive Design"],
        icon: Palette
    },
    {
        title: "Python Programming",
        institution: "Code in Place",
        description: "Stanford's Code in Place program teaching Python fundamentals and programming concepts to beginners.",
        duration: "10 weeks",
        students: "100+",
        image: "/api/placeholder/400/250",
        category: "Programming",
        topics: ["Python", "Data Structures", "Algorithms", "Problem Solving"],
        icon: Code
    },
    {
        title: "Python Basic Code",
        institution: "iCodeGuru",
        description: "Foundation course in Python programming covering basics, syntax, and introductory programming concepts.",
        duration: "8 weeks",
        students: "30+",
        image: "/api/placeholder/400/250",
        category: "Programming",
        topics: ["Python Basics", "Variables", "Loops", "Functions", "OOP"],
        icon: Code
    }
]

const stats = [
    { number: "220+", label: "Students Trained", icon: Users },
    { number: "4", label: "Different Courses", icon: BookOpen },
    { number: "2+", label: "Years Teaching", icon: Clock },
    { number: "95%", label: "Success Rate", icon: Award }
]

export default function TrainingPage() {
    return (
        <main className="min-h-screen bg-dark-900">
            <Navigation />
            <section className="pt-32 pb-20 bg-dark-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Training & <span className="gradient-text">Courses</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Sharing knowledge and helping others learn programming. I've trained hundreds of students
                            in web development, mobile apps, and Python programming across various institutions.
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="p-4 bg-primary-500/10 rounded-full w-fit mx-auto mb-4">
                                    <stat.icon className="h-8 w-8 text-primary-400" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {courses.map((course, idx) => (
                            <div key={idx} className="group bg-dark-800 rounded-xl border border-dark-700 overflow-hidden hover:border-primary-500/50 transition-all duration-300">
                                {/* Course Image */}
                                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-blue-500/20">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <course.icon className="h-16 w-16 text-primary-400 opacity-50" />
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                                            {course.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-dark-700 text-gray-300 text-xs rounded-full">
                                            {course.duration}
                                        </span>
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className="p-6">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                                            {course.title}
                                        </h3>
                                        <p className="text-primary-400 font-medium text-sm mb-2">
                                            {course.institution}
                                        </p>
                                        <p className="text-gray-400 text-sm mb-4">
                                            {course.description}
                                        </p>
                                    </div>

                                    {/* Topics */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-gray-300 mb-2">Topics Covered:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {course.topics.map((topic, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded border border-dark-600"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Course Stats */}
                                    <div className="flex items-center justify-between pt-4 border-t border-dark-700">
                                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                                            <div className="flex items-center space-x-1">
                                                <Users className="h-4 w-4" />
                                                <span>{course.students} students</span>
                                            </div>
                                        </div>
                                        <div className="text-primary-400 text-sm font-medium">
                                            Completed
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Teaching Philosophy */}
                    <div className="mt-20 bg-dark-800 rounded-xl border border-dark-700 p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    My Teaching <span className="gradient-text">Philosophy</span>
                                </h2>
                                <div className="space-y-4 text-gray-300">
                                    <p>
                                        I believe in hands-on, project-based learning where students build real applications
                                        from day one. This approach helps them understand not just the theory, but how to
                                        apply it in practical scenarios.
                                    </p>
                                    <p>
                                        My courses focus on modern technologies and industry best practices, ensuring students
                                        are job-ready and equipped with the skills needed in today's competitive market.
                                    </p>
                                    <p>
                                        I emphasize problem-solving, critical thinking, and continuous learning - skills that
                                        are essential for any successful developer.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-dark-700 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-white mb-4">What Students Learn:</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                        <span>Real-world project development</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                        <span>Industry best practices</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                        <span>Problem-solving techniques</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                        <span>Version control with Git</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                        <span>Deployment and hosting</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
} 