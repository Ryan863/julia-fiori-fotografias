"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className={`fixed bottom-5 right-5 z-40 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={SITE_CONFIG.whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar ensaio pelo WhatsApp"
        className="group relative flex min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-[#C4735B] px-4 sm:px-5 text-white shadow-[0_14px_30px_-8px_rgba(166,92,70,0.6)] transition-all duration-200 hover:bg-[#A65C46] active:scale-95"
      >
        <span
          aria-hidden="true"
          className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5EAE4] opacity-75" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#F5EAE4]" />
        </span>

        <MessageCircle className="h-6 w-6 stroke-[2]" aria-hidden="true" />
        <span className="hidden sm:inline ml-2 text-sm font-semibold tracking-wide">
          Agendar pelo WhatsApp
        </span>
      </a>
    </aside>
  );
}
