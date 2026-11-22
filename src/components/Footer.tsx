import Image from "next/image";
import { MessageCircle, Camera, Share2, MapPin } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE_CONFIG } from "@/config/site-data";

export function Footer() {
  return (
    <footer className="bg-[#2A2220] text-[#FAF6F2]">
      {/* Fechamento Editorial */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-start md:items-center justify-between gap-6 px-4 py-12 sm:px-6 lg:px-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4735B]">
              Pronta para eternizar sua fase?
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-medium leading-tight text-[#FAF6F2] text-balance">
              Reserve seu horário no estúdio com acervo e cenários prontos.
            </h2>
          </div>

          <a
            href={SITE_CONFIG.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C4735B] px-7 py-3.5 min-h-[48px] text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#A65C46]"
          >
            <MessageCircle className="h-5 w-5 stroke-[2]" aria-hidden="true" />
            <span>Agendar Ensaio pelo WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Colunas do Rodapé */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 py-12 sm:px-6 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#C4735B]/35 bg-[#F5EAE4]">
              <Image
                src="/images/logo-julia-fiori.png"
                alt="Julia Fiori Fotografias"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-xl font-semibold tracking-[0.06em] text-white">
                JULIA FIORI
              </p>
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#FAF6F2]/65">
                Fotografias
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#FAF6F2]/70">
            Fotografia afetiva de gestantes, bebês, acompanhamento mensal,
            infantil, família, retratos femininos e cenários sazonais em
            Chapecó - SC.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C4735B]">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#FAF6F2]/75 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C4735B]">
            Ensaios
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-[#FAF6F2]/75">
            {SERVICES.map((service) => (
              <li key={service.id}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C4735B]">
            Estúdio &amp; Contato
          </h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-[#FAF6F2]/75">
            <MapPin
              className="mt-0.5 h-4 w-4 shrink-0 text-[#C4735B]"
              aria-hidden="true"
            />
            <span>{SITE_CONFIG.address}</span>
          </p>
          <p className="mt-2 text-sm text-[#FAF6F2]/75 tabular-nums">
            {SITE_CONFIG.hours} ({SITE_CONFIG.hoursNote})
          </p>
          <p className="mt-2 text-sm font-medium text-white tabular-nums">
            {SITE_CONFIG.phoneDisplay}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Julia Fiori Fotografias"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#FAF6F2] transition-colors hover:border-[#C4735B] hover:text-[#C4735B]"
            >
              <Camera className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={SITE_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Julia Fiori Fotografias"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#FAF6F2] transition-colors hover:border-[#C4735B] hover:text-[#C4735B]"
            >
              <Share2 className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-2 px-4 py-5 text-xs text-[#FAF6F2]/55 sm:px-6 lg:px-10">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos
            reservados.
          </p>
          <p>Pres. Médici • Chapecó - Santa Catarina</p>
        </div>
      </div>
    </footer>
  );
}
