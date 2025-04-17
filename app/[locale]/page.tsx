import React from "react";
import { AboutMe, CV, Features, Footer, Hero, Languages, Projects } from "./components/layout";
import ThemeWrapper from "./components/contexts/ThemeWrapper";
import GralLayout from "./components/layout/GralLayout";

export default function Home() {
	
	return (
		<ThemeWrapper>

			<div className="min-h-screen">
				<main>
					<Hero />
					<AboutMe />
					<GralLayout
						className={`pt-10 md:pt-20 2xl:px-[15vw] h-full 2xl:h-[80vh] flex flex-col gap-20 2xl:flex-row`}
					>
						<Projects
							type="Trabajo Profesional"
							headingText="Selected"
							headingColorText="Work"
							seeAllText="Ver Todos"
							translationKey="Sections.SelectedWorkSection"
						/>
						<Projects
							type="Practica"
							headingText="Selected"
							headingColorText="Practice"
							seeAllText="See All"
							translationKey="Sections.SelectedPracticeSection"
							justifyEnd={true}
							underlineOriginRight={true}
						/>
					</GralLayout>
					<Languages />
					<Features />
					<CV />
				</main>
				<Footer />
			</div>
		</ThemeWrapper>
	);
}
