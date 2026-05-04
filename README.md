# la abigarrada — Blog & Observatorio

Laboratorio de pensamiento crítico, feminismos y observatorio antifascista de Latinoamérica.

## 🚀 Desarrollo

Este proyecto es un monolito Rails 8 que utiliza **ViewComponents** para la interfaz y **TailwindCSS** para el estilo.

### Requisitos
- Ruby 3.3+
- Rails 7.1.x (preparado para Rails 8)
- Node.js & pnpm

### Instalación
```bash
bundle install
pnpm install
```

### Ejecución
```bash
./bin/dev
```
El sitio estará disponible en `http://localhost:3000`.

---

## 🧪 Testing & Verificación

### 1. Ejecutar Specs (Unitarios y Componentes)
Usamos **RSpec** para probar los ViewComponents y la lógica de negocio.
```bash
bundle exec rspec
```

### 2. Ejecutar Features (Comportamiento)
Usamos **Cucumber** para verificar los flujos de usuario (Spec Driven Development).
```bash
bundle exec cucumber
```

### 3. Smoke Testing (Manual)
Después de cada fase, verifica los siguientes puntos clave:
- **Landing Page**: `http://localhost:3000/` (Verifica Navbar, Hero y Secciones).
- **Manual de Identidad**: `http://localhost:3000/internal/identidad` (Verifica componentes y tipografía).

---

## 🛠 Estructura del Proyecto
- `app/components/`: ViewComponents (Logo, etc).
- `app/controllers/`: Controladores de página e identidad.
- `features/`: Especificaciones de comportamiento en Gherkin.
- `spec/`: Pruebas unitarias de RSpec.

---

## 🏗 Fases de Implementación
1. [x] **Fase 1**: Landing Page & Identidad (ViewComponents).
2. [ ] **Fase 2**: Artículos (Modelo, Index y Navegación).
3. [ ] **Fase 3**: Admin (CRUD, Borradores y Publicación).
4. [ ] **Fase 4**: Newsletter & Notificaciones.
