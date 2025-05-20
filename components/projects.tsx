"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink } from "lucide-react"
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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: "project1",
      name: "Furniture Store",
      description: "A front-end page that sells furniture with a modern and responsive design.",
      objective: "Create an attractive and user-friendly furniture e-commerce interface.",
      context: "personnel",
      technologies: ["HTML", "CSS"],
      features: ["Responsive design", "Product catalog", "Image gallery", "Contact form", "Interactive elements"],
      images: ["/jobit.png", "/jobit.png"],
      github: "https://github.com/username/furniture-store",
      demo: "https://furniture-store-demo.com",
    },
    {
      id: "project2",
      name: "Tetris Game",
      description: "A classic Tetris game implementation with modern web technologies.",
      objective: "Develop an interactive and engaging Tetris game with TypeScript.",
      context: "personnel",
      technologies: ["TypeScript", "HTML", "CSS"],
      features: [
        "Classic Tetris gameplay",
        "Score tracking",
        "Level progression",
        "Sound effects",
        "Responsive controls",
      ],
      images: ["/testris.png", "/testris.png"],
      github: "https://github.com/username/tetris-game",
      demo: "https://tetris-game-demo.com",
    },
    {
      id: "project3",
      name: "QCM Quiz Application",
      description: "A quiz application for creating and taking multiple-choice tests.",
      objective: "Build a flexible quiz system for educational purposes.",
      context: "scolaire",
      technologies: ["PHP", "HTML", "CSS"],
      features: [
        "Quiz creation interface",
        "Multiple choice questions",
        "Score calculation",
        "User authentication",
        "Results tracking",
      ],
      images: ["/QCM.png", "/QCM.png"],
      github: "https://github.com/username/qcm-quiz",
    },
    {
      id: "project4",
      name: "Appointment Manager",
      description: "A desktop application for managing appointments and schedules.",
      objective: "Create an efficient appointment scheduling system.",
      context: "stage",
      technologies: ["Python", "Tkinter", "SQLite"],
      features: [
        "Calendar view",
        "Appointment scheduling",
        "Reminder notifications",
        "Client database",
        "Reporting tools",
      ],
      images: ["/clientlourd.png", "/clientlourd.png"],
      github: "https://github.com/username/appointment-manager",
    },
    {
      id: "project5",
      name: "E-commerce Website",
      description: "A full-featured e-commerce platform with modern design and functionality.",
      objective: "Develop a complete online shopping experience.",
      context: "stage",
      technologies: ["Laravel", "Tailwind CSS", "JavaScript", "MySQL"],
      features: ["User authentication", "Product catalog", "Shopping cart", "Payment processing", "Order management"],
      images: ["/clientleger.png", "/clientleger.png"],
      github: "https://github.com/username/ecommerce-website",
      demo: "https://ecommerce-demo.com",
    },
    {
      id: "project6",
      name: "Tic-Tac-Toe Game",
      description: "A classic Tic-Tac-Toe game with a modern interface.",
      objective: "Create an interactive game with TypeScript.",
      context: "personnel",
      technologies: ["TypeScript", "HTML", "CSS"],
      features: ["Two-player gameplay", "Win detection", "Score tracking", "Game history", "Responsive design"],
      images: ["/tictactoe.png", "/tictactoe.png"],
      github: "https://github.com/username/tic-tac-toe",
      demo: "https://tic-tac-toe-demo.com",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
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

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="scolaire">Scolaires</TabsTrigger>
          <TabsTrigger value="stage">Stages</TabsTrigger>
          <TabsTrigger value="personnel">Personnels</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ProjectGrid projects={projects} setSelectedProject={setSelectedProject} />
        </TabsContent>

        <TabsContent value="scolaire">
          <ProjectGrid
            projects={projects.filter((p) => p.context === "scolaire")}
            setSelectedProject={setSelectedProject}
          />
        </TabsContent>

        <TabsContent value="stage">
          <ProjectGrid
            projects={projects.filter((p) => p.context === "stage")}
            setSelectedProject={setSelectedProject}
          />
        </TabsContent>

        <TabsContent value="personnel">
          <ProjectGrid
            projects={projects.filter((p) => p.context === "personnel")}
            setSelectedProject={setSelectedProject}
          />
        </TabsContent>
      </Tabs>

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

interface ProjectGridProps {
  projects: Project[]
  setSelectedProject: (project: Project) => void
}

function ProjectGrid({ projects, setSelectedProject }: ProjectGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={item}>
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
                variant={
                  project.context === "stage" ? "default" : project.context === "scolaire" ? "secondary" : "outline"
                }
              >
                {project.context}
              </Badge>
            </div>

            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && <Badge variant="outline">+{project.technologies.length - 3}</Badge>}
              </div>
            </CardContent>

            <CardFooter>
              <Button
                onClick={() => setSelectedProject(project)}
                className="w-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30"
              >
                Voir les détails
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
