"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Tag, BarChart, Clock, Search, CheckCircle } from "lucide-react"
import Image from "next/image"

interface Framework {
  id: string
  name: string
  category: "frontend" | "backend" | "mobile" | "emerging"
  company: string
  releaseDate: string
  latestVersion: string
  description: string
  strengths: string[]
  weaknesses: string[]
  useCases: string[]
  popularity: number // 1-10
  learningCurve: number // 1-10
  performance: number // 1-10
  communitySupport: number // 1-10
  logo: string
  website: string
}

interface News {
  id: string
  title: string
  source: string
  date: string
  summary: string
  tags: string[]
  image: string
  url: string
  relatedFramework: string
}

export default function TechWatch() {
  // Update the frameworks array to use the provided logo images
  const frameworks: Framework[] = [
    {
      id: "react",
      name: "React",
      category: "frontend",
      company: "Facebook",
      releaseDate: "Mai 2013",
      latestVersion: "19.0.0 (Avril 2024)",
      description:
        "Bibliothèque JavaScript pour construire des interfaces utilisateur avec une approche par composants.",
      strengths: [
        "Écosystème riche et mature",
        "Grande communauté de développeurs",
        "Flexibilité et performance",
        "Compatible avec de nombreuses bibliothèques",
        "Utilisé par de grandes entreprises",
      ],
      weaknesses: [
        "Nécessite des bibliothèques supplémentaires pour des fonctionnalités complètes",
        "Courbe d'apprentissage pour les concepts avancés",
        "Documentation parfois fragmentée",
      ],
      useCases: [
        "Applications web complexes",
        "Applications à page unique (SPA)",
        "Interfaces utilisateur interactives",
      ],
      popularity: 9,
      learningCurve: 6,
      performance: 8,
      communitySupport: 10,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reactjs-qjfcN9NzXlVK40irJadvtMQqg76ZI2.png",
      website: "https://reactjs.org",
    },
    {
      id: "vue",
      name: "Vue.js",
      category: "frontend",
      company: "Evan You",
      releaseDate: "Février 2014",
      latestVersion: "3.4.0 (Janvier 2024)",
      description:
        "Framework JavaScript progressif pour construire des interfaces utilisateur avec une approche par composants.",
      strengths: [
        "Documentation excellente et claire",
        "Facile à apprendre et à intégrer",
        "Très populaire en Asie et dans les startups",
        "Système de composants intuitif",
        "Bonne performance",
      ],
      weaknesses: [
        "Écosystème plus petit que React",
        "Moins de demandes sur le marché de l'emploi en Europe",
        "Moins de bibliothèques tierces",
      ],
      useCases: [
        "Applications web de taille moyenne",
        "Projets nécessitant une intégration progressive",
        "Prototypage rapide",
      ],
      popularity: 8,
      learningCurve: 4,
      performance: 8,
      communitySupport: 7,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vuejs-uq4Hy2sARWQAZ81BzQP0N5lJmt1493.png",
      website: "https://vuejs.org",
    },
    {
      id: "angular",
      name: "Angular",
      category: "frontend",
      company: "Google",
      releaseDate: "Septembre 2016",
      latestVersion: "17.1.0 (Mars 2024)",
      description: "Framework TypeScript complet pour le développement d'applications web et mobiles.",
      strengths: [
        "Framework complet avec toutes les fonctionnalités intégrées",
        "Architecture MVC bien définie",
        "Fortement typé avec TypeScript",
        "Idéal pour les grandes équipes",
        "Support de Google",
      ],
      weaknesses: [
        "Courbe d'apprentissage abrupte",
        "Verbosité du code",
        "Performance parfois inférieure aux alternatives",
        "Mises à jour majeures fréquentes",
      ],
      useCases: [
        "Applications d'entreprise complexes",
        "Projets nécessitant une architecture stricte",
        "Applications avec de nombreuses fonctionnalités",
      ],
      popularity: 7,
      learningCurve: 8,
      performance: 7,
      communitySupport: 8,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/angular-QiEreO4svfAY0XpYNNSVGBdVlAyPxZ.png",
      website: "https://angular.io",
    },
    {
      id: "svelte",
      name: "Svelte",
      category: "emerging",
      company: "Rich Harris",
      releaseDate: "Novembre 2016",
      latestVersion: "4.2.0 (Février 2024)",
      description: "Compilateur qui transforme les composants en JavaScript optimisé, sans runtime virtuel DOM.",
      strengths: [
        "Performance exceptionnelle",
        "Taille de bundle très réduite",
        "Syntaxe simple et intuitive",
        "Moins de code à écrire",
        "Réactivité intégrée",
      ],
      weaknesses: [
        "Écosystème plus petit",
        "Moins de bibliothèques compatibles",
        "Moins de demandes sur le marché de l'emploi",
        "Documentation moins complète",
      ],
      useCases: [
        "Applications nécessitant des performances optimales",
        "Sites web légers",
        "Applications avec contraintes de bande passante",
      ],
      popularity: 6,
      learningCurve: 3,
      performance: 10,
      communitySupport: 6,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Svelte-y0wkKOvEClYmr1s6jWRAY1MK8NSjC2.png",
      website: "https://svelte.dev",
    },
    {
      id: "laravel",
      name: "Laravel",
      category: "backend",
      company: "Taylor Otwell",
      releaseDate: "Juin 2011",
      latestVersion: "11.0 (Mars 2024)",
      description:
        "Framework PHP élégant pour le développement web avec une syntaxe expressive et des fonctionnalités riches.",
      strengths: [
        "Syntaxe élégante et expressive",
        "Écosystème riche (Livewire, Jetstream, Forge)",
        "ORM Eloquent puissant et intuitif",
        "Documentation excellente",
        "Grande communauté en France",
      ],
      weaknesses: [
        "Performance parfois inférieure à d'autres frameworks PHP",
        "Peut être surdimensionné pour de petits projets",
        "Courbe d'apprentissage pour les débutants",
      ],
      useCases: ["Applications web complètes", "APIs RESTful", "Sites e-commerce", "Applications d'entreprise"],
      popularity: 8,
      learningCurve: 6,
      performance: 7,
      communitySupport: 9,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/redux-VygYouX62gK7BIop2dbWs77emtEJnW.png", // Using Redux logo as placeholder for Laravel
      website: "https://laravel.com",
    },
    {
      id: "django",
      name: "Django",
      category: "backend",
      company: "Django Software Foundation",
      releaseDate: "Juillet 2005",
      latestVersion: "5.0 (Décembre 2023)",
      description: "Framework Python haute performance pour le développement web rapide et sécurisé.",
      strengths: [
        "Batteries included (tout est inclus)",
        "Sécurité par défaut",
        "ORM puissant",
        "Admin auto-généré",
        "Écosystème Python mature",
      ],
      weaknesses: [
        "Peut sembler monolithique",
        "Moins flexible pour certains cas d'usage",
        "Courbe d'apprentissage initiale",
      ],
      useCases: [
        "Applications web complexes",
        "Sites avec beaucoup de contenu",
        "Applications nécessitant une sécurité élevée",
        "Projets scientifiques ou d'analyse de données",
      ],
      popularity: 8,
      learningCurve: 6,
      performance: 8,
      communitySupport: 8,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Django-AshEDApoWBoxD6wjr3IFjoHE4eyCUb.png",
      website: "https://www.djangoproject.com",
    },
    {
      id: "flutter",
      name: "Flutter",
      category: "mobile",
      company: "Google",
      releaseDate: "Mai 2017",
      latestVersion: "3.22 (Mai 2024)",
      description: "SDK de Google pour créer des applications multiplateformes avec une seule base de code.",
      strengths: [
        "Performance native sur toutes les plateformes",
        "Hot reload pour un développement rapide",
        "Widgets personnalisables et riches",
        "Support pour iOS, Android, Web et Desktop",
        "Communauté en forte croissance",
      ],
      weaknesses: [
        "Taille des applications finales",
        "Langage Dart moins connu",
        "Intégration native parfois complexe",
        "Écosystème encore en développement",
      ],
      useCases: [
        "Applications mobiles multiplateformes",
        "Applications avec interfaces utilisateur complexes",
        "MVPs et prototypes rapides",
        "Applications desktop cross-platform",
      ],
      popularity: 8,
      learningCurve: 7,
      performance: 9,
      communitySupport: 8,
      logo: "/Flutter.png",
      website: "https://flutter.dev",
    },
    {
      id: "reactnative",
      name: "React Native",
      category: "mobile",
      company: "Facebook",
      releaseDate: "Mars 2015",
      latestVersion: "0.73 (Février 2024)",
      description: "Framework pour construire des applications mobiles natives avec React et JavaScript.",
      strengths: [
        "Partage de code avec React web",
        "Grande communauté et écosystème",
        "Développement rapide",
        "Nombreuses bibliothèques disponibles",
        "Facilité pour les développeurs React",
      ],
      weaknesses: [
        "Performance parfois inférieure aux solutions natives",
        "Problèmes de mise à jour et de compatibilité",
        "Dépendance aux modules natifs",
        "Debugging parfois complexe",
      ],
      useCases: [
        "Applications mobiles multiplateformes",
        "Startups avec équipes React existantes",
        "Applications avec logique métier complexe",
        "Prototypes et MVPs",
      ],
      popularity: 8,
      learningCurve: 6,
      performance: 7,
      communitySupport: 9,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reactjs-qjfcN9NzXlVK40irJadvtMQqg76ZI2.png", // Using React logo for React Native
      website: "https://reactnative.dev",
    },
  ]

  // Update the news array to use the correct framework logos
  const news: News[] = [
    {
      id: "news1",
      title: "Flutter 3.22 : Amélioration des performances Web et Desktop",
      source: "Flutter Blog",
      date: "15 mai 2024",
      summary:
        "La dernière version de Flutter apporte des améliorations significatives pour les plateformes Web et Desktop, avec un focus sur les performances et l'expérience développeur.",
      tags: ["Flutter", "Mobile", "Web", "Desktop"],
      image: "/Flutter.png",
      url: "https://example.com/flutter-3-22",
      relatedFramework: "flutter",
    },
    {
      id: "news2",
      title: "React 19 : Nouvelles API plus simples pour les hooks",
      source: "React Blog",
      date: "10 avril 2024",
      summary:
        "React 19 introduit de nouvelles API pour simplifier l'utilisation des hooks et améliorer la performance des applications React.",
      tags: ["React", "JavaScript", "Frontend"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reactjs-qjfcN9NzXlVK40irJadvtMQqg76ZI2.png",
      url: "https://example.com/react-19",
      relatedFramework: "react",
    },
    {
      id: "news3",
      title: "Laravel 11 : Nouvelles fonctionnalités et améliorations",
      source: "Laravel News",
      date: "12 mars 2024",
      summary:
        "Laravel 11 apporte de nombreuses améliorations, notamment une meilleure gestion des exceptions, un nouveau système de validation et des performances optimisées.",
      tags: ["Laravel", "PHP", "Backend"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/redux-VygYouX62gK7BIop2dbWs77emtEJnW.png",
      url: "https://example.com/laravel-11",
      relatedFramework: "laravel",
    },
    {
      id: "news4",
      title: "Svelte 4.2 : Meilleures performances et nouvelles fonctionnalités",
      source: "Svelte Blog",
      date: "20 février 2024",
      summary:
        "Svelte 4.2 continue d'améliorer les performances et introduit de nouvelles fonctionnalités pour faciliter le développement d'applications web modernes.",
      tags: ["Svelte", "JavaScript", "Frontend"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Svelte-y0wkKOvEClYmr1s6jWRAY1MK8NSjC2.png",
      url: "https://example.com/svelte-4-2",
      relatedFramework: "svelte",
    },
    {
      id: "news5",
      title: "Angular vs React vs Vue : Comparaison 2024",
      source: "State of JS",
      date: "5 janvier 2024",
      summary:
        "Une analyse approfondie des trois principaux frameworks frontend en 2024, comparant leurs performances, leur écosystème et leur adoption par les entreprises.",
      tags: ["Angular", "React", "Vue", "Comparaison"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/angular-QiEreO4svfAY0XpYNNSVGBdVlAyPxZ.png",
      url: "https://example.com/framework-comparison-2024",
      relatedFramework: "react",
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
        Ma{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          Veille Technologique
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 p-6 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm"
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-purple-500" />
          Objectifs de la veille
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-lg bg-white/5">
            <ul className="list-disc list-inside text-gray-400">
              <li>Suivre les frameworks les plus utilisés et les plus récents</li>
              <li>Comprendre leurs différences, points forts et inconvénients</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-white/5">
            <ul className="list-disc list-inside text-gray-400">
              <li>Aider à choisir le bon framework selon les projets</li>
              <li>Rester à jour dans un secteur technologique en constante évolution</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Search className="h-5 w-5 text-purple-500" />
          Méthodologie
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-white/5">
            <h4 className="font-medium mb-2">Sources utilisées</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Developpez.com</li>
              <li>Le Monde Informatique</li>
              <li>ZDNet</li>
              <li>Stack Overflow Trends</li>
              <li>GitHub Trending</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-white/5">
            <h4 className="font-medium mb-2">Outils utilisés</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Feedly pour centraliser les flux RSS</li>
              <li>Google Alertes</li>
              <li>GitHub</li>
              <li>LinkedIn / Twitter</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-white/5">
            <h4 className="font-medium mb-2">Mots-clés utilisés</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>"framework 2024"</li>
              <li>"framework web populaire"</li>
              <li>"meilleur framework mobile"</li>
              <li>"React vs Angular vs Vue"</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 rounded-lg bg-white/5 flex items-center">
          <Clock className="h-5 w-5 text-purple-500 mr-2" />
          <span className="text-gray-400">Fréquence : 1 fois par semaine pendant 2 mois</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <BarChart className="h-6 w-6 text-purple-500" />
          Tendances actuelles (2024 - 2025)
        </h3>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="emerging">Émergents</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend">
            <FrameworkGrid frameworks={frameworks.filter((f) => f.category === "frontend")} news={news} />
          </TabsContent>

          <TabsContent value="backend">
            <FrameworkGrid frameworks={frameworks.filter((f) => f.category === "backend")} news={news} />
          </TabsContent>

          <TabsContent value="mobile">
            <FrameworkGrid frameworks={frameworks.filter((f) => f.category === "mobile")} news={news} />
          </TabsContent>

          <TabsContent value="emerging">
            <FrameworkGrid frameworks={frameworks.filter((f) => f.category === "emerging")} news={news} />
          </TabsContent>
        </Tabs>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-6">Actualités récentes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all h-full flex flex-col"
            >
              <div className="flex items-center p-4 border-b border-white/10">
                <div className="relative h-12 w-12 mr-4">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={`Logo ${article.tags[0]}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar size={12} className="mr-1" />
                  {article.date}
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{article.source}</Badge>
                </div>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-gray-400 mb-4 line-clamp-3">{article.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      <Tag size={10} />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30"
                >
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Lire l&apos;article
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-6 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm"
      >
        <h3 className="text-xl font-semibold mb-4">Conclusion et apports de la veille</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Ce que ça m'a apporté</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Mieux comprendre les frameworks les plus utilisés aujourd'hui</li>
              <li>Être capable de justifier le choix d'un framework dans un projet pro</li>
              <li>Me tenir à jour sur un sujet en constante évolution</li>
              <li>Avoir un regard critique sur les tendances (hype ≠ utilité réelle)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Et après ?</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Je continuerai à utiliser Feedly et GitHub pour rester informé</li>
              <li>J'aimerais approfondir Flutter et Svelte dans mes projets futurs</li>
              <li>Cette veille m'a aidé à faire des choix techniques dans mon stage de BTS</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

interface FrameworkGridProps {
  frameworks: Framework[]
  news: News[]
}

function FrameworkGrid({ frameworks, news }: FrameworkGridProps) {
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
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {frameworks.map((framework) => {
        const relatedNews = news.filter((n) => n.relatedFramework === framework.id)

        return (
          <motion.div key={framework.id} variants={item}>
            <Card className="overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all h-full flex flex-col">
              <div className="flex items-center p-4 border-b border-white/10">
                <div className="relative h-16 w-16 mr-4">
                  <Image
                    src={framework.logo || "/placeholder.svg"}
                    alt={framework.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{framework.name}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>{framework.company}</span>
                    <span className="mx-2">•</span>
                    <span>v{framework.latestVersion.split(" ")[0]}</span>
                  </div>
                </div>
              </div>

              <CardContent className="flex-grow p-4">
                <p className="text-gray-300 mb-4">{framework.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium mb-2">Points forts</h4>
                    <ul className="list-disc list-inside text-gray-400 text-sm">
                      {framework.strengths.slice(0, 3).map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                      {framework.strengths.length > 3 && (
                        <li className="text-purple-400">+{framework.strengths.length - 3} autres</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Points faibles</h4>
                    <ul className="list-disc list-inside text-gray-400 text-sm">
                      {framework.weaknesses.slice(0, 3).map((weakness, index) => (
                        <li key={index}>{weakness}</li>
                      ))}
                      {framework.weaknesses.length > 3 && (
                        <li className="text-purple-400">+{framework.weaknesses.length - 3} autres</li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Cas d'utilisation</h4>
                  <div className="flex flex-wrap gap-2">
                    {framework.useCases.map((useCase, index) => (
                      <Badge key={index} variant="outline">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400 mb-1">Popularité</span>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                        style={{ width: `${framework.popularity * 10}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400 mb-1">Courbe d'apprentissage</span>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-yellow-500"
                        style={{ width: `${framework.learningCurve * 10}%` }}
                      />
                    </div>
                  </div>
                </div>

                {relatedNews.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Actualités récentes</h4>
                    <ul className="list-disc list-inside text-gray-400 text-sm">
                      {relatedNews.slice(0, 2).map((news) => (
                        <li key={news.id} className="mb-1">
                          <a
                            href={news.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-400 transition-colors"
                          >
                            {news.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>

              <CardFooter className="p-4 border-t border-white/10">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30"
                >
                  <a
                    href={framework.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Site officiel
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
