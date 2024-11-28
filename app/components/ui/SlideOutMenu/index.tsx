"use client"

import { motion } from "framer-motion"
import { X } from 'lucide-react'
import Link from "next/link"
import { useCallback } from 'react'

interface SlideOutMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SlideOutMenu({ isOpen, onClose }: SlideOutMenuProps) {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-0 right-0 h-full bg-white dark:bg-gray-800 shadow-lg z-50 overflow-y-auto w-full md:w-4/5 lg:w-2/3 xl:w-1/2"
    >
      <div className="p-6">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <X className="h-6 w-6" />
        </button>
        <nav className="mt-8">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-2xl font-semibold text-gray-800 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400"
                  onClick={handleClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  )
}