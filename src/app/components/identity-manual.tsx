import React, { useState } from "react";
import { Logo, PALETTES, SocialTemplate, ProfileIcon, type PaletteKey } from "./logo-system";

// ============================
// SECTION: HERO / INTRO
// ============================
function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="max-w-4xl">
        <p
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}
          className="mb-6"
        >
          Manual de identidad visual v1.0
        </p>
        <div className="mb-12">
          <Logo palette="wiphala" size="xl" showSubline />
        </div>
        <div className="max-w-2xl space-y-6" style={{ fontFamily: "'Libre Baskerville', serif", color: "#333" }}>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8 }}>
            <em>Abigarrada</em>: que tiene muchos colores mal combinados. Asi la define la RAE.
            Pero Rene Zavaleta Mercado, sociologo boliviano, resignifico el termino para nombrar
            aquello que la modernidad occidental no puede ordenar: <strong>la coexistencia simultanea
            de temporalidades, culturas y proyectos politicos que no se disuelven en una sintesis unica</strong>.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#555" }}>
            Este manual no busca domesticar esa complejidad sino darle un sistema visual que la honre.
            El logo de "la abigarrada" muta: no tiene una version "correcta" y versiones "alternativas".
            Tiene un sistema de variaciones igualmente validas, cada una cargando una declaracion politica distinta.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================
