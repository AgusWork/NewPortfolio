"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Icon, InfiniteTextSlider, WoodenVideo, Button } from "../../ui";
import { Playfair_Display } from "next/font/google";
import { useTheme } from "@/app/[locale]/components/contexts/DarkThemeContext";
import { useTranslations } from "next-intl";

const playFair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
});

export default function EnhancedHero() {
	const { theme } = useTheme();
	const t = useTranslations("Sections.HomeSection");

	// Animations
	const fadeIn = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	const boxAnimation = {
		initial: { scale: 0.9, opacity: 0 },
		animate: { scale: 1, opacity: 1 },
		transition: { duration: 0.5, delay: 0.2 },
	};

	const keys = ["userInterface", "design", "development", "innovation"] as const;

	const sliderWords = keys.map((key) => t(`sliderWords.${key}.title`));

	const handleScrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div className={`${theme === "dark" ? "dark" : ""} h-screen`}>
			<div className="bg-background h-full text-foreground transition-colors duration-300 dark:bg-background-dark dark:text-foreground-dark">
				<section className="container mx-auto px-4 my-[5vh] flex flex-col justify-center w-full h-[80vh] ">
					<motion.div
						className="flex flex-col lg:flex-row w-full  md:max-h-[60vh] p-7 md:p-10 bg-gradient-to-br from-teal-50 to-sky-50 dark:from-teal-900 dark:to-sky-900 rounded-3xl shadow-xl"
						{...boxAnimation}
					>
						<div className="flex flex-col flex-grow">
							<motion.div {...fadeIn} className="max-w-4xl">
								<h1
									className={`${playFair.className} text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6`}
								>
									{t("heading")} <span className="text-teal-500">{t("headingColor")}</span>
								</h1>
								<motion.p {...fadeIn} className="mt-6 text-md md:text-xl text-muted-foreground">
									{t("subheading")}
								</motion.p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className="flex flex-wrap justify-start gap-2 md:gap-6 mt-8"
							>
								<div className="flex items-center gap-2">
									<Icon name="award" className="text-teal-500 h-6 w-6" />
									<span className="text-md md:text-xl text-muted-foreground">
										{t("experience")}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Icon name="globe" className="text-yellow-400 h-6 w-6" />
									<span className="text-md md:text-xl text-muted-foreground">{t("projects")}</span>
								</div>
							</motion.div>
							<motion.div {...fadeIn} className="hidden md:block mt-12">
								<Button
									onClick={() => handleScrollToSection("work")}
									className="text-lg px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white"
								>
									{t("cta")} <ArrowRight className="ml-2" />
								</Button>
							</motion.div>
						</div>
						<div className="lg:w-1/3 flex items-center justify-center md:mt-12 lg:mt-0">
							<WoodenVideo />
						</div>
					</motion.div>

					<motion.div className="hidden md:block mt-[5vh] h-[20vh]" {...fadeIn}>
						<InfiniteTextSlider
							words={sliderWords}
							color1="text-yellow-800"
							color2="text-teal-500"
							speed={20}
							fadeCorners={false}
							circleColor={theme === "dark" ? "bg-white" : "bg-black"}
							fontSize="text-4xl"
							spacing="mx-14"
						/>
					</motion.div>
				</section>
			</div>
		</div>
	);
}
