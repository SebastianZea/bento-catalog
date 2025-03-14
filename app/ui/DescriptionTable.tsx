"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabData } from "@/types/product"

interface ProductSpecsTableProps {
  tabs: TabData[]
}

export function DescriptionTable({ tabs }: ProductSpecsTableProps) {

  return (
    <Card className="mt-12">
      <CardContent className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Especificaciones</h2>
        <Tabs defaultValue={tabs[0]?.title.toLowerCase()}>
          <TabsList className="mb-4 w-full flex justify-start overflow-x-auto">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.title} value={tab.title.toLowerCase()}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.title} value={tab.title.toLowerCase()} className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Medidas</TableHead>
                    <TableHead>Precios</TableHead>
                    <TableHead>Tiempo de entrega</TableHead>
                    <TableHead>Detalles</TableHead>
                    <TableHead>Garantía</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tab.items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.time}</TableCell>
                      <TableCell>{item.details}</TableCell>
                      <TableCell>{item.warranty}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}