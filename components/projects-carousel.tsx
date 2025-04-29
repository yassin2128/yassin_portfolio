"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  id: string
  name: string
  description: string
  objective: string
  context: "scolaire" | "stage" | "personnel"
  technologies: string[]
  features: string[]
  images: string[]
  github?: string
  demo?: string
}

export default function ProjectsCarousel() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)

  const projects: Project[] = [
    {
      id: "project1",
      name: "Application Web SAP",
      description: "Application web de gestion des comptes utilisateurs SAP.",
      objective: "Développer une interface web pour la gestion des comptes SAP.",
      context: "stage",
      technologies: ["PHP", "HTML", "CSS", "MySQL", "SAP ECC", "MantisBT"],
      features: [
        "Interface avec SAP ECC",
        "Gestion des comptes utilisateurs",
        "Tableau de bord administrateur",
        "Suivi des modifications",
      ],
      images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
      github: "https://github.com/username/sap-web-app",
    },
    {
      id: "project2",
      name: "Plateforme Marketing Immobilier",
      description: "Plateforme de gestion marketing pour agence immobilière.",
      objective: "Créer un outil de gestion des supports marketing immobiliers.",
      context: "stage",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: [
        "Gestion des supports marketing",
        "Planification des visites",
        "Suivi des prospects",
        "Génération de rapports",
      ],
      images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
      github: "https://github.com/username/real-estate-marketing",
    },
    {
      id: "project3",
      name: "Portfolio Personnel",
      description: "Site web portfolio présentant mes compétences et projets.",
      objective: "Créer une vitrine professionnelle en ligne.",
      context: "personnel",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      features: ["Design responsive", "Animations fluides", "Présentation des projets", "Formulaire de contact"],
      images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
      github: "https://github.com/username/portfolio",
      demo: "https://portfolio-demo.com",
    },
    {
      id: "project4",
      name: "Système de Gestion CRM",
      description: "Application de gestion de la relation client pour entreprise commerciale.",
      objective: "Développer un outil de suivi client et de gestion des ventes.",
      context: "scolaire",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
      features: [
        "Gestion des contacts clients",
        "Suivi des opportunités de vente",
        "Génération de rapports",
        "Tableau de bord analytique",
      ],
      images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
      github: "https://github.com/username/crm-system",
    },
    {
      id: "project5",
      name: "Application de Comptabilité",
      description: "Application web de gestion comptable pour petites entreprises.",
      objective: "Créer un outil simple de gestion comptable.",
      context: "scolaire",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React"],
      features: ["Saisie des transactions", "Génération de factures", "Suivi des dépenses", "Rapports financiers"],
      images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
      github: "https://github.com/username/accounting-app",
    },
    {
      id: "project6",
      name: "Site E-commerce",
      description: "Boutique en ligne pour une marque de vêtements.",
      objective: "Créer une plateforme de vente en ligne complète.",
      context: "personnel",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
      features: ["Catalogue produits", "Panier d'achat", "Paiement en ligne", "Gestion des commandes"],
      images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
      github: "https://github.com/username/ecommerce-site",
    },
  ]

  // Calculate number of pages based on screen size
  const [projectsPerPage, setProjectsPerPage] = useState(3)
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  // Update projects per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProjectsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setProjectsPerPage(2)
      } else {
        setProjectsPerPage(3)
      }
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextPage = useCallback(() => {
    setDirection(1)
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages)
  }, [totalPages])

  const prevPage = useCallback(() => {
    setDirection(-1)
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages)
  }, [totalPages])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextPage()
    }, 7000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextPage])

  // Pause auto-play when user interacts
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    // Resume after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (diff > 50) {
      // Swipe left, go to next
      nextPage()
      pauseAutoPlay()
    } else if (diff < -50) {
      // Swipe right, go to previous
      prevPage()
      pauseAutoPlay()
    }
  }

  // Get current page projects
  const getCurrentPageProjects = () => {
    const startIndex = currentPage * projectsPerPage
    return projects.slice(startIndex, startIndex + projectsPerPage)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Mes <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Projets</span>
      </motion.h2>

      <div className="relative overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="mb-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentPage ? 1 : -1)
                setCurrentPage(index)
                pauseAutoPlay()
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentPage
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative h-[500px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                {getCurrentPageProjects().map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    setSelectedProject={setSelectedProject}
                    isActive={true}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => {
            prevPage()
            pauseAutoPlay()
          }}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
          aria-label="Previous page"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => {
            nextPage()
            pauseAutoPlay()
          }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
          aria-label="Next page"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-4xl bg-black/90 border-white/10 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedProject.name}</DialogTitle>
              <DialogDescription className="text-gray-400">{selectedProject.description}</DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-4">
                  <Image
                    src={selectedProject.images[0] || "/placeholder.svg"}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProject.images.slice(1).map((img, index) => (
                    <div key={index} className="relative h-24 overflow-hidden rounded-lg">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${selectedProject.name} screenshot ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Objectif</h3>
                <p className="text-gray-400 mb-4">{selectedProject.objective}</p>

                <h3 className="text-lg font-semibold mb-2">Contexte</h3>
                <Badge variant="outline" className="mb-4 capitalize">
                  {selectedProject.context}
                </Badge>

                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-2">Fonctionnalités</h3>
                <ul className="list-disc list-inside text-gray-400 mb-6">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  {selectedProject.github && (
                    <Button variant="outline" className="flex items-center gap-2">
                      <Github size={16} />
                      Code source
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500">
                      <ExternalLink size={16} />
                      Démo en ligne
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  setSelectedProject: (project: Project) => void
  isActive: boolean
}

function ProjectCard({ project, setSelectedProject, isActive }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <Badge
          className="absolute top-2 right-2 capitalize"
          variant={project.context === "stage" ? "default" : project.context === "scolaire" ? "secondary" : "outline"}
        >
          {project.context}
        </Badge>
      </div>

      <CardHeader className="p-4">
        <CardTitle className="text-xl">{project.name}</CardTitle>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto">
        <Button
          onClick={() => setSelectedProject(project)}
          className="w-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30"
        >
          Voir les détails
        </Button>
      </CardFooter>
    </Card>
  )
}
