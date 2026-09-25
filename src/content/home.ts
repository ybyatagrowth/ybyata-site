import type { Locale } from "../i18n"

export const home = {
  "pt-BR": {
    title: "Ybyatã · Mais pacientes, menos achismo",
    description:
      "Anúncios no Google e na Meta, uma plataforma que acompanha cada paciente do clique ao atendimento e uma gestão comercial que treina e acompanha a equipe. Crescimento de verdade para clínicas.",
    hero: {
      eyebrow: "Crescimento para clínicas de saúde",
      title: "Mais pacientes.",
      titleEm: "Menos achismo.",
      sub: "Inteligência artificial que acompanha cada paciente, do anúncio à agenda.",
      lead:
        "Anúncios no Google e na Meta, uma plataforma que lê as conversas do WhatsApp e mostra o que cada anúncio trouxe, e uma gestão comercial que ensina a sua equipe a vender.",
      secondary: "Conhecer a plataforma",
    },
    leaks: {
      eyebrow: "Onde o crescimento se perde",
      title: "Quase toda clínica investe em anúncio. Pouquíssimas sabem o que ele trouxe.",
      items: [
        {
          title: "O anúncio não sabe o que aconteceu depois do clique",
          body: "Google e Meta aprendem com formulários e cliques, não com quem agendou e compareceu. O investimento otimiza para a coisa errada.",
        },
        {
          title: "O paciente esfria no WhatsApp",
          body: "Mensagem sem resposta, orçamento sem retorno. Ninguém sabe quantas pessoas ficaram pelo caminho, nem por quê.",
        },
        {
          title: "A equipe atende, mas não vende",
          body: "Recepção e profissionais sem processo, sem meta e sem acompanhamento. O pacote que poderia fechar vira uma sessão avulsa.",
        },
      ],
    },
    offers: {
      eyebrow: "Duas frentes, um resultado",
      title: "Tecnologia que mede. Gente que faz acontecer.",
      platform: {
        name: "A plataforma",
        title: "Do clique ao atendimento, medido.",
        points: [
          "O WhatsApp da clínica num lugar só: responda por texto ou áudio, e veja quem espera resposta",
          "Agendamentos propostos a partir da própria conversa",
          "Conversões de volta para o Google e a Meta",
          "O custo de cada agendamento, por campanha",
        ],
        cta: "Ver a plataforma",
      },
      service: {
        name: "Gestão comercial",
        title: "Uma equipe que sabe vender.",
        points: [
          "Treinamento da recepção e dos profissionais para vender pacotes",
          "Acompanhamento de perto: reuniões, conversas e metas",
          "Relatórios de desempenho e a receita futura sob controle",
          "Bonificação que mantém a equipe motivada",
        ],
        cta: "Conhecer a gestão comercial",
      },
    },
    steps: {
      eyebrow: "Como funciona",
      title: "Do clique à agenda.",
      items: [
        {
          n: "01",
          title: "O anúncio traz o paciente",
          body: "Campanhas no Google e na Meta levam à página da clínica, que guarda de qual anúncio a pessoa veio junto com o contato dela. Cada lead nasce sabendo a sua origem.",
          media: { image: "/media/reports-campaigns.png", w: 1116, h: 445, alt: "Custo por agendamento de cada campanha, com o investimento, os leads e os agendamentos." },
        },
        {
          n: "02",
          title: "A conversa acontece no WhatsApp",
          body: "A recepção responde pela própria Ybyatã, por texto ou áudio, ou pelo WhatsApp Business. A Ybyatã acompanha cada conversa, inclusive os áudios, e mostra quem está esperando resposta, e há quanto tempo.",
          media: { clip: "inbox", w: 1168, h: 900, alt: "A caixa de entrada: quem está esperando resposta e há quanto tempo." },
        },
        {
          n: "03",
          title: "A conversa vira agendamento",
          body: "A plataforma lê a conversa e propõe o que aconteceu: agendou, compareceu, fechou pacote. Alguém da equipe confirma com um clique, e a agenda se atualiza.",
          media: { clip: "approve", w: 1168, h: 900, alt: "Uma proposta de agendamento tirada da conversa, aprovada com um clique." },
        },
        {
          n: "04",
          title: "A verdade volta para o anúncio",
          body: "O agendamento e o comparecimento voltam para o Google e a Meta como conversão, e o relatório mostra quanto custou cada paciente. O investimento aprende com a realidade.",
          media: { clip: "reports", w: 1168, h: 900, alt: "O relatório: resultado, investimento em anúncios e custo por agendamento." },
        },
      ],
    },
    strip: {
      eyebrow: "A plataforma por dentro",
      title: "Tudo o que a clínica precisa para crescer, num lugar só.",
      items: [
        { title: "Início", body: "Como a clínica está e o que precisa de você hoje.", image: "/media/home.png" },
        { title: "Agenda", body: "Por profissional, com confirmação pelo WhatsApp e quem ainda precisa ser marcado como compareceu.", image: "/media/schedule-week.png" },
        { title: "Relatórios e DRE", body: "Receita, anúncios e resultado de qualquer período, e o DRE pronto para o contador.", image: "/media/reports.png" },
        { title: "Pessoas", body: "Todo mundo com quem a clínica fala: a etapa, a última mensagem, o próximo horário e a campanha de onde veio.", image: "/media/people.png" },
        { title: "Cada paciente", body: "A história inteira: de onde veio, a conversa, os pacotes e o que falta receber.", image: "/media/person-vera.png" },
        { title: "Pergunte à Ybyatã", body: "Um assistente que conhece a agenda, os pacientes e os números da clínica.", image: "/media/assistant-answer.png" },
        { title: "Aprovações", body: "O que a plataforma percebeu nas conversas, para a equipe confirmar.", image: "/media/approvals.png" },
      ],
      more: "E mais: prontuário com assinatura eletrônica, atestados e declarações, ditado por voz, comissões da equipe, despesas e o que falta receber de cada paciente.",
    },
    service: {
      eyebrow: "Gestão comercial",
      title: "A primeira pessoa que o paciente conhece é quem mais vende.",
      body: "A recepção é o cartão de visitas da clínica. Nós treinamos e acompanhamos quem atende, da recepção aos profissionais, para que cada conversa tenha mais chance de virar tratamento. A maior parte do trabalho é remota, no dia a dia da equipe, com visitas à clínica quando fazem diferença.",
      points: [
        ["Treina", "recepção e profissionais a apresentar e vender pacotes"],
        ["Acompanha", "reuniões, leitura das conversas no WhatsApp, metas"],
        ["Mede", "relatórios diários e semanais, receita futura"],
        ["Motiva", "bonificação da equipe ligada ao resultado"],
      ],
      cta: "Como funciona a gestão comercial",
    },
    trust: {
      eyebrow: "Privacidade",
      title: "Dado de saúde tratado como dado de saúde.",
      items: [
        { title: "Em São Paulo", body: "Banco de dados, arquivos e inteligência artificial ficam no Brasil, em São Paulo." },
        { title: "Cada clínica isolada", body: "Os dados de uma clínica são separados dos das outras pelo próprio banco de dados." },
        { title: "A conversa não sai", body: "Para os anúncios vai só a conversão e um hash do telefone. Nunca a conversa, nunca detalhe de saúde." },
        { title: "Nunca vendemos dados", body: "Sob a LGPD, a clínica decide sobre os dados dos pacientes; a Ybyatã é operadora." },
      ],
      link: "Política de privacidade",
    },
    roadmap: {
      eyebrow: "O que vem por aí",
      title: "A plataforma cresce junto com as clínicas.",
      items: [
        { title: "O número de sempre", body: "Conectar o WhatsApp Business que a clínica já usa, sem trocar de número." },
        { title: "Retornos no tempo certo", body: "Lembretes para quem parou de responder e reativação de quem esfriou, respeitando quem pediu para não receber." },
        { title: "Site e páginas de captação", body: "Páginas da clínica prontas para anúncio, já ligadas à plataforma." },
      ],
    },
    final: {
      title: "Vamos olhar a sua clínica juntos.",
      body: "Conte como a clínica está hoje. A gente mostra onde está o crescimento, e como chegar lá.",
      note: "A plataforma está abrindo para as primeiras clínicas.",
    },
  },
  en: {
    title: "Ybyatã · More patients, less guesswork",
    description:
      "Google and Meta ads, a platform that follows every patient from the click to the visit, and commercial management that trains and manages the team. Real growth for clinics.",
    hero: {
      eyebrow: "Growth for health clinics",
      title: "More patients.",
      titleEm: "Less guesswork.",
      sub: "AI that follows every patient, from the ad to the schedule.",
      lead:
        "Google and Meta ads, a platform that reads the WhatsApp conversations and shows what each ad brought, and commercial management that teaches your team to sell.",
      secondary: "See the platform",
    },
    leaks: {
      eyebrow: "Where growth leaks",
      title: "Almost every clinic pays for ads. Very few know what they brought.",
      items: [
        {
          title: "The ad doesn't know what happened after the click",
          body: "Google and Meta learn from forms and clicks, not from who booked and came. The spend optimizes for the wrong thing.",
        },
        {
          title: "The patient goes cold on WhatsApp",
          body: "Messages left unanswered, quotes never followed up. Nobody knows how many people were lost, or why.",
        },
        {
          title: "The team answers, but doesn't sell",
          body: "Front desk and practitioners with no process, no targets and no follow-up. The package that could close becomes a single session.",
        },
      ],
    },
    offers: {
      eyebrow: "Two fronts, one result",
      title: "Technology that measures. People who make it happen.",
      platform: {
        name: "The platform",
        title: "From the click to the visit, measured.",
        points: [
          "The clinic's WhatsApp in one place: reply by text or voice note, and see who's waiting",
          "Bookings proposed from the conversation itself",
          "Conversions sent back to Google and Meta",
          "The cost of each booking, by campaign",
        ],
        cta: "See the platform",
      },
      service: {
        name: "Commercial management",
        title: "A team that knows how to sell.",
        points: [
          "Training the front desk and practitioners to sell packages",
          "Close follow-up: meetings, conversations and targets",
          "Performance reports and future revenue under control",
          "Team bonuses that keep people motivated",
        ],
        cta: "About commercial management",
      },
    },
    steps: {
      eyebrow: "How it works",
      title: "From the click to the schedule.",
      items: [
        {
          n: "01",
          title: "The ad brings the patient",
          body: "Google and Meta campaigns lead to the clinic's page, which keeps which ad the person came from along with their contact. Every lead is born knowing where it came from.",
          media: { image: "/media/reports-campaigns.png", w: 1116, h: 445, alt: "Cost per booking for each campaign, with spend, leads and bookings." },
        },
        {
          n: "02",
          title: "The conversation happens on WhatsApp",
          body: "The front desk replies from Ybyatã itself, by text or voice note, or from WhatsApp Business. Ybyatã follows every conversation, voice notes included, and shows who's waiting for an answer, and for how long.",
          media: { clip: "inbox", w: 1168, h: 900, alt: "The inbox: who's waiting for an answer and for how long." },
        },
        {
          n: "03",
          title: "The conversation becomes a booking",
          body: "The platform reads the conversation and proposes what happened: booked, came, bought a package. Someone on the team confirms it with one click, and the schedule updates.",
          media: { clip: "approve", w: 1168, h: 900, alt: "A booking proposed from the conversation, approved with one click." },
        },
        {
          n: "04",
          title: "The truth goes back to the ad",
          body: "The booking and the visit go back to Google and Meta as conversions, and the report shows what each patient cost. The spend learns from reality.",
          media: { clip: "reports", w: 1168, h: 900, alt: "The report: result, ad spend and cost per booking." },
        },
      ],
    },
    strip: {
      eyebrow: "Inside the platform",
      title: "Everything a clinic needs to grow, in one place.",
      items: [
        { title: "Home", body: "How the clinic is doing, and what needs you today.", image: "/media/home.png" },
        { title: "Schedule", body: "By practitioner, with confirmation on WhatsApp and who still needs marking as came.", image: "/media/schedule-week.png" },
        { title: "Reports and P&L", body: "Revenue, ads and result for any period, and the P&L ready for the accountant.", image: "/media/reports.png" },
        { title: "People", body: "Everyone the clinic talks to: their stage, last message, next appointment and the campaign they came from.", image: "/media/people.png" },
        { title: "Every patient", body: "The whole story: where they came from, the conversation, packages and what's still owed.", image: "/media/person-vera.png" },
        { title: "Ask Ybyatã", body: "An assistant that knows the clinic's schedule, patients and numbers.", image: "/media/assistant-answer.png" },
        { title: "Approvals", body: "What the platform noticed in conversations, for the team to confirm.", image: "/media/approvals.png" },
      ],
      more: "And more: clinical records with electronic signatures, certificates and statements, voice dictation, team commissions, expenses, and what each patient still owes.",
    },
    service: {
      eyebrow: "Commercial management",
      title: "The first person a patient meets is the one who sells the most.",
      body: "The front desk is the clinic's business card. We train and manage the people who answer, from the front desk to the practitioners, so every conversation has a better chance of becoming treatment. Most of the work is remote, in the team's day to day, with visits to the clinic when they make a difference.",
      points: [
        ["Trains", "front desk and practitioners to present and sell packages"],
        ["Follows up", "meetings, reading the WhatsApp conversations, targets"],
        ["Measures", "daily and weekly reports, future revenue"],
        ["Motivates", "team bonuses tied to results"],
      ],
      cta: "How commercial management works",
    },
    trust: {
      eyebrow: "Privacy",
      title: "Health data treated as health data.",
      items: [
        { title: "In São Paulo", body: "Database, files and artificial intelligence stay in Brazil, in São Paulo." },
        { title: "Each clinic isolated", body: "One clinic's data is kept apart from the others' by the database itself." },
        { title: "The conversation stays", body: "Ads get only the conversion and a hash of the phone number. Never the conversation, never a health detail." },
        { title: "We never sell data", body: "Under Brazil's LGPD, the clinic decides about its patients' data; Ybyatã is the processor." },
      ],
      link: "Privacy policy",
    },
    roadmap: {
      eyebrow: "What's next",
      title: "The platform grows with the clinics.",
      items: [
        { title: "The same number", body: "Connect the WhatsApp Business the clinic already uses, without changing numbers." },
        { title: "Follow-ups at the right time", body: "Reminders for whoever stopped answering, and bringing back those who went cold, respecting anyone who opted out." },
        { title: "Website and landing pages", body: "The clinic's own pages, ready for ads and already connected to the platform." },
      ],
    },
    final: {
      title: "Let's look at your clinic together.",
      body: "Tell us how the clinic is doing today. We'll show you where the growth is, and how to get there.",
      note: "The platform is opening to its first clinics.",
    },
  },
} satisfies Record<Locale, unknown>
