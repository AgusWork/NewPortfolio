import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Playfair_Display, Raleway } from "next/font/google";
import { ColorThemeText,  Slides, InfiniteIconSlider } from "../../components/ui";
import { getLocale, getTranslations } from "next-intl/server";
import projectsData from "@/app/[locale]/components/data/projects/projects.json";
import { Footer, RelatedProjects } from "../..//components/layout";
import { FaExternalLinkAlt } from "react-icons/fa";

type Image = {
	src: string;
	alt?: string;
};

type WorkItem = {
	type: string;
	image: Image;
	category: string;
	client: string;
	date: string;
	link: string;
	duration: string;
	language: string[];
	imagenes: Image[];
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

async function getClientData(id: string): Promise<WorkItem | undefined> {
	return projectsData.projects.find(
		(item) => item.client.toLowerCase().replace(/\s+/g, "-") === id.toLowerCase()
	);
}
type tParams = Promise<{ id: string }>;

export default async function Challenge(props: { params: tParams }) {
	const { id } = await props.params;
	const locale = await getLocale();

	const [clientData, t] = await Promise.all([getClientData(id), getTranslations("Pages.Projects")]);

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
			<section className="m-[5vw] mt-0">
				<div className="w-full h-[60vh] relative  ">
					<Image
						src={clientData.image.src}
						alt={clientData.image.alt || clientData.image.src}
						fill
						className="rounded-2xl"
					/>
				</div>
			</section>

			<section id="about" className="py-20 ">
				<div
					className={`container mx-auto px-4 flex flex-col ${
						!clientData.descriptionEsp && " w-full justify-center"
					}`}
				>
					{clientData.descriptionEsp && (
					/* <Star color="bg-white" className="w-full max-w-3xl mx-auto">*/
							<h2
								className={`${playFair.className}  text-3xl pb-4 md:text-4xl font-bold mb-4 md:mb-8  text-slate-800 mx-auto border-b-4  border-b-slate-500 dark:text-white`}
							>
								{t("about")} {clientData.client}
							</h2>
						/* </Star> */
					)}
					{clientData.link && (
						<div
							className={`min-h-full flex flex-col items-center justify-center ${
								!clientData.descriptionEsp && ""
							}`}
						>
							{clientData.descriptionEsp && (
								<p
									className={`${playFair.className} text-base md:text-xl lg:text-3xl mb-4 md:mb-8 md:max-w-[70%] text-center`}
								>
									{locale === "es" ? clientData.descriptionEsp : clientData.descriptionEn}
								</p>
							)}
							<Link
								href={clientData.link}
								target="_blank"
								rel="noopener noreferrer"
								className={`flex flex-row items-center justify-center gap-2 text-slate-700 font-bold bg-transparent border-2 border-slate-700 hover:text-white  px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded-full hover:bg-slate-700 transition-colors ${
									!clientData.descriptionEsp && " md:px-10 md:py-4 text-xl "
								}`}
							>
								{t("viewProject") }<FaExternalLinkAlt />
							</Link>
						</div>
					)}
				</div>
			</section>

			<section id="gallery" className="py-20 text-slate-800">
				<Slides images={clientData.imagenes} />
			</section>

			<section id="languages" className={`py-20 `}>
				<div className="container mx-auto px-4">
					<div className={`${raleway.className} text-4xl font-bold mb-8 flex flex-col md:flex-row`}>
						<p className="mr-2 text-teal-500 ">{t("technologiesUsedColor")}</p>
						{t("technologiesUsed")}
					</div>
					<div className="flex flex-wrap ">
						<InfiniteIconSlider
							icons={clientData.language}
							spacing="mx-4 md:mx-10"
							fadeCorners={false}
							className={`bg-slate-50 rounded-2xl p-4`}
						/>
					</div>
				</div>
			</section>
			<section id="relatedProjects">
				<Suspense>
					<RelatedProjects />
				</Suspense>
			</section>
			<Footer />
		</main>
	);
}
