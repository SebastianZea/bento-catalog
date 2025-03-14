"use client"

import { ProductFAQProps } from "@/types/product"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ProductFAQ({ questions }: ProductFAQProps) {
  return (
    <div className="mt-12 mb-16">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>
      <Accordion type="single" collapsible className="w-full">
        {questions.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

