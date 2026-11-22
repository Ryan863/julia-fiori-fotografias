export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconName:
    | "Heart"
    | "Baby"
    | "Users"
    | "Sparkles"
    | "Gift"
    | "Shirt";
  whatsappMessage: string;
}

export type PortfolioCategory =
  | "Todos"
  | "Gestantes"
  | "Bebês & Acompanhamento"
  | "Infantil & Família"
  | "Retratos Femininos"
  | "Cenários Sazonais";

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "Todos">;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  sessionTag: string;
}

export interface DifferentialItem {
  title: string;
  description: string;
  iconName: "Camera" | "Shirt" | "HeartHandshake" | "CalendarClock";
}

export interface TestimonialItem {
  id: string;
  author: string;
  context: string;
  source: "Google Reviews" | "Instagram";
  rating: number;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: "Julia Fiori Fotografias",
  shortName: "Julia Fiori",
  tagline: "Fotografia Afetiva & Retratos",
  city: "Chapecó - SC",
  phoneDisplay: "+55 (49) 99157-8882",
  phoneRaw: "5549991578882",
  whatsappBaseUrl:
    "https://wa.me/5549991578882?text=Ol%C3%A1%2C+Julia%21+Vim+pelo+site+e+gostaria+de+saber+mais+sobre+agendamento+de+ensaio.",
  instagramHandle: "@juliafiorifotografias",
  instagramUrl: "https://www.instagram.com/juliafiorifotografias/",
  facebookName: "Julia Fiori Fotografias",
  facebookUrl:
    "https://www.facebook.com/search/top?q=Julia%20Fiori%20Fotografias",
  address: "R. Gênova, 247 - Pres. Médici, Chapecó - SC, CEP 89801-115",
  streetAddress: "R. Gênova, 247 - Pres. Médici",
  cityStateZip: "Chapecó - SC • CEP 89801-115",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+G%C3%AAnova,+247+-+Pres.+M%C3%A9dici,+Chapec%C3%B3+-+SC,+89801-115",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=R.+G%C3%AAnova,+247+-+Pres.+M%C3%A9dici,+Chapec%C3%B3+-+SC,+89801-115&output=embed",
  hours: "Segunda a sábado, das 09h às 18h",
  hoursNote: "Atendimento mediante agendamento prévio",
  googleRating: "5.0",
  googleReviewsCount: 13,
  instagramPostsCount: "+770",
  instagramFollowers: "1,9 mil",
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  if (!customMessage) {
    return SITE_CONFIG.whatsappBaseUrl;
  }
  return `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(
    customMessage
  )}`;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "O Estúdio", href: "#estudio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "gestante",
    number: "01",
    title: "Ensaios de Gestante",
    subtitle: "A beleza da espera",
    description:
      "Sessões sensíveis e acolhedoras que celebram a maternidade com luz natural, direção gentil e vestidos fluídos do nosso acervo.",
    highlights: ["Acervo de vestidos incluso", "Participação da família"],
    iconName: "Heart",
    whatsappMessage:
      "Olá, Julia! Vim pelo site e gostaria de saber mais sobre o Ensaio de Gestante.",
  },
  {
    id: "bebes-acompanhamento",
    number: "02",
    title: "Bebês & Acompanhamento Mensal",
    subtitle: "Do primeiro sorriso ao 1º ano",
    description:
      "Registros mês a mês das descobertas do seu bebê em cenários seguros e delicados, culminando no ensaio comemorativo de 1º aniversário (Smash the Cake).",
    highlights: ["Acompanhamento mensal", "1º Ano & Smash the Cake"],
    iconName: "Baby",
    whatsappMessage:
      "Olá, Julia! Vim pelo site e gostaria de informações sobre o Acompanhamento Mensal de Bebê / Smash the Cake.",
  },
  {
    id: "infantil-familia",
    number: "03",
    title: "Infantil & Família",
    subtitle: "Conexão verdadeira",
    description:
      "Ensaios leves em estúdio para reunir pais e filhos sem poses rígidas, eternizando abraços, risadas espontâneas e o afeto do cotidiano.",
    highlights: ["Direção leve para crianças", "Cenários acolhedores"],
    iconName: "Users",
    whatsappMessage:
      "Olá, Julia! Vim pelo site e gostaria de agendar um Ensaio Infantil e Família.",
  },
  {
    id: "retratos-femininos",
    number: "04",
    title: "Retratos Femininos",
    subtitle: "Autoestima & presença",
    description:
      "Sessões individuais pensadas para valorizar sua essência, fase atual e imagem pessoal em retratos elegantes, naturais e atemporais.",
    highlights: ["Direção de poses cuidadosa", "Estética editorial limpa"],
    iconName: "Sparkles",
    whatsappMessage:
      "Olá, Julia! Vim pelo site e gostaria de saber mais sobre os Retratos Femininos.",
  },
  {
    id: "cenarios-sazonais",
    number: "05",
    title: "Cenários Sazonais",
    subtitle: "Natal & datas especiais",
    description:
      "Produções temáticas preparadas com riqueza de detalhes ao longo do ano — incluindo nossos cenários afetivos de Natal para toda a família.",
    highlights: ["Cenários exclusivos de Natal", "Vagas sazonais agendadas"],
    iconName: "Gift",
    whatsappMessage:
      "Olá, Julia! Vim pelo site e gostaria de saber sobre os Cenários Sazonais e Ensaios de Natal.",
  },
  {
    id: "acervo-estudio",
    number: "06",
    title: "Acervo & Cenários em Estúdio",
    subtitle: "Praticidade completa",
    description:
      "Você chega e encontra tudo pronto: cenários planejados, iluminação controlada e figurinos disponíveis para gestantes, bebês e crianças.",
    highlights: ["Vestuário selecionado incluso", "Zero preocupação prévia"],
    iconName: "Shirt",
    whatsappMessage:
      "Olá, Julia! Vim pelo site e gostaria de conhecer os planos e o acervo disponível no estúdio.",
  },
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "Todos",
  "Gestantes",
  "Bebês & Acompanhamento",
  "Infantil & Família",
  "Retratos Femininos",
  "Cenários Sazonais",
];

