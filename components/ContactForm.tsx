'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import { sendEmail } from '@/app/actions'

const initialState = {
    message: null,
    errors: {},
}

const SubmitButton = () => {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full group inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-dark-900 font-semibold rounded-lg transition-all duration-300 hover:bg-primary-600 disabled:bg-primary-500/50 disabled:cursor-not-allowed"
        >
            {pending ? (
                <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                </>
            ) : (
                <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </>
            )}
        </button>
    )
}

const ContactForm = () => {
    const [state, formAction] = useFormState(sendEmail, initialState)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (state.message === 'success') {
            formRef.current?.reset()
        }
    }, [state.message])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
            >
                <div>
                    <h3 className="text-3xl font-bold text-primary-500 mb-4">Let's Connect</h3>
                    <p className="text-dark-600 max-w-lg">
                        I'm currently available for new opportunities. If you have a project in mind or just want to say hello, feel free to reach out.
                    </p>
                </div>
                <div className="space-y-6">
                    <ContactInfo icon={Mail} label="Email" value="fatimaarshad091@gmail.com" href="mailto:fatimaarshad091@gmail.com" />
                    <ContactInfo icon={MapPin} label="Location" value="Remote / Worldwide" />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-dark-800 p-8 rounded-xl border border-dark-700"
            >
                <form ref={formRef} action={formAction} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField id="name" label="Name" placeholder="Your Name" required />
                        <InputField id="email" label="Email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <InputField id="subject" label="Subject" placeholder="What can I help you with?" required />
                    <TextAreaField id="message" label="Message" placeholder="Tell me more about your project..." required />

                    <SubmitButton />

                    {state.message === 'success' && (
                        <p className="text-primary-400 text-center">Thank you! Your message has been sent.</p>
                    )}
                    {state.message?.startsWith('Error:') && (
                        <p className="text-red-500 text-center">{state.message}</p>
                    )}
                </form>
            </motion.div>
        </div>
    )
}

const ContactInfo = ({ icon: Icon, label, value, href }: any) => (
    <div className="flex items-center space-x-4">
        <div className="p-3 bg-primary-500/10 rounded-lg border border-primary-500/20">
            <Icon className="h-6 w-6 text-primary-500" />
        </div>
        <div>
            <h4 className="text-dark-500 font-semibold">{label}</h4>
            <a href={href} className="text-dark-600 hover:text-primary-500 transition-colors duration-300">{value}</a>
        </div>
    </div>
)

const InputField = ({ id, label, ...props }: any) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-dark-600 mb-2">{label}</label>
        <input id={id} name={id} {...props} className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-500 placeholder-dark-600 transition-all duration-300" />
    </div>
)

const TextAreaField = ({ id, label, ...props }: any) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-dark-600 mb-2">{label}</label>
        <textarea id={id} name={id} rows={5} {...props} className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-500 placeholder-dark-600 transition-all duration-300 resize-none" />
    </div>
);

export default ContactForm 