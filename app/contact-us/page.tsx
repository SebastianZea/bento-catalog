import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import Link from "next/link"

export default function ContactoSection() {
  const getWhatsAppLink = () => {
    const phoneNumber = "+573145136801"
    const message = encodeURIComponent("Hola! Estoy interesado en un producto.")
    return `https://wa.me/${phoneNumber}?text=${message}`
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contáctanos</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros.
            </p>
          </div>

          <div className="w-full max-w-sm">
            <Link href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button className="w-full text-lg py-6 bg-green-600 hover:bg-green-700 cursor-pointer">
                <p className="truncate">Contáctanos por WhatsApp</p>
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>Nuestros datos de contacto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+54 314 513 6801</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>basecamas@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Cll. 50 #59-132, Copacabana</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2 overflow-hidden">
              <CardHeader className="border-b border-primary/50 p-2">
                <CardTitle>Visita nuestra Tienda Online</CardTitle>
                <CardDescription>
                  Descubre todos nuestros productos desde la comodidad de tu hogar
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Beneficios de comprar online</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Recibirás prioridad en tu pedido</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Factura electrónica de tu pedido</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Códigos de descuento disponibles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Atención al cliente personalizada</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between space-y-4">
                    <div className="rounded-lg bg-muted p-4 text-center">
                      <p className="text-lg font-medium">¡Oferta especial!</p>
                      <p className="text-3xl font-bold text-primary">-10.000$ DE DESCUENTO</p>
                      <p className="text-sm text-muted-foreground">En toda la tienda</p>
                      <p className="text-xs mt-2">Usa el código: PROMO10</p>
                    </div>
                    <a 
                        className="w-full text-sm bg-primary text-white font-medium py-2 px-4 rounded-lg" 
                        href="https://www.google.com"
                    >
                      Ir a la tienda
                    </a>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 px-6 py-4">
                <p className="text-sm text-muted-foreground">
                  *Promociones sujetas a términos y condiciones. Válido hasta agotar stock.
                </p>
              </CardFooter>
            </Card>
          </div>

          <Card className="w-full max-w-4xl mt-6">
            <CardHeader>
              <CardTitle>Horarios de Atención</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Lunes a Viernes</p>
                  <p className="text-muted-foreground">9:00 - 16:00</p>
                </div>
                <div>
                  <p className="font-medium">Sábados</p>
                  <p className="text-muted-foreground">10:00 - 14:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

