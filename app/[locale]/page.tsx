import React from "react";
import { Features } from "./components/ui";
import {
  AboutMe,
  Footer,
  Hero,
  Languages,
} from "./components/layout";
import ThemeWrapper from "./components/contexts/ThemeWrapper";
import SelectedSection from "./components/layout/Works";

export default function Home() {
  return (
    <ThemeWrapper>
      <div className="min-h-screen">
        <main>
          <Hero />
          <AboutMe />
          <SelectedSection
            type="works"
            headingText="Selected"
            headingColorText="Work"
            seeAllText="Ver Todos"
            translationKey="Sections.SelectedWorkSection"
          />
          <SelectedSection
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
