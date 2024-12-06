import React from "react";
import { Features } from "./components/ui";
import { AboutMe, Footer, Hero, Languages, Projects } from "./components/layout";
import ThemeWrapper from "./components/contexts/ThemeWrapper";

export default function Home() {
	return (
		<ThemeWrapper>
			<div className="min-h-screen">
				<main>
					<Hero />
					<AboutMe />
					<Projects
						type="work"
						headingText="Selected"
						headingColorText="Work"
						seeAllText="Ver Todos"
						translationKey="Sections.SelectedWorkSection"
					/>
					<Projects
						type="practice"
						headingText="Selected"
						headingColorText="Practice"
						seeAllText="See All"
						translationKey="Sections.SelectedPracticeSection"
						justifyEnd={true}
						underlineOriginRight={true}
					/>
					<Languages />
					<Features />
				</main>
				<Footer />
			</div>
		</ThemeWrapper>
	);
}
