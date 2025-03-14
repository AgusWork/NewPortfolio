import React from "react";
import { Features } from "./components/ui";
import { AboutMe, CV, Footer, Hero, Languages, Projects } from "./components/layout";
import ThemeWrapper from "./components/contexts/ThemeWrapper";

export default function Home() {
	return (
		<ThemeWrapper>
			<div className="min-h-screen">
				<main>
					<Hero />
					<AboutMe />
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
					<Languages />
					<Features />
					<CV />
				</main>
				<Footer />
			</div>
		</ThemeWrapper>
	);
}
