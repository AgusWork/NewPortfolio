"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const cards: Card[] = [
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
		<div className="py-10 md:py-20 px-6 xs:px-10 md:mb-20 sm:px-20 md:px-0  px-[15vw] 2xl:px-[20vw]">
			<div className="mx-auto md:px-4">
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
						<p className="ml-2">{t("headingEnd")}</p>
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
