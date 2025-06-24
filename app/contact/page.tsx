import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: '#000' }}>
            <Navigation />
            <section className="pt-32 pb-20" style={{ backgroundColor: '#000' }}>
                <div className="max-w-2xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #5c7f6c 60%, #fff 100%)' }}>Contact</span> Me
                    </h1>
                    <div className="mb-8 text-center">
                        <p className="text-lg text-white">
                            Do you have a project in mind? Want to hire me? or simply wanna chat? Feel free to email me at
                            <a href="mailto:fatimaarshad091@gmail.com" className="ml-1 no-underline" style={{ color: '#5c7f6c' }}>fatimaarshad091@gmail.com</a>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
} 