import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Code } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Code className="h-8 w-8 text-primary-500" />
                            <span className="text-xl font-bold gradient-text">Portfolio</span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Full Stack Developer with 3+ years of experience in web and app development.
                            Passionate about creating innovative digital solutions and sharing knowledge through teaching.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            
                            <a
                                href="mailto:contact@example.com"
                                className="p-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Web Development</li>
                            <li className="text-gray-400">Mobile App Development</li>
                            <li className="text-gray-400">UI/UX Design</li>
                            <li className="text-gray-400">Code Training</li>
                            <li className="text-gray-400">Consulting</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Portfolio. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
