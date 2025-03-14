"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ProductCarouselProps } from "@/types/product"

export function ProductCarousel({ productImages }: ProductCarouselProps) {
  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {productImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-square overflow-hidden rounded-xl border border-border">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Imagen del producto ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      {/* Miniaturas del carrusel */}
      <div className="mt-4 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {productImages.map((src, index) => (
            <div
              key={index}
              className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border border-border cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image src={src || "/placeholder.svg"} alt={`Miniatura ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

