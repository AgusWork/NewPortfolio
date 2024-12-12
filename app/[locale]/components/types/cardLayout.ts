export interface Project {
  image: {
      src: string;
      alt: string;
  };
  category?: string;
  type?: string;
  client?: string;
  date?: string;
  link?: string;
  duration?: string;
  descriptionEsp?: string;
  descriptionEn?: string;
  language?: string[];
  imagenes?: {
      src: string;
      alt: string;
  }[];
}

export type CardType = 'single' | 'double' | 'full'

export interface CardConfig {
  type: CardType;
  projects: Project[]; // Add this line to include projects
  height: string;
}

interface ProjectPreview {
  title?: string;
  category?: string;
  image: {
    src: string;
    alt: string;
  };
  link?: string;
}

export interface CardSectionProps {
  projects: ProjectPreview[];
  theme: 'light' | 'dark';
  className?: string;
}

export interface CardWorkProps extends ProjectPreview {
  theme: 'light' | 'dark';
  bgColor?: string;

}
