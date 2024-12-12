"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../../../contexts/DarkThemeContext";

interface InfiniteIconSliderProps {
	icons: string[];
	spacing?: string;
	speed?: number;
	fadeCorners?: boolean;
    className?: string;
}

const InfiniteIconSlider = ({
	icons = [],
	spacing = "mx-4",
	speed = 25,
	fadeCorners = true,
    className
}: InfiniteIconSliderProps) => {
    const { theme } = useTheme();
 
	const repeatedIcons = [...icons, ...icons, ...icons, ...icons];

	return (
		<div className={`${className} relative overflow-hidden w-full`} style={{ height: "100%" }}>
			{fadeCorners && (
				<>
					<div className={`${theme == "dark" ? "hidden" : "block" } absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none z-10`} />
					<div className={`${theme == "dark" ? "hidden" : "block" } absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none z-10`} />
				</>
			)}

			<motion.div
				className="flex items-center w-max h-full"
				initial={{ x: 0 }}
				animate={{ x: `-${100 / icons.length}%` }}
				transition={{
					repeat: Infinity,
					repeatType: "loop",
					ease: "linear",
					duration: speed,
				}}
			>
				{repeatedIcons.map((icon, index) => (
					<Image
						key={index}
						src={icon}
						alt={`Technology ${index + 1}`}
						width={50}
						height={50}
						className={`flex items-center ${spacing}`}
					/>
				))}
			</motion.div>
		</div>
	);
}

export default InfiniteIconSlider;
