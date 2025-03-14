"use client";

import { useState } from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  ExternalLink,
  CircleAlert,
} from "lucide-react";

export default function LocationPage() {
  // Convertir las coordenadas de formato DMS a decimal
  // 6°20'42.2"N 75°30'50.0"W
  const lat = 6 + 20 / 60 + 42.2 / 3600;
  const lng = -(75 + 30 / 60 + 50.0 / 3600); // Negativo porque es Oeste (W)

  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

  // Estado para el modo de transporte
  const [transportMode, setTransportMode] = useState<
    "driving" | "transit" | "bicycling"
  >("driving");

  // URL para direcciones según el modo de transporte
  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=${transportMode}`;
  };

  return (
      <main className="md:flex space-y-4 md:gap-4">
            <Card className="w-full md:h-[600px]">
              <CardHeader>
                <CardTitle>Nuestra Ubicación</CardTitle>
                <CardDescription>
                  Encuéntranos fácilmente en el mapa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border">
                  <GoogleMapsEmbed
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
                    height={400}
                    width="100%"
                    mode="place"
                    q={`${lat},${lng}`}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => window.open(googleMapsUrl, "_blank")}
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Abrir en Google Maps
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="w-full md:h-[600px]">
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>
                  Todo lo que necesitas saber para visitarnos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Calle 50 #59-132, Medellín, Antioquia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+57 314 513 6801</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Lunes a Viernes: 9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Sábados: 10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Domingos: Cerrado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleAlert className="h-5 w-5 text-primary" />
                    <span>Requisito: Confirmación de ingreso</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-2">Coordenadas</h3>
                  <p>6°20'42.2"N 75°30'50.0"W</p>
                  <p className="text-sm text-muted-foreground">
                    Latitud: {lat.toFixed(6)}, Longitud: {lng.toFixed(6)}
                  </p>
                </div>

                <div className="flex gap-1 md:gap-4">
                  <Button
                    className="cursor-pointer w-[175px]"
                    variant="outline"
                    onClick={() =>
                      window.open(
                        `https://wa.me/573145136801?text=${encodeURIComponent(
                          "Hola, estoy interesado en visitar su negocio"
                        )}`,
                        "_blank"
                      )
                    }
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Enviar WhatsApp
                  </Button>
                  <Button
                    className="cursor-pointer w-[165px]"
                    onClick={() => window.open(getDirectionsUrl(), "_blank")}
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Iniciar ruta
                  </Button>
                </div>
              </CardContent>
            </Card>
      </main>
  );
}
