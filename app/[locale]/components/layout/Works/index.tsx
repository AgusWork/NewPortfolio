"use client";

import { motion, useInView } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import React from "react";
import { CardSection, CardWork } from "../../ui";
import GralLayout from "../GralLayout";
import { useTheme } from "@/app/[locale]/components/contexts/DarkThemeContext";
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import worksData from "../../data/works/works.json";
import { useLocale } from 'next-intl';
import "../../styles/custom-scrollbar-sectionCard.css";

const playFair = Playfair_Display({ subsets: ["latin"] });

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

export default function SelectedWorkSection() {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const { theme } = useTheme();
	const t = useTranslations("Sections.SelectedPracticeSection");
	const locale = useLocale();

	const keys = ["ecommerce", "mobileBanking", "portfolio", "taskManagement"] as const;

	const works = worksData.work.map((work) => ({
		title: work.client,
		category: work.category,
		imageUrl: work.image,
		link: `/${locale}/works/${work.client.replace(/\s+/g, '-')}`,
	}));
	return (
		<GralLayout className={`pt-10 md:pt-20 h-full`}>
			<motion.h2
				id="works"
				{...fadeIn}
				ref={ref}
				className={`${playFair.className} text-4xl md:text-5xl flex flex-col md:flex-row  font-bold mb-12 relative pb-6`}
			>
				Selected <p className={`${playFair.className} ml-4 text-teal-500`}>Work</p>
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: isInView ? 1 : 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					style={{ originX: 0 }}
					className="absolute bottom-0 left-0 w-full h-2 overflow-hidden"
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
			</motion.h2>
			<div className="w-full h-[80vh] overflow-y-auto custom-scrollbar ">
				<div className="hidden md:flex flex-col gap-8 w-full min-h-full">
					<CardSection className="" projects={works} theme={theme} />
				</div>
				<div className="md:hidden flex flex-col gap-8 w-full  min-h-full">
					{works.map((p) => (
						<div className=" w-full h-[60vh]" key={p.title}>
							<CardWork
								category={p.category}
								imageUrl={p.imageUrl}
								link={p.link}
								title={p.title}
								theme={theme}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="h-60 w-full flex items-center justify-center">
				<motion.button
					whileTap={{ scale: 0.95 }}
					className={`
            relative overflow-hidden rounded-full text-bold text-lg flex items-center justify-center
            py-3 px-6 transition-all duration-300 ease-in-out
            ${
							theme === "dark"
								? "bg-teal-600 text-white hover:bg-white hover:text-teal-600 "
								: "bg-teal-500 text-white hover:bg-white hover:text-teal-600 hover:border hover:border-teal-600"
						}
            focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50
          `}
				>
					<span className="relative z-10">Ver Todos</span>
					<FaArrowRight className="ml-2 h-5 w-5 relative z-10" />
					<motion.div
						className="absolute inset-0 bg-white"
						initial={{ x: "100%" }}
						whileHover={{ x: 0 }}
						transition={{ duration: 0.3 }}
					/>
				</motion.button>
			</div>
		</GralLayout>
	);
}
