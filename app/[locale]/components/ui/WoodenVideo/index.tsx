"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useTheme } from "@/app/[locale]/components/contexts/DarkThemeContext";

export default function WoodenWindowVideo() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const { theme } = useTheme();

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	}, []);

	return (
		<div className="relative w-60 md:w-80 h-60 md:h-80">
			<motion.div
				className="relative w-full h-full"
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				{/* Wooden window frame */}
				<Image
					src="/woodenFrame.png"
					alt="Wooden window frame"
					draggable="false"
					layout="fill"
					objectFit="cover"
					className={`z-10 ${theme === "dark" ? "brightness-50 contrast-125" : ""}`}
				/>

				{/* Circular mask for the video */}
				<div className="absolute inset-0 flex p-2 items-center justify-center">
					<div className="w-[calc(100%-32px)] h-[calc(100%-32px)] rounded-full overflow-hidden">
						<video
							ref={videoRef}
							src="/upload/hero-video.mp4"
							className="object-cover w-full h-full"
							loop
							muted
							playsInline
						/>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
