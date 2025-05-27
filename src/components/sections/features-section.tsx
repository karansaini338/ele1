import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    "Natural forest habitat with native plants and trees",
    "Sustainable, eco-friendly practices throughout the sanctuary",
    "Educational focus on forest conservation and biodiversity",
    "Natural water sources and mud baths for elephant wellbeing",
    "Organic, locally-sourced food for our elephant residents",
  ]

  return (
    <section className="py-16 px-4 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-rajasthani-green mb-6 rajasthani-heading inline-block">
              Why Choose Our Forest Sanctuary?
            </h2>
            <ul className="space-y-4 mt-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-white p-1 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-rajasthani-green" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white">
              Discover Our Conservation Efforts
            </Button>
          </div>
          <div className="relative">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1650709244939-d9e5cf32ef0a?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Elephant in natural habitat"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0e8a4a"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-20"
              >
                <path d="M12 2a9 9 0 0 0-9 9c0 4.97 8 11 9 11s9-6.03 9-11a9 9 0 0 0-9-9z"></path>
                <path d="M8 10.5c1 0 1.5-1 1.5-1s.5 1 1.5 1s1.5-1 1.5-1s.5 1 1.5 1s1.5-1 1.5-1s.5 1 1.5 1"></path>
                <path d="M7 7.5c1 0 1.5-1 1.5-1s.5 1 1.5 1s1.5-1 1.5-1s.5 1 1.5 1s1.5-1 1.5-1s.5 1 1.5 1"></path>
                <path d="M12 13v9"></path>
                <path d="M8 13c0 2 1 3 4 3s4-1 4-3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
