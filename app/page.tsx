import Hero from '@/components/Hero'
import ExperienceSection from '@/components/ExperienceSection'
import AnimatedSkills from '@/components/AnimatedSkills'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Page() {

    return (
        <>
            <Hero />
            <ExperienceSection />
            <AnimatedSkills />
        </>
    )
}