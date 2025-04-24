"use client";

import React, { useEffect, useState } from "react";
import GralLayout from "../GralLayout";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import projectsData from "../../data/projects/projects.json";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import { Project } from "../../types/cardLayout";

const playFair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
});

interface SimpleProject {
	title?: string;
	category?: string;
	image: {
		src: string;
		alt: string;
	};
	link: string;
}

interface ProjectCardProps {
	project: SimpleProject;
	locale: string;
}

interface CursorPosition {
	x: number;
	y: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState<boolean>(false);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setCursorPosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	return (
		<Link href={project.link} className="h-[70vh] w-full flex flex-col">
			<div
				className="relative w-full h-[75%] cursor-none"
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				onMouseMove={handleMouseMove}
			>
				<Image
					fill
					src={project.image.src}
					alt={project.image.alt}
					className="object-cover rounded-2xl"
				/>
				<div
					className={`${playFair.className} absolute flex flex-row items-center justify-center right-5 top-2 border border-white text-white rounded-2xl text-xs py-1 px-2`}
				>
					Live <div className="ml-1 bg-green-700 rounded-full h-2 w-2" />
				</div>
				<motion.div
					className="pointer-events-none absolute rounded-full bg-gray-600 text-white flex items-center justify-center text-sm font-medium"
					style={{
						width: 120,
						height: 120,
						x: cursorPosition.x - 60,
						y: cursorPosition.y - 60,
					}}
					animate={{
						opacity: isHovering ? 0.7 : 0,
						scale: isHovering ? 1 : 0.8,
					}}
					transition={{ duration: 0.2 }}
				>
					Explore
				</motion.div>
			</div>
			<div className="flex flex-col w-full h-[25%] justify-center">
				<h3 className={`${playFair.className} text-2xl mb-2 font-semibold`}>{project.title}</h3>
				<p className={`${playFair.className} text-sm text-gray-600`}>{project.category}</p>
			</div>
		</Link>
	);
};

const RelatedProjects = ({ id }: { id: string }) => {
	const t = useTranslations("Sections.RelatedSection");
	const locale = useLocale();
	const [randomProjects, setRandomProjects] = useState<SimpleProject[]>([]);

	useEffect(() => {
		const shuffleArray = <T,>(array: T[]): T[] => {
			const shuffled = [...array];
			for (let i = shuffled.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
			}
			return shuffled;
		};

		const selectedProjects = shuffleArray(projectsData.projects.filter(p => p.client.replace(/\s+/g, "-") != id))
			.slice(0, 2)
			.map((item: Project) => ({
				title: item.client,
				category: item.category,
				image: item.image,
				link: `/${locale}/projects/${item.client?.replace(/\s+/g, "-")}`,
			}));

		setRandomProjects(selectedProjects);
	}, [locale]);

	return (
		<GralLayout>
			<div className=" flex items-center justify-center text-center mb-[10vh]">
				<div
					className={`${playFair.className} text-3xl font-bold flex flex-col md:flex-row text-center items-center`}
				>
					{t("heading")}
					<p className="ml-4 text-4xl text-teal-500 italic">{t("headingColor")}</p>
				</div>
			</div>
			<div className="flex flex-col w-full h-full">
				{randomProjects.map((project, index) => (
					<ProjectCard key={index} project={project} locale={locale} />
				))}
			</div>
		</GralLayout>
	);
};

export default RelatedProjects;
