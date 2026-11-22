import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  Camera,
  Share2,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function ContactLocationSection() {
  return (
    <section
      id="contato"
      className="relative bg-[#F5EAE4]/55 py-14 sm:py-20 lg:py-28 border-t border-stone-900/[0.08]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Informações e Canais Diretos */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl border border-stone-900/[0.08] bg-white p-7 sm:p-10 shadow-[0_18px_40px_-24px_rgba(42,34,32,0.16)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4735B]">
                Localização &amp; Atendimento
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-tight text-[#2A2220] text-balance">
                Visite o estúdio no bairro Pres. Médici, em Chapecó.
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5EAE4] text-[#C4735B]">
                    <MapPin className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2A2220]">
                      Endereço
                    </h3>
                    <p className="mt-1 text-base text-[#6E635E]">
                      {SITE_CONFIG.streetAddress}
                      <br />
                      <span className="tabular-nums">
                        {SITE_CONFIG.cityStateZip}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5EAE4] text-[#C4735B]">
                    <Clock className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2A2220]">
                      Horário de Atendimento
                    </h3>
                    <p className="mt-1 text-base text-[#6E635E] tabular-nums">
                      {SITE_CONFIG.hours}
                    </p>
                    <p className="text-sm text-[#A65C46] font-medium">
                      {SITE_CONFIG.hoursNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5EAE4] text-[#C4735B]">
                    <Phone className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2A2220]">
                      WhatsApp &amp; Redes Sociais
                    </h3>
                    <p className="mt-1 text-base font-medium text-[#2A2220] tabular-nums">
                      {SITE_CONFIG.phoneDisplay}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href={SITE_CONFIG.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-stone-900/12 bg-[#FAF6F2] px-4 py-2 min-h-[44px] text-xs sm:text-sm font-medium text-[#2A2220] transition-colors hover:border-[#C4735B]/40 hover:text-[#C4735B]"
                      >
                        <Camera className="h-4 w-4 text-[#C4735B]" aria-hidden="true" />
                        <span>{SITE_CONFIG.instagramHandle}</span>
                      </a>

                      <a
                        href={SITE_CONFIG.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-stone-900/12 bg-[#FAF6F2] px-4 py-2 min-h-[44px] text-xs sm:text-sm font-medium text-[#2A2220] transition-colors hover:border-[#C4735B]/40 hover:text-[#C4735B]"
                      >
                        <Share2 className="h-4 w-4 text-[#C4735B]" aria-hidden="true" />
                        <span>{SITE_CONFIG.facebookName}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 border-t border-stone-900/[0.08] pt-6">
              <a
                href={SITE_CONFIG.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#C4735B] px-6 py-3.5 min-h-[48px] text-sm font-semibold text-white transition-colors hover:bg-[#A65C46]"
              >
                <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                <span>Agendar pelo WhatsApp</span>
              </a>

              <a
                href={SITE_CONFIG.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-stone-900/15 bg-[#FAF6F2] px-6 py-3.5 min-h-[48px] text-sm font-semibold text-[#2A2220] transition-colors hover:border-[#C4735B]/45 hover:bg-[#F5EAE4]"
              >
                <Navigation className="h-4 w-4 text-[#C4735B]" aria-hidden="true" />
                <span>Traçar Rota no Maps</span>
              </a>
            </div>
          </div>

          {/* Mapa Google Maps Lazy-loaded */}
          <div className="lg:col-span-6 min-h-[360px] lg:min-h-full overflow-hidden rounded-3xl border border-stone-900/[0.08] bg-[#FAF6F2] shadow-[0_18px_40px_-24px_rgba(42,34,32,0.16)]">
            <iframe
              title="Localização do estúdio Julia Fiori Fotografias em Chapecó - SC"
              src={SITE_CONFIG.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
