import React from "react";
import { Navbar, SubHeader, Features } from "./components/ui";
import HeroSection, {
	AIFeatures,
	Footer,
	Hero,
	Practice,
	Languages,
	Testimonials,
	Works,
} from "./components/layout";
import Hero3 from "./components/layout/Hero3";
import { ThemeProvider } from "./components/contexts/DarkThemeContext";
import ThemeWrapper from "./components/contexts/ThemeWrapper";

export default function Home() {
	return (
		<ThemeWrapper>
			<div className="min-h-screen">
				<main>
					<Hero3 />
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
