import { Locale } from '../i18n-config'

export async function getMessages(locale: Locale) {
  return import(`../messages/${locale}.json`).then((module) => module.default)
}
