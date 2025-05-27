"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "OUR SERVICES", href: "/services" },
  { name: "JAIPUR SIGHTSEEING", href: "/jaipur-sightseeing" },
  { name: "CONTACT", href: "/contact" },
  { name: "BLOG", href: "/blog" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Scroll state management
  const [scrollDirection, setScrollDirection] = useState("up")
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? "down" : "up"

      // Only update state if the difference is significant enough (prevents small fluctuations)
      if (Math.abs(scrollY - lastScrollY) > 10) {
        setScrollDirection(direction)
      }

      // Update scroll position
      setScrollPosition(scrollY)
      setIsScrolled(scrollY > 50)

      // On mobile, show compact header sooner
      if (window.innerWidth < 768 && scrollY > 10) {
        setScrollDirection("down")
      }

      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    // Check if screen is very small (mobile)
    const checkScreenSize = () => {
      if (window.innerWidth < 640) {
        // Hide top bar on very small screens
        setScrollDirection("down")
      }
    }

    window.addEventListener("scroll", updateScrollDirection)
    window.addEventListener("resize", checkScreenSize)

    // Initial check
    checkScreenSize()

    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  // Determine header visibility classes
  const topBarVisible = scrollDirection === "up" || scrollPosition < 50
  const fullHeaderVisible = scrollDirection === "up" || scrollPosition < 50

  // Compact header is visible when scrolling down and past the threshold
  const compactHeaderVisible = scrollDirection === "down" && scrollPosition > 50

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top bar with contact info and social media */}
      <div
        className={cn(
          "bg-rajasthani-maroon text-white py-2 transition-all duration-300",
          topBarVisible ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden",
        )}
      >
        <div className="w-full px-4 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 text-xs sm:text-sm">
            <a href="tel:+919856004165" className="flex items-center">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span>91-8560040165</span>
            </a>
            <a href="mailto:info@elefanjoy.com" className="flex items-center">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span>info@elefanjoy.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" aria-label="YouTube">
              <div className="bg-red-600 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </div>
            </a>
            <a
              href="https://wa.me/919856004165?text=Hello%20Elefanjoy%21%20I%27m%20interested%20in%20booking%20an%20elephant%20experience.%20Could%20you%20please%20provide%20more%20information%3F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <div className="bg-green-500 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </div>
            </a>
            <a href="#" aria-label="Instagram">
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </div>
            </a>
            <a href="#" aria-label="Facebook">
              <div className="bg-blue-600 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation - Full version */}
      <nav
        className={cn(
          "w-full rajasthani-pattern-bg transition-all duration-300 shadow-md",
          fullHeaderVisible ? "opacity-100 max-h-24" : "opacity-0 max-h-0 overflow-hidden",
        )}
        aria-label="Global"
      >
        <div className="px-6 md:px-12 py-3 flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Elefanjoy</span>
              <div className="flex items-center gap-2">
                <div className="relative h-12 w-12">
                  <Image
                    src="/elelogo.png"
                    alt="Elefanjoy Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-rajasthani-green" style={{ fontFamily: "cursive" }}>
                    Elefanjoy
                  </span>
                  <span className="text-xs text-rajasthani-maroon">Elephant Sanctuary</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 nav-link",
                  pathname === item.href ? "text-rajasthani-green font-bold" : "",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/contact">
              <Button className="bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white font-medium px-6 py-2 rounded transition-colors">
                BOOK NOW
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Compact header - shown when scrolling down */}
      <nav
        className={cn(
          "w-full md:max-w-[95%] mx-auto rajasthani-pattern-bg transition-all duration-300 shadow-lg md:rounded-xl",
          compactHeaderVisible ? "opacity-100 max-h-16" : "opacity-0 max-h-0 overflow-hidden",
        )}
        aria-label="Compact navigation"
      >
        <div className="px-4 md:px-12 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/elelogo.png"
                  alt="Elefanjoy Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-rajasthani-green" style={{ fontFamily: "cursive" }}>
                Elefanjoy
              </span>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 nav-link",
                  pathname === item.href ? "text-rajasthani-green font-bold" : "",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white font-medium px-4 py-1 rounded transition-colors"
              >
                BOOK NOW
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-0 bg-gray-900/80" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Elefanjoy</span>
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <Image
                    src="/elelogo.png"
                    alt="Elefanjoy Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-rajasthani-green" style={{ fontFamily: "cursive" }}>
                  Elefanjoy
                </span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                      pathname === item.href
                        ? "bg-rajasthani-cream text-rajasthani-green"
                        : "text-gray-900 hover:bg-rajasthani-cream",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white font-medium px-6 py-2 rounded transition-colors">
                    BOOK NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
