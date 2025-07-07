import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import VolunteerCertificatesSection from '@/components/VolunteerCertificatesSection'
import AnimatedSkills from '@/components/AnimatedSkills'
import ProjectsSection from '@/components/ProjectsSection'

export default function Page() {
    return (
        <>
            <Hero />
            <AboutSection />
            <ExperienceSection />
            <VolunteerCertificatesSection />
            <AnimatedSkills />
            <ProjectsSection />
            <main className="bg-dark-900 text-dark-600">
                <section id="contact" className="py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-extrabold">
                                Get in <span className="text-primary-500">Touch</span>
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
                                I'd love to hear from you. Let's build something great together.
                                <a
                                    href="mailto:fatimaarshad091@gmail.com"
                                    className="group inline-flex items-center justify-center text-primary-500  underline font-semibold rounded-lg transition-all duration-300  transform hover:scale-105"
                                >
                                    fatimaarshad091@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="text-center">

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}