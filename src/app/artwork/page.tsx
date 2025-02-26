'use client'


import {BentoGrid } from "@/components/ui/bento-grid";
import { HeroSection } from "@/components/ui/hero-section";

import patitoImage from "@/images/nature/patito.png"

export default function Home() {
  return (
    <>
    <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
      <HeroSection 
        title="Nyxb UI is the new way to build landing pages"
        subtitle="Beautifully designed, animated components and templates built with Tailwind CSS, React, and Framer Motion."
        buttonText="Explore"
        backgroundImage={patitoImage.src}
        heroImage={patitoImage.src}
      />
      <div className="py-20">
        <p className="text-sm font-medium text-purple-600">Template</p>
        <h1 className="text-5xl font-bold tracking-tight">
          Mobile Template
        </h1>
        <div className="gap-4 p-4 sm:pb-4 md:flex md:justify-between">
          <BentoGrid />
        </div>
      </div>
    </div>
    </>
  );
}
