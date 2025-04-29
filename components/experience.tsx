"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"

interface Experience {
  id: string
  company: string
  position: string
  period: string
  location: string
  description: string
  missions: string[]
  skills: string[]
}

export default function Experience() {
  // Update the experiences with Yassine's experiences
  const experiences: Experience[] = [
    {
      id: "exp1",
      company: "ELBION",
      position: "Stagiaire Développement Informatique",
      period: "Mai 2024",
      location: "France",
      description: "Projet : application web de gestion des comptes utilisateurs SAP",
      missions: [
        "Participation au développement d'une application web interfacée avec SAP ECC",
        "Environnement technique: SAP ECC, HTML, PHP, CSS, MYSQL, MantisBT",
      ],
      skills: ["HTML", "PHP", "CSS", "MySQL", "SAP ECC", "MantisBT"],
    },
    {
      id: "exp2",
      company: "JAMAA IMMOBILIER",
      position: "Stagiaire Service Marketing",
      period: "Septembre 2022 - Mars 2023",
      location: "France",
      description: "Stage de 6 mois au sein du service marketing.",
      missions: [
        "Mise en place et gestion d'une stratégie de marketing digital via les réseaux sociaux",
        "Préparation des dossiers marketing (photos, argumentaire de vente, supports marketing)",
        "Planification des visites client",
      ],
      skills: ["Marketing Digital", "Réseaux Sociaux", "Vente", "Communication"],
    },
    {
      id: "exp3",
      company: "TOYOTA SERVICE COMMERCIAL",
      position: "Stagiaire",
      period: "Juin - Juillet 2022",
      location: "France",
      description: "Stage de 2 mois au sein du service commercial.",
      missions: [
        "Traitement en back office des dossiers clients",
        "Dossier de crédit, demande d'immatriculation",
        "Planification livraison (MS Excel et CRM)",
      ],
      skills: ["MS Excel", "CRM", "Service Client", "Gestion Administrative"],
    },
    {
      id: "exp4",
      company: "CECOGEL",
      position: "Stage de Découverte",
      period: "Juillet 2021",
      location: "France",
      description: "Stage de découverte d'un mois.",
      missions: ["Découverte des services de l'entreprise"],
      skills: ["Observation", "Apprentissage", "Communication"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        Mes <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Stages</span>
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-cyan-500 transform md:translate-x-[-0.5px]" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={item}
              className={`mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } relative md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className={`hidden md:block absolute top-6 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 ${
                  index % 2 === 0 ? "right-[-10px]" : "left-[-10px]"
                }`}
              />

              <Card className="overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <Badge variant="outline" className="ml-2">
                      {exp.company}
                    </Badge>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">{exp.description}</p>

                  <h4 className="text-md font-semibold mb-2 flex items-center gap-2">
                    <Briefcase size={16} />
                    Missions
                  </h4>
                  <ul className="list-disc list-inside mb-4 text-gray-400">
                    {exp.missions.map((mission, i) => (
                      <li key={i}>{mission}</li>
                    ))}
                  </ul>

                  <h4 className="text-md font-semibold mb-2">Compétences développées</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
