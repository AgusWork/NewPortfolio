import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Playfair_Display, Raleway } from "next/font/google";
import { ColorThemeText } from "../../components/ui";
import { useTranslations } from "next-intl";
import projectsData from "@/app/[locale]/components/data/projects/projects.json";

type WorkItem = {
	type: string;
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

const playFair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
});
const raleway = Raleway({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
});

function getClientData(id: string): WorkItem | undefined {
	return projectsData.projects.find(
		(item) => item.client.toLowerCase().replace(/\s+/g, "-") === id.toLowerCase()
	);
}

export default function ClientPage({ params }: { params: { locale: string; id: string } }) {
	const clientData = getClientData(params.id);
	const { locale } = params;
	const t = useTranslations("Pages.Projects");

	if (!clientData) {
		notFound();
	}

	return (
		<main className="min-h-screen">
			<section id="hero" className="py-20 h-[70vh] flex items-center">
				<div className="container mx-auto px-4">
					<p className={`${playFair.className} text-2xl w-full flex flex-row items-center`}>
						<span className="text-xl mr-4">{t("projectType")}:</span>
						{clientData.type}
					</p>
					<div className={`${playFair.className} max-w-4xl md:mt-[10vh]`}>
						<h1
							className={`${raleway.className} text-[#40A0A0] text-6xl md:text-7xl lg:text-8xl font-bold mb-12`}
						>
							{clientData.client}
						</h1>
						<div className="grid grid-cols-2 gap-8 mb-16">
							<div>
								<ColorThemeText
									text={t("category")}
									darkThemeColor="text-teal-500"
									lightThemeColor="text-black"
									className="text-sm mb-1"
								/>
								<p>{clientData.category}</p>
							</div>
							<div>
								<ColorThemeText
									text={t("date")}
									darkThemeColor="text-teal-500"
									lightThemeColor="text-black"
									className="text-sm mb-1"
								/>
								<p>{clientData.date}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="m-[5vw]">
				<div className="w-full h-[60vh] relative  ">

				<Image src={clientData.image} alt={clientData.image} fill className="rounded-2xl" />
				</div>
				
			</section>

			<section id="about" className="py-20 bg-gray-50 text-slate-800">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-8">{t("about")} {clientData.client}</h2>
					<p className="text-lg mb-8">
					
						{locale === "es" ? clientData.descriptionEsp : clientData.descriptionEn}
					</p>
					<Link href={clientData.link} target="_blank" rel="noopener noreferrer">
						{t("viewProject")}
					</Link>
				</div>
			</section>

			<section id="technologies" className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-8">{t("technologiesUsed")}</h2>
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
					<h2 className="text-4xl font-bold mb-8">{t("projectGallery")}</h2>
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
					<h2 className="text-4xl font-bold mb-8">{t("getInTouch")}</h2>
					<form className="max-w-md mx-auto">
						<div className="mb-4">
							<label htmlFor="name" className="block text-gray-700 mb-2">
								{t("name")}
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
								{t("email")}
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
								{t("message")}
							</label>
							<textarea
								id="message"
								rows={4}
								className="w-full px-3 py-2 border rounded-md"
								required
							></textarea>
						</div>
						<button type="submit" className="w-full">
							{t("sendMessage")}
						</button>
					</form>
				</div>
			</section>
		</main>
	);
}