/**
 * COMO ATUALIZAR O PORTFÓLIO:
 * 1. Adicione suas novas fotos em: public/images/portfolio/nome-da-foto.jpg
 * 2. Adicione ou edite os objetos no array PORTFOLIO_ITEMS abaixo.
 */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "gestante-luz-natural",
    title: "Espera em Luz de Janela",
    category: "Gestantes",
    imageSrc: "/images/portfolio/gestante-editorial.jpg",
    imageAlt:
      "Ensaio de gestante em estúdio com vestido fluido marfim sob luz natural suave em Chapecó",
    caption: "Vestido em linho do acervo e iluminação natural de estúdio.",
    sessionTag: "Ensaio Gestante",
  },
  {
    id: "bebe-sete-meses",
    title: "Descobertas do 7º Mês",
    category: "Bebês & Acompanhamento",
    imageSrc: "/images/portfolio/bebe-acompanhamento.jpg",
    imageAlt:
      "Bebê sorrindo sentado sobre manta de tricô durante acompanhamento mensal em estúdio",
    caption: "Acompanhamento mensal com paleta neutra e conforto térmico.",
    sessionTag: "Acompanhamento Mensal",
  },
  {
    id: "smash-primeiro-ano",
    title: "Primeiro Aniversário & Smash",
    category: "Bebês & Acompanhamento",
    imageSrc: "/images/portfolio/smash-the-cake.jpg",
    imageAlt:
      "Bebê de um ano celebrando com bolo minimalista no ensaio Smash the Cake em estúdio",
    caption: "Cenário preparado para comemorar o 1º ano com leveza.",
    sessionTag: "1º Ano • Smash the Cake",
  },
  {
    id: "familia-abraco-linho",
    title: "História em Família",
    category: "Infantil & Família",
    imageSrc: "/images/portfolio/familia-afetiva.jpg",
    imageAlt:
      "Família reunida em abraço espontâneo em estúdio fotográfico com tons quentes e neutros",
    caption: "Conexão genuína com direção acolhedora para pais e filhos.",
    sessionTag: "Infantil & Família",
  },
  {
    id: "retrato-feminino-essencia",
    title: "Presença & Essência",
    category: "Retratos Femininos",
    imageSrc: "/images/portfolio/retrato-feminino.jpg",
    imageAlt:
      "Retrato feminino editorial com luz suave de estúdio valorizando naturalidade e autoestima",
    caption: "Retratos que traduzem confiança, delicadeza e identidade.",
    sessionTag: "Retrato Feminino",
  },
  {
    id: "natal-afetivo-estudio",
    title: "Natal Afetivo em Família",
    category: "Cenários Sazonais",
    imageSrc: "/images/portfolio/cenario-natal.jpg",
    imageAlt:
      "Mãe e bebê em cenário afetivo de Natal montado em estúdio fotográfico em Chapecó",
    caption: "Cenário sazonal montado com pinheiro natural e luzes quentes.",
    sessionTag: "Cenário de Natal",
  },
];

