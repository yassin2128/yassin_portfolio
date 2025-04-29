"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Tag, Rss } from "lucide-react"
import Image from "next/image"

interface Article {
  id: string
  title: string
  source: string
  date: string
  summary: string
  tags: string[]
  image: string
  url: string
  category: "cybersecurity" | "web" | "mobile" | "ai"
}

export default function TechWatch() {
  const articles: Article[] = [
    {
      id: "article1",
      title: "Les dernières vulnérabilités découvertes dans les frameworks PHP",
      source: "PHP Security",
      date: "15 mars 2024",
      summary:
        "Analyse des récentes failles de sécurité découvertes dans les frameworks PHP populaires et comment les corriger.",
      tags: ["PHP", "Sécurité", "Laravel", "Symfony"],
      image: "/placeholder.svg?height=400&width=600",
      url: "https://example.com/article1",
      category: "cybersecurity",
    },
    {
      id: "article2",
      title: "React 19 : Les nouvelles fonctionnalités à connaître",
      source: "React Blog",
      date: "2 février 2024",
      summary:
        "Découvrez les nouvelles fonctionnalités de React 19 et comment elles peuvent améliorer vos applications web.",
      tags: ["React", "JavaScript", "Frontend"],
      image: "/placeholder.svg?height=400&width=600",
      url: "https://example.com/article2",
      category: "web",
    },
    {
      id: "article3",
      title: "Flutter vs React Native en 2024 : Que choisir ?",
      source: "Mobile Dev Weekly",
      date: "20 janvier 2024",
      summary:
        "Comparaison détaillée entre Flutter et React Native pour le développement d'applications mobiles en 2024.",
      tags: ["Flutter", "React Native", "Mobile"],
      image: "/placeholder.svg?height=400&width=600",
      url: "https://example.com/article3",
      category: "mobile",
    },
    {
      id: "article4",
      title: "L'impact de l'IA générative sur le développement web",
      source: "AI Tech Review",
      date: "5 avril 2024",
      summary: "Comment l'intelligence artificielle générative transforme les méthodes de développement web modernes.",
      tags: ["IA", "Web", "Innovation"],
      image: "/placeholder.svg?height=400&width=600",
      url: "https://example.com/article4",
      category: "ai",
    },
    {
      id: "article5",
      title: "Les meilleures pratiques pour sécuriser une API REST",
      source: "API Security Journal",
      date: "12 mars 2024",
      summary: "Guide complet sur la sécurisation des API REST contre les attaques les plus courantes.",
      tags: ["API", "Sécurité", "REST"],
      image: "/placeholder.svg?height=400&width=600",
      url: "https://example.com/article5",
      category: "cybersecurity",
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
          <Rss className="h-5 w-5 text-purple-500" />
          Mes sources de veille
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-white/5">
            <h4 className="font-medium mb-2">Outils</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Feedly</li>
              <li>Twitter/X</li>
              <li>GitHub Trending</li>
              <li>Newsletter spécialisées</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-white/5">
            <h4 className="font-medium mb-2">Sujets suivis</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Cybersécurité</li>
              <li>Frameworks Web</li>
              <li>Développement mobile</li>
              <li>Intelligence artificielle</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-white/5">
            <h4 className="font-medium mb-2">Sites de référence</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>MDN Web Docs</li>
              <li>CSS-Tricks</li>
              <li>Dev.to</li>
              <li>Medium</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="cybersecurity">Cybersécurité</TabsTrigger>
          <TabsTrigger value="web">Web</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="ai">IA</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ArticleGrid articles={articles} />
        </TabsContent>

        <TabsContent value="cybersecurity">
          <ArticleGrid articles={articles.filter((a) => a.category === "cybersecurity")} />
        </TabsContent>

        <TabsContent value="web">
          <ArticleGrid articles={articles.filter((a) => a.category === "web")} />
        </TabsContent>

        <TabsContent value="mobile">
          <ArticleGrid articles={articles.filter((a) => a.category === "mobile")} />
        </TabsContent>

        <TabsContent value="ai">
          <ArticleGrid articles={articles.filter((a) => a.category === "ai")} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ArticleGridProps {
  articles: Article[]
}

function ArticleGrid({ articles }: ArticleGridProps) {
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
      {articles.map((article) => (
        <motion.div key={article.id} variants={item}>
          <Card className="overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">{article.source}</Badge>
                <div className="flex items-center text-xs text-gray-400">
                  <Calendar size={12} className="mr-1" />
                  {article.date}
                </div>
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
        </motion.div>
      ))}
    </motion.div>
  )
}
