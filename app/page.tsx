import React from 'react';
import { Navbar, SubHeader, Features } from "./components/ui";
import HeroSection, { AIFeatures, Footer, Hero, Pricing, Testimonials, Works } from './components/layout';
import Hero3 from './components/layout/Hero3';

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* <Navbar /> */}
			{/* <SubHeader /> */}
			<main>
				{/* <Hero /> */}
				{/* <HeroSection /> */}
				<Hero3/>
				<Works />
				<Features />
				<AIFeatures />
				<Testimonials />
				<Pricing />
			</main>
			<Footer />
		</div>
	);
}
