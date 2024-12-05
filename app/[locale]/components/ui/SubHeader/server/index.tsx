import Link from "next/link";
import { ClientSubHeaderActions } from "../client";

export default function SubHeader({ style }: { style: string }) {

  return (
    <header className={`${style} container mx-auto px-4 flex justify-between items-center`}>
      <Link href="/" className="text-2xl md:text-3xl font-bold">
        Agustin Cordoba
      </Link>
      <ClientSubHeaderActions  />
    </header>
  );
}