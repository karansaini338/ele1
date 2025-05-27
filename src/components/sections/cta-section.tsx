import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-green-50 to-white"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12 border border-green-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <pattern
                id="leafPattern"
                patternUnits="userSpaceOnUse"
                width="50"
                height="50"
                patternTransform="rotate(45)"
              >
                <path d="M10,0 Q15,5 10,10 Q5,15 0,10 Q-5,5 0,0 Q5,-5 10,0" fill="#0e8a4a" fillOpacity="0.1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#leafPattern)" />
            </svg>
          </div>
          <div className="text-center relative z-10">
            <div className="inline-block mb-6 bg-white p-4 rounded-full shadow-md">
              <Image
                src="/elelogo.png"
                alt="Elephant icon"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-rajasthani-green rajasthani-heading inline-block">
              Book Your Forest Experience
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700 mt-6">
              Immerse yourself in the natural world of elephants. Reserve your spot today for an unforgettable journey
              through our lush sanctuary.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                BOOK NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
