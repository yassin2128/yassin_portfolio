"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Introduction() {
  const scrollToSkills = () => {
    const element = document.getElementById("skills")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 md:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Yassine MERZAK
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl mb-6 text-gray-300">Étudiant en BTS SIO SLAM</h2>

        <p className="text-lg mb-8 max-w-2xl text-gray-400">
          Étudiant en développement web, motivé et passionné par la programmation. Solide formation en informatique et
          expérience pratique en développement et marketing digital. À la recherche d'une opportunité académique pour
          approfondir mes compétences.
        </p>

        <Button
          onClick={scrollToSkills}
          className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-6 rounded-full"
        >
          Découvrir mes compétences
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 relative">
          <Image
            src="/logo.png?height=320&width=320"
            alt="Photo professionnelle"
            width={320}
            height={320}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20" />
        </div>

        <div className="absolute -inset-4 rounded-full border border-white/10 animate-pulse" />
        <div className="absolute -inset-8 rounded-full border border-white/5 animate-pulse [animation-delay:1s]" />
      </motion.div>
    </div>
  )
}
