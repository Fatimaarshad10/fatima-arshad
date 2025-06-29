'use client'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Footer = () => {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!hasAnimated) {
            setHasAnimated(true);
        }
    }, [hasAnimated]);

    return (
        <footer className="bg-dark-800 text-dark-600 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} Fatima Arshad. All rights reserved.</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center space-x-4"
                    >
                        <a
                            href="https://github.com/Fatimaarshad10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full  text-primary-400 bg-dark-700 transition-all duration-300"
                            title="GitHub"
                        >
                            <Github className="h-6 w-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fatima-arshad-6ba52a184/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full  text-primary-400 bg-dark-700 transition-all duration-300"

                            title="LinkedIn"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                            href="mailto:fatimaarshad091@gmail.com"
                            className="p-2 rounded-full  text-primary-400 bg-dark-700 transition-all duration-300"

                            title="Email"
                        >
                            <Mail className="h-6 w-6" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
