'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-dark-900"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-primary-500 hover:text-primary-400 transition-colors duration-300"
                            onClick={e => {
                                if (pathname === "/") {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                        >
                            <Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${pathname === item.href ? 'text-primary-400' : 'text-dark-600 hover:text-primary-400'}`}
                                    onClick={(e) => {
                                        if (item.href.startsWith('#')) {
                                            e.preventDefault()
                                            document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }}
                                >
                                    {item.name}
                                    {pathname === item.href && (
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-primary-400" />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-dark-600 hover:text-primary-400 hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-800 focus:ring-primary-400"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    setIsOpen(false)
                                    if (item.href.startsWith('#')) {
                                        e.preventDefault()
                                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                                    }
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${pathname === item.href ? 'bg-dark-700 text-primary-400' : 'text-dark-600 hover:bg-dark-800 hover:text-primary-400'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation 