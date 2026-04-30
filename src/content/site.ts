export type ImageSize =
  | 'square_hd'
  | 'square'
  | 'portrait_4_3'
  | 'portrait_16_9'
  | 'landscape_4_3'
  | 'landscape_16_9'

export function tti(prompt: string, imageSize: ImageSize) {
  return `https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt,
  )}&image_size=${imageSize}`
}

export const site = {
  brand: {
    name: '华茂电子集团',
    tagline: '精密制造与前沿科技',
    keywords: ['B2B集团官网', '浅色科技风', '精密制造', '滚动叙事', '极简留白'],
  },
  hero: {
    headline: '以精密，连接未来',
    subhead:
      '面向全球客户的精密制造平台，聚焦3C电子、汽车与液冷/光模组系统解决方案，以工艺、质量与交付驱动长期价值。',
    highlights: [
      { k: '精密制造', v: '微米级一致性与可追溯体系' },
      { k: '规模交付', v: '面向多工艺、多品类的柔性产线' },
      { k: '全球协同', v: '国际化供应链与工程响应' },
    ],
  },
  business: [
    {
      id: 'business-3c',
      eyebrow: '3C电子领域解决方案',
      title: '更小的结构，更高的确定性',
      desc:
        '围绕微型连接、精密结构件与功能模组，构建从材料、工艺到检测的闭环能力，让复杂产品在量产中保持一致。',
      bullets: ['高精度模具与微结构成型', '自动化检测与良率优化', '批量一致性与过程控制'],
      accent: 'brand' as const,
      image: tti(
        'ultra realistic studio 3d render, macro shot of precision micro connector with circuit traces, silver aluminum and white ceramic, subtle blue and aqua glow, clean white background, shallow depth of field, industrial high tech, extremely detailed',
        'landscape_16_9',
      ),
    },
    {
      id: 'business-auto',
      eyebrow: '汽车领域解决方案',
      title: '以可靠性定义安全边界',
      desc:
        '面向车规级场景的连接与功能部件，强调可靠性验证、追溯体系与一致性制造，支持多平台快速导入与规模化交付。',
      bullets: ['车规级可靠性与验证流程', '追溯体系与过程稽核', '平台化设计与快速量产导入'],
      accent: 'aqua' as const,
      image: tti(
        'ultra realistic 3d render, automotive-grade connector and metal housing, precision engineering, silver and soft gray, clean white studio background, cyan rim light, subtle reflections, premium industrial design, sharp details',
        'landscape_16_9',
      ),
    },
    {
      id: 'business-liquid',
      eyebrow: '液冷 / 光模组解决方案',
      title: '让热量安静，让光速更近',
      desc:
        '以热设计与光学/结构集成为核心，覆盖冷板、散热结构与光传输模块的系统能力，为高功耗与高速互连场景提供稳定底座。',
      bullets: ['热设计与流道结构优化', '光学/结构一体化装配', '系统级测试与稳定性评估'],
      accent: 'brand' as const,
      image: tti(
        'ultra realistic 3d render, liquid cooling cold plate with microchannels and optical module, brushed aluminum and clear glass, aqua-blue fluid glow, minimal white background, cinematic lighting, highly detailed, premium engineering',
        'landscape_16_9',
      ),
    },
  ],
  devices: {
    title: '设备与产品',
    desc:
      '从精密加工到自动化检测，用可视化的设备能力说明“精益”如何落到每一次公差与每一个批次的一致性。',
    items: [
      {
        title: '高速精密加工中心',
        meta: '高稳定主轴 · 微米级定位',
        image: tti(
          'ultra realistic photo, modern precision CNC machining center, brushed metal texture, clean white industrial environment, soft daylight, high detail, premium manufacturing aesthetics',
          'portrait_16_9',
        ),
      },
      {
        title: '全自动光学检测线',
        meta: '多维检测 · 数据闭环',
        image: tti(
          'ultra realistic photo, automated optical inspection line, precise sensors and lenses, silver metal, subtle blue indicator lights, clean bright factory, high tech, shallow depth of field',
          'portrait_16_9',
        ),
      },
      {
        title: '精密模具与微结构成型',
        meta: '微结构 · 高一致性',
        image: tti(
          'ultra realistic macro photo, precision mold tooling with microstructure patterns, polished steel, clean white background, soft blue highlights, extremely detailed',
          'portrait_16_9',
        ),
      },
      {
        title: '装配与追溯系统',
        meta: '扫码追溯 · 稳定交付',
        image: tti(
          'ultra realistic photo, modern assembly workstation with traceability screens, clean white factory, silver equipment, minimal design, cyan accent lights, premium industrial mood',
          'portrait_16_9',
        ),
      },
    ],
  },
  culture: {
    title: '硬核科技，也有人文温度',
    desc:
      '在标准与效率之外，我们相信长期主义来自对人、环境与协作的尊重。现代化、生态化、国际化的园区与团队，为每一次交付提供稳定的能量。',
    images: {
      campus: tti(
        'ultra realistic photo, modern international manufacturing campus, white and silver architecture, ecological landscaping, clean daylight, subtle cyan accents, premium corporate, wide angle, highly detailed',
        'landscape_16_9',
      ),
      team: tti(
        'ultra realistic photo, diverse engineering team in bright modern factory office, warm daylight, white and silver environment, subtle blue accents, candid, professional, human warmth, high quality',
        'landscape_16_9',
      ),
    },
    cards: [
      { title: '安全与合规', desc: '以体系化标准守住底线，也守住信任。' },
      { title: '工程文化', desc: '把复杂问题拆成可验证的步骤，把经验沉淀为方法。' },
      { title: '绿色园区', desc: '更高效的能源管理与生态空间，让制造回到可持续。' },
    ],
  },
  global: {
    title: '面向全球的协同网络',
    desc: '以发光节点标记关键协作区域，连接客户、研发与交付。',
    nodes: [
      { name: '中国', x: 0.62, y: 0.46 },
      { name: '东南亚', x: 0.70, y: 0.58 },
      { name: '欧洲', x: 0.44, y: 0.36 },
      { name: '北美', x: 0.24, y: 0.38 },
    ],
    contact: {
      label: '业务合作',
      email: 'bd@huamao-electronics.com',
      phone: '+86 0000 0000 000',
      address: '中国 · 华南制造园区（示意）',
    },
  },
} as const
