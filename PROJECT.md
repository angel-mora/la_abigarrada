# Bitácora del Proyecto: la abigarrada

Este documento registra el progreso, las decisiones arquitectónicas y la hoja de ruta para la plataforma editorial "la abigarrada".

## 📚 Origen y Referencias
1.  **Inicio:** El proyecto nació como un prototipo React/Vite exportado desde Figma (Figma Make). Se tomó la decisión estratégica de migrarlo a un monolito de **Ruby on Rails 8** siguiendo las instrucciones de migración (`INTEGRATION.md`).
2.  **Concepto:** El diseño refleja el "Abigarramiento" (coexistencia de elementos no sintetizables) inspirado en la teoría de Zavaleta Mercado. La referencia visual directa aprobada por el cliente es **Revista Anfibia** (Brutalismo, asimetría, bordes negros, alto contraste).
3.  **Manual de Identidad:** La fuente de verdad del diseño visual se encuentra replicada en `app/views/identity/show.html.erb` (Ruta oculta: `/internal/identidad`).

---

## ✅ Fases Completadas (Fases 1 y 2)

### Infraestructura y Backend
*   **Upgrade a Rails 8.0.5** y Ruby 3.4.
*   **Autenticación nativa Rails 8** (`has_secure_password`, `User`, `Session`). El login (`/sessions/new`) fue rediseñado al estilo brutalista.
*   **Modelos CORE:**
    *   `Author`: Nombre, biografía, foto y CV (ActiveStorage). Slugs con `friendly_id`.
    *   `Article`: Título, estado (borrador/publicado), paleta de color (enum), relación con Autor. Texto enriquecido con `ActionText` (Trix) y `featured_image` (ActiveStorage).
    *   `Subscriber`: Lista de correos.
*   **Importador DOCX:** Se creó `DocxImporter` usando la gema `docx`. Permite subir un `.docx` en el Admin y lo convierte en HTML para el editor ActionText de forma dinámica.
*   **Testing (SDD):** Implementación de **Cucumber** para features y **RSpec** para pruebas unitarias. Se configuró `database_cleaner`.

### Frontend y UI Brutalista
*   **Landing Page Dinámica (`pages#home`):** Grilla asimétrica que consume `@latest_articles`. Formulario de suscripción funcional conectado a `SubscribersController`.
*   **Archivo (`articles#index`):** Grilla completa de artículos publicados, con filtrado cromático dinámico en el `hover`.
*   **Artículo (`articles#show`):** Vista de lectura con acentos de color dinámicos basados en la paleta del artículo. Incluye el bloque inferior de "Sobre el Autor" con links de descarga de CV.
*   **Perfil de Autor (`authors#show`):** Página pública que lista los artículos específicos de un autor y su información.
*   **Componentes Compartidos:** Navbar y Footer unificados en `app/views/shared/` para todo el sitio. Switch interactivo de Diurno/Nocturno.
*   **Fix Crítico de Trix:** Se arregló la integración de JS (vía `importmap-rails`) y se sobreescribió el Preflight de Tailwind en `actiontext.css` para soportar negritas, listas y **justificación global de párrafos**.

### Panel Editorial (`/admin`)
*   Protegido por autenticación Rails 8.
*   Layout con la misma estética brutalista y soporte de Dark Mode.
*   CRUD de Artículos y Autores. Botones de "Publicar/Borrador" interactivos.
*   Componente DRY: `Admin::PageHeaderComponent` implementado en todas las vistas.
*   Mailer integrado (`NewsletterMailer`) que se dispara al "Publicar" un artículo.

---

## 🚧 Pendiente (Fase 3 y siguientes)

El próximo Agente/Desarrollador debe enfocarse en los siguientes requerimientos, basándose en el archivo `initial_content/Publica con la abigarrada_rev.docx`.

### Fase 3: Formulario Público de Colaboración
**Requerimiento:** Permitir que usuarios externos envíen propuestas de artículos.

1.  **Modelo `Collaboration`**:
    *   Campos: `name` (string), `email` (string), `location` (string), `bio` (text), `topic` (array o JSON para selección múltiple), `provisional_title` (string), `description` (text), `ethics_accepted` (boolean), `discovery_source` (array o JSON).
2.  **Controlador Público (`CollaborationsController`)**:
    *   Ruta `/colaboraciones`.
    *   Vista `new.html.erb`: Renderizar el formulario con estética brutalista. Mostrar el "Código de Ética / Compromisos" detallado en el DOCX junto al formulario.
    *   Mensaje de confirmación en verde al enviar exitosamente.
3.  **Notificaciones**:
    *   Crear un `AdminMailer` que envíe un correo a `admin@laabigarrada.com` avisando que hay una nueva propuesta en la base de datos.
4.  **Admin UI para Colaboraciones**:
    *   Crear `/admin/collaborations` para que el editor pueda leer las propuestas entrantes (solo lectura y eliminar).

### Mejoras Técnicas Pendientes
*   **Paginación:** La gema `kaminari` está instalada y usada en el controlador de Articles, pero el frontend en `articles/index.html.erb` tiene un placeholder manual ("Fin de la transmisión"). Hace falta estilizar la paginación de Kaminari al estilo brutalista.
*   **Despliegue (Deployment):** Preparar Dockerfile (ya existe un boilerplate) o configuración para Render / Heroku, garantizando que SQLite en producción esté respaldado (o migrar a PostgreSQL si el cliente lo requiere a futuro).