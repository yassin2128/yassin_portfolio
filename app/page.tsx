"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Introduction from "@/components/introduction"
import Skills from "@/components/skills"
import ProjectsCarousel from "@/components/projects-carousel"
import Experience from "@/components/experience"
import TechWatch from "@/components/tech-watch"
import CV from "@/components/cv"
import Contact from "@/components/contact"
import Background from "@/components/background"

export default function Home() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine which section is in view
      const sections = ["introduction", "skills", "projects", "experience", "techwatch", "cv", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Background scrollY={scrollY} />

      <div className="relative z-10">
        <Navigation activeSection={activeSection} />

        <div className="container mx-auto px-4 py-8">
          <section id="introduction" className="min-h-screen py-20">
            <Introduction />
          </section>

          <section id="skills" className="min-h-screen py-20">
            <Skills />
          </section>

          <section id="projects" className="min-h-screen py-20">
            <ProjectsCarousel />
          </section>

          <section id="experience" className="min-h-screen py-20">
            <Experience />
          </section>

          <section id="techwatch" className="min-h-screen py-20">
            <TechWatch />
          </section>

          <section id="cv" className="min-h-screen py-20">
            <CV />
          </section>

          <section id="contact" className="min-h-screen py-20">
            <Contact />
          </section>
        </div>
      </div>
    </main>
  )
}
