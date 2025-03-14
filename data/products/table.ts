import { TabData } from "@/types/product"

const basecamasTable = [
  {
    title: "Sencilla",
    items: [
        { description: "0.90x1.90 m", price: "$90.000", time: "0 - 1 día", warranty: "2 años", details: "Pestaña: Sí / 6 patas" },
        { description: "1.00x1.90 m", price: "$90.000", time: "Inmediata", warranty: "2 años", details: "Pestaña: Sí / 6 patas" },
        { description: "1.20x1.90 m", price: "$100.000", time: "Inmediata", warranty: "2 años", details: "Pestaña: Sí / 6 patas" },
        { description: "1.40x1.90 m", price: "$110.000", time: "Inmediata", warranty: "2 años", details: "Pestaña: Sí / 6 patas" },
    ],
  },
  {
    title: "Modular",
    items: [
        { description: "1.00x1.90 m", price: "$130.000", time: "Inmediata", warranty: "2 años", details: "Pestaña: Sí / 8 patas" },
        { description: "1.20x1.90 m", price: "$130.000", time: "Inmediata", warranty: "2 años", details: "Pestaña: Sí / 8 patas" },
        { description: "1.40x1.90 m", price: "$130.000", time: "Inmediata", warranty: "2 años", details: "Pestaña: Sí / 8 patas" },
        { description: "1.60x1.90 m", price: "$150.000", time: "1 - 2 días", warranty: "2 años", details: "Pestaña: Sí / 8 patas" },
    ],
  },
]

const colchonesTable = [
  {
    title: "Algodón",
    items: [
        { description: "1.00x1.90 m", price: "$80.000", time: "1 día", warranty: "3 Meses", details: "Dureza: Alta / Resortado: No" },
        { description: "1.20x1.90 m", price: "$80.000", time: "1 día", warranty: "3 Meses", details: "Dureza: Alta / Resortado: No" },
        { description: "1.40x1.90 m", price: "$80.000", time: "1 día", warranty: "3 Meses", details: "Dureza: Alta / Resortado: No" },
        { description: "1.60x1.90 m", price: "$100.000", time: "1 - 2 días", warranty: "3 Meses", details: "Dureza: Alta / Resortado: No" },
    ]
  },
  {
    title: "Ortopédico",
    items: [
        { description: "1.00x1.90 m", price: "$160.000", time: "1 día", warranty: "3 Meses", details: "Dureza: Alta / Resortado: No" },
        { description: "1.20x1.90 m", price: "$170.000", time: "1 día", warranty: "3 Meses", details: "Dureza: Alta / Resortado: No" },
        { description: "1.40x1.90 m", price: "$180.000", time: "1 día", warranty: "3 Meses", details: "Dureza: Alta / Resortado: No" },
        { description: "1.60x1.90 m", price: "$200.000", time: "1 - 2 días", warranty: "3 Meses", details: "Dureza: Alta / Resortado: No" },
    ]
  },
  {
    title: "Espuma",
    items: [
        { description: "1.00x1.90 m", price: "$260.000", time: "1 - 2 días", warranty: "3 Meses", details: "Dureza: Baja / Resortado: No" },
        { description: "1.20x1.90 m", price: "$280.000", time: "1 - 2 días", warranty: "3 Meses", details: "Dureza: Baja / Resortado: No" },
        { description: "1.40x1.90 m", price: "$300.000", time: "1 - 2 días", warranty: "3 Meses", details: "Dureza: Baja / Resortado: No" },
        { description: "1.60x1.90 m", price: "$330.000", time: "2 - 3 días", warranty: "3 Meses", details: "Dureza: Baja / Resortado: No" },
    ]
  },
  {
    title: "Semiortopédico",
    items: [
        { description: "1.00x1.90 m", price: "$350.000", time: "1 - 2 días", warranty: "3 Meses", details: "Dureza: Media alta / Resortado: Sí" },
        { description: "1.20x1.90 m", price: "$360.000", time: "1 - 2 días", warranty: "3 Meses", details: "Dureza: Media alta / Resortado: Sí" },
        { description: "1.40x1.90 m", price: "$370.000", time: "1 - 2 días", warranty: "3 Meses", details: "Dureza: Media alta / Resortado: Sí" },
        { description: "1.60x1.90 m", price: "$400.000", time: "2 - 3 días", warranty: "3 Meses", details: "Dureza: Media alta / Resortado: Sí" },
    ]
  }
]

