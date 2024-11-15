import type { Locale } from "@/app/i18n-config";

export async function getMessages(locale: Locale) {
	return (await import(`../messages/${locale}.json`)).default;
}
