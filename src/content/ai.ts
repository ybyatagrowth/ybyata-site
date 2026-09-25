import type { Locale } from "../i18n"

/** What the platform's AI does, shared by the home page and the platform page. Each item is a
 * real feature (ybyata_platform: intelligence/analyzer, conversations/drafting,
 * media/transcription, clinical/dictation, agent, expenses/reader). */
export const ai = {
  "pt-BR": {
    eyebrow: "Inteligência artificial",
    title: "IA que trabalha ao lado da equipe.",
    titleEm: "Nunca no lugar dela.",
    lead: "A Ybyatã lê cada conversa, e escuta cada áudio, percebe o que aconteceu e deixa pronto para a sua equipe confirmar. O trabalho repetitivo sai da frente; a decisão continua com quem conhece o paciente.",
    capabilities: [
      { title: "Lê cada conversa", body: "Texto e áudio. Entende quando alguém agendou, compareceu ou pagou, e propõe a mudança com o trecho da conversa e quão certa está." },
      { title: "Percebe o que importa", body: "Reclamações, urgências, objeções de preço e oportunidades viram sinais para a equipe decidir o que fazer." },
      { title: "Rascunha respostas", body: "Com a agenda, os preços e o tom da clínica. A recepção revisa, ajusta e envia." },
      { title: "Escuta os áudios", body: "Os áudios dos pacientes viram texto e entram na análise da conversa. E o ditado do profissional vira o rascunho da evolução." },
      { title: "Responde perguntas", body: "O assistente conhece a agenda, os pacientes e os números da clínica, e responde com os dados dela." },
      { title: "Lê extratos", body: "Importa o extrato do banco, até em PDF escaneado, e categoriza cada despesa para o DRE." },
    ],
    promise: ["Processada no Brasil, em São Paulo.", "Toda sugestão passa por uma pessoa antes de valer."],
    demo: {
      reading: "Lendo a conversa…",
      lead1: "Oi! Vi o anúncio da limpeza de pele. Qual o valor?",
      desk: "Oi, Marina! A avaliação é gratuita, e o pacote de 4 sessões sai por R$ 480. Temos quinta às 15h ou sexta às 10h.",
      lead2: "Achei um pouco caro… mas quinta às 15h pode ser!",
      found: [
        { kind: "Agendou", text: "Quinta, 15h · avaliação", tone: "carmine" },
        { kind: "Objeção", text: "Preço do pacote", tone: "gold" },
        { kind: "Origem", text: "Anúncio · Limpeza de pele", tone: "moss" },
      ],
      audio: "áudio · transcrito",
      draftLabel: "Rascunho de resposta",
      draft: "Combinado, Marina! Quinta às 15h. Na avaliação a gente mostra as opções de pacote 😊",
    },
  },
  en: {
    eyebrow: "Artificial intelligence",
    title: "AI that works alongside the team.",
    titleEm: "Never in its place.",
    lead: "Ybyatã reads every conversation and listens to every voice note, notices what happened and leaves it ready for your team to confirm. The repetitive work gets out of the way; the decision stays with the people who know the patient.",
    capabilities: [
      { title: "Reads every conversation", body: "Text and voice. Understands when someone booked, came or paid, and proposes the change with the passage it relied on and how sure it is." },
      { title: "Notices what matters", body: "Complaints, emergencies, price objections and opportunities become signals for the team to act on." },
      { title: "Drafts replies", body: "With the clinic's schedule, prices and tone. The front desk reviews, adjusts and sends." },
      { title: "Listens to voice notes", body: "Patients' voice notes become text and go into the conversation's analysis. And the practitioner's dictation becomes the progress note's draft." },
      { title: "Answers questions", body: "The assistant knows the clinic's schedule, patients and numbers, and answers from its data." },
      { title: "Reads statements", body: "Imports the bank statement, even a scanned PDF, and categorizes every expense for the P&L." },
    ],
    promise: ["Processed in Brazil, in São Paulo.", "Every suggestion goes through a person before it counts."],
    demo: {
      reading: "Reading the conversation…",
      lead1: "Hi! I saw the skin cleansing ad. How much is it?",
      desk: "Hi, Marina! The assessment is free, and the 4-session package is R$480. We have Thursday at 3 pm or Friday at 10 am.",
      lead2: "A bit pricey… but Thursday at 3 pm works!",
      found: [
        { kind: "Booked", text: "Thursday, 3 pm · assessment", tone: "carmine" },
        { kind: "Objection", text: "Package price", tone: "gold" },
        { kind: "Source", text: "Ad · Skin cleansing", tone: "moss" },
      ],
      audio: "voice note · transcribed",
      draftLabel: "Draft reply",
      draft: "Done, Marina! Thursday at 3 pm. At the assessment we'll show you the package options 😊",
    },
  },
} satisfies Record<Locale, unknown>