// SECTION: TIPOGRAFIA
// ============================
function TypographySection() {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-20" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div className="max-w-5xl">
        <SectionHeader number="01" title="Tipografia" />

        <div style={{ fontFamily: "'Libre Baskerville', serif", color: "#444", lineHeight: 1.8 }} className="mt-8 max-w-2xl mb-16">
          <p className="mb-4">
            El sistema tipografico de "la abigarrada" tiene tres voces, cada una con un registro distinto.
            No es redundancia: es polifonia. Asi como el proyecto pone en dialogo identidades que normalmente
            se separan, la tipografia pone en dialogo tradiciones formales que normalmente no conviven.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          {/* DM Sans */}
          <div>
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "2.25rem", lineHeight: 1.15, color: "#1A1A1A", fontWeight: 700 }} className="mb-2">
              DM Sans
            </h3>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }} className="mb-2">
              Titulos / Navegacion
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(0,0,0,0.25)", letterSpacing: "0.03em" }} className="mb-6">
              AaBbCcDdEeFfGgHhIiJj
            </p>
            <div style={{ fontFamily: "'Libre Baskerville', serif", color: "#444", lineHeight: 1.8, fontSize: "0.9rem" }}>
              <p className="mb-4">
                Geometrica contemporanea. Su limpieza formal genera una tension deliberada contra la serif
                del logotipo: donde Baskerville es clasica, DM Sans es abiertamente moderna.
              </p>
              <p>
                <strong>Decision curatorial:</strong> Elegimos DM Sans sobre opciones mas "seguras" (Work Sans, Source Sans)
                porque el proyecto necesita friccion visual, no armonia comoda. Esa tension entre clasico y contemporaneo
                replica a nivel tipografico lo que "la abigarrada" hace a nivel politico.
              </p>
            </div>
          </div>

          {/* Libre Baskerville */}
          <div>
            <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "2.25rem", lineHeight: 1.15, color: "#1A1A1A" }} className="mb-2">
              Libre Baskerville
            </h3>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }} className="mb-2">
              Logotipo / Cuerpo editorial
            </p>
            <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.85rem", color: "rgba(0,0,0,0.25)", letterSpacing: "0.03em" }} className="mb-6">
              AaBbCcDdEeFfGgHhIiJj
            </p>
            <div style={{ fontFamily: "'Libre Baskerville', serif", color: "#444", lineHeight: 1.8, fontSize: "0.9rem" }}>
              <p className="mb-4">
                Serif transicional: nacio entre el viejo estilo y la modernidad tipografica.
                Esa condicion liminal la hace perfecta para un proyecto que habita entre mundos.
              </p>
              <p>
                Es la voz narrativa del proyecto. Cuenta, argumenta, persuade. Su version libre
                (Google Fonts) es coherente con la etica de acceso abierto.
              </p>
            </div>
          </div>

          {/* JetBrains Mono */}
          <div>
            <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1.75rem", lineHeight: 1.25, color: "#1A1A1A" }} className="mb-2">
              JetBrains Mono
            </h3>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }} className="mb-2">
              Sistema / Etiquetas / Metadatos
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem", color: "rgba(0,0,0,0.25)", letterSpacing: "0.03em" }} className="mb-6">
              AaBbCcDdEeFfGgHhIiJj
            </p>
            <div style={{ fontFamily: "'Libre Baskerville', serif", color: "#444", lineHeight: 1.8, fontSize: "0.9rem" }}>
              <p className="mb-4">
                Monoespaciada: cada caracter ocupa el mismo espacio. Esa igualdad formal
                es, tambien, una posicion politica. Evoca la terminal, el texto sin formatear.
              </p>
              <p>
                Solo aparece en texto pequeno de sistema: numeros de seccion, etiquetas de paleta,
                dimensiones tecnicas. Es la voz que clasifica sin jerarquizar.
              </p>
            </div>
          </div>
        </div>

        {/* Pairing demo */}
        <div className="mt-16 p-10" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.05)" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)" }} className="mb-4">
            Ejemplo de convivencia tipografica
          </p>
          <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.25 }} className="mb-4">
            Abigarramiento y coexistencia: un dialogo pendiente
          </h3>
          <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.95rem", color: "#555", lineHeight: 1.8 }} className="mb-3">
            La coexistencia simultanea de temporalidades, culturas y proyectos politicos que no se disuelven
            en una sintesis unica. Zavaleta Mercado nos enseno que lo abigarrado no es caos: es una forma
            distinta de orden, una donde las partes no necesitan renunciar a si mismas para formar un todo.
          </p>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "rgba(0,0,0,0.35)" }}>
            Publicado el 15 de abril, 2026 — Etiquetas: teoria critica, Zavaleta Mercado, plurinacionalidad
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================
// SECTION: COLOR SYSTEM
// ============================
function ColorSection() {
  const [activePalette, setActivePalette] = useState<PaletteKey>("wiphala");
  const palette = PALETTES[activePalette];

  return (
    <section className="px-8 md:px-16 lg:px-24 py-20" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div className="max-w-5xl">
        <SectionHeader number="02" title="Sistema cromatico" />

        <div style={{ fontFamily: "'Libre Baskerville', serif", color: "#444", lineHeight: 1.8 }} className="mt-8 max-w-2xl mb-12">
          <p className="mb-4">
            El sistema cromatico de "la abigarrada" no tiene una paleta primaria y paletas secundarias.
            <strong> Tiene cinco paletas coiguales</strong>, cada una anclada a un movimiento politico-cultural.
            La eleccion de cual usar en cada pieza es, en si misma, un acto editorial.
          </p>
          <p>
            <strong>Decision curatorial:</strong> Proponemos la Wiphala como paleta por defecto, no por jerarquia,
            sino porque sus siete colores contienen el espectro cromatico completo, funcionando como un
            "meta-arcoiris" que dialoga con todas las demas paletas. Ademas, el concepto de abigarramiento
            nace del pensamiento andino, lo que crea coherencia semiotica entre nombre e identidad visual.
          </p>
        </div>

        {/* Palette selector */}
        <div className="flex flex-wrap gap-3 mb-12">
          {(Object.keys(PALETTES) as PaletteKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActivePalette(key)}
              className="px-4 py-2 transition-all"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
                backgroundColor: activePalette === key ? "#1A1A1A" : "transparent",
                color: activePalette === key ? "#FFF" : "#1A1A1A",
                border: `1px solid ${activePalette === key ? "#1A1A1A" : "rgba(0,0,0,0.15)"}`,
              }}
            >
              {PALETTES[key].name}
            </button>
          ))}
        </div>

        {/* Active palette display */}
        <div className="mb-8">
          <div className="flex gap-0 mb-6" style={{ height: 80 }}>
            {palette.colors.map((color, i) => (
              <div
                key={i}
                style={{ flex: 1, backgroundColor: color, position: "relative" }}
                className="group"
              >
                <span
                  className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: isLight(color) ? "#000" : "#FFF", mixBlendMode: "difference" }}
                >
                  {color}
                </span>
              </div>
            ))}
          </div>
          <h4 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "1.25rem", color: "#1A1A1A" }} className="mb-2">
            {palette.name}
          </h4>
          <p style={{ fontFamily: "'Libre Baskerville', serif", color: "#666", lineHeight: 1.7, fontSize: "0.95rem" }} className="max-w-2xl mb-4">
            {palette.description}
          </p>
          <div style={{ borderLeft: "3px solid rgba(0,0,0,0.1)", paddingLeft: 16 }}>
            <p style={{ fontFamily: "'Libre Baskerville', serif", color: "#888", lineHeight: 1.7, fontSize: "0.85rem", fontStyle: "italic" }} className="max-w-2xl">
              {palette.rationale}
            </p>
          </div>
        </div>

        {/* Logo preview with active palette */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="flex items-center justify-center p-12" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)" }}>
            <Logo palette={activePalette} size="lg" />
          </div>
          <div className="flex items-center justify-center p-12" style={{ backgroundColor: "#2A2A2A" }}>
            <Logo palette={activePalette} size="lg" darkBg />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================
