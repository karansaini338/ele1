"use client"

import type React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type FeatureCardProps = {
  title: string
  description: string
  imageSrc: string
  iconSvg: React.ReactNode
}


export default function IntroductionSection() {
  const features = [
    {
      title: "Ethical Elephant Care",
      description:
        "Our sanctuary prioritizes the well-being of rescued elephants in a natural, forest environment that mimics their wild habitat.",
      imageSrc: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=600&auto=format&fit=crop",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#0e8a4a"
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
        </svg>
      ),
    },
    {
      title: "Lush Green Habitat",
      description:
        "Experience elephants in a verdant sanctuary with tropical plants, natural water sources, and abundant shade trees.",
      imageSrc: "https://images.unsplash.com/photo-1581989598745-bdf0c080a6d6?q=80&w=600&auto=format&fit=crop",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#0e8a4a"
          className="bi bi-tree-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z" />
        </svg>
      ),
    },
    {
      title: "Conservation Education",
      description:
        "Learn about forest ecosystems, elephant conservation, and the importance of preserving natural habitats.",
      imageSrc: "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?q=80&w=600&auto=format&fit=crop",
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#0e8a4a"
          className="bi bi-chat-square-text-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rajasthani-green/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rajasthani-green/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Welcome Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block bg-rajasthani-green/10 p-2 sm:p-3 rounded-full mb-3 sm:mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
              fill="#0e8a4a"
              viewBox="0 0 512 512"
            >
              <path d="M160 345.9c-1.1-4.3-5.5-6.8-9.8-5.7-4.3 1.1-6.8 5.5-5.7 9.8 1.1 4.3 5.5 6.8 9.8 5.7 4.3-1.1 6.8-5.5 5.7-9.8zM160 281.9c-1.1-4.3-5.5-6.8-9.8-5.7-4.3 1.1-6.8 5.5-5.7 9.8 1.1 4.3 5.5 6.8 9.8 5.7 4.3-1.1 6.8-5.5 5.7-9.8zM194 241.1c-4.3 1.1-6.8 5.5-5.7 9.8 1.1 4.3 5.5 6.8 9.8 5.7 4.3-1.1 6.8-5.5 5.7-9.8-1.1-4.3-5.5-6.8-9.8-5.7zM228 224.4c-4.3 1.1-6.8 5.5-5.7 9.8 1.1 4.3 5.5 6.8 9.8 5.7 4.3-1.1 6.8-5.5 5.7-9.8-1.1-4.3-5.5-6.8-9.8-5.7zM262 224.4c-4.3 1.1-6.8 5.5-5.7 9.8 1.1 4.3 5.5 6.8 9.8 5.7 4.3-1.1 6.8-5.5 5.7-9.8-1.1-4.3-5.5-6.8-9.8-5.7zM296 241.1c-4.3 1.1-6.8 5.5-5.7 9.8 1.1 4.3 5.5 6.8 9.8 5.7 4.3-1.1 6.8-5.5 5.7-9.8-1.1-4.3-5.5-6.8-9.8-5.7zM330 274.5c-4.3 1.1-6.8 5.5-5.7 9.8 1.1 4.3 5.5 6.8 9.8 5.7 4.3-1.1 6.8-5.5 5.7-9.8-1.1-4.3-5.5-6.8-9.8-5.7zM330 338.5c-4.3 1.1-6.8 5.5-5.7 9.8 1.1 4.3 5.5 6.8 9.8 5.7 4.3-1.1 6.8-5.5 5.7-9.8-1.1-4.3-5.5-6.8-9.8-5.7z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-rajasthani-green mb-3 sm:mb-4 md:mb-6 px-2">
            Welcome to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Elefanjoy</span>
              <span className="absolute bottom-0 sm:bottom-1 left-0 right-0 h-1 sm:h-2 bg-rajasthani-saffron opacity-50 rounded"></span>
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            At Ele Experience Jaipur, our mission is to redefine elephant tourism by promoting compassionate encounters rooted in care, respect, and conservation.
          </p>
        </div>

        {/* Interactive Image Gallery - More responsive version */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
            {/* Main large image */}
            <div className="absolute inset-0">
              <Image
                src="https://media.istockphoto.com/id/474432466/photo/indian-elephant.jpg?s=2048x2048&w=is&k=20&c=LrYVXvo_uCn0VyvM7vZg24TqJLe4Wt2WUbBnpO1Oq9Q="
                alt="Elephant in natural habitat"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Floating image cards - Hidden on very small screens, visible on larger screens */}
            <div className="hidden sm:block absolute top-6 sm:top-10 left-4 sm:left-10 w-32 sm:w-48 md:w-64 h-24 sm:h-36 md:h-48 rounded-lg overflow-hidden shadow-lg transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
              <Image
                src="https://media.istockphoto.com/id/1016237188/photo/indian-man-riding-on-elephant-near-amber-fort-jaipur-india.jpg?s=2048x2048&w=is&k=20&c=2A5W5mnEM6QtGnY_svQM8PnLim24zUOZpuon0GCKCYk="
                alt="Visitors with elephant"
                fill
                className="object-cover"
              />
            </div>

            <div className="hidden sm:block absolute top-10 sm:top-20 right-4 sm:right-10 w-28 sm:w-40 md:w-56 h-20 sm:h-30 md:h-40 rounded-lg overflow-hidden shadow-lg transform rotate-[5deg] hover:rotate-0 transition-transform duration-300">
              <Image
                src="https://media.istockphoto.com/id/117146270/photo/indian-elephant-convoy-amber-palace-jaipur.jpg?s=2048x2048&w=is&k=20&c=SiCSbU-SGgmW1jeRTm1lx2i_8aVXytgPKo-C8z_StmI="
                alt="Elephant close-up"
                fill
                className="object-cover"
              />
            </div>

            <div className="hidden sm:block absolute bottom-10 sm:bottom-20 right-6 sm:right-20 w-32 sm:w-44 md:w-60 h-24 sm:h-32 md:h-44 rounded-lg overflow-hidden shadow-lg transform rotate-[3deg] hover:rotate-0 transition-transform duration-300">
              <Image
                src="https://media.istockphoto.com/id/471172192/photo/woman-holding-an-umbrella-in-amber-fort-jaipur-india.jpg?s=2048x2048&w=is&k=20&c=GO1wlZQTOqTxkCn8TLeVCbeBQX_yTr3axraixMbanEA="
                alt="Family with elephant"
                fill
                className="object-cover"
              />
            </div>

            <div className="hidden sm:block absolute bottom-8 sm:bottom-16 left-6 sm:left-16 w-28 sm:w-40 md:w-52 h-20 sm:h-28 md:h-36 rounded-lg overflow-hidden shadow-lg transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1527161153332-99adcc6f2966?q=80&w=600&auto=format&fit=crop"
                alt="Elephant bathing"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Create Unforgettable Memories</h3>
              <p className="text-lg max-w-2xl">
                Experience the joy of connecting with these magnificent creatures in their natural environment
              </p>
              <div className="mt-2 sm:mt-4">
                <Link href="/contact">
                  <Button className="bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white text-sm sm:text-base px-4 sm:px-6 py-1.5 sm:py-2">
                    Book Your Experience
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
