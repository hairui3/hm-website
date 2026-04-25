import './style.css'

const HERO_IMAGES = [
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%2C%20cinematic%20corporate%20technology%20hero%20background%2C%20young%20Asian%20woman%20wearing%20a%20sleek%20VR%20headset%2C%20floating%20holographic%20data%20UI%20panels%2C%20cool%20blue%20lighting%2C%20shallow%20depth%20of%20field%2C%20modern%20futuristic%2C%20clean%2C%20high%20detail%2C%20no%20text&image_size=landscape_16_9',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%2C%20futuristic%20human%20computer%20interaction%2C%20woman%20in%20VR%20headset%20gesturing%20with%20hands%20toward%20holographic%20dashboard%2C%20transparent%20floating%20data%20widgets%2C%20studio%20lighting%2C%20sleek%20corporate%20look%2C%20high%20detail%2C%20no%20text&image_size=landscape_16_9',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%2C%20modern%20innovation%20lab%20scene%2C%20VR%20headset%20user%20profile%20view%2C%20holographic%20network%20map%20and%20data%20overlays%2C%20teal%20and%20deep%20blue%20color%20grading%2C%20cinematic%2C%20high%20detail%2C%20no%20text&image_size=landscape_16_9',
]

const SOLUTIONS_IMAGE =
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=isometric%202.5D%20illustration%20of%20a%20smart%20factory%20campus%2C%20white%20buildings%2C%20roads%2C%20clean%20minimal%20industrial%20park%2C%20blue%20glowing%20data%20nodes%20and%20connecting%20lines%2C%20IoT%20network%20feel%2C%20high%20detail%2C%20no%20text&image_size=landscape_16_9'

