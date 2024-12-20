import Link from "next/link";
import { ScrollBehavior } from "../scrollBehavior";
import { ClientSubHeaderActions } from "../client";


export default function SubHeader() {
  return (
    <ScrollBehavior>
      <header className="h-[10vh] py-6 w-full transition-all duration-300 z-40 flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-bold">
            Agustin Cordoba
          </Link>
          <ClientSubHeaderActions />
        </div>
      </header>
    </ScrollBehavior>
  );
}

