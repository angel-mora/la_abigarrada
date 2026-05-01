# Integración con Rails 8 — la abigarrada

Esta guía describe cómo embeber los componentes (`Logo`, `ProfileIcon`, `IdentityManual`) en un monolito Rails 8 con la mínima fricción posible. Está pensada como **opción 1: Frankenstein React + Rails para entregar rápido**, dejando la migración a ViewComponent (opción 2) como deuda técnica explícita.

## Resumen del approach

- **Bundling**: `jsbundling-rails` con esbuild.
- **Montaje**: data-attributes (`data-react-component`, `data-props`). Adaptador en `mount.tsx`.
- **Estilos**: Tailwind v4 vía `tailwindcss-rails` + un `theme.css` compartido.
- **Fuentes**: Google Fonts CDN (sin asset pipeline).
- **Manual en `/identidad`**: una sola view con un `<div data-react-component="IdentityManual">`.

## Archivos relevantes para portar

```
src/app/
  mount.tsx                        # Punto de entrada para Rails (reemplaza App.tsx)
  components/
    palettes.ts                    # Datos puros — futura frontera con Ruby/YAML
    logo-system.tsx                # Logo + ProfileIcon + SocialTemplate
    identity-manual.tsx            # Manual completo (para /identidad)
    figma/ImageWithFallback.tsx    # Helper de imágenes
src/styles/
  fonts.css                        # @import de Google Fonts
  theme.css                        # Tokens CSS
  tailwind.css, globals.css        # Base
```

## Pasos en el proyecto Rails

### 1. Setup de bundling

```bash
bundle add jsbundling-rails cssbundling-rails tailwindcss-rails
bin/rails javascript:install:esbuild
bin/rails css:install:tailwind
```

### 2. Copiar el código React

Copiá a `app/javascript/`:

```
app/javascript/
  application.tsx                  # ← copia de src/app/mount.tsx
  components/
    palettes.ts
    logo-system.tsx
    identity-manual.tsx
    figma/ImageWithFallback.tsx
```

Renombrá `mount.tsx` a `application.tsx` (o el nombre del entrypoint que defina `package.json`). En `app/javascript/application.tsx`, ajustá el import de IdentityManual si moviste paths.

### 3. Dependencias npm

En el `package.json` de Rails:

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "esbuild": "^0.21.0",
    "typescript": "^5.4.0"
  },
  "scripts": {
    "build": "esbuild app/javascript/application.tsx --bundle --sourcemap --format=esm --outdir=app/assets/builds --public-path=/assets --loader:.tsx=tsx --loader:.ts=ts"
  }
}
```

### 4. Estilos

Copiá `src/styles/fonts.css`, `theme.css`, `globals.css` a `app/assets/stylesheets/` y agregá los `@import` correspondientes en `application.tailwind.css`. En el layout:

```erb
<%# app/views/layouts/application.html.erb %>
<%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
<%= javascript_include_tag "application", "data-turbo-track": "reload", defer: true %>
```

> **Nota fuentes**: el `@import` a Google Fonts en `fonts.css` funciona tal cual. Si preferís evitar request externo, usá `font_link_tag` con `preconnect`.

### 5. Ruta `/identidad`

```ruby
# config/routes.rb
get "identidad", to: "identity#show"
```

```ruby
# app/controllers/identity_controller.rb
class IdentityController < ApplicationController
  def show; end
end
```

```erb
<%# app/views/identity/show.html.erb %>
<% content_for :title, "Manual de identidad — la abigarrada" %>
<div data-react-component="IdentityManual"></div>
```

Eso es todo. El `mount.tsx` detecta el div y monta el manual completo.

### 6. Embeber componentes puntuales en el resto de la app

Avatar en el header:

```erb
<%# Pasa el tema activo (de session, feature flag, columna en DB, lo que sea) %>
<div
  data-react-component="ProfileIcon"
  data-props='<%= { palette: current_theme, size: 40 }.to_json %>'
></div>
```

Logo en el footer:

```erb
<div
  data-react-component="Logo"
  data-props='<%= { palette: "wiphala", size: "sm", showSubline: true }.to_json %>'
></div>
```

### 7. Source de verdad del tema activo

Recomendado: un helper `current_theme` que lea de un `Setting` model, feature flag o cookie, devolviendo una de las claves de `palettes.ts` (`"wiphala" | "feminista" | "panafricana" | "lgbtiq" | "cmyk" | "rojinegra"`).

```ruby
# app/helpers/identity_helper.rb
module IdentityHelper
  VALID_PALETTES = %w[wiphala feminista panafricana lgbtiq cmyk rojinegra].freeze

  def current_theme
    candidate = Setting.fetch("identity.current_theme", "wiphala")
    VALID_PALETTES.include?(candidate) ? candidate : "wiphala"
  end
end
```

Cuando migres a ViewComponent, esta lista pasa a ser la fuente de verdad y `palettes.ts` se genera desde Ruby (o desaparece).

## Camino de migración a ViewComponent (deuda)

Cuando llegue el momento:

1. Portar `palettes.ts` → `config/palettes.yml` o `app/models/palette.rb`.
2. `LogoComponent < ViewComponent::Base` con `palette:` y un partial ERB que renderiza el span + barra segmentada (CSS puro, ya está casi todo en inline styles).
3. `ProfileIconComponent` análogo.
4. El manual (`/identidad`) puede quedarse como React por más tiempo: es una página, no un widget. Migrarlo último.
5. Eliminar `mount.tsx`, `react`, `react-dom` y `esbuild` del `package.json` cuando no quede ningún `data-react-component` en views.

## Caveats

- **Turbo Drive**: `mount.tsx` ya escucha `turbo:load` y `turbo:frame-load`, así que las navegaciones SPA-style remontan los componentes.
- **CSP**: si tu CSP bloquea `unsafe-inline`, los `style={{ ... }}` de los componentes van a romper. Solución temporal: `nonce`. Solución definitiva: migrar a ViewComponent (los inline styles se mueven a una hoja).
- **JSON en data-props**: los `'`/`"` se manejan vía `to_json` de Rails. Para props complejos preferí `data-props='<%= h obj.to_json %>'` para escapar HTML.
- **No incluyas `IdentityManual` y widgets en la misma página**: el manual es una página completa con su propio layout interno.
