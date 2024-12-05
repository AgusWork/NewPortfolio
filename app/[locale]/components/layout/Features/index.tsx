"use client";  

import React from "react";  
import { motion } from "framer-motion";  
import { Code, Palette, Zap } from "lucide-react";  
import { ShortCard } from "../../ui";  
import { useTranslations } from "next-intl";

type IconType = "Code" | "Palette" | "Zap";  

interface Card {  
	icon: IconType;  
	title: string;  
	description: string;  
	color: string;  
  }  

const Features = () => {  
  const t = useTranslations("Sections.FeaturedSection");  
  
  const cards : Card[] = [  
    {  
      icon: "Code",  
      title: t("cleanCode.title"), 
      description: t("cleanCode.description"),  
      color: "text-teal-500",  
    },  
    {  
      icon: "Palette",  
      title: t("creativeDesign.title"),  
      description: t("creativeDesign.description"),  
      color: "text-yellow-400",  
    },  
    {  
      icon: "Zap",  
      title: t("fastPerformance.title"),  
      description: t("fastPerformance.description"),  
      color: "text-purple-500",  
    },  
  ];  

  const ICONS = {  
    Code: <Code className="h-12 w-12" />,  
    Palette: <Palette className="h-12 w-12" />,  
    Zap: <Zap className="h-12 w-12" />,  
  };  

  return (  
    <div className="py-10 md:py-20 px-6 xs:px-10 sm:px-20 md:px-0">  
      <div className="max-w-7xl mx-auto px-4">  
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">  
          {cards.map((card, index) => (  
            <motion.div  
              key={index}  
              initial={{ opacity: 0, x: -50 }}  
              whileInView={{ opacity: 1, x: 0 }}  
              viewport={{ once: true, amount: 0.3 }}  
              transition={{  
                duration: 0.8,  
                delay: index * 0.2,  
              }}  
            >  
              <ShortCard  
                icon={<div className={`${card.color}`}>{ICONS[card.icon]}</div>}  
                title={card.title}  
                description={card.description}  
              />  
            </motion.div>  
          ))}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Features;