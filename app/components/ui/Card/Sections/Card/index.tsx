import { CardSectionProps, CardType } from '../../../../types/cardLayout'
import  CardWork  from '../../Work'
import { distributeProjects } from '../../../../utils/projectDistribution'

const heights: Record<CardType, string> = {
  single: 'h-[45vh]',
  double: 'h-[80vh]',
  full: 'h-[45vh]'
}

export function CardSection({ projects, theme, className }: CardSectionProps) {
  const sections = distributeProjects(projects)

  return (
    <div className={`${className} flex flex-col gap-8 w-full`}>
      {sections.map((section, index) => (
        <div key={index} className={`w-full ${heights[section.type]}`}>
          {section.type === 'single' && (
            <div className={`flex ${section.projects.length > 1 ? 'flex-row gap-8' : ''} w-full h-full`}>
              {section.projects.map((project, i) => (
                <div key={i} className={`${section.projects.length > 1 ? 'w-1/2' : 'w-full'} h-full`}>
                  <CardWork {...project} theme={theme} />
                </div>
              ))}
            </div>
          )}
          {section.type === 'full' && (
            <CardWork {...section.projects[0]} theme={theme} />
          )}
          {section.type === 'double' && (
            <div className="flex flex-row gap-8 md:gap-12 w-full h-full">
              <div className="md:row-span-2 w-full h-full">
                <CardWork {...section.projects[0]} theme={theme} />
              </div>
              <div className="flex flex-col justify-between w-full h-full gap-4">
                {section.projects.slice(1).map((project, i) => (
                  <div key={i} className="h-[40vh]">
                    <CardWork {...project} theme={theme} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