// SECTION: LOGO MUTATIONS
// ============================
function MutationsSection() {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-20" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div className="max-w-5xl">
        <SectionHeader number="03" title="Mutaciones del logo" />
        <div style={{ fontFamily: "'Libre Baskerville', serif", color: "#444", lineHeight: 1.8 }} className="mt-8 max-w-2xl mb-16">
          <p className="mb-4">
            Cada variacion es una toma de posicion. Cuando "la abigarrada" publica contenido sobre
            derechos de pueblos originarios, el logo lleva la Wiphala. Cuando el tema es genero,
            lleva la paleta feminista. <strong>El logo no decora: declara.</strong>
          </p>
          <p>
            <strong>Decision curatorial:</strong> Las lineas debajo del texto funcionan como un subrayado politico.
            Estan debajo porque sostienen: son la base material-ideologica sobre la que se construye el discurso.
            No envuelven, no decoran al costado, no flotan: <em>soportan</em>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {(Object.keys(PALETTES) as PaletteKey[]).map((key) => (
            <div key={key}>
              <div className="flex items-center justify-center p-10 mb-4" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)", minHeight: 160 }}>
                <Logo palette={key} size="md" showSubline />
              </div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>
                Variacion {PALETTES[key].name}
              </p>
            </div>
          ))}
          {/* Segment style variant */}
          <div>
            <div className="flex items-center justify-center p-10 mb-4" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)", minHeight: 160 }}>
              <Logo palette="wiphala" size="md" lineStyle="segments" showSubline />
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>
              Variacion segmentada
            </p>
          </div>
        </div>

        {/* Dark backgrounds */}
        <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }} className="mt-16 mb-8">
          Sobre fondo oscuro
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.keys(PALETTES) as PaletteKey[]).map((key) => (
            <div key={key} className="flex items-center justify-center p-10" style={{ backgroundColor: "#2A2A2A", minHeight: 160 }}>
              <Logo palette={key} size="md" darkBg showSubline />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================
// SECTION: PROFILE ICONS
// ============================
function ProfileIconsSection() {
  const [palette, setPalette] = useState<PaletteKey>("wiphala");

  return (
    <section className="px-8 md:px-16 lg:px-24 py-20" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div className="max-w-5xl">
        <SectionHeader number="04" title="Icono de perfil / avatar" />

        <div style={{ fontFamily: "'Libre Baskerville', serif", color: "#444", lineHeight: 1.8 }} className="mt-8 max-w-2xl mb-12">
          <p className="mb-4">
            Para escalas pequenas (avatares de redes sociales, favicons, app icons) el logotipo completo
            colapsa. La marca se reduce a <strong>"la_"</strong>: el articulo femenino seguido de un guion
            bajo que es, en realidad, una version compacta de la franja segmentada.
          </p>
          <p>
            <strong>Decision curatorial:</strong> El guion bajo no es tipografico: es la barra del logo
            sintetizada en cuatro segmentos. La paleta del icono <em>siempre</em> coincide con la del logo
            principal: si la pieza editorial usa Wiphala, el avatar usa Wiphala. El icono se parametriza
            con la misma <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85em", backgroundColor: "rgba(0,0,0,0.05)", padding: "1px 6px" }}>palette</code>{" "}
            que el logo, lo que permite controlarlo desde un backend (rotacion por temporada, campana o
            efemeride).
          </p>
        </div>

        {/* Palette selector */}
        <div className="flex flex-wrap gap-3 mb-12">
          {(Object.keys(PALETTES) as PaletteKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setPalette(key)}
              className="px-3 py-1.5 transition-all"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.05em",
                backgroundColor: palette === key ? "#2A2A2A" : "transparent",
                color: palette === key ? "#FFF" : "#1A1A1A",
                border: `1px solid ${palette === key ? "#2A2A2A" : "rgba(0,0,0,0.15)"}`,
              }}
            >
              {PALETTES[key].name}
            </button>
          ))}
        </div>

        {/* Sync demo: logo + avatar same palette */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex items-center justify-center p-12" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)", minHeight: 220 }}>
            <Logo palette={palette} size="md" showSubline />
          </div>
          <div className="flex items-center justify-center p-12 gap-8" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)", minHeight: 220 }}>
            <ProfileIcon palette={palette} size={120} />
          </div>
        </div>

        {/* Scales */}
        <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }} className="mb-8">
          Escalas operativas
        </h4>
        <div className="flex flex-wrap items-end gap-10 mb-16 p-10" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)" }}>
          {[160, 96, 64, 48, 32].map((s) => (
            <div key={s} className="flex flex-col items-center gap-3">
              <ProfileIcon palette={palette} size={s} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(0,0,0,0.4)", letterSpacing: "0.1em" }}>
                {s}px
              </span>
            </div>
          ))}
        </div>

        {/* All palettes grid */}
        <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }} className="mb-8">
          Variaciones por paleta
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {(Object.keys(PALETTES) as PaletteKey[]).map((key) => (
            <div key={key} className="flex flex-col items-center gap-3">
              <ProfileIcon palette={key} size={96} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(0,0,0,0.5)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {PALETTES[key].name}
              </span>
            </div>
          ))}
        </div>

        {/* Dark variants */}
        <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }} className="mb-8">
          Sobre fondo oscuro
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-8" style={{ backgroundColor: "#2A2A2A" }}>
          {(Object.keys(PALETTES) as PaletteKey[]).map((key) => (
            <div key={key} className="flex flex-col items-center gap-3">
              <ProfileIcon palette={key} size={96} darkBg />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {PALETTES[key].name}
              </span>
            </div>
          ))}
        </div>

        {/* API usage hint */}
        <div className="mt-12 p-6" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "rgba(0,0,0,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-3">
            Uso programatico
          </p>
          <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: "#333", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
{`<ProfileIcon palette={currentTheme} size={96} />
// currentTheme proviene del backend o de un context global
// el mismo valor alimenta <Logo palette={currentTheme} />`}
          </pre>
        </div>
      </div>
    </section>
  );
}

