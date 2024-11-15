'use client'

import { motion } from 'framer-motion'
import  Button  from "@/app/components/ui/Button"
import { 
  Info, 
  MonitorSmartphone,
  BrainCircuit,
  Code,
  Box,
  CheckCircle2
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Locale } from '@/app/i18n-config'

// Service Card Component
const ServiceCard = ({ 
  title, 
  icon: Icon, 
  description, 
  services,
  moreDetails
}: { 
  title: string
  icon: any
  description: string
  services: string[]
  moreDetails: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="h-6 w-6 text-orange-500" />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <p className="text-gray-400 mb-6">
        {description}
      </p>
      <ul className="space-y-3 mb-6">
        {services.map((service, index) => (
          <motion.li
            key={service}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2 text-gray-300"
          >
            <CheckCircle2 className="h-5 w-5 text-orange-500" />
            {service}
          </motion.li>
        ))}
      </ul>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          variant="outline" 
          className="w-full hover:bg-orange-500 hover:text-white transition-colors"
        >
          {moreDetails}
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default function ServicesClient({ lang, messages }: { lang: Locale, messages: any }) {
  const router = useRouter()

  const toggleLanguage = () => {
    router.push(`/${lang === 'en' ? 'es' : 'en'}/services`)
  }

  const services = [
    {
      title: messages.uiUxDesign,
      icon: MonitorSmartphone,
      description: messages.uiUxDescription,
      services: [
        'Research and Analysis',
        'Structure and Navigation',
        'Launch and Maintenance',
        'Testing and Adjustment'
      ]
    },
    {
      title: messages.branding,
      icon: BrainCircuit,
      description: messages.brandingDescription,
      services: [
        'Discovery Phase',
        'Brand Strategy',
        'Brand Guidelines',
        'Brand Identity'
      ]
    },
    {
      title: messages.webDevelopment,
      icon: Code,
      description: messages.webDevDescription,
      services: [
        'Front-End Development',
        'Back-End Development',
        'E-Commerce Development',
        'Full-Stack Development'
      ]
    },
    {
      title: messages.productDesign,
      icon: Box,
      description: messages.productDesignDescription,
      services: [
        'Research and Analysis',
        'Industrial Design',
        'Product Launch Support',
        'Design for Manufacturing (DFM)'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-900 py-4 px-6 sticky top-0 z-10"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Info className="h-6 w-6 text-orange-500" />
            <span className="font-bold text-xl">Berrie</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {['HOME', 'ABOUT', 'SERVICES', 'PROJECT', 'BLOG', 'CONTACT'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className={`hover:text-orange-500 transition-colors ${
                  item === 'SERVICES' ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={toggleLanguage} variant="outline" size="sm">
              {lang === 'en' ? 'ES' : 'EN'}
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              {messages.getTemplate}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          {messages.title}
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              moreDetails={messages.moreDetails}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-zinc-900 py-8 mt-20"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2023 Berrie. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  )
}