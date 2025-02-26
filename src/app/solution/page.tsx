'use client'

import { TextBentoRight, StarIcon } from "@/components/ui/right-image";
import { TextBentoLeft, ClockIcon } from "@/components/ui/left-image"
import { HeroSection } from "@/components/ui/hero-section";
import { FeatureSection } from "@/components/ui/timeline";

import cristalesImage from "@/images/colormarker/cristales.png"
import pinguinoImage from "@/images/nature/pinguino.png"

export default function Home() {

  return (
    <>
    <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
      <HeroSection 
        title="About"
        subtitle="More than drawings, WolrdBio aims to protect the endangered species all over the world"
        buttonText="Explore"
        backgroundImage={cristalesImage.src}
        heroImage={cristalesImage.src}
      />
      <div className="gap-4 p-4 py-16 sm:pb-4 md:flex md:justify-between">
        <TextBentoRight
          title="Lack of public awareness"
          subtitle="Problem"
          description="about the diverse array of flora and fauna inhabiting our planet is one of the critical challenges in biodiversity conservation "
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
      <div className="gap-4 p-4 py-10 sm:pb-4 md:flex md:justify-between">
        <TextBentoLeft 
          bentoCard={{
            name: "Smart Time Blocking",
            description: "Automatically block time for focused work and personal activities.",
            backgroundSrc: pinguinoImage.src,
            Icon: ClockIcon,
            href: "#",
            cta: "Learn More"
          }}
          title="WorldBio wants to raise awareness"
          subtitle="Goal"
          description="among people from any ages and any background about the species that exist around the world so more people can help them and contribute to some existing initiative to protect them."
        />
      </div>
      <div className= "py-8">
        <p className="text-sm font-medium text-purple-600">Template</p>
        <h1 className="text-5xl font-bold tracking-tight">
          Mobile Template
        </h1>
        <FeatureSection />
      </div>
    </div>
    </>
  );
}

