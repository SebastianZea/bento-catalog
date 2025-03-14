"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MapPin, Undo2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center p-4">
        <div className="flex items-center gap-2 mr-4">
          {isHome ? (
            <MapPin className="h-6 w-6 text-primary" />
          ) : (
            <Undo2 className="h-6 w-6 text-primary" />
          )}
          <Link href="/" className="font-bold md:text-xl">
            {isHome ? "Base Camas Medellín" : "Volver al inicio"}
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="/contact-us">Llamar ahora</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
