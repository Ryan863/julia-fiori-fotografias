import Image from "next/image";
import {
  MessageCircle,
  ArrowDownRight,
  Star,
  Camera,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[88dvh] sm:min-h-[95dvh] items-end md:items-center overflow-hidden pt-28 pb-12 sm:pb-16 md:py-28"
    >
      {/* Hero Background Images */}
      <Image
        src="/images/hero-desktop.jpg"
        alt="Câmera analógica vintage sobre tecido de linho e flores secas sob luz quente de janela no estúdio Julia Fiori Fotografias"
        fill
        priority
        sizes="100vw"
        className="hidden md:block object-cover object-right"
      />
      <Image
        src="/images/hero-mobile.jpg"
        alt="Câmera vintage e flores secas em estúdio iluminado da Julia Fiori Fotografias em Chapecó"
        fill
        priority
        sizes="100vw"
        className="block md:hidden object-cover object-top"
      />

      {/* Duplo Gradiente de Proteção de Leitura */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#FAF6F2] via-[#FAF6F2]/88 to-transparent md:bg-gradient-to-r md:from-[#FAF6F2] md:via-[#FAF6F2]/85 md:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAF6F2] to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="hero-reveal inline-flex items-center gap-2 rounded-full border border-[#C4735B]/25 bg-[#FAF6F2]/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A65C46] backdrop-blur-sm">
            FOTOGRAFIA AFETIVA &amp; RETRATOS • CHAPECÓ - SC
          </p>

          <h1 className="hero-reveal mt-5 font-serif text-4xl font-medium leading-[1.06] tracking-tight text-[#2A2220] text-balance sm:text-5xl lg:text-6xl">
            Memórias que guardam o{" "}
            <em className="italic font-normal text-[#C4735B]">afeto</em> e a
            beleza de cada fase.
          </h1>

          <p className="hero-reveal mt-5 max-w-xl text-base leading-relaxed text-[#6E635E] text-pretty sm:text-lg">
            Ensaios de gestante, acompanhamento mensal de bebês, família,
            retratos femininos e cenários sazonais em um estúdio equipado com
            acervo de vestuário incluso.
          </p>

          {/* Ação Dupla */}
          <div className="hero-reveal mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href={SITE_CONFIG.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C4735B] px-7 py-3.5 min-h-[48px] text-sm sm:text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#A65C46] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5 stroke-[2]" aria-hidden="true" />
              <span>Agendar Ensaio pelo WhatsApp</span>
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-900/15 bg-white/80 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-medium text-[#2A2220] backdrop-blur-sm transition-colors hover:border-[#C4735B]/45 hover:bg-[#F5EAE4]/60"
            >
              <span>Explorar Portfólio</span>
              <ArrowDownRight className="h-4 w-4 stroke-[1.8]" aria-hidden="true" />
            </a>
          </div>

          {/* Barra de Credibilidade */}
          <div className="hero-reveal mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-stone-900/[0.08] pt-5 text-xs sm:text-sm text-[#2A2220]/90">
            <div className="flex items-center gap-2 tabular-nums">
              <Star
                className="h-4 w-4 fill-[#C4735B] text-[#C4735B]"
                aria-hidden="true"
              />
              <span className="font-semibold">
                {SITE_CONFIG.googleRating} no Google
              </span>
              <span className="text-[#6E635E]">
                ({SITE_CONFIG.googleReviewsCount} Avaliações)
              </span>
            </div>

            <div className="flex items-center gap-2 tabular-nums">
              <Camera className="h-4 w-4 text-[#C4735B]" aria-hidden="true" />
              <span className="font-semibold">
                {SITE_CONFIG.instagramPostsCount} Publicações
              </span>
              <span className="text-[#6E635E]">
                ({SITE_CONFIG.instagramHandle})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#C4735B]" aria-hidden="true" />
              <span className="font-medium">Estúdio &amp; Acervo Incluso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
