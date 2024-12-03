'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/app/components/contexts/DarkThemeContext'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  const { theme } = useTheme()

  return (
    <section className="py-16 md:py-32 px-10 md:px-32 bg-gray-50 rounded-t-[10%]">
      <div className=" mx-auto">
        <motion.h1 
          className={`text-5xl md:text-9xl font-bold mb-24 bg-gradient-to-r ${
            theme === 'dark' 
              ? 'from-gray-100 to-gray-500' 
              : 'from-gray-700 to-gray-400'
          } bg-clip-text text-transparent`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let&apos;s Work Together
        </motion.h1>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={`text-lg font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Email
            </h2>
            <Link 
              href="mailto:agustin.cordoba.work@gmail.com"
              className={`text-lg md:text-2xl text-gray-900 hover:text-gray-600 transition-colors duration-200`}
            >
              agustin.cordoba.work@gmail.com
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className={`text-lg font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Socials
            </h2>
            <div className="flex space-x-6">
              <Link 
                href="https://www.linkedin.com/in/agustin-maria-cordoba/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl md:text-2xl flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-200`}
              >
                <FaLinkedin className="w-6 h-6 mr-2" />
                LinkedIn
              </Link>
              <Link 
                href="https://github.com/AgusWork"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl md:text-2xl flex items-center 
               text-gray-900 hover:text-gray-600
                 transition-colors duration-200`}
              >
                <FaGithub className="w-6 h-6 mr-2" />
                Github
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}