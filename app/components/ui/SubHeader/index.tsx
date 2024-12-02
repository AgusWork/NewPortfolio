"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, Moon, Sun } from 'lucide-react'
import Link from "next/link"
import Button from "../../ui/Button"
import { useTheme } from "@/app/components/contexts/DarkThemeContext"
import SlideOutMenu from "../SlideOutMenu"

export default function SubHeader() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link href="/" className="text-3xl font-bold">
        Agustin Cordoba
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={toggleTheme}>
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <Button variant="outline">Get in Touch</Button>
        <button 
          className="border border-teal-500 py-2 px-3 text-teal-500 rounded-lg"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <SlideOutMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}