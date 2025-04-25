"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import { ChevronRight } from "lucide-react"

interface BreadcrumbsProps {
  homeLabel?: string
  projectsLabel?: string
  currentProject?: string
}

export default function Breadcrumbs({ homeLabel, projectsLabel, currentProject }: BreadcrumbsProps) {
  const pathname = usePathname()
  const t = useTranslations()
  const locale = pathname.split("/")[1]

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm text-slate-500 dark:text-slate-400">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href={`/${locale}`} className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
            {homeLabel || t("Navigation.home")}
          </Link>
        </li>

        <li className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-1" />
          <Link
            href={`/${locale}/projects`}
            className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            {projectsLabel || t("Navigation.projects")}
          </Link>
        </li>

        {currentProject && (
          <li className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="text-slate-700 dark:text-slate-300 font-medium" aria-current="page">
              {currentProject}
            </span>
          </li>
        )}
      </ol>
    </nav>
  )
}