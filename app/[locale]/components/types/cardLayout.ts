export interface Project {
    category: string
    imageUrl: string
    link: string
    title: string
    bgColor?: string
  }
  
  export type CardType = 'single' | 'double' | 'full'
  
  export interface CardConfig {
    type: CardType
    height: string
  }
  
  export interface CardSectionProps {
    projects: Project[]
    theme: 'light' | 'dark'
    className?: string
  }
  
  export interface CardWorkProps extends Project {
    theme: 'light' | 'dark'
  }
  
  