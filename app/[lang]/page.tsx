import { Locale } from '../i18n-config'
import { getMessages } from '../utils/messages'
import { Features } from "../components/ui"
import {
  AboutMe,
  Footer,
  Hero,
  Practice,
  Languages,
  Works,
} from "../components/layout"

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const messages = await getMessages(lang)

  return (
    <main>
      <Hero messages={messages} />
      <AboutMe messages={messages} />
      <Works messages={messages} />
      <Practice messages={messages} />
      <Languages messages={messages} />
      <Features messages={messages} />
      <Footer messages={messages} />
    </main>
  )
}

