"use client";

import type React from "react";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	Code,
	Globe,
	Layers,
	Monitor,
	User,
	Briefcase,
	MessageSquare,
	Languages,
} from "lucide-react";
import { useInView } from "framer-motion";
import { useScrollToTop } from "@/app/[locale]/hooks/use-scroll-to-top";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { InfiniteTextSlider } from "../../ui";
import { useTheme } from "../../contexts/DarkThemeContext";

export default function HeroSection() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const profileContainerRef = useRef<HTMLDivElement>(null);
	const [containerRect, setContainerRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const initialRenderRef = useRef(true);
	useScrollToTop();
	
	const locale = useLocale();
	const { theme } = useTheme();
	const t2 = useTranslations("Components.SubHeader");
	const t = useTranslations("Sections.HomeSection");
	const pathname = usePathname();

	const fadeIn = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	const [navLinks, setNavLinks] = useState<{ name: string; href: string; icon: React.ReactNode }[]>(
		[]
	);

	const keys = ["userInterface", "design", "development", "innovation", "responsive"] as const;

	const sliderWords = keys.map((key) => t(`sliderWords.${key}.title`));

	useEffect(() => {
		const linkProjectName = locale == "es" ? "Proyectos" : "Projects";

		const links = [
			{
				name: t2("links.home.about.name"),
				href: t2("links.home.about.href"),
				icon: <User size={20} className="group-hover:scale-110 transition-transform" />,
			},
			{
				name: linkProjectName,
				href: t2("links.home.work.href"),
				icon: <Briefcase size={20} className="group-hover:scale-110 transition-transform" />,
			},
			{
				name: t2("links.home.languages.name"),
				href: t2("links.home.languages.href"),
				icon: <Languages size={20} className="group-hover:scale-110 transition-transform" />,
			},
			{
				name: t2("links.home.contact.name"),
				href: t2("links.home.contact.href"),
				icon: <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />,
			},
		];

		setNavLinks(links);
	}, [pathname, t2, locale]);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		const resetPosition = () => {
			if (profileContainerRef.current) {
				profileContainerRef.current.style.transform = "translate(0, 0)";
			}
		};
		resetPosition();

		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	useLayoutEffect(() => {
		if (profileContainerRef.current) {
			const updateRect = () => {
				const rect = profileContainerRef.current?.getBoundingClientRect();
				if (rect) {
					setContainerRect({
						x: rect.left,
						y: rect.top,
						width: rect.width,
						height: rect.height,
					});
				}
			};

			updateRect();
			const timer = setTimeout(updateRect, 100);

			window.addEventListener("scroll", updateRect);
			window.addEventListener("resize", updateRect);
			return () => {
				window.removeEventListener("resize", updateRect);
				window.removeEventListener("scroll", updateRect);
				clearTimeout(timer);
			};
		}
	}, []);

	const calculateRelativePosition = () => {
		if (!isHovering) return { x: 0, y: 0 };
		if (initialRenderRef.current) {
			initialRenderRef.current = false;
			return { x: 0, y: 0 };
		}

		const scrollX = window.scrollX;
		const scrollY = window.scrollY;

		const centerX = containerRect.x + containerRect.width / 2;
		const centerY = containerRect.y + containerRect.height / 2;

		const relX = (mousePosition.x + scrollX - (centerX + scrollX)) / (containerRect.width / 2);
		const relY = (mousePosition.y + scrollY - (centerY + scrollY)) / (containerRect.height / 2);

		return {
			x: relX * 10,
			y: relY * 10,
		};
	};

	const relativePosition = calculateRelativePosition();

	const technologies = [
		{ name: "Next.Js", icon: <Layers size={20} /> },
		{ name: "React", icon: <Layers size={20} /> },
		{ name: "Node.Js", icon: <Code size={20} /> },
		{ name: "Mobile", icon: <Monitor size={20} /> },
		{ name: "Jest", icon: <Globe size={20} /> },
	];

	const inViewRef = useRef(null);
	const isInView = useInView(inViewRef);

	useEffect(() => {
		if (isInView && profileContainerRef.current) {
			setMousePosition({ x: 0, y: 0 });
			setIsHovering(false);

			const rect = profileContainerRef.current.getBoundingClientRect();
			setContainerRect({
				x: rect.left,
				y: rect.top,
				width: rect.width,
				height: rect.height,
			});
		}
	}, [isInView]);

	const handleScrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="relative w-full overflow-hidden py-[5vh] flex items-center" ref={inViewRef}>
			<div className="relative z-10 flex flex-col items-center justify-center w-full px-[10vw] py-[5vh]">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="w-full max-w-6xl 2xl:max-w-full mx-auto grid md:grid-cols-2 gap-8 md:gap-6 lg:gap-12 items-center h-full"
				>
					<div className="space-y-4 md:space-y-6 order-1 md:order-1 text-center md:text-left">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							className="space-y-2"
						>
							<div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium">
								{t("opositeheading")}
							</div>
							<h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white leading-tight">
								{t("heading")} <span className="text-teal-400">{t("headingColor")}</span>
							</h2>
						</motion.div>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.5 }}
							className="text-gray-700 dark:text-white text-base md:text-base lg:text-lg max-w-xl mx-auto md:mx-0"
						>
							{t("subheading")}
						</motion.p>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.5 }}
							className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start"
						>
							<div className="flex items-center gap-2 dark:bg-slate-800/50 px-3 py-1.5 rounded-full border border-teal-500 dark:border-slate-700/50">
								<div className="w-2 h-2 rounded-full bg-teal-500"></div>
								<span className="text-gray-600 dark:text-white text-sm">{t("experience")}</span>
							</div>
							<div className="flex items-center gap-2 dark:bg-slate-800/50 px-3 py-1.5 rounded-full border border-teal-500 dark:border-slate-700/50">
								<div className="w-2 h-2 rounded-full bg-teal-500"></div>
								<span className="text-gray-600 dark:text-white text-sm">{t("projects")}</span>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7, duration: 0.5 }}
							className="hidden md:flex flex-wrap gap-2 pt-4 justify-center md:justify-start"
						>
							{technologies.map((tech, index) => (
								<button
									key={index}
									className="px-3 py-1.5 bg-teal-500 hover:bg-teal-400 hover:scale-110 dark:bg-slate-800/70 dark:hover:bg-slate-700/80 text-white text-sm rounded-md border border-slate-700/50 hover:border-teal-500/30 transition-all flex items-center gap-2 cursor-pointer select-text"
								>
									{tech.icon}
									<span>{tech.name}</span>
								</button>
							))}
						</motion.div>
					</div>

					{/* Side Component */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className="relative flex justify-center  items-center 2xl:justify-end order-2 md:order-2  h-auto "
						ref={profileContainerRef}
						onMouseEnter={() => setIsHovering(true)}
						onMouseLeave={() => setIsHovering(false)}
						style={{
							transition: "",
						}}
					>
						<motion.div
							className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 2xl:w-80 2xl:h-80 rounded-full border-4 border-teal-400/70 dark:border-teal-500/30 p-2 dark:bg-slate-900/50  shadow-xl"
							animate={{
								x: isHovering ? relativePosition.x : 0,
								y: isHovering ? relativePosition.y : 0,
							}}
							transition={{ type: "spring", stiffness: 150, damping: 15 }}
						>
							<div className="w-full h-full rounded-full overflow-hidden  relative">
								<div className="w-full h-full overflow-hidden">
									<motion.div
										className="w-[110%] h-[110%] absolute -top-[5%] -left-[5%]"
										transition={{ type: "spring", stiffness: 150, damping: 15 }}
									>
										<Image
											src="/placeholder.svg?height=300&width=300"
											alt="Agustín Córdoba"
											width={300}
											height={300}
											className="w-full h-full object-cover"
										/>
									</motion.div>
								</div>

								<motion.div
									className="absolute left-0 w-full h-full bottom-0 rounded-full overflow-hidden border-2 border-teal-500/50 shadow-lg"
									initial={{ x: 0, y: 0 }}
									animate={{
										x: isHovering ? relativePosition.x * 1.5 : 0,
										y: isHovering ? relativePosition.y * 1.5 : 0,
									}}
									transition={{ type: "spring", stiffness: 300, damping: 20 }}
									style={{
										transformOrigin: "center center",
									}}
								>
									<div
										className="w-full h-full z-10"
										style={{
											backgroundImage:
												"url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGs2OW96cnFhOXNkZWt1YTJ0cjNzeXk5azN5ZnpuMjExZjAwbGc5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JLZUjrwPQbTW25pYwu/giphy.gif')",
											backgroundSize: "cover",
											backgroundPosition: "center",
											transform: `scale(1.2) translate(${
												isHovering ? -relativePosition.x * 0.05 : 0
											}px, ${isHovering ? -relativePosition.y * 0.05 : 0}px)`,
											transition: "transform 0.3s ease-out",
										}}
									/>
								</motion.div>
							</div>

							{navLinks.length > 0 && (
								<>
									{/* Enlace superior */}
									<button
										onClick={() => handleScrollToSection(navLinks[0]?.href || "#")}
										className="absolute hover:scale-12
										0 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-slate-800 hover:bg-teal-400 text-teal-400 hover:text-slate-900 p-3 rounded-full shadow-lg border border-slate-700/50 flex items-center gap-2 cursor-pointer group"
										style={{
											transform: `translate(-50%, -50%) translate(${
												isHovering ? relativePosition.x * 0.5 : 0
											}px, ${isHovering ? relativePosition.y * 0.5 : 0}px)`,
											transition:
												"transform 0.3s ease-out, background-color 0.2s ease, color 0.2s ease",
										}}
									>
										{navLinks[0]?.icon}
										<span className="text-xs font-medium text-white group-hover:text-slate-900 whitespace-nowrap transition-colors">
											{navLinks[0]?.name}
										</span>
									</button>

									{/* Enlace derecho */}
									<button
										onClick={() => handleScrollToSection(navLinks[1]?.href || "#")}
										className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 bg-slate-800 hover:bg-teal-400 text-teal-400 hover:text-slate-900 p-3 rounded-full shadow-lg border border-slate-700/50 flex items-center gap-2 cursor-pointer group"
										style={{
											transform: `translate(50%, -50%) translate(${
												isHovering ? relativePosition.x * 0.7 : 0
											}px, ${isHovering ? relativePosition.y * 0.3 : 0}px)`,
											transition:
												"transform 0.3s ease-out, background-color 0.2s ease, color 0.2s ease",
										}}
									>
										{navLinks[1]?.icon}
										<span className="text-xs font-medium text-white group-hover:text-slate-900 whitespace-nowrap transition-colors">
											{navLinks[1]?.name}
										</span>
									</button>

									{/* Enlace inferior */}
									<button
										onClick={() => handleScrollToSection(navLinks[2]?.href || "#")}
										className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-slate-800 hover:bg-teal-400 text-teal-400 hover:text-slate-900 p-3 rounded-full shadow-lg border border-slate-700/50 flex items-center gap-2 cursor-pointer group"
										style={{
											transform: `translate(-50%, 50%) translate(${
												isHovering ? relativePosition.x * 0.3 : 0
											}px, ${isHovering ? relativePosition.y * 0.7 : 0}px)`,
											transition:
												"transform 0.3s ease-out, background-color 0.2s ease, color 0.2s ease",
										}}
									>
										{navLinks[2]?.icon}
										<span className="text-xs font-medium text-white group-hover:text-slate-900 whitespace-nowrap transition-colors">
											{navLinks[2]?.name}
										</span>
									</button>

									{/* Enlace izquierdo */}
									<button
										onClick={() => handleScrollToSection(navLinks[3]?.href || "#")}
										className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-slate-800 hover:bg-teal-400 text-teal-400 hover:text-slate-900 p-3 rounded-full shadow-lg border border-slate-700/50 flex items-center gap-2 cursor-pointer group"
										style={{
											transform: `translate(-50%, -50%) translate(${
												isHovering ? relativePosition.x * 0.4 : 0
											}px, ${isHovering ? relativePosition.y * 0.6 : 0}px)`,
											transition:
												"transform 0.3s ease-out, background-color 0.2s ease, color 0.2s ease",
										}}
									>
										{navLinks[3]?.icon}
										<span className="text-xs font-medium text-white group-hover:text-slate-900 whitespace-nowrap transition-colors">
											{navLinks[3]?.name}
										</span>
									</button>
								</>
							)}
						</motion.div>
					</motion.div>
				</motion.div>
				<motion.div className="block mt-[5vh] h-[10vh] w-full md:w-[70%]" {...fadeIn}>
						<InfiniteTextSlider
							words={sliderWords}
							color1="text-orange-600"
							color2="text-teal-500"
							speed={20}
							fadeCorners={false}
							circleColor={theme === "dark" ? "bg-white" : "bg-black"}
							fontSize="text-2xl"
						/>
					</motion.div>
			</div>
		</div>
	);
}