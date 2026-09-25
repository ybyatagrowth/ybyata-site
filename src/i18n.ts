export type Locale = "pt-BR" | "en"

/** Every page, in both languages: the header's language switch goes to the same page. */
export const routes = {
  home: { "pt-BR": "/", en: "/en/" },
  platform: { "pt-BR": "/plataforma", en: "/en/platform" },
  service: { "pt-BR": "/gestao-comercial", en: "/en/commercial-management" },
  privacy: { "pt-BR": "/politica-de-privacidade", en: "/en/privacy" },
  terms: { "pt-BR": "/termos-de-uso", en: "/en/terms" },
  deletion: { "pt-BR": "/exclusao-de-dados", en: "/en/data-deletion" },
  // English only: written for Google's reviewers.
  googleAds: { "pt-BR": "/google-ads-api", en: "/google-ads-api" },
} as const

export type Route = keyof typeof routes

export const ui = {
  "pt-BR": {
    nav: { platform: "A plataforma", service: "Gestão comercial", privacy: "Privacidade" },
    switchTo: "English",
    switchLang: "en",
    talk: "Conversar no WhatsApp",
    talkMessage: "Olá! Vim pelo site da Ybyatã e quero conversar sobre a minha clínica.",
    skip: "Pular para o conteúdo",
    menu: "Menu",
    footer: {
      rights: "Todos os direitos reservados.",
      legal: "Legal",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso",
      deletion: "Exclusão de dados",
      googleAds: "Google Ads API",
      company: "Empresa",
      cnpj: "CNPJ",
    },
    soon: "Em breve",
    demoData: "Dados de demonstração, sem pacientes reais.",
  },
  en: {
    nav: { platform: "The platform", service: "Commercial management", privacy: "Privacy" },
    switchTo: "Português",
    switchLang: "pt-BR",
    talk: "Talk to us on WhatsApp",
    talkMessage: "Hi! I found Ybyatã's website and I'd like to talk about my clinic.",
    skip: "Skip to content",
    menu: "Menu",
    footer: {
      rights: "All rights reserved.",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      deletion: "Data deletion",
      googleAds: "Google Ads API",
      company: "Company",
      cnpj: "CNPJ",
    },
    soon: "Coming soon",
    demoData: "Demonstration data, no real patients.",
  },
} as const

/** A product image or clip in the page's language: the Portuguese set lives under /media/pt/. */
export function media(src: string, locale: Locale): string {
  return locale === "pt-BR" ? src.replace("/media/", "/media/pt/") : src
}

export function localeOf(url: URL): Locale {
  return url.pathname.startsWith("/en") ? "en" : "pt-BR"
}
