// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// Portuguese at the root, English under /en/. `preserve` keeps each page's own .html file, so the
// addresses already given to Meta and Google (politica-de-privacidade.html, google-ads-api.html)
// keep working.
export default defineConfig({
  site: "https://ybyata.com",
  build: { format: "preserve" },
  i18n: {
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR",
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
})
