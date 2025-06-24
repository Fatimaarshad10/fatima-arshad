'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code } from 'lucide-react'

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
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <nav className="w-full flex justify-center items-center py-8">
            <div className="backdrop-blur-lg bg-black/40 border border-gray-400/30 rounded-full px-10 py-4 flex space-x-10 shadow-lg">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`text-lg font-medium transition-colors duration-200 ${pathname === item.href ? 'text-white' : 'text-gray-200 hover:text-white'}`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navigation 