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
        <footer style={{ backgroundColor: '#000' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Get in touch heading with lines */}
                <div className="flex items-center justify-center mb-8">
                    <div className="flex-1 h-px" style={{ backgroundColor: '#5c7f6c' }} />
                    <span className="mx-4 text-lg text-gray-400 font-mono tracking-wide">Get in touch</span>
                    <div className="flex-1 h-px" style={{ backgroundColor: '#5c7f6c' }} />
                </div>
                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex justify-center "
                >
                    <a
                        href="https://github.com/Fatimaarshad10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg transition-all duration-200 hover:scale-110 text-gray-400 hover:text-[#5c7f6c] hover:bg-[#5c7f6c22]"
                        title="GitHub"
                    >
                        <Github className="h-6 w-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/fatima-arshad-6ba52a184/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg transition-all duration-200 hover:scale-110 text-[#5c7f6c] hover:text-white hover:bg-[#5c7f6c]"
                        title="LinkedIn"
                    >
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                        href="mailto:fatimaarshad091@gmail.com"
                        className="p-3 rounded-lg transition-all duration-200 hover:scale-110 text-[#5c7f6c] hover:text-white hover:bg-[#5c7f6c]"
                        title="Email"
                    >
                        <Mail className="h-6 w-6" />
                    </a>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
