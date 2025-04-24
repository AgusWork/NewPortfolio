import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Playfair_Display, Raleway } from "next/font/google"
import { ColorThemeText, Slides, InfiniteIconSlider } from "../../components/ui"
import { getLocale, getTranslations } from "next-intl/server"
import projectsData from "@/app/[locale]/components/data/projects/projects.json"
import { Footer, RelatedProjects } from "../../components/layout"
import { FaExternalLinkAlt, FaCalendarAlt, FaLayerGroup } from "react-icons/fa"

type ProjectImage = {
  src: string
  alt?: string
}

type WorkItem = {
  typeEsp: string
  typeEn: string
  image: ProjectImage
  category: string
  client: string
  date: string
  link: string
  duration: string
  language: string[]
  imagenes: ProjectImage[]
  descriptionEsp: string
  descriptionEn: string
}

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

async function getClientData(id: string): Promise<WorkItem | undefined> {
  return projectsData.projects.find((item) => item.client.toLowerCase().replace(/\s+/g, "-") === id.toLowerCase())
}
type tParams = Promise<{ id: string }>

export default async function Challenge(props: { params: tParams }) {
  const { id } = await props.params
  const locale = await getLocale()

  const [clientData, t] = await Promise.all([getClientData(id), getTranslations("Pages.Projects")])

  if (!clientData) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={clientData.image.src || "/placeholder.svg"}
            alt={clientData.image.alt || clientData.client}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-[10vw]  pb-12">
          <div className="max-w-5xl">
            <div className="inline-block bg-teal-500/90 text-white px-4 py-1 rounded-full mb-6 backdrop-blur-sm">
              {locale === "es" ? clientData.typeEsp : clientData.typeEn}
            </div>

            <h1
              className={`${raleway.className} text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight`}
            >
              {clientData.client}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <div className="flex items-center mb-3">
                  <FaLayerGroup className="text-teal-400 mr-3" />
                  <ColorThemeText
                    text={t("category")}
                    darkThemeColor="text-teal-400"
                    lightThemeColor="text-white"
                    className="text-lg font-medium"
                  />
                </div>
                <p className="text-white text-xl">{clientData.category}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <div className="flex items-center mb-3">
                  <FaCalendarAlt className="text-teal-400 mr-3" />
                  <ColorThemeText
                    text={t("date")}
                    darkThemeColor="text-teal-400"
                    lightThemeColor="text-white"
                    className="text-lg font-medium"
                  />
                </div>
                <p className="text-white text-xl">{clientData.date}</p>
              </div>
            </div>

            {clientData.link && (
              <Link
                href={clientData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-12 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full transition-all duration-300 group"
              >
                <span className="mr-2 text-lg font-medium">{t("viewProject")}</span>
                <FaExternalLinkAlt className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            )}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80">
          <span className="text-sm mb-2">{t("scrollDown")}</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {clientData.descriptionEsp && ( <section
        id="about"
        className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
      >
        <div className="container mx-auto px-[10vw] md:px-12">
          
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
                <div className="h-1 w-16 bg-teal-500 rounded-full md:h-16 md:w-1"></div>
                <h2 className={`${playFair.className} text-3xl md:text-5xl font-bold text-slate-800 dark:text-white`}>
                  {t("about")} <span className="text-teal-500">{clientData.client}</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-5 gap-12">
                <div className="md:col-span-3">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p
                      className={`${playFair.className} text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-200`}
                    >
                      {locale === "es" ? clientData.descriptionEsp : clientData.descriptionEn}
                    </p>
                  </div>

                  {clientData.link && (
                    <Link
                      href={clientData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-8 text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-medium group"
                    >
                      <span className="mr-2">{t("viewProject")}</span>
                      <FaExternalLinkAlt className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )}
                </div>

                <div className="md:col-span-2 bg-white dark:bg-slate-800/50 p-8  rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
                  <h3 className={`${raleway.className} text-xl font-bold mb-6 text-slate-800 dark:text-white`}>
                    {t("projectDetails")}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t("client")}</p>
                      <p className="text-lg font-medium text-slate-800 dark:text-white">{clientData.client}</p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t("category")}</p>
                      <p className="text-lg font-medium text-slate-800 dark:text-white">{clientData.category}</p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t("date")}</p>
                      <p className="text-lg font-medium text-slate-800 dark:text-white">{clientData.date}</p>
                    </div>

                    {clientData.duration && (
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t("duration")}</p>
                        <p className="text-lg font-medium text-slate-800 dark:text-white">{clientData.duration}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          

        
            <div className="flex flex-col items-center justify-center py-12">
              <Link
                href={clientData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-10 py-4 rounded-full text-xl font-medium transition-all duration-300 group"
              >
                <span className="mr-3">{t("viewProject")}</span>
                <FaExternalLinkAlt className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          
        </div>
      </section>)}

      <section id="gallery" className="py-20  text-slate-800">
        <Slides images={clientData.imagenes} initialSlideIndex={1} />
      </section>

      <section id="languages" className={`py-20 `}>
        <div className="container px-[10vw]">
          <div className={`${raleway.className} text-4xl font-bold mb-8 flex flex-col md:flex-row`}>
            <p className="mr-2 text-teal-500 ">{t("technologiesUsedColor")}</p>
            {t("technologiesUsed")}
          </div>
          <div className="flex flex-wrap ">
            <InfiniteIconSlider
              icons={clientData.language}
              spacing="mx-4 md:mx-10"
              fadeCorners={false}
              className={`bg-slate-50 rounded-2xl p-4`}
            />
          </div>
        </div>
      </section>
      <section id="relatedProjects">
        <Suspense>
          <RelatedProjects id={id}/>
        </Suspense>
      </section>
      <Footer />
    </main>
  )
}
