"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { FAQ_ITEMS, SITE_CONFIG } from "@/config/site-data";

export function FaqSection() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  return (
    <section
      id="duvidas"
      className="relative py-14 sm:py-20 lg:py-28 border-t border-stone-900/[0.08]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4735B]">
              Dúvidas Frequentes
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-tight text-[#2A2220] text-balance">
              Tudo o que você precisa saber antes do seu ensaio.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6E635E] text-pretty">
              Reunimos as principais perguntas de mamães, famílias e clientes
              sobre nosso acervo, acompanhamento mensal e agendamento em Chapecó.
            </p>

            <div className="mt-8 rounded-2xl border border-[#C4735B]/20 bg-[#F5EAE4]/70 p-6">
              <p className="font-serif text-2xl font-medium text-[#2A2220]">
                Ficou com alguma dúvida específica?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#6E635E]">
                Chame a Julia diretamente no WhatsApp para conversar sobre a
                fase do seu bebê, gestação ou disponibilidade de horários.
              </p>
              <a
                href={SITE_CONFIG.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#C4735B] px-6 py-3 min-h-[44px] text-sm font-semibold text-white transition-colors hover:bg-[#A65C46]"
              >
                <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                <span>Tirar dúvida no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-stone-900/[0.08] bg-white transition-colors hover:border-[#C4735B]/30"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 min-h-[56px] text-left"
                  >
                    <span className="font-serif text-xl font-medium text-[#2A2220]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#C4735B] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-stone-900/[0.06] px-6 pb-5 pt-4 text-sm sm:text-base leading-relaxed text-[#6E635E]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
