import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from '@/components/Reveal'
import Section from '@/components/Section'
import { site } from '@/content/site'
import HeroCanvas from '@/components/hero/HeroCanvas'

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -90])
  const blur = useTransform(scrollYProgress, [0, 1], [0, 10])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.25])
  const filter = useMotionTemplate`blur(${blur}px)`

  return (
    <div ref={ref} id="top" className="relative">
      <motion.div
        style={{ y, filter, opacity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
        <div className="absolute inset-0 opacity-90">
          <HeroCanvas />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_60%_30%,rgba(11,102,255,0.22),transparent_60%),radial-gradient(900px_520px_at_20%_20%,rgba(9,213,255,0.18),transparent_64%)]" />
      </motion.div>

      <Section className="flex min-h-[100svh] flex-col justify-center pb-24 pt-28">
        <div className="max-w-[820px]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-line/60 bg-white/70 px-4 py-2 text-xs font-medium text-muted backdrop-blur-xl">
              <span className="font-display tracking-[0.18em]">{site.brand.tagline}</span>
              <span className="h-1 w-1 rounded-full bg-brand/80" />
              <span className="tracking-[0.12em]">PRECISION · ENGINEERING · SCALE</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-[44px] leading-[1.02] tracking-[-0.02em] text-ink sm:text-[64px]">
              {site.hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-5 max-w-[640px] text-[15px] leading-[1.75] text-muted sm:text-[16px]">
              {site.hero.subhead}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {site.hero.highlights.map((h, idx) => (
              <Reveal key={h.k} delay={0.18 + idx * 0.06}>
                <div className="group rounded-3xl border border-line/70 bg-white/65 p-5 backdrop-blur-xl transition hover:bg-white">
                  <div className="text-xs font-semibold tracking-[0.18em] text-ink/70">{h.k}</div>
                  <div className="mt-2 text-sm leading-[1.6] text-muted">{h.v}</div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-line/0 via-line to-line/0 opacity-70" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-2">
              {site.brand.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-line/70 bg-white/55 px-3 py-1.5 text-xs text-muted backdrop-blur"
                >
                  {k}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  )
}
