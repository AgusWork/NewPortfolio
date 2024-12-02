import React from "react";
import { Features } from "./components/ui";
import {
	AboutMe,
	Footer,
	Hero,
	Practice,
	Languages,
	Works,
} from "./components/layout";
import ThemeWrapper from "./components/contexts/ThemeWrapper";

export default function Home() {
	return (
		<ThemeWrapper>
			<div className="min-h-screen">
				<main>
					<Hero />
					<AboutMe />
					<Works />
					<Practice />
					<Languages />
					<Features />
				</main>
				<Footer />
			</div>
		</ThemeWrapper>
	);
}
