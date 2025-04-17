"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function useScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, searchParams])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}
