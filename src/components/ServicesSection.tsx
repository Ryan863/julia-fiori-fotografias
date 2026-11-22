import {
  Heart,
  Baby,
  Users,
  Sparkles,
  Gift,
  Shirt,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES, getWhatsAppUrl, type ServiceItem } from "@/config/site-data";

const ICON_MAP: Record<ServiceItem["iconName"], typeof Heart> = {
  Heart,
  Baby,
  Users,
  Sparkles,
  Gift,
  Shirt,
};

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative py-14 sm:py-20 lg:py-28 border-t border-stone-900/[0.08]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4735B]">
              Ensaios &amp; Experiências
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-[#2A2220] text-balance">
              Cada fase merece ser lembrada com{" "}
              <em className="italic font-normal text-[#C4735B]">
                delicadeza e verdade
              </em>
              .
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#6E635E] text-pretty">
            Do primeiro anúncio da gestação ao primeiro aniversário e aos
            retratos que celebram quem você é hoje, cuidamos de cada detalhe no
            estúdio.
          </p>
        </div>

        <div className="reveal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <article
                key={service.id}
                className="reveal-card group flex flex-col justify-between rounded-2xl border border-stone-900/[0.08] bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C4735B]/35 hover:shadow-[0_18px_40px_-20px_rgba(42,34,32,0.14)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5EAE4] text-[#C4735B] transition-colors group-hover:bg-[#C4735B] group-hover:text-white">
                      <Icon className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
                    </div>
                    <span className="font-serif text-xl italic text-[#6E635E]/70 tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C4735B]">
                    {service.subtitle}
                  </p>
                  <h3 className="mt-1.5 font-serif text-2xl font-medium leading-snug text-[#2A2220] text-balance">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6E635E] text-pretty">
                    {service.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-stone-900/[0.08] bg-[#FAF6F2] px-3 py-1 text-xs font-medium text-[#2A2220]/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 border-t border-stone-900/[0.07] pt-4">
                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full min-h-[44px] text-sm font-semibold text-[#2A2220] transition-colors hover:text-[#C4735B]"
                  >
                    <span>Consultar disponibilidade</span>
                    <ArrowUpRight
                      className="h-4 w-4 text-[#C4735B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