export const STUDIO_DIFFERENTIALS: DifferentialItem[] = [
  {
    title: "Estúdio Equipado com Cenários Prontos",
    description:
      "Ambiente climatizado e preparado para cada fase, sem exigir que a família organize locações externas ou produções complexas.",
    iconName: "Camera",
  },
  {
    title: "Acervo de Vestuário Incluso",
    description:
      "Vestidos para gestantes e peças infantis cuidadosamente selecionadas em tons harmônicos, reduzindo sua ansiedade ao escolher o look.",
    iconName: "Shirt",
  },
  {
    title: "Acompanhamento Afetivo e Dedicado",
    description:
      "Relação próxima com as famílias ao longo dos meses, celebrando desde a gestação até o 1º aniversário e os natais em família.",
    iconName: "HeartHandshake",
  },
  {
    title: "Atendimento com Hora Marcada",
    description:
      "Sessões tranquilas e sem pressa, de segunda a sábado das 09h às 18h, respeitando o ritmo dos bebês e das crianças.",
    iconName: "CalendarClock",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "google-destaque",
    author: "Avaliação Verificada no Google",
    context: "Ensaio em Estúdio • Chapecó - SC",
    source: "Google Reviews",
    rating: 5,
    quote:
      "Ótima fotógrafa, atenciosa e dedicada. Cada detalhe do atendimento transmite cuidado e deixa a família completamente à vontade.",
  },
  {
    id: "instagram-acompanhamento",
    author: "Mamãe de Acompanhamento Mensal",
    context: "Acompanhamento de Bebê • @juliafiorifotografias",
    source: "Instagram",
    rating: 5,
    quote:
      "Morro de amores! Obrigada Ju por registrar nossa ursinha todo mês! Ver o crescimento dela pelos seus olhos é um presente para a vida toda.",
  },
  {
    id: "experiencia-acervo",
    author: "Família Atendida no Pres. Médici",
    context: "Gestante & Família • Estúdio com Acervo",
    source: "Google Reviews",
    rating: 5,
    quote:
      "Ter os cenários prontos e o acervo de roupas no próprio estúdio tornou tudo muito leve. Só chegamos e aproveitamos o momento juntas.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-acervo",
    question:
      "O estúdio disponibiliza cenários e roupas (acervo de vestuário)?",
    answer:
      "Sim! O estúdio já conta com cenários prontos e um acervo de vestuário selecionado para gestantes, bebês e crianças, facilitando toda a preparação do ensaio sem que você precise comprar ou montar produções do zero.",
  },
  {
    id: "faq-acompanhamento",
    question: "Como funciona o acompanhamento mensal do bebê?",
    answer:
      "Realizamos sessões periódicas acompanhando cada fase e conquista do desenvolvimento do bebê ao longo dos meses, até chegarmos ao ensaio comemorativo de 1º aniversário (Smash the Cake).",
  },
  {
    id: "faq-gestante",
    question: "Qual o melhor momento para fazer o ensaio de gestante?",
    answer:
      "Planejamos o ensaio conforme a fase da sua gestação e o seu conforto físico, definindo juntos o melhor período e os looks do acervo no momento do agendamento prévio pelo WhatsApp.",
  },
  {
    id: "faq-natal",
    question: "Vocês fazem produções temáticas como ensaios de Natal?",
    answer:
      "Sim! Preparamos cenários sazonais especiais ao longo do ano — com destaque para os nossos cenários afetivos de Natal, pensados para receber bebês, crianças e toda a família.",
  },
  {
    id: "faq-agendamento",
    question: "Como agendar um horário em Chapecó?",
    answer:
      "O atendimento funciona de segunda a sábado, das 09h às 18h, na R. Gênova, 247 - Pres. Médici, Chapecó - SC, exclusivamente mediante agendamento prévio pelo WhatsApp +55 (49) 99157-8882.",
  },
];
