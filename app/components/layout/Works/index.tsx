"use client";

import { motion, useInView } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import React from "react";
import { CardWork } from "../../ui";
import GralLayout from "../GralLayout";
import { useTheme } from "@/app/components/contexts/DarkThemeContext";
import { FaArrowRight } from "react-icons/fa";

const playFair = Playfair_Display({ subsets: ["latin"] });

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

const projects = [
	{
		title: "E-commerce Platform",
		category: "Web Development",
		imageUrl: "/mockup/BukmaMob.png",
		link: "#",
		bgColor: "bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300",
	},
	{
		title: "Mobile Banking App",
		category: "UI Design",
		imageUrl: "/mockup/MammMob0.jpeg",
		link: "#",
		bgColor: "bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400",
	},
	{
		title: "Portfolio Website",
		category: "Web Development",
		imageUrl: "/mockup/BuassoMob.png",
		link: "#",
	},
	{
		title: "Task Management Tool",
		category: "UI/UX Design",
		imageUrl: "/escribania/EscBuasso1.jpg",
		link: "#",
	},
];

export default function SelectedWorkSection() {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const { theme } = useTheme();

	return (
		<GralLayout
			className={`pt-20 h-full`}
			// ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}
		>
			<motion.h2
				{...fadeIn}
				ref={ref}
				className={`${playFair.className} text-5xl flex flex-row font-bold mb-12 relative pb-6`}
			>
				Selected <p className={`${playFair.className} ml-4 text-teal-500`}>Work</p>
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: isInView ? 1 : 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					style={{ originX: 0 }}
					className="absolute bottom-0 left-0 w-[50%] h-2 overflow-hidden"
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
			<div className="flex flex-row gap-8 md:gap-12 w-full flex-grow overflow-hidden h-[80vh]">
				<div className="md:row-span-2 h-full w-full">
					<CardWork
						category={projects[1].category}
						imageUrl={projects[1].imageUrl}
						link={projects[1].link}
						title={projects[1].title}
						bgColor={
							theme === "dark"
								? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600"
								: projects[1].bgColor
						}
						aspectRatio="aspect-[2/3]"
					/>
				</div>
				<div className="flex flex-col justify-between w-full h-full gap-4">
					<div className="h-full">
						<CardWork
							category={projects[0].category}
							imageUrl={projects[0].imageUrl}
							link={projects[0].link}
							title={projects[0].title}
							bgColor={
								theme === "dark"
									? "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500"
									: projects[0].bgColor
							}
							aspectRatio="aspect-[16/9]"
						/>
					</div>
					<div className="h-full">
						<CardWork
							category={projects[2].category}
							imageUrl={projects[2].imageUrl}
							link={projects[2].link}
							title={projects[2].title}
							bgColor={
								theme === "dark"
									? "bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400"
									: "bg-gray-200"
							}
							aspectRatio="aspect-[16/9]"
						/>
					</div>
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
