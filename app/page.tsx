import React from "react";
import { Features } from "./components/ui";
import {
	AIFeatures,
	Footer,
	Hero,
	Practice,
	Languages,
	Testimonials,
	Works,
} from "./components/layout";
import ThemeWrapper from "./components/contexts/ThemeWrapper";

export default function Home() {
	return (
		<ThemeWrapper>
			<div className="min-h-screen">
				<main>
					<Hero />
					<Works />
					<Practice />
					<Languages />
					<Features />
					<AIFeatures />
					<Testimonials />
				</main>
				<Footer />
			</div>
		</ThemeWrapper>
	);
}
