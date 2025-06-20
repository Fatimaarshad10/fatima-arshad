import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-dark-900">
            <Navigation />
            <section className="pt-32 pb-20 bg-dark-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
                        Contact <span className="gradient-text">Me</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
                        Let's connect! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left: Contact Info & Social */}
                        <div className="space-y-8">
                            <div className="bg-dark-800 p-8 rounded-xl border border-dark-700">
                                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                                <p className="text-gray-400 mb-8">
                                    I'm always interested in hearing about new opportunities and exciting projects.
                                    Feel free to reach out if you'd like to collaborate or just want to say hello!
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-primary-500/10 rounded-lg">
                                            <Mail className="h-6 w-6 text-primary-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Email</h4>
                                            <p className="text-gray-400">contact@example.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-primary-500/10 rounded-lg">
                                            <Phone className="h-6 w-6 text-primary-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Phone</h4>
                                            <p className="text-gray-400">+1 (555) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-primary-500/10 rounded-lg">
                                            <MapPin className="h-6 w-6 text-primary-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Location</h4>
                                            <p className="text-gray-400">Remote / Worldwide</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           
                        </div>

                        {/* Right: Contact Form */}
                        <div className="bg-dark-800 p-8 rounded-xl border border-dark-700">
                            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
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
                                            required
                                            className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
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
                                        required
                                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
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
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none"
                                        placeholder="Tell me about your project or opportunity..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                                >
                                    Send Message
                                    <Send className="ml-2 h-5 w-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
} 