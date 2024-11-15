"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button, { Icon, InfiniteSlider } from "../../ui";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
});
export default function Hero3() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Toggle dark mode
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		document.documentElement.classList.toggle("dark");
	};

	// Animations
	const fadeIn = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	const deviceAnimation = {
		initial: { y: 100, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		transition: { duration: 0.8, delay: 0.2 },
	};

	const workItemAnimation = {
		initial: { opacity: 0, scale: 0.9 },
		animate: { opacity: 1, scale: 1 },
		transition: { duration: 0.5 },
	};

	return (
		<div className={`  ${isDarkMode ? "dark" : ""}`}>
			<div className="bg-background min-h-screen text-foreground transition-colors duration-300 dark:bg-background-dark dark:text-foreground-dark">
				{/* Header */}
				<header className="container mx-auto px-4 py-6 flex justify-between items-center">
					<Link href="/" className="text-2xl font-bold">
						Agustin Cordoba
					</Link>
					<div className="flex items-center gap-4">
						<Button variant="outline" onClick={toggleDarkMode}>
							{isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</Button>
						<Button variant="outline">Get in Touch</Button>
						<Button variant="ghost">
							<Menu className="h-6 w-6" />
						</Button>
					</div>
				</header>
				<section className="container mx-auto px-4 py-20 w-full h-full">
					<div className="flex flex-row w-full h-full">
						<div className="flex flex-col ">
							<div className=" ">
								<motion.div {...fadeIn} className="max-w-4xl">
									<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
										Front End <span className="text-teal-500">Developer</span>
									</h1>
									<motion.p {...fadeIn} className="mt-6 text-xl text-muted-foreground">
										I design visually captivating and highly intuitive websites that empower
										businesses to stand out and engage their audience effectively.
									</motion.p>
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.8, delay: 0.5 }}
									className="flex justify-start gap-6 mt-8"
								>
									<div className="flex items-center gap-2">
										<Icon name="award" className="text-teal-500 h-6 w-6" />
										<span className="text-xl text-muted-foreground">3 Years of Experience</span>
									</div>
									<div className="flex items-center gap-2">
										<Icon name="globe" className="text-yellow-400 h-6 w-6" />
										<span className="text-xl text-muted-foreground">Global Projects</span>
									</div>
								</motion.div>
							</div>
						</div>
						<div className="min-h-full w-[30%] flex flex-end items-end justify-end">

						<div className="relative h-60 w-60 rounded-full mt-40">
							<Image src="/FotoCV1.jpeg" alt="Profile" fill className="rounded-full" />
						</div>
						</div>
					</div>
					<motion.div className="mt-[10vh]" {...fadeIn}>
						<InfiniteSlider
							words={["User Interface", "Design", "Development", "Innovation"]}
							color1="text-yellow-800"
							color2="text-teal-500"
							speed={20}
							fadeCorners={false}
							circleColor={isDarkMode ? "bg-white" : "bg-black"}
							fontSize="text-4xl"
							spacing="mx-14"
						/>
					</motion.div>

					{/* <motion.div
						{...deviceAnimation}
						className="mt-20 relative h-[400px] bg-sky-50 dark:bg-sky-950 rounded-t-3xl overflow-hidden"
					>
						<Image
							src="/placeholder.svg?height=600&width=800"
							alt="Device Mockup"
							width={800}
							height={600}
							className="object-cover"
						/>
					</motion.div> */}
				</section>
			</div>
		</div>
	);
}
