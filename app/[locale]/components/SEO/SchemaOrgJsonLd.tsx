"use client"

import type { Locale } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import projectsData from "@/app/[locale]/components/data/projects/projects.json"

interface SchemaOrgJsonLdProps {
  locale: Locale
  projectId?: string
}

export default function SchemaOrgJsonLd({ locale, projectId }: SchemaOrgJsonLdProps) {
  const t = useTranslations()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio-agustin-cordoba.vercel.app/es"

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t("Sections.Layout.SEO.personName"),
    url: baseUrl,
    image: `${baseUrl}/profile-image.jpg`,
    jobTitle: t("Sections.Layout.SEO.jobTitle"),
    worksFor: {
      "@type": "Organization",
      name: t("Sections.Layout.SEO.organization"),
    },
    sameAs: [
      "https://linkedin.com/in/agustin-maria-cordoba",
      "https://github.com/AgusWork",
    ],
    description: t("Sections.Layout.description"),
    knowsAbout: t("Sections.Layout.SEO.skills").split(","),
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: t("Sections.Layout.title"),
    url: baseUrl,
    description: t("Sections.Layout.description"),
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: t("Sections.Layout.SEO.personName"),
    },
  }

  let projectSchema = null

  if (projectId) {
    const projectData = projectsData.projects.find(
      (project) => project.client.toLowerCase().replace(/\s+/g, "-") === projectId,
    )

    if (projectData) {
      projectSchema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: projectData.client,
        description: locale === "es" ? projectData.descriptionEsp : projectData.descriptionEn,
        image: projectData.image.src,
        url: `${baseUrl}/${locale}/projects/${projectId}`,
        datePublished: projectData.date,
        creator: {
          "@type": "Person",
          name: t("Sections.Layout.SEO.personName"),
        },
        ...(projectData.link && {
          mainEntityOfPage: projectData.link,
        }),
        keywords: [
          projectData.category,
          locale === "es" ? projectData.typeEsp : projectData.typeEn,
          ...projectData.language,
        ].join(", "),
      }
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {projectSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
      )}
    </>
  )
}
