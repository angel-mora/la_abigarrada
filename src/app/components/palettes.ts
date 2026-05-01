// Datos puros de paletas. Sin React, sin imports.
// Esta es la frontera con el backend: el dia de la migracion a ViewComponent,
// este archivo se traduce 1:1 a config/palettes.yml o a un modelo Ruby.

export interface Palette {
  name: string;
  description: string;
  colors: string[];
  rationale: string;
}

export const PALETTES = {
  wiphala: {
    name: "Wiphala",
    description: "Bandera de los pueblos originarios andinos. Representa la plurinacionalidad y la resistencia indigena.",
    colors: ["#E21C21", "#F39A1E", "#FBED21", "#FFFFFF", "#3DB34A", "#2E3091", "#6E3B8E"],
    rationale: "La Wiphala es el eje identitario principal. Sus siete colores representan los principios de complementariedad andina. Como sistema editorial, 'la abigarrada' nace de la misma logica de coexistencia que esta bandera encarna.",
  },
  feminista: {
    name: "Feminista",
    description: "El violeta feminista con sus variaciones, del morado sufragista al lavanda de la diversidad.",
    colors: ["#6B2FA0", "#9B59B6", "#D5A6E6", "#2D1B4E", "#E8D5F5"],
    rationale: "El violeta no es solo un color: es una genealogia de lucha. Del violeta sufragista de 1908 al morado de Ni Una Menos. Incluimos variaciones tonales porque el feminismo no es monolitico.",
  },
  panafricana: {
    name: "Panafricana",
    description: "Rojo, negro y verde de la bandera panafricana de Marcus Garvey, mas el dorado de la riqueza del continente.",
    colors: ["#C8102E", "#1A1A1A", "#009639", "#FFD700"],
    rationale: "El panafricanismo como proyecto de emancipacion comparte con 'la abigarrada' la idea de que la identidad no se fragmenta: se entreteje. El negro central ancla la composicion.",
  },
  lgbtiq: {
    name: "LGBTIQA+",
    description: "Arcoiris expandido: incluye colores de la bandera Progress Pride (trans + intersex + BIPOC).",
    colors: ["#E40303", "#FF8C00", "#FFED00", "#008026", "#004DFF", "#750787", "#F5A9B8", "#5BCEFA", "#613915", "#000000"],
    rationale: "Usamos la Progress Pride flag porque su logica de expansion permanente es analoga a 'la abigarrada': siempre hay espacio para una identidad mas.",
  },
  cmyk: {
    name: "CMYK Editorial",
    description: "Cian, magenta, amarillo y negro. La paleta del oficio editorial y la imprenta.",
    colors: ["#00AEEF", "#EC008C", "#FFF200", "#1A1A1A"],
    rationale: "Respetamos la propuesta original del cliente. CMYK habla del oficio, de la materialidad del texto impreso. Aunque 'la abigarrada' es digital, esta paleta honra la tradicion editorial de la que nace.",
  },
  rojinegra: {
    name: "Rojinegra",
    description: "Rojo y negro de la tradicion anarcosindicalista y de los movimientos de liberacion del siglo XX.",
    colors: ["#C8102E", "#1A1A1A"],
    rationale: "La diagonal rojinegra es el simbolo mas economico y mas cargado de la historia politica moderna: la CNT-FAI, el zapatismo, la insurgencia. Su minimalismo cromatico es lo opuesto a la profusion Wiphala, y por eso convive: 'la abigarrada' aloja tanto el espectro como la binaridad militante.",
  },
} satisfies Record<string, Palette>;

export type PaletteKey = keyof typeof PALETTES;

export const PALETTE_KEYS = Object.keys(PALETTES) as PaletteKey[];
