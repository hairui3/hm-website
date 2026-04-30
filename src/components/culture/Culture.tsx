import Reveal from '@/components/Reveal'
import Section from '@/components/Section'
import { site } from '@/content/site'

export default function Culture() {
  return (
    <div id="culture" className="relative py-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_700px_at_20%_30%,rgba(255,209,171,0.22),transparent_60%),radial-gradient(1000px_700px_at_70%_20%,rgba(9,213,255,0.10),transparent_65%)]" />
      <Section>
        <Reveal>
          <div className="text-xs font-semibold tracking-[0.18em] text-muted">企业文化与园景</div>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-ink sm:text-4xl">
            {site.culture.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-[760px] text-sm leading-[1.85] text-muted sm:text-[15px]">
            {site.culture.desc}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
          <Reveal className="h-full">
            <div className="relative h-full overflow-hidden rounded-[32px] border border-line/70 bg-white/70 backdrop-blur-xl">
              <img
                src={site.culture.images.campus}
                alt="国际化工厂园区"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.65),transparent_55%)]" />
              <div className="absolute left-6 top-6 rounded-2xl border border-line/60 bg-white/70 px-4 py-3 text-sm text-ink backdrop-blur-xl">
                现代化 · 生态化 · 国际化
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-[32px] border border-line/70 bg-white/70 backdrop-blur-xl">
                <img
                  src={site.culture.images.team}
                  alt="团队文化"
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.75))]" />
                <div className="absolute bottom-5 left-5 rounded-2xl border border-line/60 bg-white/75 px-4 py-3 text-sm text-ink backdrop-blur-xl">
                  活力团队 · 工程协作
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {site.culture.cards.map((c, idx) => (
                <Reveal key={c.title} delay={0.06 * idx}>
                  <div className="rounded-[26px] border border-line/70 bg-white/70 p-5 backdrop-blur-xl">
                    <div className="font-display text-lg tracking-[-0.01em] text-ink">{c.title}</div>
                    <div className="mt-2 text-sm leading-[1.75] text-muted">{c.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

