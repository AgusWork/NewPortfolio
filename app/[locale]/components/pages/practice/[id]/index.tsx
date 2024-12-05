"use client";

import { Button } from "../../../ui";


export default function Page() {
	return (
		<>
			<section id="hero" className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-[#40A0A0] text-6xl md:text-7xl lg:text-8xl font-bold mb-12">
							Portal Potencia
						</h1>
						<div className="grid grid-cols-2 gap-8 mb-16">
							<div>
								<h2 className="text-sm text-gray-500 mb-1">Role</h2>
								<p className="text-gray-900">Design & Development</p>
							</div>
							<div>
								<h2 className="text-sm text-gray-500 mb-1">Year</h2>
								<p className="text-gray-900">2024</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-8">About Portal Potencia</h2>
					<p className="text-lg mb-8">
						Portal Potencia is a revolutionary platform designed to empower individuals and
						businesses to reach their full potential. Our cutting-edge tools and resources are
						tailored to help users unlock their capabilities and achieve their goals.
					</p>
					<Button>Learn More</Button>
				</div>
			</section>

			<section id="projects" className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-8">Other Projects</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{["Project 1", "Project 2", "Project 3"].map((project, index) => (
							<div key={index} className="bg-white rounded-lg shadow-md p-6">
								<h3 className="text-xl font-semibold mb-4">{project}</h3>
								<p className="text-gray-600 mb-4">
									A brief description of {project} and its key features.
								</p>
								<Button variant="outline">View Project</Button>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="contact" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
					<form className="max-w-md mx-auto">
						<div className="mb-4">
							<label htmlFor="name" className="block text-gray-700 mb-2">
								Name
							</label>
							<input
								type="text"
								id="name"
								className="w-full px-3 py-2 border rounded-md"
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block text-gray-700 mb-2">
								Email
							</label>
							<input
								type="email"
								id="email"
								className="w-full px-3 py-2 border rounded-md"
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="message" className="block text-gray-700 mb-2">
								Message
							</label>
							<textarea
								id="message"
								rows={4}
								className="w-full px-3 py-2 border rounded-md"
								required
							></textarea>
						</div>
						<Button type="submit" className="w-full">
							Send Message
						</Button>
					</form>
				</div>
			</section>
		</>
	);
}
