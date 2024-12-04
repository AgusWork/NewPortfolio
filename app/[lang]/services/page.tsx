import { Locale } from '@/app/i18n-config'
import { getMessages } from '@/app/utils/messages'
import ServicesClient from './ServicesClient'
import { notFound } from 'next/navigation'

type ServicesPageProps = {
  params: { lang: Locale }
}

export default async function ServicesPage({ params: { lang } }: ServicesPageProps) {
  let messages;
  try {
    messages = await getMessages(lang)
  } catch (error) {
    console.error(`Failed to load messages for locale ${lang}:`, error)
    notFound()
  }

  return <ServicesClient lang={lang} messages={messages} />
}

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'es']
  return locales.map((lang) => ({ lang }))
}
