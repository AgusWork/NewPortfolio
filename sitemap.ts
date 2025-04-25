import type { MetadataRoute } from "next"
import { locales } from "@/i18n/routing"
import projectsData from "@/app/[locale]/components/data/projects/projects.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio-agustin-cordoba.vercel.app/es"

  const sitemap: MetadataRoute.Sitemap = []

  const projectIds = projectsData.projects.map(project => 
    project.client.toLowerCase().replace(/\s+/g, "-")
  )

  for (const locale of locales) {
    sitemap.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    })

    for (const id of projectIds) {
      sitemap.push({
        url: `${baseUrl}/${locale}/projects/${id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      })
    }
  }

  return sitemap
}