// __mocks__/componentMocks.js
import React from 'react';

// Mock for layout components
export const layoutMocks = {
  Hero: () => <div data-testid="hero">Hero Component</div>,
  AboutMe: () => <div data-testid="about-me">About Me Component</div>,
  Projects: () => <div data-testid="projects">Projects Component</div>,
  Languages: () => <div data-testid="languages">Languages Component</div>,
  CV: () => <div data-testid="cv">CV Component</div>,
  Footer: () => <div data-testid="footer">Footer Component</div>,
  Features: () => <div data-testid="features">Features Component</div>
};

// Mock for UI components

// Mock for ThemeWrapper
export const ThemeWrapperMock = ({ children }) => (
  <div data-testid="theme-wrapper">{children}</div>
);