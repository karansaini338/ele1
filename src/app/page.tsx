"use client"

import HeroSection from "@/components/sections/hero-section"
import IntroductionSection from "@/components/sections/introduction-section"
import ExperienceSection from "@/components/sections/experience-section"
import GallerySection from "@/components/sections/gallery-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import CTASection from "@/components/sections/cta-section"
import FeaturesSection from "@/components/sections/features-section"
import FAQSection from "@/components/sections/faq-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <HeroSection />
      <IntroductionSection />
      <ExperienceSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <FeaturesSection />
      <FAQSection />
    </div>
  )
}
