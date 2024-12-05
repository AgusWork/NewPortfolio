import React from "react";
import { getTranslations } from "next-intl/server";

const AboutMe = async () => {
	const t = await getTranslations("Sections.AboutSection");

	return (
		<section id="about" className="py-10 md:py-16 bg-gray-100 dark:bg-gray-900 mt-[15vh] mb-[10vh] md:mt-0 md:mb-[15vh] h-screen md:h-auto">
			<div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
				<div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
					<div className="w-full md:w-1/2 relative">
						<img
							src="/FotoCV1.jpeg"
							alt="Developer illustration"
							className="w-full h-[40vh] md:h-auto rounded-lg shadow-lg"
						/>
					</div>
					<div className="w-full md:w-1/2 text-center md:text-left">
						<h2 className="md:text-3xl font-bold text-gray-800 dark:text-white leading-snug">
							{t("heading")} <span className="text-teal-500">Agustín Córdoba</span>
						</h2>
						<p className="mt-4 text-gray-600 dark:text-gray-300 text-md md:text-lg">
							{t("subheading")}
						</p>
						<p className="hidden md:block mt-4 text-gray-600 dark:text-gray-300 text-md md:text-lg">
							{t("additionalInfo")}
						</p>
						<div className="mt-10 md:mt-6">
							<a
								href="#projects"
								className="px-4 md:px-6 py-3 text-white bg-teal-500 hover:bg-teal-600 rounded-lg shadow-lg transition-all"
							>
								{t("cta")}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
