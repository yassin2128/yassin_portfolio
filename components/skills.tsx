"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const skillCategories = [
    {
      id: "languages",
      name: "Langages",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "PHP", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "SQL", level: 65 },
      ],
    },
    {
      id: "frameworks",
      name: "Frameworks",
      skills: [
        { name: "Bootstrap", level: 75 },
        { name: "jQuery", level: 65 },
      ],
    },
    {
      id: "marketing",
      name: "Marketing",
      skills: [
        { name: "Marketing Digital", level: 85 },
        { name: "Réseaux Sociaux", level: 80 },
        { name: "Stratégie Marketing", level: 75 },
      ],
    },
    {
      id: "tools",
      name: "Outils",
      skills: [
        { name: "MS Excel", level: 90 },
        { name: "MS Word", level: 85 },
        { name: "CRM", level: 75 },
        { name: "SAP ECC", level: 65 },
        { name: "MantisBT", level: 60 },
      ],
    },
    {
      id: "other",
      name: "Autres",
      skills: [
        { name: "Comptabilité", level: 80 },
        { name: "Gestion", level: 75 },
        { name: "Vente", level: 85 },
        { name: "Service Client", level: 80 },
      ],
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
        Mes{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Compétences</span>
      </motion.h2>

      <Tabs defaultValue="languages" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          {skillCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-cyan-500/20"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {category.skills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <Card className="overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-medium">{skill.name}</h3>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 p-6 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm"
      >
        <h3 className="text-xl font-semibold mb-4">Certifications</h3>
        <div className="flex flex-wrap gap-3">
          {["HTML/CSS", "JavaScript", "PHP", "MySQL", "Git"].map((cert) => (
            <span
              key={cert}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/10 text-sm"
            >
              {cert}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
