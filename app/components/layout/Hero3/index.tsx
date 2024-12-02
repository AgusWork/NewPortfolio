"use client"

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import Button, { Icon, InfiniteSlider, SubHeader, WoodenVideo } from "../../ui"
import { Playfair_Display } from "next/font/google"
import { useTheme } from "@/app/components/contexts/DarkThemeContext"

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function EnhancedHero() {
  const { theme } = useTheme()

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
    <div className={`${theme === "dark" ? "dark" : ""} h-screen`}>
      <div className="bg-background min-h-screen text-foreground transition-colors duration-300 dark:bg-background-dark dark:text-foreground-dark">
        <SubHeader />

        <section className="container mx-auto px-4 py-20 w-full h-full">
          <motion.div
            className="flex flex-col lg:flex-row w-full h-full p-10 bg-gradient-to-br from-teal-50 to-sky-50 dark:from-teal-900 dark:to-sky-900 rounded-3xl shadow-xl"
            {...boxAnimation}
          >
            <div className="flex flex-col flex-grow">
              <motion.div {...fadeIn} className="max-w-4xl">
                <h1
                  className={`${playFair.className} text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6`}
                >
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
              <WoodenVideo />
            </div>
          </motion.div>

          <motion.div className="mt-20" {...fadeIn}>
            <InfiniteSlider
              words={["User Interface", "Design", "Development", "Innovation"]}
              color1="text-yellow-800"
              color2="text-teal-500"
              speed={20}
              fadeCorners={false}
              circleColor={theme === "dark" ? "bg-white" : "bg-black"}
              fontSize="text-4xl"
              spacing="mx-14"
            />
          </motion.div>
        </section>
      </div>
    </div>
  )
}