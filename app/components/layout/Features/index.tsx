"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";
import { ShortCard } from "../../ui";

const cards = [
	{
		icon: "Code",
		title: "Clean Code",
		description: "I write clean, maintainable, and efficient code that scales with your project.",
		color: "text-teal-500",
	},
	{
		icon: "Palette",
		title: "Creative Design",
		description: "I create visually stunning designs that capture your brand's essence.",
		color: "text-yellow-400",
	},
	{
		icon: "Zap",
		title: "Fast Performance",
		description: "I optimize for speed to ensure your website loads quickly and runs smoothly.",
		color: "text-purple-500",
	},
];

const Features = () => {
	const ICONS: Record<string, React.ReactNode> = {
		Code: <Code className="h-12 w-12" />,
		Palette: <Palette className="h-12 w-12" />,
		Zap: <Zap className="h-12 w-12" />,
	};

	return (
		<div className="py-20">
			<div className="max-w-7xl mx-auto px-4">
				<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
					{cards.map((card, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -50 }} 
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.8,
								delay: index * 0.2,
							}}
						>
							<ShortCard
								icon={<div className={`${card.color}`}>{ICONS[card.icon]}</div>}
								title={card.title}
								description={card.description}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Features;
