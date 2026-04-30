import Reveal from '@/components/Reveal'
import Section from '@/components/Section'
import { site } from '@/content/site'
import usePanWheel from '@/hooks/usePanWheel'

export default function DevicePanorama() {
  const onWheel = usePanWheel()

  return (
    <div id="devices" className="relative py-10 sm:py-16">
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-end">
          <div>
            <Reveal>
              <div className="text-xs font-semibold tracking-[0.18em] text-muted">设备与产品</div>
              <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-ink sm:text-4xl">
                {site.devices.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 max-w-[560px] text-sm leading-[1.85] text-muted sm:text-[15px]">
                {site.devices.desc}
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:justify-self-end">
            <div className="rounded-3xl border border-line/70 bg-white/65 p-4 backdrop-blur-xl">
              <div className="text-xs text-muted">提示：滚轮可横向滑动 · 支持触控拖拽</div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="mt-8">
        <Reveal>
          <div
            onWheel={onWheel}
            className="no-scrollbar -mx-6 overflow-x-auto px-6 sm:-mx-8 sm:px-8 snap-x snap-mandatory"
          >
            <div className="flex w-max gap-5 pb-2">
              {site.devices.items.map((it) => (
                <div
                  key={it.title}
                  className="w-[320px] shrink-0 snap-start rounded-[28px] border border-line/70 bg-white/70 p-4 backdrop-blur-xl sm:w-[380px]"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-line/70 bg-white">
                    <img
                      src={it.image}
                      alt={it.title}
                      className="aspect-[3/4] w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(600px_420px_at_40%_20%,rgba(11,102,255,0.10),transparent_60%)]" />
                  </div>
                  <div className="mt-4">
                    <div className="font-display text-lg tracking-[-0.01em] text-ink">{it.title}</div>
                    <div className="mt-1 text-sm text-muted">{it.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  )
}
