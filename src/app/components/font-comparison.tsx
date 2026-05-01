import React, { useState } from "react";
import { Logo } from "./logo-system";

const FONTS = [
  {
    name: "Work Sans",
    family: "'Work Sans', sans-serif",
    tag: "Calidez industrial",
    note: "Geométrica con terminaciones suaves. Nació para pantalla pero tiene alma de taller. En títulos grandes, sus proporciones generosas le dan presencia sin frialdad. El contraste con Baskerville es de temperatura: una es cálida-orgánica, la otra cálida-construida.",
  },
  {
    name: "Source Sans 3",
    family: "'Source Sans 3', sans-serif",
    tag: "Humanista discreta",
    note: "Diseñada por Paul Hunt para Adobe (pero libre). Comparte proporciones con las serif transicionales, lo que hace que el maridaje con Baskerville sea casi invisible: dialogan sin competir. Es la opción más 'profesional' y menos arriesgada.",
  },
  {
    name: "DM Sans",
    family: "'DM Sans', sans-serif",
    tag: "Geométrica contemporánea",
    note: "Óptica y geométricamente limpia. La 'a' y la 'g' de un solo piso le dan un aire más moderno y gráfico. Genera el mayor contraste con Baskerville: donde la serif es clásica, DM Sans es abiertamente contemporánea. Más tensión, más energía visual.",
  },
];

const LOREM = "La coexistencia simultánea de temporalidades, culturas y proyectos políticos que no se disuelven en una síntesis única.";

export default function FontComparison() {
  const [highlighted, setHighlighted] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Header */}
      <div className="px-8 md:px-16 lg:px-24 py-12" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }} className="mb-4">
          Comparativo tipográfico
        </p>
        <Logo palette="wiphala" size="md" />
      </div>

      {/* Side by side: Three columns */}
      <div className="px-8 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {FONTS.map((font, i) => (
            <div
              key={font.name}
              className="flex flex-col transition-opacity duration-300"
              style={{
                opacity: highlighted === null || highlighted === i ? 1 : 0.25,
              }}
              onMouseEnter={() => setHighlighted(i)}
              onMouseLeave={() => setHighlighted(null)}
            >
              {/* Tag */}
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)" }} className="mb-3">
                {font.tag}
              </span>

              {/* Font name as title specimen */}
              <h2
                style={{
                  fontFamily: font.family,
                  fontSize: "2.25rem",
                  color: "#1A1A1A",
                  lineHeight: 1.15,
                  fontWeight: 600,
                }}
                className="mb-2"
              >
                {font.name}
              </h2>

              {/* Alphabet specimen */}
              <p
                style={{
                  fontFamily: font.family,
                  fontSize: "0.85rem",
                  color: "rgba(0,0,0,0.25)",
                  letterSpacing: "0.05em",
                  fontWeight: 400,
                }}
                className="mb-6"
              >
                AaBbCcDdEeFfGgHhIiJjKk
              </p>

              {/* Simulated title + body pair */}
              <div className="p-6 mb-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.05)" }}>
                <h3
                  style={{
                    fontFamily: font.family,
                    fontSize: "1.35rem",
                    color: "#1A1A1A",
                    lineHeight: 1.3,
                    fontWeight: 600,
                  }}
                  className="mb-3"
                >
                  Abigarramiento y coexistencia
                </h3>
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.9rem",
                    color: "#555",
                    lineHeight: 1.75,
                  }}
                >
                  {LOREM}
                </p>
              </div>

              {/* Title sizes */}
              <div className="space-y-2 mb-6">
                {[
                  { label: "H1", size: "2rem", weight: 700 },
                  { label: "H2", size: "1.5rem", weight: 600 },
                  { label: "H3", size: "1.15rem", weight: 600 },
                  { label: "H4", size: "0.95rem", weight: 500 },
                ].map((h) => (
                  <div key={h.label} className="flex items-baseline gap-3">
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(0,0,0,0.25)", width: 24, flexShrink: 0 }}>
                      {h.label}
                    </span>
                    <span
                      style={{
                        fontFamily: font.family,
                        fontSize: h.size,
                        fontWeight: h.weight,
                        color: "#1A1A1A",
                        lineHeight: 1.3,
                      }}
                    >
                      la abigarrada
                    </span>
                  </div>
                ))}
              </div>

              {/* Dark variant */}
              <div className="p-6 mb-6" style={{ backgroundColor: "#1A1A1A" }}>
                <h3
                  style={{
                    fontFamily: font.family,
                    fontSize: "1.35rem",
                    color: "#FFFFFF",
                    lineHeight: 1.3,
                    fontWeight: 600,
                  }}
                  className="mb-3"
                >
                  Abigarramiento y coexistencia
                </h3>
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.75,
                  }}
                >
                  {LOREM}
                </p>
              </div>

              {/* Rationale */}
              <div style={{ borderLeft: "2px solid rgba(0,0,0,0.08)", paddingLeft: 14 }}>
                <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.8rem", color: "#888", lineHeight: 1.7, fontStyle: "italic" }}>
                  {font.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My recommendation */}
      <div className="px-8 md:px-16 lg:px-24 py-16" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", backgroundColor: "#FAFAF8" }}>
        <div className="max-w-2xl">
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)" }} className="mb-4 block">
            Mi recomendación
          </span>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "2rem", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }} className="mb-4">
            DM Sans
          </h2>
          <div style={{ fontFamily: "'Libre Baskerville', serif", color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }} className="space-y-4">
            <p>
              Desde la estética pura, DM Sans es la que más le aporta al sistema. Y la razón es
              precisamente el <strong>contraste</strong>.
            </p>
            <p>
              Work Sans y Source Sans 3 son buenas fuentes, pero su relación con Baskerville es
              demasiado cómoda: conviven sin fricción. Y "la abigarrada" <em>es</em> fricción productiva.
              Es la coexistencia de cosas que no deberían funcionar juntas pero funcionan.
            </p>
            <p>
              DM Sans, con su geometría limpia y sus formas de un solo piso, genera una tensión
              visual deliberada contra la serif transicional del logo. Esa tensión replica a nivel
              tipográfico lo que el proyecto hace a nivel político: <strong>poner en diálogo lo que
              normalmente se separa</strong>.
            </p>
            <p>
              Además, prácticamente: DM Sans tiene excelente legibilidad en pantalla, buen rango de
              pesos (400–700), y su geometría hace que los títulos se distingan inmediatamente del
              cuerpo en Baskerville. La jerarquía se lee al instante.
            </p>
            <p style={{ fontStyle: "italic", color: "#999" }}>
              El sistema final sería: DM Sans (títulos) + Libre Baskerville (logo, cuerpo editorial)
              + JetBrains Mono (sistema, etiquetas). Tres voces, tres registros, un proyecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
