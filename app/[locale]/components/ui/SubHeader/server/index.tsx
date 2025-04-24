import Link from "next/link"
import { ScrollBehavior } from "../scrollBehavior"
import { ClientSubHeaderActions } from "../client"

export default function SubHeader() {
  return (
    <ScrollBehavior>
      <header className="h-[10vh] py-6 w-full transition-all duration-300 z-40 flex items-center">
        <div className="px-[10vw] w-full flex justify-between items-center">
          {/* Aplicamos el backdrop-blur solo al texto del logo */}
          <Link href="/" className="text-2xl md:text-3xl font-bold text-white backdrop-blur-sm px-3 py-1 rounded-lg">
            Agustin Cordoba
          </Link>
          {/* ClientSubHeaderActions ya tiene su propio backdrop-blur en sus elementos */}
          <ClientSubHeaderActions />
        </div>
      </header>
    </ScrollBehavior>
  )
}
