import { ReactNode } from 'react'
import { Locale } from '../i18n-config'
import ThemeWrapper from '../components/contexts/ThemeWrapper'

export default function LangLayout({
  children,
  params: { lang },
}: {
  children: ReactNode
  params: { lang: Locale }
}) {
  return (
    <ThemeWrapper>
      <div className="min-h-screen">
        {children}
      </div>
    </ThemeWrapper>
  )
}

