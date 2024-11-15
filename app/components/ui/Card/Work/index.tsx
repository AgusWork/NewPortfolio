'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  category: string
  imageUrl: string
  link: string
  bgColor?: string
  aspectRatio?: string
}

export default function ProjectCard({ 
  title, 
  category, 
  imageUrl, 
  link,
  bgColor = "bg-white",
  aspectRatio = "aspect-[3/4]"
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden transition-all duration-300 hover:bg-gray-50 h-full`}
    >
      <Link href={link} className="block h-full">
        <div className={`${bgColor} rounded-2xl relative ${aspectRatio} w-full overflow-hidden`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={` transition-transform duration-500 ease-out group-hover:scale-105`}
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-teal-500 font-medium">
              {category}
            </span>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="transition-opacity duration-300"
            >
              <ArrowUpRight className="h-5 w-5 text-teal-500" />
            </motion.div>
          </div>
          
          <h3 className="text-xl font-semibold text-zinc-900">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  )
}