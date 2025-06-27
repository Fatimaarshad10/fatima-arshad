import { Mail } from 'lucide-react'

export default function ContactPage() {
    return (
        <main className="bg-dark-900 text-dark-600">
            <div className="pt-24">
                <section className="py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-extrabold">
                                Get in <span className="text-primary-500">Touch</span>
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
                                I'd love to hear from you. Let's build something great together.
                            </p>
                        </div>
                        <div className="text-center">
                            <a
                                href="mailto:fatimaarshad091@gmail.com"
                                className="group inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-dark-900 font-semibold rounded-lg transition-all duration-300 hover:bg-primary-600 transform hover:scale-105"
                            >
                                <Mail className="mr-3 h-6 w-6" />
                                Contact Me
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}