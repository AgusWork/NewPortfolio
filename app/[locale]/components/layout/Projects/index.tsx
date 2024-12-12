"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { useTheme } from "@/app/[locale]/components/contexts/DarkThemeContext";
import GralLayout from "../GralLayout";
import { CardSection, CardWork } from "../../ui";
import projectsData from "../../data/projects/projects.json";
import { useLocale } from "next-intl";
import "../../styles/custom-scrollbar-sectionCard.css";

const playFair = Playfair_Display({ subsets: ["latin"] });

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

interface SelectedSectionProps {
  type: "work" | "practice";
  headingText: string;
  headingColorText: string;
  seeAllText: string;
  translationKey: string;
  justifyEnd?: boolean;
  underlineOriginRight?: boolean;
}

export default function SelectedSection({
  type,
  headingText,
  headingColorText,
  justifyEnd = false,
  underlineOriginRight = false,
}: SelectedSectionProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { theme } = useTheme();
  const locale = useLocale();

  const projectsItems = projectsData.projects
    .filter((p) => p.type == type)
    .map((item) => ({
      title: item.client,
      category: item.category,
      image: item.image,
      link:`/${locale}/projects/${item.client.replace(/\s+/g, "-")}`,
    }));

  return (
    <GralLayout className={`pt-10 md:pt-20 h-full`}>
      <motion.h2
        id={type}
        {...fadeIn}
        ref={ref}
        className={`${
          playFair.className
        } text-4xl md:text-5xl flex flex-col md:flex-row ${
          justifyEnd ? "md:justify-end" : ""
        } font-bold mb-12 relative pb-6`}
      >
        {headingText}{" "}
        <p className={`${playFair.className} ml-4 text-teal-500`}>
          {headingColorText}
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          style={{ originX: underlineOriginRight ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-full h-2 overflow-hidden"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 600 60"
            preserveAspectRatio="none"
          >
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
      </motion.h2>
      <div className="w-full h-[80vh] overflow-y-auto custom-scrollbar">
        <div className="hidden md:flex flex-col gap-8 w-full min-h-full">
          <CardSection projects={projectsItems} theme={theme} />
        </div>
        <div className="md:hidden flex flex-col gap-8 w-full min-h-full">
          {projectsItems.map((item, index) => (
            <div className="w-full h-[60vh]" key={index}>
              <CardWork
                category={item.category}
                image={item.image}
                link={item.link}
                title={item.title}
                theme={theme}
              />
            </div>
          ))}
        </div>
      </div>
    </GralLayout>
  );
}
