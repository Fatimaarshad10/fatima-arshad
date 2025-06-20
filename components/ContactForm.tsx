'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
            >
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
                    <p className="text-gray-400 mb-8">
                        I'm always interested in hearing about new opportunities and exciting projects.
                        Feel free to reach out if you'd like to collaborate or just want to say hello!
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary-500/10 rounded-lg">
                            <Mail className="h-6 w-6 text-primary-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-1">Email</h4>
                            <p className="text-gray-400">contact@example.com</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary-500/10 rounded-lg">
                            <Phone className="h-6 w-6 text-primary-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-1">Phone</h4>
                            <p className="text-gray-400">+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary-500/10 rounded-lg">
                            <MapPin className="h-6 w-6 text-primary-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-1">Location</h4>
                            <p className="text-gray-400">Remote / Worldwide</p>
                        </div>
                    </div>
                </div>

                <div className="bg-dark-800 p-6 rounded-lg border border-dark-700">
                    <h4 className="text-white font-semibold mb-3">Available for:</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>• Full-time opportunities</li>
                        <li>• Freelance projects</li>
                        <li>• Technical consulting</li>
                        <li>• Code training sessions</li>
                        <li>• Open source contributions</li>
                    </ul>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                placeholder="your.email@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                            Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                            placeholder="What's this about?"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none"
                            placeholder="Tell me about your project or opportunity..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-600/50 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send className="ml-2 h-5 w-5" />
                            </>
                        )}
                    </button>

                    {submitStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
                        >
                            Thank you! Your message has been sent successfully.
                        </motion.div>
                    )}

                    {submitStatus === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
                        >
                            Something went wrong. Please try again.
                        </motion.div>
                    )}
                </form>
            </motion.div>
        </div>
    )
}

export default ContactForm 