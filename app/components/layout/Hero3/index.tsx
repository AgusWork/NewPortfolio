'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, Moon, Sun, ArrowRight, Code, Palette, Zap } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import Button, { Icon, InfiniteSlider } from "../../ui"
import { Playfair_Display } from "next/font/google"
import { useTheme } from '@/app/components/contexts/DarkThemeContext'

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function EnhancedHero() {
  const { theme, toggleTheme } = useTheme()

  // Animations
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const boxAnimation = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, delay: 0.2 },
  }

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="bg-background min-h-screen text-foreground transition-colors duration-300 dark:bg-background-dark dark:text-foreground-dark">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">
            Agustin Cordoba
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="outline">Get in Touch</Button>
            <Button variant="ghost">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>

        <section className="container mx-auto px-4 py-20 w-full h-full">
          <motion.div 
            className="flex flex-col lg:flex-row w-full h-full p-10 bg-gradient-to-br from-teal-50 to-sky-50 dark:from-teal-900 dark:to-sky-900 rounded-3xl shadow-xl"
            {...boxAnimation}
          >
            <div className="flex flex-col flex-grow">
              <motion.div {...fadeIn} className="max-w-4xl">
                <h1 className={`${playFair.className} text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6`}>
                  Front End <span className="text-teal-500">Developer</span>
                </h1>
                <motion.p {...fadeIn} className="mt-6 text-xl text-muted-foreground">
                  I design visually captivating and highly intuitive websites that empower
                  businesses to stand out and engage their audience effectively.
                </motion.p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap justify-start gap-6 mt-8"
              >
                <div className="flex items-center gap-2">
                  <Icon name="award" className="text-teal-500 h-6 w-6" />
                  <span className="text-xl text-muted-foreground">3 Years of Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="globe" className="text-yellow-400 h-6 w-6" />
                  <span className="text-xl text-muted-foreground">Global Projects</span>
                </div>
              </motion.div>
              <motion.div {...fadeIn} className="mt-12">
                <Button className="text-lg px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white">
                  View My Work <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
            <div className="lg:w-1/3 flex items-center justify-center mt-12 lg:mt-0">
              <motion.div 
                className="relative h-80 w-80 rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image src="/FotoCV1.jpeg" alt="Profile" fill className="object-cover" />
              </motion.div>
            </div>
          </motion.div>

          {/* <motion.div className="mt-20" {...fadeIn}>
            <InfiniteSlider
              words={["User Interface", "Design", "Development", "Innovation"]}
              color1="text-yellow-800"
              color2="text-teal-500"
              speed={20}
              fadeCorners={false}
              circleColor={theme === 'dark' ? "bg-white" : "bg-black"}
              fontSize="text-4xl"
              spacing="mx-14"
            />
          </motion.div> */}

          <motion.div 
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Code className="text-teal-500 h-12 w-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Clean Code</h3>
              <p className="text-muted-foreground">I write clean, maintainable, and efficient code that scales with your project.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Palette className="text-yellow-400 h-12 w-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Creative Design</h3>
              <p className="text-muted-foreground">I create visually stunning designs that capture your brand's essence.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Zap className="text-purple-500 h-12 w-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Fast Performance</h3>
              <p className="text-muted-foreground">I optimize for speed to ensure your website loads quickly and runs smoothly.</p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}