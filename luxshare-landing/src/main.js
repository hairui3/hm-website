import './style.css'

const SOLUTIONS_IMAGE =
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=isometric%202.5D%20illustration%20of%20a%20smart%20factory%20campus%2C%20white%20buildings%2C%20roads%2C%20clean%20minimal%20industrial%20park%2C%20blue%20glowing%20data%20nodes%20and%20connecting%20lines%2C%20IoT%20network%20feel%2C%20high%20detail%2C%20no%20text&image_size=landscape_16_9'

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
          <a class="nav-link" href="#footer">加入我们</a>
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
      <section class="hero" id="hero" aria-label="首屏">
        <div class="hero-slider is-static" data-hero>
          <div class="hero-slides" aria-live="polite">
            <article class="hero-slide hero-slide--highway is-active" data-hero-slide>
              <div class="hero-scrim" aria-hidden="true"></div>
              <div class="container hero-content">
                <div class="hero-copy">
                  <h1>拥抱科技 连接世界美好</h1>
                  <p>致力于成为全球领先的解决方案提供商，帮助客户创造更多价值</p>
                </div>
              </div>
            </article>
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

      <section class="section sustain" id="sustainability" aria-label="可持续发展">
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

      <section class="section innovation" id="innovation" aria-label="创新与价值">
        <div class="container">
          <header class="section-head">
            <h2>帮助全球客户实现伟大梦想</h2>
            <p>
              我们拥有自主研发的核心技术和知识产权，专注于行业技术创新和变革，高效满足全球不同客户的差异化需求，用持续创新和价值赋能帮助客户实现伟大梦想。
            </p>
          </header>

          <div class="innovation-visual" role="img" aria-label="现代化玻璃幕墙研发大楼与旗杆"></div>

          <div class="section-actions">
            <a class="btn btn-ghost btn-ghost--dark" href="#innovation">创新与技术</a>
          </div>
        </div>
      </section>

      <section class="section news" id="news" aria-label="新闻动态">
        <div class="container">
          <header class="section-head">
            <h2>关注身边正在发生的故事</h2>
            <p>我们身边每天发生着很多重要的变化与突破，记录每一次被认可的时刻。</p>
          </header>

          <div class="news-grid">
            <article class="news-card news-card--blue">
              <div class="news-card-top">
                <div class="news-kicker">ESG / 评级</div>
                <h3>同行业全球前7%，立讯精密获 EcoVadis 银牌认可</h3>
              </div>
              <div class="news-card-media">
                <div class="news-art news-art--factory" aria-hidden="true"></div>
              </div>
            </article>

            <article class="news-card news-card--purple">
              <div class="news-card-top">
                <div class="news-kicker">荣誉 / 媒体</div>
                <h3>金贵铸就未来，立讯精密再获新浪财经「ESG 金贵奖」</h3>
              </div>
              <div class="news-card-media news-card-media--badge">
                <div class="news-art news-art--badge" aria-hidden="true"></div>
              </div>
            </article>
          </div>

          <div class="section-actions">
            <a class="btn btn-ghost btn-ghost--dark" href="#news">了解更多</a>
          </div>
        </div>
      </section>

      <section class="section cta" aria-label="行动号召">
        <div class="container cta-inner">
          <h2>以科技连接未来</h2>
          <a class="btn btn-primary" href="#footer">联系我们</a>
        </div>
      </section>
    </main>

    <footer class="site-footer" id="footer" aria-label="页脚">
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
          <div class="footer-col">
            <div class="footer-h">创新与技术</div>
            <a href="#innovation">智能制造</a>
            <a href="#innovation">数字化管理</a>
            <a href="#innovation">精益化运营</a>
            <a href="#innovation">价值赋能</a>
          </div>
          <div class="footer-col">
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
          <div class="footer-col">
            <div class="footer-h">关于立讯</div>
            <a href="#footer">公司概况</a>
            <a href="#footer">加入我们</a>
            <a href="#footer">联系我们</a>
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
