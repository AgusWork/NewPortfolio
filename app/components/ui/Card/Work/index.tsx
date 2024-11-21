"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'
import { useTheme } from "@/app/components/contexts/DarkThemeContext"
import { useState, useRef, useEffect } from "react"

const hideCursorClass = `
  [&_*]:cursor-none
`

interface ProjectCardProps {
  title: string
  category: string
  imageUrl: string
  link: string
  bgColor?: string
  aspectRatio?: string
}

export default function CardWork({
  title,
  category,
  imageUrl,
  link,
  bgColor = "bg-white",
  aspectRatio = "aspect-[3/4]",
}: ProjectCardProps) {
  const { theme } = useTheme()
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener("mousemove", handleMouseMove)
      return () => {
        card.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden transition-all duration-300 h-full flex cursor-none ${hideCursorClass}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link href={link} className="block w-full">
        <div className={`${bgColor} rounded-2xl relative h-full w-full overflow-hidden`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div
            className={`absolute bottom-0 left-0 right-0 px-6 py-3 ${
              theme === "dark" ? "bg-black bg-opacity-70" : "bg-white bg-opacity-70"
            } z-10`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-teal-500 font-medium">{category}</span>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="transition-opacity duration-300"
              >
                <ArrowUpRight className="h-5 w-5 text-teal-500" />
              </motion.div>
            </div>
            <h3
              className={`text-xl font-semibold ${
                theme === "dark" ? "text-white" : "text-zinc-900"
              }`}
            >
              {title}
            </h3>
          </div>
        </div>
      </Link>
      <motion.div
        className="pointer-events-none absolute rounded-full bg-gray-600 text-white flex items-center justify-center text-sm font-medium"
        style={{
          width: 120,
          height: 120,
          x: cursorPosition.x ,
          y: cursorPosition.y ,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
      >
        Explore
      </motion.div>
    </motion.div>
  )
}