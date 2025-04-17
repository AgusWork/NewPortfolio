"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/app/[locale]/components/contexts/DarkThemeContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
	const { theme } = useTheme();
	const t = useTranslations("Sections.FooterSection");

	return (
		<section id="contact" className="py-16 md:py-32 px-10 md:px-32 bg-gray-50 rounded-t-[10%]">
			<div className="mx-auto">
				<motion.h1
					className={`text-5xl md:text-9xl font-bold pb-24 bg-gradient-to-r ${
						theme === "dark" ? "from-gray-200 to-gray-500" : "from-gray-700 to-gray-400"
					} bg-clip-text text-transparent`}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{t("heading")}
				</motion.h1>

				<div className="space-y-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<h2
							className={`text-lg font-medium mb-2 ${
								theme === "dark" ? "text-gray-400" : "text-gray-600"
							}`}
						>
							Email
						</h2>
						<Link
							href={`mailto:${t("email")}`} // Usar la traducción para el correo
							className={`text-lg md:text-2xl text-gray-900 hover:text-gray-600 transition-colors duration-200`}
						>
							{t("email")}
						</Link>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<h2
							className={`text-lg font-medium mb-2 ${
								theme === "dark" ? "text-gray-400" : "text-gray-600"
							}`}
						>
							{t("socials.title")}
						</h2>
						<div className="flex space-x-6">
							<Link
								href={t("socials.linkedin.url")}
								target="_blank"
								rel="noopener noreferrer"
								className={`text-xl md:text-2xl flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-200`}
							>
								<FaLinkedin className="w-6 h-6 mr-2" />
								{t("socials.linkedin.label")}
							</Link>
							<Link
								href={t("socials.github.url")}
								target="_blank"
								rel="noopener noreferrer"
								className={`text-xl md:text-2xl flex items-center   
               text-gray-900 hover:text-gray-600  
                 transition-colors duration-200`}
							>
								<FaGithub className="w-6 h-6 mr-2" />
								{t("socials.github.label")}
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
