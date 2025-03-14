import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { products, municipalities } from "@/data/products/warranties"
import { Separator } from "@/components/ui/separator"

export default function WarrantyPage() {

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Garantías de Productos</h1>

      {/* General description */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Descripción General</h2>
        <div className="bg-muted p-6 rounded-lg">
          <p className="mb-4">
            Todos nuestros productos cuentan con garantía de fábrica que cubre defectos de fabricación y funcionamiento
            bajo condiciones normales de uso.
          </p>
          <p className="mb-4">
            Para hacer efectiva su garantía, es necesario presentar la factura de compra y el producto defectuoso tal cual como lo encontró.
          </p>
          <p>
            Las garantías no cubren daños causados por mal uso, accidentes, desgaste normal, modificaciones no
            autorizadas o reparaciones realizadas por terceros.
          </p>
        </div>
      </section>

      {/* Transportation table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Tabla de Acarreos</h2>
        <div className="overflow-x-auto md:max-w-[800px] md:mx-auto">
          <Table>
            <TableCaption>Costos y tiempos de acarreo en el área metropolitana de Antioquia</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Municipio</TableHead>
                <TableHead>Tiempo de entrega</TableHead>
                <TableHead>Costo del acarreo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {municipalities.map((municipality, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{municipality.name}</TableCell>
                  <TableCell>{municipality.time}</TableCell>
                  <TableCell>{municipality.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Products table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Productos y Garantías</h2>
        <div className="overflow-x-auto md:max-w-[800px] md:mx-auto">
          <Table>
            <TableCaption>Información de garantías por producto</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Producto</TableHead>
                <TableHead>Garantía</TableHead>
                <TableHead>Colores Disponibles</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.warranty}</TableCell>
                  <TableCell>
                    {product.materials}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Return button */}
      <div className="flex justify-center mt-8">
        <Link href="/">
          <Button className="cursor-pointer">Volver al Inicio</Button>
        </Link>
      </div>
    </main>
  )
}

