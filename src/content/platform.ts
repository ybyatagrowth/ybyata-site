import type { Locale } from "../i18n"

type Media = { image?: string; clip?: string; w: number; h: number; alt: string }

export const platform = {
  "pt-BR": {
    title: "A plataforma · Ybyatã",
    description:
      "A plataforma Ybyatã acompanha cada paciente do clique no anúncio ao atendimento: WhatsApp, agendamentos propostos pela conversa, agenda, relatórios e conversões de volta para o Google e a Meta.",
    hero: {
      eyebrow: "A plataforma",
      title: "Do anúncio ao atendimento.",
      titleEm: "Com a IA lendo cada conversa.",
      lead: "Uma plataforma feita para clínicas de saúde, com inteligência artificial que acompanha cada paciente do primeiro clique ao atendimento e devolve para os anúncios o que aconteceu de verdade.",
      media: { clip: "approve", w: 1168, h: 900, alt: "Uma proposta de agendamento tirada da conversa no WhatsApp, aprovada com um clique." } as Media,
    },
    features: [
      {
        eyebrow: "Conversas", ai: true,
        title: "Ninguém fica sem resposta.",
        body: "Todas as conversas do WhatsApp da clínica num lugar só, com quem está esperando e há quanto tempo. A IA transcreve os áudios e rascunha respostas com a agenda e os preços da clínica; a recepção revisa e envia.",
        media: { clip: "inbox", w: 1168, h: 900, alt: "A caixa de entrada: conversas esperando resposta, com o tempo de espera." } as Media,
      },
      {
        eyebrow: "Aprovações", ai: true,
        title: "A conversa vira agendamento.",
        body: "A plataforma lê a conversa e propõe o que aconteceu: agendou, compareceu, pagou. Mostra o trecho em que se baseou e quão certa está. Alguém da equipe aprova, e a agenda e o funil se atualizam.",
        media: { image: "/media/approvals.png", w: 1168, h: 900, alt: "Um cartão de aprovação: o resumo, a conversa e o horário tirado dela." } as Media,
      },
      {
        eyebrow: "Agenda",
        title: "A agenda que a recepção entende.",
        body: "Por semana ou por profissional, com clique para marcar e arrastar para remarcar. Cada horário mostra se foi confirmado, se o paciente respondeu ao pedido de confirmação pelo WhatsApp e quem ainda precisa ser marcado como compareceu.",
        media: { clip: "schedule", w: 1168, h: 900, alt: "Marcando um horário na agenda: clique num horário livre, escolha a pessoa, pronto." } as Media,
      },
      {
        eyebrow: "Relatórios",
        title: "Quanto custou cada paciente.",
        body: "Receita, investimento em anúncios e resultado de qualquer período. O custo por agendamento de cada campanha, contando cada pessoa pela campanha que a trouxe. E o DRE pronto para o contador.",
        media: { clip: "reports", w: 1168, h: 900, alt: "O relatório: resultado do mês, funil e custo por agendamento de cada campanha." } as Media,
      },
      {
        eyebrow: "Pacientes",
        title: "A história inteira, numa tela.",
        body: "De onde a pessoa veio, em que etapa está, a conversa, os pacotes, as sessões que restam e o que falta receber. Com quem o paciente autorizou falar sobre o tratamento dele.",
        media: { image: "/media/person-vera.png", w: 1168, h: 1000, alt: "A página de uma paciente: etapa, conversa, pacotes e valores a receber." } as Media,
      },
      {
        eyebrow: "Assistente", ai: true,
        title: "Pergunte à Ybyatã.",
        body: "Um assistente que conhece a agenda, os pacientes e os números da clínica. Pergunte como a semana está, quem está esperando resposta ou quanto entrou, e ele responde com os dados da própria clínica.",
        media: { image: "/media/assistant.png", w: 1168, h: 900, alt: "O assistente aberto sobre a agenda, com sugestões de perguntas." } as Media,
      },
    ],
    more: {
      title: "E também",
      items: [
        ["Prontuário", "Evoluções com assinatura eletrônica, lidas só pela equipe de saúde."],
        ["Documentos", "Atestados e declarações emitidos e assinados na plataforma."],
        ["Ditado por voz", "O profissional fala, a IA escreve o rascunho da evolução.", true],
        ["A receber", "O que cada paciente deve, com cobrança pelo WhatsApp."],
        ["Comissões", "O que cada profissional ganhou com sessões e vendas, mês a mês."],
        ["Despesas", "A IA lê o extrato, até em PDF escaneado, e categoriza cada despesa.", true],
        ["Equipe e permissões", "Cada pessoa vê o que a função dela permite."],
        ["No celular", "Instale como app e receba avisos quando algo precisar de você."],
      ],
    },
    ads: {
      eyebrow: "Google Ads e Meta",
      title: "Os anúncios aprendem com o que aconteceu na clínica.",
      model: {
        title: "O modelo",
        body: "As contas de anúncio das clínicas ficam vinculadas à Ybyatã, e a nossa equipe opera as campanhas. A plataforma fala com o Google Ads e a Meta pelo servidor, com as credenciais da Ybyatã; ninguém da clínica precisa entrar no Google pela plataforma.",
      },
      does: {
        title: "O que a integração faz",
        items: [
          "Lê o investimento de cada campanha, por dia, para o custo por agendamento.",
          "Devolve agendamentos e comparecimentos como conversões, pelo identificador do clique; sem ele, só com telefone e e-mail em hash.",
          "Não cria, altera nem remove campanhas, anúncios, verbas ou lances. As campanhas são geridas pela nossa equipe.",
        ],
      },
      doc: "O desenho completo da integração com a Google Ads API",
      whoTitle: "Quem vê o quê",
      who: {
        head: ["Quem", "O que vê", "Dados de anúncio"],
        rows: [
          ["Equipe da Ybyatã", "As clínicas que atende.", "Opera as contas vinculadas."],
          ["Dona ou dono, gerência", "A própria clínica.", "Investimento e custo por agendamento das próprias campanhas."],
          ["Recepção", "Conversas, agenda, aprovações.", "Nenhum."],
        ],
      },
    },
  },
  en: {
    title: "The platform · Ybyatã",
    description:
      "The Ybyatã platform follows every patient from the ad click to the visit: WhatsApp, bookings proposed from the conversation, schedule, reports, and conversions sent back to Google and Meta.",
    hero: {
      eyebrow: "The platform",
      title: "From the ad to the visit.",
      titleEm: "With AI reading every conversation.",
      lead: "A platform made for health clinics, with AI that follows every patient from the first click to the visit and tells the ads what really happened.",
      media: { clip: "approve", w: 1168, h: 900, alt: "A booking proposed from the WhatsApp conversation, approved with one click." } as Media,
    },
    features: [
      {
        eyebrow: "Conversations", ai: true,
        title: "Nobody goes unanswered.",
        body: "All the clinic's WhatsApp conversations in one place, with who's waiting and for how long. The AI transcribes voice notes and drafts replies with the clinic's schedule and prices; the front desk reviews and sends.",
        media: { clip: "inbox", w: 1168, h: 900, alt: "The inbox: conversations waiting for an answer, with how long they've waited." } as Media,
      },
      {
        eyebrow: "Approvals", ai: true,
        title: "The conversation becomes a booking.",
        body: "The platform reads the conversation and proposes what happened: booked, came, paid. It shows the passage it relied on and how sure it is. Someone on the team approves, and the schedule and funnel update.",
        media: { image: "/media/approvals.png", w: 1168, h: 900, alt: "An approval card: the summary, the conversation and the time taken from it." } as Media,
      },
      {
        eyebrow: "Schedule",
        title: "A schedule the front desk understands.",
        body: "By week or by practitioner, click to book and drag to reschedule. Every slot shows whether it's confirmed, whether the patient answered the WhatsApp confirmation request, and who still needs marking as came.",
        media: { clip: "schedule", w: 1168, h: 900, alt: "Booking on the schedule: click a free time, pick the person, done." } as Media,
      },
      {
        eyebrow: "Reports",
        title: "What each patient cost.",
        body: "Revenue, ad spend and result for any period. The cost per booking of every campaign, counting each person for the campaign that brought them. And the P&L ready for the accountant.",
        media: { clip: "reports", w: 1168, h: 900, alt: "The report: the month's result, funnel and cost per booking for each campaign." } as Media,
      },
      {
        eyebrow: "Patients",
        title: "The whole story, on one screen.",
        body: "Where the person came from, their stage, the conversation, packages, sessions left and what's still owed. And who the patient allowed the clinic to talk to about their care.",
        media: { image: "/media/person-vera.png", w: 1168, h: 1000, alt: "A patient's page: stage, conversation, packages and amounts to collect." } as Media,
      },
      {
        eyebrow: "Assistant", ai: true,
        title: "Ask Ybyatã.",
        body: "An assistant that knows the clinic's schedule, patients and numbers. Ask how the week looks, who's waiting for an answer or how much came in, and it answers from the clinic's own data.",
        media: { image: "/media/assistant.png", w: 1168, h: 900, alt: "The assistant open over the schedule, with suggested questions." } as Media,
      },
    ],
    more: {
      title: "And also",
      items: [
        ["Clinical records", "Progress notes with electronic signatures, read only by the health team."],
        ["Documents", "Medical certificates and statements issued and signed in the platform."],
        ["Voice dictation", "The practitioner speaks, the AI writes the note's draft.", true],
        ["To collect", "What each patient owes, with payment requests on WhatsApp."],
        ["Commissions", "What each practitioner earned from sessions and sales, month by month."],
        ["Expenses", "The AI reads the bank statement, even a scanned PDF, and categorizes every expense.", true],
        ["Team and permissions", "Each person sees what their role allows."],
        ["On the phone", "Install it as an app and get notified when something needs you."],
      ],
    },
    ads: {
      eyebrow: "Google Ads and Meta",
      title: "The ads learn from what happened at the clinic.",
      model: {
        title: "The model",
        body: "The clinics' ad accounts are linked to Ybyatã, and our team runs the campaigns. The platform talks to Google Ads and Meta from the server, with Ybyatã's credentials; nobody at the clinic has to sign in to Google through the platform.",
      },
      does: {
        title: "What the integration does",
        items: [
          "Reads each campaign's spend, by day, for the cost per booking.",
          "Sends bookings and visits back as conversions, by the click id; without one, with only the phone and e-mail hashed.",
          "Doesn't create, change or remove campaigns, ads, budgets or bids. Our team manages the campaigns.",
        ],
      },
      doc: "The full design of the Google Ads API integration",
      whoTitle: "Who sees what",
      who: {
        head: ["Who", "What they see", "Ad data"],
        rows: [
          ["Ybyatã's team", "The clinics it serves.", "Operates the linked accounts."],
          ["Owners and managers", "Their own clinic.", "Spend and cost per booking for their own campaigns."],
          ["Front desk", "Conversations, schedule, approvals.", "None."],
        ],
      },
    },
  },
} satisfies Record<Locale, unknown>
