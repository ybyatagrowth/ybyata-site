import type { Locale } from "../i18n"

/**
 * Real results only. Each testimonial is a screenshot of a client's own WhatsApp message (names
 * and numbers of anyone else blurred), in public/media/testimonials/. The section stays hidden
 * while both lists are empty.
 */
export const testimonials: { image: string; alt: string; clinic: string }[] = []
export const results: { before: string; after: string; what: { "pt-BR": string; en: string }; clinic: string }[] = []

export const service = {
  "pt-BR": {
    title: "Gestão comercial para clínicas · Ybyatã",
    description:
      "Treinamento e acompanhamento da recepção e dos profissionais da clínica para vender pacotes, com processos, relatórios de desempenho, receita futura e bonificação da equipe.",
    hero: {
      eyebrow: "Gestão comercial",
      title: "Sua equipe é o primeiro contato do paciente.",
      titleEm: "Ela precisa saber vender.",
      lead: "Treinamos e acompanhamos quem atende a sua clínica, da recepção aos profissionais, com processo, metas e números. A maior parte do trabalho é remota, no dia a dia da equipe, com visitas à clínica quando fazem diferença.",
    },
    what: {
      eyebrow: "O que fazemos",
      title: "Do primeiro “oi” ao pacote fechado.",
      items: [
        { title: "Treinamento", body: "Recepção e profissionais aprendem a apresentar a clínica e a vender pacotes. A recepção é o cartão de visitas: é ela quem transforma uma mensagem em avaliação." },
        { title: "Acompanhamento", body: "Reuniões com a equipe e leitura das conversas no WhatsApp, com retorno sobre o que funcionou e o que precisa mudar." },
        { title: "Processos e números", body: "Relatórios diários e semanais de desempenho e a receita futura acompanhada de perto, para ninguém ser pego de surpresa no fim do mês." },
        { title: "Motivação", body: "Bonificação da equipe ligada ao resultado, para que vender bem valha a pena para quem vende." },
        { title: "A clínica que o paciente vê", body: "Nas visitas, olhamos o que o paciente vê: uniforme, apresentação, o espaço. O que estiver travando o resultado entra no plano." },
        { title: "Todos na mesma direção", body: "Donos, profissionais, recepção e marketing coordenados em torno do mesmo número." },
      ],
    },
    rhythm: {
      eyebrow: "O ritmo",
      title: "Presença constante, não uma consultoria que passa.",
      items: [
        { when: "Todo dia", what: ["Leitura das conversas no WhatsApp", "Relatório de desempenho do dia", "Retorno para quem atende"] },
        { when: "Toda semana", what: ["Reunião com a equipe", "Relatório semanal", "Receita futura revisada"] },
        { when: "Todo mês", what: ["Metas e resultado", "Bonificação da equipe", "Conversa com os donos"] },
        { when: "Nas visitas", what: ["O espaço, o uniforme, a apresentação", "Treinamento presencial", "O que estiver travando"] },
      ],
    },
    together: {
      eyebrow: "Gestão e plataforma",
      title: "O que a equipe faz, medido todos os dias.",
      body: "Com a plataforma, cada conversa, agendamento e pacote fica registrado. A gestão comercial enxerga onde a equipe está perdendo pacientes, e a dona ou o dono da clínica vê o resultado em reais, não em impressões.",
      link: "Conhecer a plataforma",
    },
    results: { eyebrow: "Resultados", title: "O que as clínicas dizem." },
    final: {
      title: "Vamos conversar sobre a sua equipe.",
      body: "Conte como a clínica atende hoje. A gente mostra onde estão os pacientes que ficam pelo caminho.",
    },
  },
  en: {
    title: "Commercial management for clinics · Ybyatã",
    description:
      "Training and managing the clinic's front desk and practitioners to sell packages, with processes, performance reports, future revenue and team bonuses.",
    hero: {
      eyebrow: "Commercial management",
      title: "Your team is the patient's first contact.",
      titleEm: "It needs to know how to sell.",
      lead: "We train and manage the people who serve your clinic, from the front desk to the practitioners, with process, targets and numbers. Most of the work is remote, in the team's day to day, with visits to the clinic when they make a difference.",
    },
    what: {
      eyebrow: "What we do",
      title: "From the first “hi” to the package sold.",
      items: [
        { title: "Training", body: "The front desk and practitioners learn to present the clinic and sell packages. The front desk is the business card: it's who turns a message into an assessment." },
        { title: "Follow-up", body: "Meetings with the team and reading the WhatsApp conversations, with feedback on what worked and what needs to change." },
        { title: "Processes and numbers", body: "Daily and weekly performance reports and future revenue watched closely, so nobody is caught off guard at the end of the month." },
        { title: "Motivation", body: "Team bonuses tied to results, so selling well is worth it for the people who sell." },
        { title: "The clinic the patient sees", body: "On visits, we look at what the patient sees: uniforms, presentation, the space. Whatever holds results back goes into the plan." },
        { title: "Everyone in one direction", body: "Owners, practitioners, front desk and marketing coordinated around the same number." },
      ],
    },
    rhythm: {
      eyebrow: "The rhythm",
      title: "A constant presence, not a consultancy passing through.",
      items: [
        { when: "Every day", what: ["Reading the WhatsApp conversations", "The day's performance report", "Feedback for the people who answer"] },
        { when: "Every week", what: ["A meeting with the team", "The weekly report", "Future revenue reviewed"] },
        { when: "Every month", what: ["Targets and results", "Team bonuses", "A conversation with the owners"] },
        { when: "On visits", what: ["The space, uniforms, presentation", "Training in person", "Whatever is holding things back"] },
      ],
    },
    together: {
      eyebrow: "Management and platform",
      title: "What the team does, measured every day.",
      body: "With the platform, every conversation, booking and package is on record. Commercial management sees where the team is losing patients, and the clinic's owner sees the result in money, not impressions.",
      link: "See the platform",
    },
    results: { eyebrow: "Results", title: "What clinics say." },
    final: {
      title: "Let's talk about your team.",
      body: "Tell us how the clinic serves patients today. We'll show you where patients are being lost along the way.",
    },
  },
} satisfies Record<Locale, unknown>