const espaldaresTable = [
  {
    title: "Convencional",
    items: [
        { description: "1.00m anchor", price: "$100.000", time: "1 - 2 días", warranty: "1 año", details: "Acolchado: Sí" },
        { description: "1.20m anchor", price: "$100.000", time: "1 - 2 días", warranty: "1 año", details: "Acolchado: Sí" },
        { description: "1.40m anchor", price: "$100.000", time: "1 - 2 días", warranty: "1 año", details: "Acolchado: Sí" },
        { description: "1.60m anchor", price: "$120.000", time: "1 - 2 días", warranty: "1 año", details: "Acolchado: Sí" },
    ],
  },
  {
    title: "De Piso",
    items: [
        { description: "1.00m anchor", price: "$140.000", time: "1 - 2 días", warranty: "1 año", details: "Acolchado: Sí" },
        { description: "1.20m anchor", price: "$140.000", time: "1 - 2 días", warranty: "1 año", details: "Acolchado: Sí" },
        { description: "1.40m anchor", price: "$140.000", time: "1 - 2 días", warranty: "1 año", details: "Acolchado: Sí" },
        { description: "1.60m anchor", price: "$160.000", time: "1 - 2 días", warranty: "1 año", details: "Acolchado: Sí" },
    ],
  }
]

const combosTable = [
  {
    title: "Mini",
    items: [
        { description: "1.00mx1.90m", price: "$170.000", time: "0 - 1 días", warranty: "3 Meses", details: "Base Cama, C. de Algodón" },	
        { description: "1.20mx1.90m", price: "$180.000", time: "0 - 1 días", warranty: "3 Meses", details: "Base Cama, C. de Algodón" },
        { description: "1.40mx1.90m", price: "$190.000", time: "0 - 1 días", warranty: "3 Meses", details: "Base Cama, C. de Algodón" },
    ],
  },
  {
    title: "Normal",
    items: [
        { description: "1.00mx1.90m", price: "$250.000", time: "0 - 1 días", warranty: "3 Meses", details: "Base Cama, C. Ortopédico" },	
        { description: "1.20mx1.90m", price: "$270.000", time: "0 - 1 días", warranty: "3 Meses", details: "Base Cama, C. Ortopédico" },
        { description: "1.40mx1.90m", price: "$290.000", time: "0 - 1 días", warranty: "3 Meses", details: "Base Cama, C. Ortopédico" },
    ],
  },
  {
    title: "Express",
    items: [
        { description: "1.00mx1.90m", price: "$440.000", time: "1 - 2 días", warranty: "3 Meses", details: "Base Cama, C. Semiortopédico" },	
        { description: "1.20mx1.90m", price: "$460.000", time: "1 - 2 días", warranty: "3 Meses", details: "Base Cama, C. Semiortopédico" },
        { description: "1.40mx1.90m", price: "$480.000", time: "1 - 2 días", warranty: "3 Meses", details: "Base Cama, C. Semiortopédico" },
    ],
  },
  {
    title: "Mega",
    items: [
        { description: "1.00mx1.90m", price: "$350.000", time: "1 - 2 días", warranty: "3 Meses", details: "Base Cama, C. Ortopédico, Espaldar" },	
        { description: "1.20mx1.90m", price: "$370.000", time: "1 - 2 días", warranty: "3 Meses", details: "Base Cama, C. Ortopédico, Espaldar" },
        { description: "1.40mx1.90m", price: "$390.000", time: "1 - 2 días", warranty: "3 Meses", details: "Base Cama, C. Ortopédico, Espaldar" },
    ],
  },
  {
    title: "Omega",
    items: [
        { description: "1.00mx1.90m", price: "$540.000", time: "1 - 3 días", warranty: "3 Meses", details: "Base Cama, C. Semiortopédico, Espaldar" },	
        { description: "1.20mx1.90m", price: "$560.000", time: "1 - 3 días", warranty: "3 Meses", details: "Base Cama, C. Semiortopédico, Espaldar" },
        { description: "1.40mx1.90m", price: "$580.000", time: "1 - 3 días", warranty: "3 Meses", details: "Base Cama, C. Semiortopédico, Espaldar" },
    ],
  },
]

export const productsTable: Record<string, TabData[]> = {
  basecamas: basecamasTable,
  colchones: colchonesTable,
  espaldares: espaldaresTable,
  combos: combosTable,
}
