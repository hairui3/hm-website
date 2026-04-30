import LenisProvider from '@/components/LenisProvider'
import TopNav from '@/components/TopNav'
import Hero from '@/components/hero/Hero'
import Business from '@/components/business/Business'
import DevicePanorama from '@/components/devices/DevicePanorama'
import Culture from '@/components/culture/Culture'
import Global from '@/components/global/Global'

export default function Home() {
  return (
    <LenisProvider>
      <div className="relative">
        <TopNav />
        <main>
          <Hero />
          <Business />
          <DevicePanorama />
          <Culture />
          <Global />
        </main>
      </div>
    </LenisProvider>
  )
}
