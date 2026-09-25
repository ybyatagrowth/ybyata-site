/** Who to talk to, and how. One place, so switching the waitlist on is one line. */
export const contact = {
  email: "contato@ybyata.com",
  phone: "+55 (11) 96799-1896",
  /** Nicole's WhatsApp, which the site's buttons open a chat with (digits only). */
  whatsapp: "5511998206079",
  /**
   * The platform's landing-page form for Ybyatã's own unit (ybyata_platform #279). Until
   * production exists this is null and the site's call to action is the WhatsApp button.
   */
  formKey: null as string | null,
}

export const company = {
  name: "Ybyata Growth Operations Ltda",
  cnpj: "68.452.751/0001-82",
  address: "R. Pais Leme, 215, Conj. 1713, Pinheiros, São Paulo/SP · CEP 05424-150",
}

export function whatsappLink(text: string): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`
}
