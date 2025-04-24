"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function ScrollBehavior({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Eliminamos el backdrop-blur-md de aquí para aplicarlo solo a los elementos internos
  return (
    <div className={`fixed right-0 top-0 w-full z-40 bg-transparent ${isScrolled ? "bg-opacity-40" : ""}`}>
      {children}
    </div>
  )
}