const SUSTAIN_IMAGE =
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=cinematic%20landscape%20photo%2C%20hiker%20with%20orange%20backpack%20standing%20on%20a%20cliff%20edge%20overlooking%20misty%20green%20mountains%20and%20a%20cloud%20sea%2C%20teal%20green%20color%20grading%2C%20atmospheric%2C%20wide%20shot%2C%20high%20detail%2C%20no%20text&image_size=landscape_16_9'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="page">
    <header class="site-header" data-header>
      <div class="container header-inner">
        <a class="brand" href="#" aria-label="LUXSHARE ICT">
          <span class="brand-mark" aria-hidden="true"></span>
          <span class="brand-text">
            <span class="brand-name">LUXSHARE</span>
            <span class="brand-sub">ICT</span>
          </span>
        </a>

        <nav class="primary-nav" aria-label="主导航">
          <a class="nav-link" href="#hero">首页</a>
          <a class="nav-link" href="#solutions">解决方案</a>
          <a class="nav-link" href="#innovation">创新与技术</a>
          <a class="nav-link" href="#news">新闻资讯</a>
          <a class="nav-link" href="#sustainability">可持续发展</a>
          <a class="nav-link" href="#investor">投资者关系</a>
          <a class="nav-link" href="#about">关于立讯</a>
          <a class="nav-link" href="#careers">加入我们</a>
        </nav>

        <div class="header-actions" aria-label="快捷入口">
          <button class="icon-btn" type="button" aria-label="搜索">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
              <path d="M16.2 16.2 21 21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="icon-btn" type="button" aria-label="语言">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
              <path d="M2 12h20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M12 2c3.2 3.1 3.2 16.9 0 20-3.2-3.1-3.2-16.9 0-20Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
            </svg>
          </button>
          <button class="icon-btn" type="button" aria-label="用户">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
              <path d="M4.5 21a7.5 7.5 0 0 1 15 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <main>
      <section class="hero" id="hero" aria-label="首屏海报">
        <div class="hero-slider" data-hero>
          <div class="hero-slides" aria-live="polite">
            ${HERO_IMAGES.map(
              (src, index) => `
                <article class="hero-slide${index === 0 ? ' is-active' : ''}" data-hero-slide style="--hero-bg: url('${src}')">
                  <div class="hero-scrim" aria-hidden="true"></div>
                  <div class="container hero-content">
                    <div class="hero-copy">
                      <h1>拥抱科技 连接世界美好</h1>
                      <p>致力于成为全球领先的解决方案提供商，帮助客户创造更多价值</p>
                    </div>
                  </div>
                </article>
              `,
            ).join('')}
          </div>

          <div class="hero-dots" aria-label="轮播指示器">
            ${HERO_IMAGES.map(
              (_, index) => `
                <button
                  class="dot${index === 0 ? ' is-active' : ''}"
                  type="button"
                  aria-label="切换到第 ${index + 1} 张"
                  aria-current="${index === 0 ? 'true' : 'false'}"
                  data-hero-dot="${index}"
                ></button>
              `,
            ).join('')}
          </div>
        </div>
      </section>

      <section class="section solutions" id="solutions" aria-label="解决方案展示">
        <div class="container">
          <header class="section-head">
            <h2>提供全方位一站式解决方案</h2>
            <p>
              我们紧扣智能制造逻辑，持续赋能自动化工艺和数字化应用，从零件、模组到系统组装，提供全方位、高品质的设计制造整合解决方案。
            </p>
          </header>

          <figure class="visual">
            <img src="${SOLUTIONS_IMAGE}" alt="智慧工厂与园区等距插画" loading="lazy" />
          </figure>
        </div>
      </section>

      <section class="section sustain" id="sustainability" aria-label="可持续发展" style="--sustain-bg: url('${SUSTAIN_IMAGE}')">
        <div class="sustain-scrim" aria-hidden="true"></div>
        <div class="container sustain-inner">
          <header class="section-head section-head--on-media">
            <h2>助力实现全球可持续发展蓝图</h2>
            <p>
              我们持续完善可持续发展治理体系，聚焦联合国可持续发展目标（SDGs），在绿色制造、责任供应链与低碳运营方面不断取得进展。
            </p>
          </header>
          <a class="btn btn-ghost" href="#sustainability">可持续发展</a>
        </div>
      </section>

      <section class="section cta" aria-label="行动号召">
        <div class="container cta-inner">
          <h2>以科技连接未来</h2>
          <a class="btn btn-primary" href="#contact">联系我们</a>
        </div>
      </section>
    </main>

    <footer class="site-footer" aria-label="页脚">
      <div class="container footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="brand-mark" aria-hidden="true"></div>
            <div>
              <div class="footer-name">LUXSHARE</div>
              <div class="footer-sub">ICT</div>
            </div>
          </div>
        </div>

        <div class="footer-grid" role="navigation" aria-label="站点地图">
          <div class="footer-col">
            <div class="footer-h">解决方案</div>
            <a href="#solutions">通信互联</a>
            <a href="#solutions">数据中心</a>
            <a href="#solutions">汽车产业</a>
            <a href="#solutions">消费电子</a>
          </div>
          <div class="footer-col" id="innovation">
            <div class="footer-h">创新与技术</div>
            <a href="#innovation">智能制造</a>
            <a href="#innovation">数字化管理</a>
            <a href="#innovation">精益化运营</a>
            <a href="#innovation">价值赋能</a>
          </div>
          <div class="footer-col" id="news">
            <div class="footer-h">新闻资讯</div>
            <a href="#news">公司新闻</a>
            <a href="#news">展会活动</a>
          </div>
          <div class="footer-col">
            <div class="footer-h">可持续发展</div>
            <a href="#sustainability">ESG治理及目标</a>
            <a href="#sustainability">我们的行动</a>
            <a href="#sustainability">荣誉与动态</a>
            <a href="#sustainability">报告与政策</a>
          </div>
          <div class="footer-col" id="investor">
            <div class="footer-h">投资者关系</div>
            <a href="#investor">公司公告</a>
            <a href="#investor">定期报告</a>
            <a href="#investor">调研纪要</a>
          </div>
          <div class="footer-col" id="about">
            <div class="footer-h">关于立讯</div>
            <a href="#about">公司概况</a>
            <a href="#careers" id="careers">加入我们</a>
            <a href="#contact" id="contact">联系我们</a>
            <a href="#supplier">供应商平台</a>
          </div>
        </div>
      </div>

      <div class="container footer-bottom">
        <div>Copyright © ${new Date().getFullYear()} 立讯精密工业股份有限公司</div>
        <div class="footer-links">
          <a href="#legal">法律声明</a>
          <a href="#privacy">隐私政策</a>
          <a href="#sitemap">网站地图</a>
        </div>
      </div>
    </footer>
  </div>
`

const header = document.querySelector('[data-header]')
const setHeaderMode = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 24)
}
setHeaderMode()
window.addEventListener('scroll', setHeaderMode, { passive: true })

const heroRoot = document.querySelector('[data-hero]')
const slides = Array.from(heroRoot.querySelectorAll('[data-hero-slide]'))
const dots = Array.from(heroRoot.querySelectorAll('[data-hero-dot]'))

let activeIndex = 0
let timer = null

const applyHero = (nextIndex) => {
  activeIndex = (nextIndex + slides.length) % slides.length

  slides.forEach((slide, index) => {
    slide.classList.toggle('is-active', index === activeIndex)
  })

  dots.forEach((dot, index) => {
    dot.classList.toggle('is-active', index === activeIndex)
    dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false')
  })
}

const start = () => {
  stop()
  timer = window.setInterval(() => applyHero(activeIndex + 1), 8000)
}

const stop = () => {
  if (timer === null) return
  window.clearInterval(timer)
  timer = null
}

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const index = Number(dot.dataset.heroDot || 0)
    applyHero(index)
    start()
  })
})

heroRoot.addEventListener('mouseenter', stop)
heroRoot.addEventListener('mouseleave', start)

start()