// ============================
// SECTION: DO'S AND DON'TS
// ============================
function DosAndDonts() {
  const dos = [
    { rule: "Usar la paleta completa de cada variacion sin omitir colores", why: "Omitir un color de la Wiphala o la Progress Flag es omitir una identidad." },
    { rule: "Mantener las lineas del mismo ancho que el texto", why: "Las lineas son el subrayado del nombre. Si desbordan o se quedan cortas, pierden la relacion de soporte." },
    { rule: "Elegir la paleta segun el contenido editorial", why: "El logo-como-declaracion solo funciona si la mutacion es intencional y contextual." },
    { rule: "Usar siempre minusculas en 'la abigarrada'", why: "Las minusculas son una posicion anti-jerarquica. No hay mayusculas porque no hay capital." },
    { rule: "Respetar el espacio de respiro alrededor del logo", why: "El espacio minimo es equivalente a la altura de la 'a' del logotipo en todos los lados." },
  ];

  const donts = [
    { rule: "No mezclar colores de distintas paletas en una sola instancia", why: "Cada paleta es un enunciado coherente. Mezclarlas trivializa las identidades que representan." },
    { rule: "No usar el logo en escala de grises", why: "El color es constitutivo, no decorativo. Sin color, el logo pierde su dimension politica." },
    { rule: "No cambiar la tipografia del logotipo", why: "Libre Baskerville fue elegida por su condicion transicional. Otra serif no carga el mismo significado." },
    { rule: "No poner las lineas de color encima o a los lados del texto", why: "La posicion inferior no es arbitraria: es fundamento, no corona." },
    { rule: "No distorsionar, rotar o aplicar efectos al logo", why: "La abigarracion ya es suficiente complejidad visual. Agregar mas es ruido." },
    { rule: "No usar degradados en las lineas de color", why: "Los colores de cada bandera son planos porque cada identidad es afirmativa, no difusa." },
  ];

  return (
    <section className="px-8 md:px-16 lg:px-24 py-20" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div className="max-w-5xl">
        <SectionHeader number="05" title="Uso correcto e incorrecto" />

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#009639", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#FFF", fontSize: "0.8rem" }}>&#10003;</span>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#009639" }}>
                Si
              </span>
            </div>
            <div className="space-y-6">
              {dos.map((d, i) => (
                <div key={i} style={{ borderLeft: "2px solid #009639", paddingLeft: 16 }}>
                  <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.95rem", color: "#1A1A1A", lineHeight: 1.6 }} className="mb-1">
                    {d.rule}
                  </p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "rgba(0,0,0,0.4)", lineHeight: 1.5 }}>
                    {d.why}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-8">
              <div style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#FFF", fontSize: "0.8rem" }}>&#10007;</span>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C8102E" }}>
                No
              </span>
            </div>
            <div className="space-y-6">
              {donts.map((d, i) => (
                <div key={i} style={{ borderLeft: "2px solid #C8102E", paddingLeft: 16 }}>
                  <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.95rem", color: "#1A1A1A", lineHeight: 1.6 }} className="mb-1">
                    {d.rule}
                  </p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "rgba(0,0,0,0.4)", lineHeight: 1.5 }}>
                    {d.why}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual examples of don'ts */}
        <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }} className="mt-16 mb-8">
          Ejemplos visuales de uso incorrecto
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Wrong: grayscale */}
          <div className="relative">
            <div className="flex items-center justify-center p-8" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)", minHeight: 140, filter: "grayscale(100%)" }}>
              <Logo palette="wiphala" size="sm" />
            </div>
            <div className="absolute top-2 right-2 px-2 py-1" style={{ backgroundColor: "#C8102E", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#FFF" }}>
              NO
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#C8102E", marginTop: 8 }}>
              Escala de grises
            </p>
          </div>
          {/* Wrong: uppercase */}
          <div className="relative">
            <div className="flex items-center justify-center p-8" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)", minHeight: 140 }}>
              <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "1.25rem", textTransform: "uppercase" }}>La Abigarrada</span>
            </div>
            <div className="absolute top-2 right-2 px-2 py-1" style={{ backgroundColor: "#C8102E", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#FFF" }}>
              NO
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#C8102E", marginTop: 8 }}>
              Mayusculas / capitalizacion
            </p>
          </div>
          {/* Wrong: gradient lines */}
          <div className="relative">
            <div className="flex flex-col items-center justify-center p-8 gap-2" style={{ backgroundColor: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)", minHeight: 140 }}>
              <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "1.25rem" }}>la abigarrada</span>
              <div style={{ width: "100%", height: 4, background: "linear-gradient(to right, #E21C21, #F39A1E, #FBED21, #3DB34A, #2E3091, #6E3B8E)" }} />
            </div>
            <div className="absolute top-2 right-2 px-2 py-1" style={{ backgroundColor: "#C8102E", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#FFF" }}>
              NO
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#C8102E", marginTop: 8 }}>
              Degradados en lineas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================
// SECTION: SOCIAL TEMPLATES
// ============================
function SocialSection() {
  const [palette, setPalette] = useState<PaletteKey>("wiphala");

  return (
    <section className="px-8 md:px-16 lg:px-24 py-20" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div className="max-w-5xl">
        <SectionHeader number="06" title="Templates para redes sociales" />

        <div style={{ fontFamily: "'Libre Baskerville', serif", color: "#444", lineHeight: 1.8 }} className="mt-8 max-w-2xl mb-12">
          <p className="mb-4">
            Cada template replica la logica del logo: el contenido se sostiene sobre las lineas de color.
            Las barras de color siempre van en la parte inferior, funcionando como firma visual.
          </p>
          <p>
            <strong>Decision curatorial:</strong> El fondo oscuro (#1A1A1A) es el fondo por defecto para redes sociales.
            En pantallas pequenas, el contraste con las lineas de color es mas efectivo sobre fondo oscuro.
            Ademas, el negro no compite con ningun sistema cromatico: los recibe a todos.
          </p>
        </div>

        {/* Palette selector */}
        <div className="flex flex-wrap gap-3 mb-12">
          {(Object.keys(PALETTES) as PaletteKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setPalette(key)}
              className="px-3 py-1.5 transition-all"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.05em",
                backgroundColor: palette === key ? "#1A1A1A" : "transparent",
                color: palette === key ? "#FFF" : "#1A1A1A",
                border: `1px solid ${palette === key ? "#1A1A1A" : "rgba(0,0,0,0.15)"}`,
              }}
            >
              {PALETTES[key].name}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <SocialTemplate platform="instagram" palette={palette} />
            <SocialTemplate platform="facebook" palette={palette} />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <SocialTemplate platform="x" palette={palette} />
            <SocialTemplate platform="linkedin" palette={palette} />
          </div>
          <SocialTemplate platform="email" palette={palette} />
        </div>

        {/* Instagram Story variant */}
        <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }} className="mt-16 mb-8">
          Instagram Story (1080x1920)
        </h4>
        <div
          style={{
            width: 200,
            height: 355,
            backgroundColor: "#2A2A2A",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", height: 6 }}>
            {PALETTES[palette].colors.map((c, i) => (
              <div key={i} style={{ flex: 1, backgroundColor: c }} />
            ))}
          </div>
          <Logo palette={palette} size="sm" darkBg showSubline />
        </div>
      </div>
    </section>
  );
}

// ============================
// SECTION: CONTRADICCION
// ============================
function ContradictionSection() {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-20" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", backgroundColor: "#FAFAF8" }}>
      <div className="max-w-3xl">
        <SectionHeader number="07" title="Nota sobre la contradiccion" />
        <div style={{ fontFamily: "'Libre Baskerville', serif", color: "#444", lineHeight: 1.9 }} className="mt-8 space-y-5">
          <p>
            Existe una tension inherente en sistematizar lo abigarrado. Un manual de identidad es,
            por definicion, un instrumento de control, y "la abigarrada" nombra precisamente
            lo que resiste al control.
          </p>
          <p>
            Resolvemos esta contradiccion de tres maneras:
          </p>
          <p>
            <strong>1. Mutabilidad codificada.</strong> El logo no tiene "una" version correcta.
            Tiene cinco igualmente validas. Esto no es flexibilidad decorativa: es una posicion
            epistemologica. Cada paleta es un enunciado completo en si mismo.
          </p>
          <p>
            <strong>2. Simplicidad estructural, complejidad cromatica.</strong> La estructura
            del logo es deliberadamente simple (texto + lineas) para que toda la carga expresiva
            recaiga en el color. Esto permite que un blog sencillo pueda comunicar una propuesta
            sofisticada sin necesidad de aparatos graficos complejos.
          </p>
          <p>
            <strong>3. El manual como horizonte, no como ley.</strong> Las reglas de este manual
            no son prohibiciones absolutas sino limites eticos. No se mezclan paletas porque cada
            una representa una lucha concreta, no porque este "mal disenado". No se usa escala
            de grises porque el color es constitutivo, no porque falle tecnicamente.
          </p>
          <p style={{ fontStyle: "italic", color: "#888" }}>
            En otras palabras: el manual no disciplina al logo. Le da un territorio etico dentro del cual mutar libremente.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================
// HELPERS
// ============================
function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "rgba(0,0,0,0.25)", letterSpacing: "0.1em" }}>
        {number}
      </span>
      <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.75rem", color: "#1A1A1A", lineHeight: 1.3, fontWeight: 700 }}>
        {title}
      </h2>
    </div>
  );
}

function isLight(hex: string): boolean {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
}

// ============================
// MAIN EXPORT
// ============================
export default function IdentityManual() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <HeroSection />
      <TypographySection />
      <ColorSection />
      <MutationsSection />
      <ProfileIconsSection />
      <DosAndDonts />
      <SocialSection />
      <ContradictionSection />

      {/* Footer */}
      <footer className="px-8 md:px-16 lg:px-24 py-12" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Logo palette="wiphala" size="sm" />
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(0,0,0,0.3)", letterSpacing: "0.1em" }}>
            Manual de identidad visual v1.0 / Abril 2026
          </p>
        </div>
      </footer>
    </div>
  );
}