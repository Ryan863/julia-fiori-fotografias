import { Star, Quote, Camera } from "lucide-react";
import { TESTIMONIALS, SITE_CONFIG } from "@/config/site-data";

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="relative bg-[#2A2220] py-14 sm:py-20 lg:py-28 text-[#FAF6F2]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5EAE4]/75">
              Prova Social Verificada
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-[#FAF6F2] text-balance">
              O carinho das famílias que{" "}
              <em className="italic font-normal text-[#C4735B]">
                confiam suas histórias
              </em>
              .
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm tabular-nums">
              <div className="flex items-center gap-0.5 text-[#C4735B]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#C4735B] text-[#C4735B]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="font-semibold text-white">
                {SITE_CONFIG.googleRating} no Google
              </span>
              <span className="text-[#FAF6F2]/70">
                ({SITE_CONFIG.googleReviewsCount} avaliações)
              </span>
            </div>

            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 min-h-[44px] text-sm text-[#FAF6F2] transition-colors hover:border-[#C4735B]/60 hover:bg-white/10 tabular-nums"
            >
              <Camera className="h-4 w-4 text-[#C4735B]" aria-hidden="true" />
              <span>
                {SITE_CONFIG.instagramFollowers} seguidores •{" "}
                {SITE_CONFIG.instagramPostsCount} posts
              </span>
            </a>
          </div>
        </div>

        <div className="reveal-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.id}
              className="reveal-card flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C4735B]">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-[#C4735B] text-[#C4735B]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <Quote
                    className="h-5 w-5 text-[#C4735B]/60"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-5 font-serif text-xl sm:text-2xl italic leading-relaxed text-[#FAF6F2]">
                  “{item.quote}”
                </p>
              </div>

              <footer className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">
                  {item.author}
                </p>
                <p className="mt-0.5 text-xs text-[#FAF6F2]/65">
                  {item.context} • {item.source}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
