"use client";

import { motion } from "framer-motion";
import { Figma, Framer as FramerIcon, Phone } from "lucide-react";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill, RiNodejsFill } from "react-icons/ri";
import Button, { InfiniteSlider } from "../../ui";
import Image from "next/image";

const expertTools = [
	{ name: "Next Js", icon: RiNextjsFill },
	{ name: "React Js", icon: RiReactjsFill },
	{ name: "Tailwind Css", icon: RiTailwindCssFill },
	{ name: "Node Js", icon: RiNodejsFill },
	{ name: "Figma", icon: Figma },
	{ name: "Framer", icon: FramerIcon },
];

export default function HeroSection() {
	return (
		<section className="pt-16 pb-12 bg-black h-screen">
			<div className="container mx-auto px-4 h-full w-full">
				<div className="grid md:grid-cols-3 gap-12 items-start h-full w-full">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="relative h-full max-h-full border border-slate-300 rounded-xl p-5"
					>
						<div className="relative h-[70%] rounded-xl">
							<Image src="/FotoCV1.jpeg" alt="Profile" fill className="rounded-xl w-full " />
						</div>
						<div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4">
							<h1 className="text-3xl font-bold text-white mb-2">Agustin Cordoba</h1>
							<p className="text-md text-gray-300">
								A Passionate Full Stack Developer & Product Designer having 12 years of Experiences
								over 24+ Country Worldwide.
							</p>
							<div className="flex gap-4 mt-4">
								<Button variant="default" className="bg-orange-500 hover:bg-orange-600">
									<Phone className="mr-2 h-4 w-4" />
									BOOK A CALL
								</Button>
								<Button variant="outline">GET IN TOUCH</Button>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="grid grid-row-2  h-full w-full col-span-2"
						style={{ gridTemplateRows: "47.5% 47.5%", gridGap: "5%" }}
					>
						<div className="rounded-xl border border-slate-300 p-5 ">
							<h2 className="text-2xl font-semibold text-white mb-6">My Expert area</h2>
							<div className="grid grid-cols-3 gap-4">
								{expertTools.map((tool, index) => (
									<motion.div
										key={tool.name}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: index * 0.1 }}
										className="bg-zinc-900 rounded-lg p-4 text-center hover:bg-zinc-800 transition-colors"
									>
										<tool.icon className="h-10 w-10 mx-auto mb-2 text-gray-400" />
										<p className="text-xl text-bold text-white">{tool.name}</p>
									</motion.div>
								))}
							</div>
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							className=" rounded-xl border border-slate-300 p-5 overflow-hidden flex w-full h-full flex-col align-between"
						>
							<p className="text-gray-300 text-xl h-[50%]">
								As a product designer, I specialize in creating magical visual identities for
								digital products. I believe that a stunning design starts with common values, open
								communication, and respect for your audience.
							</p>
							<div className="h-[50%]">
								<InfiniteSlider
									words={["User Interface", "Design", "Development", "Innovation"]}
									color1="text-white"
									color2="text-orange-500"
									speed={20}
									fadeCorners={true}
									fontSize="text-3xl"
									spacing="mx-6"
								/>
							</div>

							{/* <div className="flex gap-8">
								<div>
									<h3 className="text-white text-lg mb-2">User interface</h3>
									<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
										<motion.div
											initial={{ width: 0 }}
											animate={{ width: "85%" }}
											transition={{ duration: 1, delay: 0.8 }}
											className="h-full bg-orange-500"
										/>
									</div>
								</div>
								<div>
									<h3 className="text-white text-lg mb-2">Technical Arts</h3>
									<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
										<motion.div
											initial={{ width: 0 }}
											animate={{ width: "75%" }}
											transition={{ duration: 1, delay: 1 }}
											className="h-full bg-orange-500"
										/>
									</div>
								</div>
							</div> */}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
