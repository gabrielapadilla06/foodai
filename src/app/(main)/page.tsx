'use client'

import { BentoGrid } from "@/components/ui/bento-grid"
import { TextBentoRight, StarIcon } from "@/components/ui/right-image-main"
import { TextBentoLeft, ClockIcon } from "@/components/ui/left-image"
import { HeroSection } from "@/components/ui/hero-section"
import {FAQSection} from "@/components/ui/faqs"

import cristalesImage from "@/images/colormarker/cristales.png"
import pinguinoImage from "@/images/nature/pinguino.png"

export default function Home() {
  return (
    <>
    <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
      <HeroSection 
        title="Nyxb UI is the new way to build landing pages"
        subtitle="Beautifully designed, animated components and templates built with Tailwind CSS, React, and Framer Motion."
        buttonText="Explore"
        backgroundImage={cristalesImage.src}
        heroImage={cristalesImage.src}
      />
      <div className="gap-10 p-4 py-10 sm:pb-4 md:flex md:justify-between">
        <TextBentoRight
            title="WorldBio"
            subtitle="Meet"
            description="a website and newsletter with a collection of 2 years of drawings where people can learn about flora and fauna around the world with stories and drawings."
            buttonText="Learn More"
            buttonHref='/solution'
            bentoCard={{
              name: "Advanced Analytics",
              description: "Gain insights into your work patterns and optimize your performance.",
              backgroundSrc: pinguinoImage.src,
              Icon: StarIcon,
              href: "#",
              cta: "Explore Analytics"
            }}
            reversed={true}
          />
      </div>
      <div className="py-16">
        <p className="text-sm font-medium text-purple-600">Drawings</p>
        <h3 className="text-5xl font-bold tracking-tight">
          Time to save the planet!
        </h3>
        <div className="gap-4 p-4 sm:pb-4 md:flex md:justify-between">
          <BentoGrid />
        </div>
      </div>
      
      <div className="gap-4 p-4 sm:pb-4 md:flex md:justify-between">
        <TextBentoLeft 
          bentoCard={{
            name: "Smart Time Blocking",
            description: "Automatically block time for focused work and personal activities.",
            backgroundSrc: pinguinoImage.src,
            Icon: ClockIcon,
            href: "#",
            cta: "Learn More"
          }}
          title="Lack of public awareness"
          subtitle="Problem"
          description="about the diverse array of flora and fauna inhabiting our planet is one of the critical challenges in biodiversity conservation"
        />
      </div>

      <div className="gap-4 p-4 sm:pb-4 md:flex md:justify-between">
        <FAQSection />
      </div>
    </div>
    </>
  )
}