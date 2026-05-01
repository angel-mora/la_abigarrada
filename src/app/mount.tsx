// Adaptador de montaje para integracion con Rails (jsbundling-rails / esbuild).
//
// En el monolito Rails, este archivo reemplaza el rol de `App.tsx`.
// En lugar de montar una sola app, busca elementos con data-react-component
// y monta el componente correspondiente con los props pasados via data-props (JSON).
//
// Uso desde una vista ERB de Rails:
//
//   <%# Avatar parametrizado por el tema activo del controlador %>
//   <div
//     data-react-component="ProfileIcon"
//     data-props='<%= { palette: current_theme, size: 96 }.to_json %>'
//   ></div>
//
//   <%# Manual completo en /identidad %>
//   <div data-react-component="IdentityManual"></div>
//
// El registry abajo es la unica superficie de extension: para exponer un nuevo
// componente a Rails, agregalo aqui. No exportes componentes que no quieras
// montables desde el DOM.

import React from "react";
import { createRoot } from "react-dom/client";
import { Logo, ProfileIcon } from "./components/logo-system";
import IdentityManual from "./components/identity-manual";

const REGISTRY: Record<string, React.ComponentType<any>> = {
  Logo,
  ProfileIcon,
  IdentityManual,
};

function mountAll() {
  const nodes = document.querySelectorAll<HTMLElement>("[data-react-component]");
  nodes.forEach((el) => {
    if (el.dataset.reactMounted === "true") return;
    const name = el.dataset.reactComponent;
    if (!name) return;
    const Component = REGISTRY[name];
    if (!Component) {
      console.warn(`[la-abigarrada] Componente desconocido: "${name}". Disponibles: ${Object.keys(REGISTRY).join(", ")}`);
      return;
    }
    let props: Record<string, unknown> = {};
    const raw = el.dataset.props;
    if (raw) {
      try {
        props = JSON.parse(raw);
      } catch (err) {
        console.error(`[la-abigarrada] data-props invalido en <${el.tagName.toLowerCase()} data-react-component="${name}">:`, err);
        return;
      }
    }
    createRoot(el).render(<Component {...props} />);
    el.dataset.reactMounted = "true";
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountAll);
} else {
  mountAll();
}

// Compatible con Turbo (Rails 8 lo trae por defecto): re-monta tras navegacion.
document.addEventListener("turbo:load", mountAll);
document.addEventListener("turbo:frame-load", mountAll);
