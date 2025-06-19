'use client'

import Image from 'next/image'
import Link from 'next/link'
import ProjectCounter from '../counter/ProjectCounter'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/banner_1_new.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Overlay for gradient effect (optional) */}
      <div className="absolute   bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 container mx-auto px-5 2xl:px-0 pt-32 md:pt-36 md:pb-68 max-w-8xl text-white dark:text-dark">
        <div className="text-center md:text-start">
          <p className="text-lg font-medium">Palm Springs, CA</p>
          <h1 className="text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-3xl mt-4 mb-6">
            Futuristic Haven
          </h1>
          <div className="flex flex-col xs:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/contactus"
              className="px-8 py-4 border border-white bg-white text-dark dark:border-dark dark:bg-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-white text-base font-semibold rounded-full"
            >
              Get in touch
            </Link>
            <button className="px-8 py-4 border border-white bg-transparent text-white dark:text-dark dark:border-dark hover:bg-white dark:hover:bg-dark dark:hover:text-white hover:text-dark duration-300 text-base font-semibold rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
