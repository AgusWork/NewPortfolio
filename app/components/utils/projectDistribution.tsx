import { Project, CardType } from '../types/cardLayout'

const patternOrder: CardType[] = ['double', 'full', 'double', 'double']

export function distributeProjects(projects: Project[]): { type: CardType; projects: Project[] }[] {
  const sections: { type: CardType; projects: Project[] }[] = []
  let projectIndex = 0

  while (projectIndex < projects.length) {
    for (const type of patternOrder) {
      if (projectIndex >= projects.length) break

      switch (type) {
        case 'double':
          if (projectIndex + 3 <= projects.length) {
            sections.push({ type, projects: projects.slice(projectIndex, projectIndex + 3) })
            projectIndex += 3
          } else if (projectIndex + 2 <= projects.length) {
            sections.push({ type: 'single', projects: [projects[projectIndex], projects[projectIndex + 1]] })
            projectIndex += 2
          } else {
            sections.push({ type: 'single', projects: [projects[projectIndex]] })
            projectIndex += 1
          }
          break
        case 'full':
          sections.push({ type, projects: [projects[projectIndex]] })
          projectIndex += 1
          break
      }
    }
  }

  return sections
}

