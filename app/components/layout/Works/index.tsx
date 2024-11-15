"use client";

import { motion, useInView } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import React from "react";
import { CardWork } from "../../ui";
import GralLayout from "../GralLayout";

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

	return (
		<GralLayout className=" py-20">
			<motion.h2
				{...fadeIn}
				ref={ref}
				className={`${playFair.className} text-3xl flex flex-row font-bold mb-12 relative pb-6 `}
			>
				Selected <p className={`${playFair.className} ml-4 text-teal-500`}>Work</p>
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: isInView ? 1 : 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					className="absolute bottom-0 left-0 w-full h-2 overflow-hidden"
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
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 flex-grow overflow-hidden">
        <div className="md:row-span-2 h-full">
          <CardWork
            category={projects[1].category}
            imageUrl={projects[1].imageUrl}
            link={projects[1].link}
            title={projects[1].title}
            bgColor={projects[1].bgColor}
            aspectRatio="aspect-[2/3]"
            className="h-full"
          />
        </div>
        <div className="flex flex-col justify-between h-full gap-4">
          <div className="flex-1">
            <CardWork
              category={projects[0].category}
              imageUrl={projects[0].imageUrl}
              link={projects[0].link}
              title={projects[0].title}
              bgColor={projects[0].bgColor}
              aspectRatio="aspect-[16/9]"
            />
          </div>
          <div className="flex-1">
            <CardWork
              category={projects[2].category}
              imageUrl={projects[2].imageUrl}
              link={projects[2].link}
              title={projects[2].title}
              bgColor={projects[2].bgColor}
              aspectRatio="aspect-[16/9]"
            />
          </div>
        </div>
      </div>
		</GralLayout>
	);
}
