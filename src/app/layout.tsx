import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_CONFIG } from "@/config/site-data";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://julia-fiori-fotografias.vercel.app"),
  title:
    "Julia Fiori Fotografias | Gestantes, Bebês, Família e Retratos em Chapecó - SC",
  description:
    "Estúdio de fotografia afetiva em Chapecó - SC (Pres. Médici). Ensaios de gestantes, bebês, acompanhamento mensal, Smash the Cake, família, retratos femininos e cenários sazonais com acervo de vestuário incluso.",
  keywords: [
    "Julia Fiori Fotografias",
    "fotógrafa em Chapecó",
    "ensaio gestante Chapecó",
    "acompanhamento mensal bebê Chapecó",
    "smash the cake Chapecó",
    "ensaio família Chapecó",
    "retratos femininos Chapecó",
    "ensaio de natal Chapecó",
  ],
  openGraph: {
    title:
      "Julia Fiori Fotografias | Gestantes, Bebês, Família e Retratos em Chapecó - SC",
    description:
      "Eternizamos a história da sua família e a sua essência com sensibilidade, estúdio equipado, cenários prontos e acervo de vestuário incluso.",
    url: "/",
    siteName: SITE_CONFIG.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-desktop.jpg",
        width: 1920,
        height: 1080,
        alt: "Julia Fiori Fotografias - Estúdio de Fotografia Afetiva em Chapecó - SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julia Fiori Fotografias | Chapecó - SC",
    description:
      "Estúdio de fotografia afetiva com cenários prontos e acervo de vestuário incluso em Chapecó - SC.",
    images: ["/images/hero-desktop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Photographer"],
  name: SITE_CONFIG.name,
  image: "https://julia-fiori-fotografias.vercel.app/images/hero-desktop.jpg",
  url: "https://julia-fiori-fotografias.vercel.app",
  telephone: "+5549991578882",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Gênova, 247 - Pres. Médici",
    addressLocality: "Chapecó",
    addressRegion: "SC",
    postalCode: "89801-115",
    addressCountry: "BR",
  },
  openingHours: "Mo-Sa 09:00-18:00",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [SITE_CONFIG.instagramUrl],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "13",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jakarta.variable}`}
    >
      <body className="bg-[#FAF6F2] text-[#2A2220] antialiased selection:bg-[#F5EAE4] selection:text-[#2A2220]">
        {/* Granulação cinematográfica editorial sutil */}
        <svg
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-[0.025]"
        >
          <filter id="editorial-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#editorial-grain)" />
        </svg>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
