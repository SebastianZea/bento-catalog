import { ShoppingCart, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DescriptionTable } from "../ui/DescriptionTable"
import { ProductCarousel } from "../ui/ProductCarousel"
import { ProductFAQ } from "../ui/ProductFAQ"
import { productsTable } from "@/data/products/table"
import { productsCarousel } from "@/data/products/carousel"
import { generalFAQ } from "@/data/products/faq"
import { basecamas, colchones, espaldares, combos } from "@/data/products/products"

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
}

export const dynamic = "force-dynamic";

const products: Product[] = [basecamas, colchones, espaldares, combos];

export default function ProductPage({ params }: { params: Record<string, string> }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    console.error(`Product ${params.id} not found`);
    return <div>Product not found</div>;
  }

  const tableData = productsTable[params.id]
  const carouselData = productsCarousel[params.id]

  return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Carrusel de imágenes */}
          <ProductCarousel productImages={carouselData} />
  
          {/* Información del producto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
              <p className="text-xl font-medium text-primary mt-2">{product.price}</p>
            </div>
  
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold">Descripción</h2>
              <p className="text-muted-foreground text-sm md:text-base">
                {product.description}
              </p>
            </div>
  
            <div className="flex flex-col gap-4 pt-4">
              <Button disabled className="w-full" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" /> Comprar ahora
              </Button>
              <Button disabled variant="outline" className="w-full" size="lg">
                <Store className="mr-2 h-5 w-5" /> Ir a la tienda
              </Button>
            </div>
          </div>
        </div>
  
        {/* Tabla de especificaciones */}
        <DescriptionTable tabs={tableData} />
  
        {/* Sección de FAQ */}
        <ProductFAQ questions={generalFAQ} />
      </div>
    )
}

