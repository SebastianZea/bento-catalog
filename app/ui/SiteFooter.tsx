import { Facebook, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40 p-4">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Base Camas Medellín</h3>
            <p className="text-muted-foreground">
              Fabricando base camas y colchones desde 1990 y dnado servicios de acarreo a toda el Área Metropolitana del Valle de Aburrá.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Link href="tel:+573123456789" className="text-muted-foreground hover:text-foreground">
                  +57 314 513 6801
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:basecamascol@gmail.com" className="text-muted-foreground hover:text-foreground">
                  basecamascol@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Visítanos</h3>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/marketplace/item/1982870548876365/?mibextid=dXMIcH" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://wa.me/573145136801" className="text-muted-foreground hover:text-foreground">
                <Phone className="h-5 w-5" />
                <span className="sr-only">WhatsApp Business</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Base Camas Medellín.
        </div>
      </div>
    </footer>
  )
}

