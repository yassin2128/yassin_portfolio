"use client"

import { useEffect, useRef } from "react"

interface BackgroundProps {
  scrollY: number
}

export default function Background({ scrollY }: BackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create grid points
    const gridSize = 30
    const points: { x: number; y: number; size: number; color: string }[] = []

    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        const size = Math.random() * 1.5 + 0.5
        const color = Math.random() > 0.5 ? "#8B5CF6" : "#06B6D4"
        points.push({ x, y, size, color })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(10, 10, 20, 1)")
      gradient.addColorStop(1, "rgba(5, 5, 15, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid points
      points.forEach((point) => {
        ctx.beginPath()
        ctx.arc(
          point.x + Math.sin((scrollY + point.y) * 0.002) * 10,
          point.y + Math.cos((scrollY + point.x) * 0.002) * 10,
          point.size,
          0,
          Math.PI * 2,
        )
        ctx.fillStyle = point.color + "40" // Add transparency
        ctx.fill()
      })

      // Draw connecting lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const p1 = points[i]
          const p2 = points[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < gridSize * 2) {
            ctx.beginPath()
            ctx.moveTo(p1.x + Math.sin((scrollY + p1.y) * 0.002) * 10, p1.y + Math.cos((scrollY + p1.x) * 0.002) * 10)
            ctx.lineTo(p2.x + Math.sin((scrollY + p2.y) * 0.002) * 10, p2.y + Math.cos((scrollY + p2.x) * 0.002) * 10)
            ctx.stroke()
          }
        }
      }

      // Draw glowing orbs
      const numOrbs = 5
      for (let i = 0; i < numOrbs; i++) {
        const x = canvas.width * (i / numOrbs) + Math.sin(scrollY * 0.001 + i) * 100
        const y = canvas.height * 0.5 + Math.cos(scrollY * 0.001 + i) * 100
        const radius = 50 + Math.sin(scrollY * 0.002 + i) * 20

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, i % 2 === 0 ? "rgba(139, 92, 246, 0.3)" : "rgba(6, 182, 212, 0.3)")
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [scrollY])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}
