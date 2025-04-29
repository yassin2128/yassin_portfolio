"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, GraduationCap, Briefcase, Award, Languages } from "lucide-react"

export default function CV() {
  return (
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Mon <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">CV</span>
      </motion.h2>

      <div className="flex justify-center mb-8">
          <a href="Merzak-Yassine.pdf" download>
          <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-6 rounded-full flex items-center gap-2">
            <Download className="h-5 w-5" />
            Télécharger mon CV
          </Button>
          </a>
      </div>

      <Card className="overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm mb-8">
        <CardContent className="p-6">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden md:inline">Formation</span>
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden md:inline">Expérience</span>
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span className="hidden md:inline">Compétences</span>
              </TabsTrigger>
              <TabsTrigger value="languages" className="flex items-center gap-2">
                <Languages className="h-4 w-4" />
                <span className="hidden md:inline">Langues</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-purple-500" />
                  Formation
                </h3>

                <div className="space-y-6">
                  <div className="relative pl-6 border-l border-white/10">
                    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-1.5" />
                    <h4 className="text-lg font-medium">BTS SIO option SLAM</h4>
                    <p className="text-gray-400">1ère année | 2023 - 2024</p>
                    <p className="mt-2 text-gray-300">
                      Formation en Services Informatiques aux Organisations, spécialité Solutions Logicielles et
                      Applications Métiers.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l border-white/10">
                    <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1.5" />
                    <h4 className="text-lg font-medium">Diplôme universitaire Bac+2</h4>
                    <p className="text-gray-400">École supérieure de technologie | 2022</p>
                    <p className="mt-2 text-gray-300">Filière technique de vente et service client</p>
                  </div>

                  <div className="relative pl-6 border-l border-white/10">
                    <div className="absolute w-3 h-3 bg-purple-500/70 rounded-full -left-[6.5px] top-1.5" />
                    <h4 className="text-lg font-medium">Baccalauréat</h4>
                    <p className="text-gray-400">Série gestion comptable | 2019</p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="experience">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-purple-500" />
                  Expérience Professionnelle
                </h3>

                <div className="space-y-6">
                  <div className="relative pl-6 border-l border-white/10">
                    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-1.5" />
                    <h4 className="text-lg font-medium">Développeur Full Stack Stagiaire</h4>
                    <p className="text-gray-400">Digital Agency | Janvier - Mars 2024</p>
                    <p className="mt-2 text-gray-300">
                      Stage de deuxième année où j&apos;ai travaillé sur plusieurs projets clients dans une agence web.
                    </p>
                    <ul className="mt-2 list-disc list-inside text-gray-400">
                      <li>Développement d&apos;un site e-commerce avec Symfony</li>
                      <li>Création d&apos;une API REST pour une application mobile</li>
                      <li>Intégration de maquettes responsive</li>
                      <li>Mise en place de tests automatisés</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l border-white/10">
                    <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1.5" />
                    <h4 className="text-lg font-medium">Développeur Web Stagiaire</h4>
                    <p className="text-gray-400">Tech Solutions | Mai - Juillet 2023</p>
                    <p className="mt-2 text-gray-300">
                      Stage de fin de première année où j&apos;ai participé au développement d&apos;une application web
                      pour la gestion de projets internes.
                    </p>
                    <ul className="mt-2 list-disc list-inside text-gray-400">
                      <li>Développement de nouvelles fonctionnalités</li>
                      <li>Correction de bugs sur l&apos;application existante</li>
                      <li>Participation aux réunions d&apos;équipe et aux sprints Agile</li>
                      <li>Optimisation des requêtes SQL pour améliorer les performances</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="skills">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-500" />
                  Compétences
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-4">Langages de programmation</h4>
                    <div className="space-y-3">
                      <SkillBar name="PHP" level={85} />
                      <SkillBar name="JavaScript" level={80} />
                      <SkillBar name="Java" level={75} />
                      <SkillBar name="HTML/CSS" level={90} />
                      <SkillBar name="SQL" level={85} />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4">Frameworks & Bibliothèques</h4>
                    <div className="space-y-3">
                      <SkillBar name="Laravel" level={80} />
                      <SkillBar name="Symfony" level={70} />
                      <SkillBar name="React" level={75} />
                      <SkillBar name="Bootstrap" level={85} />
                      <SkillBar name="Node.js" level={65} />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4">Outils & Environnements</h4>
                    <div className="space-y-3">
                      <SkillBar name="Git" level={80} />
                      <SkillBar name="Docker" level={65} />
                      <SkillBar name="VS Code" level={90} />
                      <SkillBar name="PHPStorm" level={75} />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4">Méthodologies</h4>
                    <div className="space-y-3">
                      <SkillBar name="Agile/Scrum" level={70} />
                      <SkillBar name="Merise" level={80} />
                      <SkillBar name="UML" level={75} />
                      <SkillBar name="MVC" level={85} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="languages">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Languages className="h-5 w-5 text-purple-500" />
                  Langues
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Arabe</h4>
                    <div className="flex items-center mt-1">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-8 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                        ))}
                      </div>
                      <span className="ml-3 text-gray-400">Langue maternelle</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium">Français</h4>
                    <div className="flex items-center mt-1">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-8 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                        ))}
                      </div>
                      <span className="ml-3 text-gray-400">Courant</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium">Anglais</h4>
                    <div className="flex items-center mt-1">
                      <div className="flex space-x-1">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                        ))}
                        {[1, 2].map((i) => (
                          <div key={i} className="w-8 h-2 bg-white/10 rounded-full" />
                        ))}
                      </div>
                      <span className="ml-3 text-gray-400">Technique</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-lg bg-white/5">
                  <h4 className="font-medium mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/10 text-sm">
                      TOEIC - 785 points
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <Card className="max-w-md border-white/10 bg-black/50 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Besoin de plus d&apos;informations ?</h3>
            <p className="text-gray-400 mb-4">
              N&apos;hésitez pas à télécharger mon CV complet ou à me contacter directement.
            </p>
            <a href="Merzak-Yassine.pdf" download>
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
              Télécharger mon CV
            </Button>
            </a>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

interface SkillBarProps {
  name: string
  level: number
}

function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}
