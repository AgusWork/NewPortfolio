'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { 
  FaReact, FaVuejs, FaAngular, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaJava, 
  FaPhp, FaDatabase, FaCode, FaServer
} from 'react-icons/fa'
import { SiTypescript, SiCsharp, SiRuby, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiSqlite } from 'react-icons/si'
import { IconType } from 'react-icons'
import { useTheme } from '@/app/components/contexts/DarkThemeContext'

interface Language {
  name: string
  icon: IconType
  category: string
}

interface SkillCategory {
  name: string
  languages: Language[]
  icon: IconType
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: FaCode,
    languages: [
      { name: "React", icon: FaReact, category: "Frontend" },
      { name: "Vue", icon: FaVuejs, category: "Frontend" },
      { name: "Angular", icon: FaAngular, category: "Frontend" },
      { name: "HTML", icon: FaHtml5, category: "Frontend" },
      { name: "CSS", icon: FaCss3Alt, category: "Frontend" },
      { name: "JavaScript", icon: FaJs, category: "Frontend" },
      { name: "TypeScript", icon: SiTypescript, category: "Frontend" },
    ],
  },
  {
    name: "Backend",
    icon: FaServer,
    languages: [
      { name: "Node.js", icon: FaNodeJs, category: "Backend" },
      { name: "Python", icon: FaPython, category: "Backend" },
      { name: "Java", icon: FaJava, category: "Backend" },
      { name: "C#", icon: SiCsharp, category: "Backend" },
      { name: "Ruby", icon: SiRuby, category: "Backend" },
      { name: "PHP", icon: FaPhp, category: "Backend" },
    ],
  },
  {
    name: "Database",
    icon: FaDatabase,
    languages: [
      { name: "MySQL", icon: SiMysql, category: "Database" },
      { name: "MongoDB", icon: SiMongodb, category: "Database" },
      { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
      { name: "Redis", icon: SiRedis, category: "Database" },
      { name: "SQLite", icon: SiSqlite, category: "Database" },
    ],
  },
]

const LanguageItem: React.FC<{ language: Language }> = ({ language }) => {
  const { theme } = useTheme()
  return (
    <li className="flex items-center space-x-3 py-2">
      <language.icon className={`w-6 h-6 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />
      <span>{language.name}</span>
    </li>
  )
}

const SkillCard: React.FC<{ category: SkillCategory, index: number }> = ({ category, index }) => {
  const [showAll, setShowAll] = useState(false)
  const displayedLanguages = showAll ? category.languages : category.languages.slice(0, 5)
  const { theme } = useTheme()

  return (
    <motion.div
      className={`p-6 rounded-2xl border transition-colors duration-700 cursor-pointer ${theme === 'dark' ? 'border-gray-700 hover:border-teal-800 hover:bg-teal-800 ' : 'border-2 border-white hover:border-teal-800 hover:bg-teal-800 hover:text-white'} shadow-sm`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2 // Staggered delay based on index
      }}
    >
      <div className="flex items-center space-x-3 mb-4">
        <category.icon className={`w-8 h-8 ${theme === 'dark' ? 'text-teal-400 ' : 'text-teal-600'}`} />
        <h3 className="text-2xl font-bold">{category.name}</h3>
      </div>
      <ul className="space-y-2 mb-4">
        {displayedLanguages.map((lang) => (
          <LanguageItem key={lang.name} language={lang} />
        ))}
      </ul>
      {category.languages.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className={`${theme === 'dark' ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'} transition-colors duration-200 flex items-center`}
        >
          {showAll ? 'See Less' : 'See More'}
          <ChevronDownIcon
            className={`w-5 h-5 ml-1 transform transition-transform duration-200 ${
              showAll ? 'rotate-180' : ''
            }`}
          />
        </button>
      )}
    </motion.div>
  )
}

const LanguageSkills: React.FC = () => {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className={`py-20  ${theme === 'dark' ? '' : ''}`}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          ref={ref}
          className="relative mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className={`text-4xl font-bold text-center pb-3 ${theme === 'dark' ? 'text-white ' : 'text-black '}`}
          >
            My Language Skills
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/4 w-1/2 h-2 overflow-hidden "
          >
            <svg className="w-full h-full" viewBox="0 0 600 60" preserveAspectRatio="none">
              <motion.path
                d="M0,0 C150,60 450,60 600,0 L600,60 L0,60 Z"
                fill="currentColor"
                className="text-teal-500"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isInView ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LanguageSkills