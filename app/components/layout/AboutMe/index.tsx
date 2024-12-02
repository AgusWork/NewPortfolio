"use client";

import React from "react";

const AboutMe = () => {
	return (
		<section className="py-16 bg-gray-100 dark:bg-gray-900 mb-[15vh]">
			<div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
				<div className="flex flex-col md:flex-row items-center gap-12">
					{/* Imagen o Ilustración */}
					<div className="w-full md:w-1/2">
						<img
							src="/FotoCV1.jpeg"
							alt="Developer illustration"
							className="w-full h-auto rounded-lg shadow-lg"
						/>
					</div>

					{/* Contenido */}
					<div className="w-full md:w-1/2 text-center md:text-left">
						<h2 className="text-3xl font-bold text-gray-800 dark:text-white leading-snug">
							Hi, I'm <span className="text-teal-500">Agustín Córdoba</span>
						</h2>
						<p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
							A passionate Front-End Developer with expertise in crafting
							<span className="text-teal-500"> seamless web experiences</span> using
							Next.js, React, and modern technologies. I specialize in building
							performant, responsive, and visually stunning applications.
						</p>
						<p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
							With <span className="text-teal-500">3+ years of experience</span>, I focus on delivering
							<strong> clean code,</strong> creative designs, and fast performance
							to elevate your digital presence.
						</p>
						<div className="mt-6">
							<a
								href="#projects"
								className="px-6 py-3 text-white bg-teal-500 hover:bg-teal-600 rounded-lg shadow-lg transition-all"
							>
								View My Work
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;