import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative bg-green-50">
      <div className="relative h-[85vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=2000&auto=format&fit=crop"
          alt="Majestic elephant in natural habitat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-16 lg:p-24">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 bg-rajasthani-green text-white border-none px-4 py-1">
              Natural Elephant Sanctuary
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              <span className="block">DISCOVER</span>
              <span className="block text-green-100" style={{ fontFamily: "cursive" }}>
                the natural
              </span>
              <span className="block">ELEPHANT HAVEN</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg text-white">
              Welcome to Ele Experience, Jaipur’s premier destination for ethical elephant interactions. Located in the heart of Rajasthan’s Pink City, we invite you to embark on an unforgettable journey where you connect with majestic elephants in a responsible, respectful, and heartfelt environment.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white font-medium px-8 py-3 rounded-md transition-colors"
              >
                BOOK NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative leaf divider */}
      <div className="h-6 bg-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMTAwIDIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDIwQzUgMTUgMTAgMTAgMjAgMTBDMzAgMTAgMzUgMTUgNDAgMjBNNDAgMjBDNDUgMTUgNTAgMTAgNjAgMTBDNzAgMTAgNzUgMTUgODAgMjBNODAgMjBDODUgMTUgOTAgMTAgMTAwIDEwVjIwSDBaIiBmaWxsPSIjMGU4YTRhIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] bg-repeat-x"></div>
      </div>
    </section>
  )
}
