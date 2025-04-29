"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "introduction", label: "Accueil" },
    { id: "skills", label: "Compétences" },
    { id: "projects", label: "Projets" },
    { id: "experience", label: "Stages" },
    { id: "techwatch", label: "Veille" },
    { id: "cv", label: "CV" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Portfolio
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`relative px-4 py-2 ${
                activeSection === item.id ? "text-white" : "text-white/70 hover:text-white"
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`justify-start ${activeSection === item.id ? "text-white bg-white/10" : "text-white/70"}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
