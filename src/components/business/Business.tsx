import { motion } from 'framer-motion'
import Reveal from '@/components/Reveal'
import Section from '@/components/Section'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'

export default function Business() {
  return (
    <div id="business" className="relative">
      <Section className="pb-10 pt-8 sm:pt-16">
        <Reveal>
          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="text-xs font-semibold tracking-[0.18em] text-muted">核心业务</div>
              <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-ink sm:text-4xl">
                三大解决方案，依次展开
              </h2>
              <p className="mt-3 max-w-[680px] text-sm leading-[1.8] text-muted sm:text-[15px]">
                以统一的工程方法与质量体系，服务不同应用场景的关键指标：更小、更稳、更快、更可靠。
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <div className="space-y-10 pb-10">
        {site.business.map((b, idx) => (
          <Section key={b.id} className="py-8 sm:py-12">
            <div
              className={cn(
                'relative overflow-hidden rounded-[32px] border border-line/70 bg-white/60 backdrop-blur-xl',
                'shadow-soft',
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(900px_540px_at_70%_20%,rgba(11,102,255,0.12),transparent_60%),radial-gradient(900px_540px_at_20%_80%,rgba(9,213,255,0.10),transparent_62%)]" />
              <div className="relative grid gap-8 p-6 sm:grid-cols-2 sm:items-center sm:gap-10 sm:p-10">
                <div className={cn(idx % 2 === 1 && 'sm:order-2')}>
                  <Reveal>
                    <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/70 px-3 py-1.5 text-xs font-semibold text-muted">
                      <span
                        className={cn(
                          'h-1.5 w-1.5 rounded-full',
                          b.accent === 'aqua' ? 'bg-aqua' : 'bg-brand',
                        )}
                      />
                      <span className="tracking-[0.14em]">{b.eyebrow}</span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h3 className="mt-5 font-display text-2xl tracking-[-0.02em] text-ink sm:text-3xl">
                      {b.title}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.12}>
                    <p className="mt-4 text-sm leading-[1.85] text-muted sm:text-[15px]">
                      {b.desc}
                    </p>
                  </Reveal>

                  <div className="mt-7 grid gap-3">
                    {b.bullets.map((t, i) => (
                      <Reveal key={t} delay={0.16 + i * 0.06}>
                        <div className="flex items-start gap-3 rounded-2xl border border-line/70 bg-white/55 px-4 py-3">
                          <div
                            className={cn(
                              'mt-1 h-2 w-2 rounded-full',
                              b.accent === 'aqua' ? 'bg-aqua/90' : 'bg-brand/90',
                            )}
                          />
                          <div className="text-sm text-ink/80">{t}</div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>

                <Reveal className={cn('sm:order-1', idx % 2 === 1 && 'sm:order-1')}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden rounded-3xl border border-line/70 bg-white"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,102,255,0.10),transparent_55%),linear-gradient(225deg,rgba(9,213,255,0.10),transparent_60%)]" />
                    <img
                      src={b.image}
                      alt={b.eyebrow}
                      className="relative aspect-[16/10] w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 ring-1 ring-white/40" />
                  </motion.div>
                </Reveal>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  )
}

