import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-rajasthani-pattern-bg text-gray-700 relative">
      {/* Rajasthani pattern border */}
      <div className="h-2 bg-gradient-to-r from-rajasthani-terracotta via-rajasthani-saffron to-rajasthani-ochre"></div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-rajasthani-green rajasthani-heading">About Elefanjoy</h3>
            <p className="text-sm mb-4">
              Ele Experience is an ethical elephant sanctuary in Jaipur where you can enjoy guided elephant walks and unique
              experiences with rescued elephants in their natural habitat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-rajasthani-maroon hover:text-rajasthani-green transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-rajasthani-maroon hover:text-rajasthani-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-rajasthani-maroon hover:text-rajasthani-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-rajasthani-maroon hover:text-rajasthani-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-rajasthani-green rajasthani-heading">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-rajasthani-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rajasthani-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rajasthani-green transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/jaipur-sightseeing" className="hover:text-rajasthani-green transition-colors">
                  Jaipur Sightseeing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rajasthani-green transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-rajasthani-green transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-rajasthani-green rajasthani-heading">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-rajasthani-green transition-colors">
                  Guided Elephant Walks
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rajasthani-green transition-colors">
                  Feeding Experience
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rajasthani-green transition-colors">
                  Elephant Art Experience
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rajasthani-green transition-colors">
                  Family Packages
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rajasthani-green transition-colors">
                  Group Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-rajasthani-green rajasthani-heading">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-rajasthani-terracotta flex-shrink-0 mt-0.5" />
                <span>Elefanjoy Sanctuary, Near Amer, Jaipur, Rajasthan, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-rajasthani-terracotta" />
                <a href="tel:+919856004165" className="hover:text-rajasthani-green transition-colors">
                  91-8560040165
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-rajasthani-terracotta" />
                <a href="mailto:info@elefanjoy.com" className="hover:text-rajasthani-green transition-colors">
                  info@elefanjoy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-rajasthani-sand">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Elefanjoy. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Image
                src="https://images.unsplash.com/photo-1590845947676-fa2576939263?q=80&w=120&auto=format&fit=crop"
                alt="Rajasthani pattern"
                width={120}
                height={40}
                className="opacity-50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919856004165?text=Hello%20Elefanjoy%21%20I%27m%20interested%20in%20booking%20an%20elephant%20experience.%20Could%20you%20please%20provide%20more%20information%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </a>
    </footer>
  )
}
