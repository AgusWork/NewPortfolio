import React from "react";
import { Features } from "./components/ui";
import {
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
