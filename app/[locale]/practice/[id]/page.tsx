import { notFound } from "next/navigation";
import Image from "next/image";
import workerData from "@/app/[locale]/components/data/works/works.json";
import Link from "next/link";
import { useLocale } from "next-intl";

type WorkItem = {
	image: string;
	category: string;
	client: string;
	date: string;
	link: string;
	duration: string;
	language: string[];
	imagenes: string[];
	descriptionEsp: string;
	descriptionEn: string;
};

function getClientData(id: string): WorkItem | undefined {
	return workerData.work.find(
		(item) => item.client.toLowerCase().replace(/\s+/g, "-") === id.toLowerCase()
	);
}

export default function ClientPage({ params }: { params: { id: string } }) {
	const clientData = getClientData(params.id);
	const locale = useLocale();

	if (!clientData) {
		notFound();
	}

	return (
		<main className="min-h-screen">
			<section id="hero" className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-[#40A0A0] text-6xl md:text-7xl lg:text-8xl font-bold mb-12">
							{clientData.client}
						</h1>
						<div className="grid grid-cols-2 gap-8 mb-16">
							<div>
								<h2 className="text-sm text-gray-500 mb-1">Category</h2>
								<p className="text-gray-900">{clientData.category}</p>
							</div>
							<div>
								<h2 className="text-sm text-gray-500 mb-1">Date</h2>
								<p className="text-gray-900">{clientData.date}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="py-20 bg-gray-50 text-slate-800">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-8">About {clientData.client}</h2>
					<p className="text-lg mb-8">
						This project for {clientData.client} was completed in {clientData.duration} weeks. It
						falls under the category of {clientData.category}.
						{locale == "es" ? clientData.descriptionEsp : clientData.descriptionEn}
					</p>
					<Link href={clientData.link} target="_blank" rel="noopener noreferrer">
						View Project
					</Link>
				</div>
			</section>

			<section id="technologies" className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-8">Technologies Used</h2>
					<div className="flex flex-wrap gap-4">
						{clientData.language.map((tech, index) => (
							<Image
								key={index}
								src={tech}
								alt={`Technology ${index + 1}`}
								width={50}
								height={50}
							/>
						))}
					</div>
				</div>
			</section>

			<section id="gallery" className="py-20 bg-gray-50 text-slate-800">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-8">Project Gallery</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{clientData.imagenes.map((image, index) => (
							<div key={index} className="relative aspect-w-16 aspect-h-9">
								<Image
									src={image}
									alt={`Project image ${index + 1}`}
									fill
									className="object-cover rounded-lg"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="contact" className="py-20">
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
						<button type="submit" className="w-full">
							Send Message
						</button>
					</form>
				</div>
			</section>
		</main>
	);
}
