"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dès que possible.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
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
        Me <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Contacter</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-white/10 bg-black/50 backdrop-blur-sm h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:yassinemerzak8@gmail.com"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      yassinemerzak8@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <a href="tel:+33753987374" className="text-gray-400 hover:text-white transition-colors">
                      07 53 98 73 74
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Localisation</h4>
                    <p className="text-gray-400">6 place Pablo Picasso, 93160 Noisy-le-Grand</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Réseaux sociaux</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-3 rounded-full hover:from-purple-500/30 hover:to-cyan-500/30 transition-all"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-3 rounded-full hover:from-purple-500/30 hover:to-cyan-500/30 transition-all"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-3 rounded-full hover:from-purple-500/30 hover:to-cyan-500/30 transition-all"
                  >
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-white/10 bg-black/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-white/5 border-white/10 focus:border-purple-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Envoyer le message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
