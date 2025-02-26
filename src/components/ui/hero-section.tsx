'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface HeroSectionProps {
  title: string
  subtitle: string
  buttonText: string
  backgroundImage: string
  heroImage: string
}

export default function HeroSection({
  title,
  subtitle,
  buttonText,
  backgroundImage,
  heroImage
}: HeroSectionProps) {
   const ref = useRef(null)
   const inView = useInView(ref, { once: true, margin: '-100px' })
   
   return (
      <section
         id="hero"
         className="relative mx-auto mt-16 max-w-7xl px-6 text-center md:px-8"
      >
         <div className="absolute inset-0 z-0">
            <Image
               src={backgroundImage || "/placeholder.svg"}
               alt="Background"
               layout="fill"
               objectFit="cover"
               quality={100}
               priority
            />
            <div className="absolute inset-0 bg-black/50" />
         </div>
         
         <div className="relative z-10">
            <h1 className="pt-8 bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
               {title}
            </h1>
            <p className="pb-8 mb-20 text-balance text-lg tracking-tight text-gray-200 md:text-xl">
               {subtitle}
            </p>
            <div className="mt-12">
               <Image
                  src={heroImage || "/placeholder.svg"}
                  alt="Hero Image"
                  width={260}
                  height={260}
                  className="mx-auto rounded-full object-cover"
               />
            </div>
         </div>
      </section>
   )
}

export { HeroSection }