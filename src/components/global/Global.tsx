import Reveal from '@/components/Reveal'
import Section from '@/components/Section'
import { site } from '@/content/site'
import { Mail, Phone, MapPin } from 'lucide-react'

function GlobalMap() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-line/70 bg-white/70 p-6 backdrop-blur-xl sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(800px_520px_at_25%_35%,rgba(11,102,255,0.20),transparent_62%),radial-gradient(760px_520px_at_80%_25%,rgba(9,213,255,0.16),transparent_64%)]" />
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(185,200,219,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(185,200,219,0.45)_1px,transparent_1px)] [background-size:84px_84px]" />

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-line/70 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(420px_260px_at_25%_42%,rgba(15,23,42,0.08),transparent_65%),radial-gradient(520px_320px_at_55%_35%,rgba(15,23,42,0.06),transparent_70%),radial-gradient(520px_320px_at_80%_55%,rgba(15,23,42,0.06),transparent_70%)]" />
        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(185,200,219,0.50)_1px,transparent_1px),linear-gradient(to_bottom,rgba(185,200,219,0.50)_1px,transparent_1px)] [background-size:56px_56px]" />

        {site.global.nodes.map((n) => (
          <div
            key={n.name}
            className="absolute"
            style={{ left: `${n.x * 100}%`, top: `${n.y * 100}%` }}
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              <div className="absolute -inset-6 rounded-full bg-brand/10 blur-xl" />
              <div className="absolute -inset-3 rounded-full bg-aqua/10 blur-lg" />
              <div className="h-2.5 w-2.5 rounded-full bg-ink shadow-[0_0_0_4px_rgba(255,255,255,0.9),0_0_0_10px_rgba(11,102,255,0.18)]" />
              <div className="mt-2 whitespace-nowrap rounded-full border border-line/70 bg-white/85 px-3 py-1 text-xs text-ink backdrop-blur-xl">
                {n.name}
              </div>
            </div>
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  )
}

export default function Global() {
  return (
    <div id="global" className="relative py-10 sm:py-16">
      <Section>
        <Reveal>
          <div className="text-xs font-semibold tracking-[0.18em] text-muted">全球布局</div>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-ink sm:text-4xl">
            {site.global.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-[760px] text-sm leading-[1.85] text-muted sm:text-[15px]">
            {site.global.desc}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.9fr] lg:items-start">
          <Reveal>
            <GlobalMap />
          </Reveal>

          <Reveal>
            <div
              id="contact"
              className="rounded-[32px] border border-line/70 bg-white/70 p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="font-display text-2xl tracking-[-0.02em] text-ink">联系我们</div>
              <div className="mt-2 text-sm text-muted">{site.global.contact.label}</div>

              <div className="mt-6 grid gap-3">
                <a
                  href={`mailto:${site.global.contact.email}`}
                  className="flex items-start gap-3 rounded-2xl border border-line/70 bg-white/70 px-4 py-3 text-sm text-ink transition hover:bg-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-brand" />
                  <div>
                    <div className="text-xs text-muted">邮箱</div>
                    <div className="font-medium">{site.global.contact.email}</div>
                  </div>
                </a>
                <a
                  href={`tel:${site.global.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 rounded-2xl border border-line/70 bg-white/70 px-4 py-3 text-sm text-ink transition hover:bg-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 text-aqua" />
                  <div>
                    <div className="text-xs text-muted">电话</div>
                    <div className="font-medium">{site.global.contact.phone}</div>
                  </div>
                </a>
                <div className="flex items-start gap-3 rounded-2xl border border-line/70 bg-white/70 px-4 py-3 text-sm text-ink">
                  <MapPin className="mt-0.5 h-4 w-4 text-ink/70" />
                  <div>
                    <div className="text-xs text-muted">地址</div>
                    <div className="font-medium">{site.global.contact.address}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-line/70 bg-[linear-gradient(135deg,rgba(11,102,255,0.12),transparent_55%),linear-gradient(225deg,rgba(9,213,255,0.10),transparent_60%)] p-4">
                <div className="text-xs font-semibold tracking-[0.18em] text-ink/70">提示</div>
                <div className="mt-2 text-sm leading-[1.75] text-muted">
                  邮箱与电话为示意字段，可替换为真实联系方式；也可扩展“资料下载/联系表单/多语言”模块。
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pb-2 pt-10">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-line/70 py-8 sm:flex-row sm:items-center">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} {site.brand.name}. All rights reserved.
          </div>
          <div className="text-xs text-muted">精密制造 · 工程协同 · 全球交付</div>
        </div>
      </Section>
    </div>
  )
}

