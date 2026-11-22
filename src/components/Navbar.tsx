"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle, MapPin, Clock } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/config/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF6F2]/92 backdrop-blur-md border-b border-stone-900/[0.08] shadow-[0_4px_24px_-12px_rgba(42,34,32,0.12)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10"
        >
          <a
            href="#inicio"
            className="group flex items-center gap-3 min-h-[44px] pr-2"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#C4735B]/25 bg-[#F5EAE4] shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo-julia-fiori.png"
                alt="Selo Julia Fiori Fotografias"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.06em] text-[#2A2220]">
                JULIA FIORI
              </span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#6E635E]">
                Fotografias
              </span>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center min-h-[44px] text-sm font-medium text-[#2A2220]/85 transition-colors hover:text-[#C4735B]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={SITE_CONFIG.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-[#C4735B] px-5 py-2.5 min-h-[44px] text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#A65C46] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
              <span>Agendar Ensaio</span>
            </a>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={drawerOpen}
              className="inline-flex lg:hidden items-center justify-center min-w-[44px] min-h-[44px] rounded-full border border-stone-900/10 bg-[#FAF6F2]/80 text-[#2A2220] backdrop-blur-sm transition-colors hover:border-[#C4735B]/40"
            >
              <Menu className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Drawer */}
      {drawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#FAF6F2] px-6 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-stone-900/[0.08] pb-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#C4735B]/25 bg-[#F5EAE4]">
                <Image
                  src="/images/logo-julia-fiori.png"
                  alt="Selo Julia Fiori Fotografias"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold tracking-[0.06em] text-[#2A2220]">
                  JULIA FIORI
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#6E635E]">
                  Fotografias
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Fechar menu de navegação"
              className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full border border-stone-900/10 bg-white text-[#2A2220]"
            >
              <X className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Links do menu mobile" className="my-auto py-8">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center justify-between min-h-[52px] rounded-xl px-3 font-serif text-3xl font-medium text-[#2A2220] transition-colors hover:bg-[#F5EAE4]/70 hover:text-[#C4735B]"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4 border-t border-stone-900/[0.08] pt-5">
            <div className="space-y-2 text-xs text-[#6E635E]">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#C4735B] shrink-0" aria-hidden="true" />
                <span>{SITE_CONFIG.address}</span>
              </p>
              <p className="flex items-center gap-2 tabular-nums">
                <Clock className="h-4 w-4 text-[#C4735B] shrink-0" aria-hidden="true" />
                <span>
                  {SITE_CONFIG.hours} • {SITE_CONFIG.hoursNote}
                </span>
              </p>
            </div>

            <a
              href={SITE_CONFIG.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setDrawerOpen(false)}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#C4735B] px-6 py-3.5 min-h-[48px] text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#A65C46]"
            >
              <MessageCircle className="h-5 w-5 stroke-[2]" aria-hidden="true" />
              <span>Agendar Ensaio pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
