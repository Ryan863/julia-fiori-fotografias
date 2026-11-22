import Image from "next/image";
import {
  Camera,
  Shirt,
  HeartHandshake,
  CalendarClock,
  MessageCircle,
} from "lucide-react";
import {
  STUDIO_DIFFERENTIALS,
  SITE_CONFIG,
  type DifferentialItem,
} from "@/config/site-data";

const DIFF_ICON_MAP: Record<DifferentialItem["iconName"], typeof Camera> = {
  Camera,
  Shirt,
  HeartHandshake,
  CalendarClock,
};

export function StudioSection() {
  return (
    <section
      id="estudio"
      className="relative py-14 sm:py-20 lg:py-28 border-t border-stone-900/[0.08]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Coluna Visual */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-stone-900/[0.08] bg-[#F5EAE4] shadow-[0_24px_50px_-24px_rgba(42,34,32,0.22)]">
                <Image
                  src="/images/studio/estudio-acervo.jpg"
                  alt="Interior luminoso do estúdio Julia Fiori Fotografias com arara de vestuário incluso e cenários prontos em Chapecó"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Cartão Flutuante com Selo da Marca */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:right-6 flex items-center gap-3.5 rounded-2xl border border-stone-900/[0.08] bg-[#FAF6F2]/95 p-4 backdrop-blur-md shadow-lg max-w-xs">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[#C4735B]/25 bg-[#F5EAE4]">
                  <Image
                    src="/images/logo-julia-fiori.png"
                    alt="Marca Julia Fiori Fotografias"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg font-semibold leading-tight text-[#2A2220]">
                    Estúdio &amp; Acervo
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-[#6E635E]">
                    Pres. Médici • Chapecó - SC
                    <br />
                    Tudo pronto para receber você.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Narrativa e Diferenciais */}
          <div className="lg:col-span-6 lg:pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4735B]">
              O Estúdio &amp; Diferenciais
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-[#2A2220] text-balance">
              Você chega para viver o momento.{" "}
              <em className="italic font-normal text-[#C4735B]">
                Nós preparamos o resto.
              </em>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6E635E] text-pretty">
              Sabemos que preparar um ensaio com bebê, crianças ou durante a
              gestação pode gerar dúvidas. Por isso, nosso estúdio no bairro
              Pres. Médici reúne cenários prontos e acervo de vestuário incluso
              para que a experiência seja leve do início ao fim.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {STUDIO_DIFFERENTIALS.map((item) => {
                const Icon = DIFF_ICON_MAP[item.iconName];
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-stone-900/[0.08] bg-white p-5"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5EAE4] text-[#C4735B]">
                      <Icon className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
                    </div>
                    <h3 className="mt-3.5 font-serif text-xl font-medium text-[#2A2220]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#6E635E]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <a
                href={SITE_CONFIG.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#2A2220] px-7 py-3.5 min-h-[48px] text-sm font-semibold text-[#FAF6F2] transition-colors hover:bg-[#C4735B]"
              >
                <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                <span>Conhecer datas disponíveis</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
