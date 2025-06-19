import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import BlogSmall from '@/components/shared/Blog'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'
import ProjectCounter from '@/components/Home/counter/ProjectCounter'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ProjectCounter/>
      <GetInTouch />
      {/* <Properties /> */}
      {/* <FeaturedProperty /> */}
      <Testimonial />
      <BlogSmall />
    
      {/* <FAQ /> */}
    </main>
  )
}
