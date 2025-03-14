interface productWarranties {
  name: string;
  warranty: string;
  materials: string;
}

interface municipality {
  name: string;
  price: string;
  time: string;
}

export const products: productWarranties[] = [
  {
    name: "Base Camas Sencillas",
    warranty: "2 años de garantía y 1 sola pieza",
    materials: "Tela Codra / Madera de Pino / 6 Patas",
  },
  {
    name: "Base Camas Modulares",
    warranty: "2 años de garantía y 2 piezas",
    materials: "Tela Codra / Madera de Pino / 8 Patas",
  },
  {
    name: "Colchonetas de Algodón",
    warranty: "3 meses de garantía",
    materials: "Algodón / Forrado en tela"
  },
  {
    name: "Colchones Ortopédicos",
    warranty: "3 meses de garantía",
    materials: "Núcleo de Poliestireno Expandido / Algodón"
  },
  {
    name: "Colchones de Espuma",
    warranty: "3 meses de garantía",
    materials: "Espuma suave"
  },
  {
    name: "Colchones Semiortopédicos",
    warranty: "3 meses de garantía",
    materials: "Resortado / Núcleo de espuma / Alcolchado"
  },
  {
    name: "Espaldares convencionales",
    warranty: "1 año de garantía",
    materials: "Madera de pino / Tela Codra / Algodón"
  },
  {
    name: "Espaldares de piso",
    warranty: "1 año de garantía",
    materials: "Madera de pino / Tela Codra / Algodón"
  },
];

export const municipalities: municipality[] = [
  { name: "Medellín", price: "$30.000", time: "2 - 8 horas" },
  { name: "Bello", price: "$30.000", time: "2 - 6 horas" },
  { name: "Envigado", price: "$40.000", time: "4 - 10 horas" },
  { name: "Itagüí", price: "$45.000", time: "6 - 10 horas" },
  { name: "Sabaneta", price: "$50.000", time: "6 - 12 horas" },
  { name: "La Estrella", price: "No disponible", time: "***" },
  { name: "Caldas", price: "No disponible", time: "***" },
  { name: "Copacabana", price: "$20.000", time: "2 - 4 horas" },
  { name: "Girardota", price: "$30.000", time: "4 - 10 horas" },
  { name: "Barbosa", price: "No disponible", time: "***" },
];
