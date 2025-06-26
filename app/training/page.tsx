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
        <main className="bg-dark-900 text-dark-500">
            <div className="pt-24">
                <section className="py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-extrabold">
                                Corporate <span className="text-primary-400">Training</span>
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
                                Empowering teams with the skills to build modern, high-performance applications.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {stats.map((stat) => (
                                <div key={stat.label} className="bg-dark-800 p-6 rounded-xl border border-dark-700 text-center">
                                    <div className="p-4 bg-primary-500/10 rounded-full w-fit mx-auto mb-4 border border-primary-500/20">
                                        <stat.icon className="h-8 w-8 text-primary-400" />
                                    </div>
                                    <p className="text-3xl font-bold text-dark-500">{stat.number}</p>
                                    <p className="text-dark-600">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {courses.map((course) => (
                                <CourseCard key={course.title} course={course} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 sm:py-24 bg-dark-800/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-extrabold mb-4">My Teaching Philosophy</h2>
                                <div className="space-y-4 text-dark-600">
                                    <p>I believe in a hands-on, project-based approach to learning. My training sessions are designed to be interactive and practical, ensuring that participants not only understand the theory but can also apply it to real-world scenarios.</p>
                                    <p>I focus on industry best practices, modern technologies, and the problem-solving skills necessary to excel in today's competitive landscape.</p>
                                </div>
                            </div>
                            <div className="bg-dark-800 p-8 rounded-xl border border-dark-700">
                                <h3 className="text-xl font-bold mb-4">Key Learning Outcomes</h3>
                                <ul className="space-y-3">
                                    {["Real-world project development", "Industry best practices", "Problem-solving techniques", "Version control with Git", "Deployment and hosting"].map(item => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0" />
                                            <span className="text-dark-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

const CourseCard = ({ course }: { course: any }) => (
    <div className="group bg-dark-800 rounded-xl border border-dark-700 overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10">
        <div className="relative h-48 bg-dark-700/50 flex items-center justify-center">
            <course.icon className="h-16 w-16 text-primary-400 opacity-70" />
            <span className="absolute top-4 left-4 px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-medium rounded-full border border-primary-500/30">{course.category}</span>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-dark-500 mb-2 group-hover:text-primary-400 transition-colors duration-300">{course.title}</h3>
            <p className="text-sm text-primary-400 mb-3">{course.institution}</p>
            <p className="text-dark-600 mb-4 text-sm">{course.description}</p>
            <div className="mb-4">
                <h4 className="text-sm font-semibold text-dark-500 mb-2">Topics Covered:</h4>
                <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic: string) => (
                        <span key={topic} className="px-2 py-1 bg-dark-700 text-dark-600 text-xs rounded-full">{topic}</span>
                    ))}
                </div>
            </div>
            <div className="pt-4 border-t border-dark-700 flex justify-between items-center text-sm text-dark-600">
                <div className="flex items-center gap-2"><Clock size={16} /><span>{course.duration}</span></div>
                <div className="flex items-center gap-2"><Users size={16} /><span>{course.students} Students</span></div>
            </div>
        </div>
    </div>
)
)