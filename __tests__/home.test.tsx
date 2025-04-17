// __tests__/home.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
const Home = require("../app/[locale]/page").default;

// Mock Swiper
jest.mock("swiper/react", () => ({
	Swiper: () => <div data-testid="swiper">Swiper Component</div>,
	SwiperSlide: () => <div data-testid="swiper-slide">Slide</div>,
}));

// Mock the Next.js navigation hooks
jest.mock("next/navigation", () => ({
	useParams: () => ({
		locale: "en",
	}),
	usePathname: () => "/en",
}));

// Mock the layout components
jest.mock("../app/[locale]/components/layout", () => ({
	Hero: () => <div data-testid="hero">Hero Component</div>,
	AboutMe: () => <div data-testid="about-me">About Me Component</div>,
	Projects: () => <div data-testid="projects">Projects Component</div>,
	Languages: () => <div data-testid="languages">Languages Component</div>,
	CV: () => <div data-testid="cv">CV Component</div>,
	Features: () => <div data-testid="features">Features Component</div>,
	Footer: () => <div data-testid="footer">Footer Component</div>,
}));

// Mock ThemeWrapper
jest.mock("../app/[locale]/components/contexts/ThemeWrapper", () => ({
	__esModule: true,
	default: ({ children }: { children: React.ReactNode }) => (
		<div data-testid="theme-wrapper">{children}</div>
	),
}));

// Import Home after all mocks are set up

describe("Home Component", () => {
	it("renders without crashing", () => {
		expect(() => render(<Home />)).not.toThrow();
	});
	it("renders all sections of the home page", () => {
		render(<Home />);
		expect(screen.getByTestId("theme-wrapper")).toBeInTheDocument();
		expect(screen.getByTestId("hero")).toBeInTheDocument();
		expect(screen.getByTestId("about-me")).toBeInTheDocument();
		const projectsElements = screen.getAllByTestId("projects");
		expect(projectsElements).toHaveLength(2);
		expect(screen.getByTestId("languages")).toBeInTheDocument();
		expect(screen.getByTestId("features")).toBeInTheDocument();
		expect(screen.getByTestId("cv")).toBeInTheDocument();
		expect(screen.getByTestId("footer")).toBeInTheDocument();
	});
});
