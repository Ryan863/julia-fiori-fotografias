"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Camera, X, MessageCircle, Maximize2 } from "lucide-react";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  SITE_CONFIG,
  getWhatsAppUrl,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/config/site-data";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategory>("Todos");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === "Todos"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!selectedItem) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedItem]);

  return (
    <section
      id="portfolio"
      className="relative bg-[#F5EAE4]/55 py-14 sm:py-20 lg:py-28 border-t border-stone-900/[0.08]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4735B]">
              Portfólio Selecionado
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-[#2A2220] text-balance">
              Histórias reais contadas com{" "}
              <em className="italic font-normal text-[#C4735B]">
                luz natural e afeto
              </em>
              .
            </h2>
          </div>

          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start lg:self-auto rounded-full border border-stone-900/15 bg-white px-5 py-2.5 min-h-[44px] text-sm font-medium text-[#2A2220] transition-colors hover:border-[#C4735B]/45 hover:text-[#C4735B]"
          >
            <Camera className="h-4 w-4 text-[#C4735B]" aria-hidden="true" />
            <span>Ver mais no {SITE_CONFIG.instagramHandle}</span>
          </a>
        </div>

        {/* Filtros por Categoria */}
        <div
          role="tablist"
          aria-label="Filtrar portfólio por tipo de ensaio"
          className="mb-9 flex flex-wrap gap-2"
        >
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-[44px] rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#2A2220] text-[#FAF6F2] shadow-sm"
                    : "border border-stone-900/10 bg-white/80 text-[#6E635E] hover:border-[#C4735B]/40 hover:text-[#2A2220]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grade Editorial */}
        <div className="reveal-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredItems.map((item) => (
            <figure
              key={item.id}
              className="reveal-card group flex flex-col overflow-hidden rounded-2xl border border-stone-900/[0.08] bg-white shadow-[0_12px_30px_-20px_rgba(42,34,32,0.18)]"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                aria-label={`Ampliar fotografia: ${item.title}`}
                className="relative aspect-[4/5] w-full overflow-hidden bg-[#F5EAE4] text-left focus-visible:outline-offset-[-3px]"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#2A2220]/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="absolute top-3.5 left-3.5 rounded-full bg-[#FAF6F2]/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2A2220] backdrop-blur-sm">
                  {item.sessionTag}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-3.5 right-3.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#2A2220] opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100"
                >
                  <Maximize2 className="h-4 w-4 stroke-[1.8]" />
                </span>
              </button>

              <figcaption className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#2A2220]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6E635E]">
                    {item.caption}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A2220]/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative flex w-full max-w-4xl flex-col md:flex-row overflow-hidden rounded-3xl bg-[#FAF6F2] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Fechar visualização ampliada"
              className="absolute top-3 right-3 z-10 inline-flex min-w-[44px] min-h-[44px] items-center justify-center rounded-full bg-[#FAF6F2]/95 text-[#2A2220] shadow-md transition-colors hover:bg-white"
            >
              <X className="h-5 w-5 stroke-[2]" aria-hidden="true" />
            </button>

            <div className="relative aspect-[4/5] w-full md:w-1/2 bg-[#F5EAE4]">
              <Image
                src={selectedItem.imageSrc}
                alt={selectedItem.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
              <div>
                <span className="inline-block rounded-full bg-[#F5EAE4] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A65C46]">
                  {selectedItem.sessionTag}
                </span>
                <h3 className="mt-4 font-serif text-3xl font-medium text-[#2A2220]">
                  {selectedItem.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#6E635E]">
                  {selectedItem.caption}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#6E635E]">
                  Ensaio realizado em estúdio equipado no bairro Pres. Médici,
                  em Chapecó - SC, com cenários prontos e acervo de vestuário
                  disponível.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-900/[0.08]">
                <a
                  href={getWhatsAppUrl(
                    `Olá, Julia! Adorei a foto "${selectedItem.title}" (${selectedItem.sessionTag}) no site e gostaria de agendar um ensaio.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C4735B] px-6 py-3.5 min-h-[48px] text-sm font-semibold text-white transition-colors hover:bg-[#A65C46]"
                >
                  <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                  <span>Quero um ensaio assim</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
