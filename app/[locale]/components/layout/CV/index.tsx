"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./comp";
import { useTranslations } from "next-intl";

export default function InteractiveCardsDesign() {
	const [hoveredCard, setHoveredCard] = useState<string | null>(null);
	const t = useTranslations("Sections.CvSection");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<div className="py-10 md:py-20 px-6 xs:px-10 md:mb-20 sm:px-20 md:px-0">
			<div className="max-w-7xl mx-auto px-4">
				<motion.div
					ref={ref}
					className="relative mb-12 "
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
					transition={{ duration: 0.7 }}
				>
					<motion.h2
						className={`flex flex-col md:flex-row text-center justify-center text-4xl font-bold text-center pb-3 dark:text-white text-black "
						`}
					>
						{t("heading")}
						<p className="text-teal-500 ml-2">{t("headingColor")}</p>
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
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 ">
					<motion.div
						className="w-full md:w-[50%] flex flex-col justify-between ml-auto bg-white dark:bg-transparent dark:border-teal-500 dark:border dark:text-teal-500 p-6 rounded-lg text-green-900 cursor-pointer dark:hover:text-white dark:border-gray-700 dark:hover:border-teal-800 dark:hover:bg-teal-800"
						onHoverStart={() => setHoveredCard("cv")}
						onHoverEnd={() => setHoveredCard(null)}
					>
						<div className="flex flex-col">
							<h3 className="text-xl font-semibold mb-2">{t("Card1.title")}</h3>
							<p className="mb-4">{t("Card1.description")}</p>
						</div>
						<Button href={t("Card1.href")}/>
					</motion.div>
					<motion.div
						className="w-full md:w-[50%] flex flex-col justify-between mr-auto bg-white dark:bg-transparent dark:border-teal-500 dark:border dark:text-teal-500 p-6 rounded-lg text-green-900 cursor-pointer dark:hover:text-white dark:border-gray-700 dark:hover:border-teal-800 dark:hover:bg-teal-800"
						onHoverStart={() => setHoveredCard("letter")}
						onHoverEnd={() => setHoveredCard(null)}
					>
						<div className="flex flex-col">
							<h3 className="text-xl font-semibold mb-2">{t("Card2.title")}</h3>
							<p className="mb-4">{t("Card2.description")}</p>
						</div>
						<Button href={t("Card2.href")}/>
					</motion.div>
					{hoveredCard && (
						<motion.div
							className="absolute bottom-4 right-4 bg-white p-4 rounded-md shadow-lg"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
						>
							<p className="text-sm text-gray-600">
								{hoveredCard === "cv"
									? "Vista previa del CV: Experiencia en desarrollo web, habilidades en React, Node.js..."
									: "Vista previa de la carta: Apasionado desarrollador buscando nuevos desafíos..."}
							</p>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
}
