import { Locale } from '@/app/i18n-config'
import { getMessages } from '@/app/utils/messages'
import ServicesClient from './ServicesClient'

export default async function ServicesPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const messages = await getMessages(lang)

  return <ServicesClient lang={lang} messages={messages} />
}