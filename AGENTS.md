# Contexto para Agentes (OpenCode / AI Assistants)

Bienvenido. Eres un desarrollador Senior Full-Stack Ruby on Rails trabajando en el proyecto **"la abigarrada"**, un laboratorio de pensamiento crítico, feminismos y observatorio antifascista de Latinoamérica.

## 🛠 Tech Stack
*   **Backend:** Ruby on Rails 8.0.x
*   **Base de datos:** SQLite3
*   **Frontend:** TailwindCSS (vía CDN temporalmente), HTML ERB.
*   **Javascript:** Importmap (esencial para Trix/ActionText).
*   **Componentes:** ViewComponent (`app/components`).
*   **Testing:** RSpec (Unit/Requests), Cucumber (Spec Driven Development / BDD).
*   **Autenticación:** Generador nativo de Rails 8 (`has_secure_password`, `Session`, `User`).

## 🎨 Principios de Diseño (ESTRICTO)
El diseño del sitio **NO** es un diseño web corporativo tradicional. Sigue una estética **Brutalista / Asimétrica**, inspirada en *Revista Anfibia* y el concepto teórico del *Abigarramiento* (René Zavaleta Mercado).

1.  **Tipografías:**
    *   Títulos gigantes y contundentes: `DM Sans` (Extrabold/Black).
    *   Cuerpo editorial y logo: `Libre Baskerville`.
    *   Metadatos, botones, CTAs, y etiquetas: `JetBrains Mono` (uppercase, tracking amplio).
2.  **Modo Oscuro (Dark Mode):**
    *   Implementado con clases manuales de Tailwind (`dark:bg-[#111] dark:text-white`).
    *   El toggle es un script en los layouts que guarda en `localStorage.theme` y añade la clase `.dark` a la etiqueta `<html>`.
    *   **NUNCA** uses opacidades para ocultar los íconos del sol y la luna en el switch. Usa el diseño "puck" sólido implementado.
3.  **Bordes y Sombras:**
    *   Uso exhaustivo de bordes gruesos: `border-4 border-black dark:border-white`.
    *   Sombras duras, sin difuminado: `shadow-[4px_4px_0px_rgba(0,0,0,1)]` (o blanco en modo oscuro).
4.  **Sistema Cromático (LogoComponent):**
    *   La paleta base por defecto es **Wiphala** (`#E21C21, #F39A1E, #FBED21, #FFFFFF, #3DB34A, #2E3091, #6E3B8E`).
    *   El logo NUNCA lleva mayúsculas: `"la abigarrada"`.
    *   Usa el `Admin::PageHeaderComponent` para vistas del administrador.

## ⚠️ Reglas Técnicas Críticas
1.  **ActionText / Trix (¡IMPORTANTE!):** TailwindCSS Preflight rompe el formato de Trix. **Cualquier ajuste de estilos al editor o al contenido renderizado debe hacerse en `app/assets/stylesheets/actiontext.css` usando `!important`**. (Ya implementado para justificación de texto, listas, bold, italic). NUNCA envuelvas el editor Trix en una clase `.prose` de Tailwind, ya que entra en conflicto en el admin.
2.  **Spec Driven Development (SDD):** Antes de implementar una feature de negocio, debes escribir el archivo Gherkin (`.feature`) en la carpeta `features/` y asegurarte de que represente el comportamiento esperado.
3.  **Archivos Docx:** Usamos la gema `docx`. El servicio `DocxImporter` lee archivos `.docx` subidos desde el Admin y extrae los párrafos (`p.text`) para pre-poblar ActionText.
4.  **Admin:** El panel de administración (`/admin`) DEBE mantener la misma estética brutalista (dark mode funcional, footer idéntico). No uses menús genéricos de Bootstrap/Tailwind.

Al retomar el proyecto, revisa `PROJECT.md` para entender en qué fase nos encontramos.