"use client"
import Link from "next/link";
import React from "react";
import Button from "../../ui";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "../../contexts/DarkThemeContext";
import { Footer } from "../../layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <main>
      <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">
            Agustin Cordoba
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="outline">Get in Touch</Button>
            <Button variant="ghost">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>
        <main className="pt-20">{children}</main>
      </div>
      <Footer />
    </main>
  );
};
