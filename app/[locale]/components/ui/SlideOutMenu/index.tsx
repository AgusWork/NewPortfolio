"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useRef } from "react";

interface SlideOutMenuProps {
	isOpen: boolean;
	onCloseAction: () => void;
	links: { name: string; href: string }[];
}

export default function SlideOutMenu({ isOpen, onCloseAction, links }: SlideOutMenuProps) {
	const backdropRef = useRef<HTMLDivElement>(null);

	const handleClose = useCallback(() => {
		onCloseAction();
	}, [onCloseAction]);

	// Cierra el menú si el clic es fuera del contenido
	const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === backdropRef.current) {
			handleClose();
		}
	};

	const handleScrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		handleClose();
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: isOpen ? 1 : 0 }}
			transition={{ duration: 0.3 }}
			className={`fixed inset-0 z-50 flex items-start justify-end ${
				isOpen ? "pointer-events-auto" : "pointer-events-none"
			}`}
		>
			{/* Backdrop */}
			<div
				ref={backdropRef}
				className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"
				onClick={handleBackdropClick}
			/>

			<motion.div
				initial={{ x: "100%" }}
				animate={{ x: isOpen ? 0 : "100%" }}
				transition={{ type: "tween", duration: 0.3 }}
				className="relative bg-white dark:bg-gray-800 shadow-lg h-full w-full md:w-4/5 lg:w-2/3 xl:w-1/2"
			>
				<div className="p-6">
					<button
						onClick={handleClose}
						className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
					>
						<X className="h-6 md:h-10 w-6 md:w-10" />
					</button>

					{/* Navigation Links */}
					<nav className="mt-8">
						<ul className="space-y-4">
							{links.map((item) => (
								<li key={item.name}>
									<button
										onClick={() => handleScrollToSection(item.href)}
										className="text-2xl font-semibold text-gray-800 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400"
									>
										{item.name}
									</button>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</motion.div>
		</motion.div>
	);
}
