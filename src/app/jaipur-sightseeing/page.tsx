import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Calendar, Car } from "lucide-react"

export default function JaipurSightseeingPage() {
  // Tourist attractions in Jaipur
  const attractions = [
    {
      name: "Amber Fort",
      description:
        "A majestic fort complex with stunning architecture, intricate mirror work, and panoramic views of Maota Lake. Experience the royal elephant ride to the fort entrance.",
      image: "https://images.unsplash.com/photo-1649073868642-bcbbd06239d8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "2-3 hours",
      bestTime: "Early morning",
      location: "Amer, Jaipur",
    },
    {
      name: "Hawa Mahal",
      description:
        "The iconic 'Palace of Winds' with its unique honeycomb facade featuring 953 small windows that allowed royal ladies to observe street festivities without being seen.",
      image: "https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "1 hour",
      bestTime: "Morning for best photos",
      location: "Badi Choupad, Pink City",
    },
    {
      name: "City Palace",
      description:
        "A stunning complex of courtyards, gardens, and buildings that blend Rajasthani and Mughal architecture. Home to the royal family of Jaipur and houses a museum with royal artifacts.",
      image: "https://images.unsplash.com/photo-1715405155995-61757307e065?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "2 hours",
      bestTime: "Morning or late afternoon",
      location: "Pink City, Jaipur",
    },
    {
      name: "Jantar Mantar",
      description:
        "A UNESCO World Heritage site featuring the world's largest stone sundial and 19 astronomical instruments that measure time, predict eclipses, and track celestial bodies.",
      image: "https://plus.unsplash.com/premium_photo-1691031429919-2273f9603be6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "1-2 hours",
      bestTime: "Daytime for best observations",
      location: "Near City Palace, Jaipur",
    },
    {
      name: "Jal Mahal",
      description:
        "The 'Water Palace' situated in the middle of Man Sagar Lake, appearing to float on the water. A beautiful example of Rajput and Mughal architectural styles.",
      image: "https://images.unsplash.com/photo-1716441890508-3a9352b58acd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "30 minutes (viewing from shore)",
      bestTime: "Sunset",
      location: "Man Sagar Lake, Jaipur",
    },
    {
      name: "Albert Hall Museum",
      description:
        "The oldest museum in Rajasthan with a rich collection of artifacts including paintings, jewelry, carpets, ivory, stone, metal sculptures, and works in crystal.",
      image: "https://media.istockphoto.com/id/1368499817/photo/albert-hall-jaipur.jpg?s=2048x2048&w=is&k=20&c=DmYLXSN4A9Cnpb-Y6Rwm8vOSzJt5ExZNnfl0WmMnETM=",
      duration: "1-2 hours",
      bestTime: "Afternoon",
      location: "Ram Niwas Garden, Jaipur",
    },
  ]

  // Tour packages
  const tourPackages = [
    {
      name: "Half-Day Jaipur Tour",
      price: "₹2,500",
      duration: "4-5 hours",
      includes: ["AC Cab", "Professional Driver", "Pickup & Drop", "Water Bottles"],
      description: "Perfect for travelers with limited time. Visit 3-4 major attractions in Jaipur.",
      recommended: false,
    },
    {
      name: "Full-Day Jaipur Tour",
      price: "₹4,000",
      duration: "8-9 hours",
      includes: ["AC Cab", "Professional Driver", "Pickup & Drop", "Water Bottles", "Lunch Arrangement (cost extra)"],
      description: "Comprehensive tour covering all major attractions in Jaipur with ample time at each location.",
      recommended: true,
    },
    {
      name: "Jaipur Night Tour",
      price: "₹1,500",
      duration: "3-4 hours",
      includes: ["AC Cab", "Professional Driver", "Pickup & Drop", "Water Bottles"],
      description: "Experience the Pink City illuminated at night, including markets and illuminated monuments.",
      recommended: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[60vh] w-full">
          <Image
            src="/images/img26.jpg"
            alt="Jaipur Sightseeing"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Jaipur Sightseeing</h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Explore the magnificent Pink City with our comfortable and affordable sightseeing packages
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-rajasthani-green/10 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0e8a4a" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-rajasthani-green mb-6 rajasthani-heading inline-block">
                Discover the Pink City
              </h2>
              <p className="text-gray-600 mb-4">
                If you are planning to explore Pink City Jaipur in a day, then you are at the right place. We offer
                comfortable and affordable sightseeing tours of Jaipur's magnificent attractions.
              </p>
              <p className="text-gray-600 mb-4">
                We are an 8-year-old Jaipur Taxi firm which has entertained more than 4000+ tourists in exploring the
                amazing tourist attractions in Jaipur and nearby areas with our Jaipur Sightseeing Package.
              </p>
              <p className="text-gray-600">
                So if you are planning to reach Jaipur or staying in a hotel in Jaipur, planning to go for a sightseeing
                tour of the city, then call us at +91 9772580533 (Mr Singh) to explore the attractions below.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white">
                    Book Your Tour
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop"
                  alt="Jaipur City View"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Explore Jaipur with us</h3>
                  <p className="text-lg">in a nice AC Cab for ₹1200 All Inclusive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-rajasthani-green/10 p-3 rounded-full mb-4">
              <Car className="h-10 w-10 text-rajasthani-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-rajasthani-green mb-4 rajasthani-heading inline-block">
              Our Sightseeing Packages
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
              Choose from our range of carefully designed sightseeing packages to explore Jaipur at your own pace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-0 shadow-lg ${pkg.recommended ? "ring-2 ring-rajasthani-green" : ""}`}
              >
                {pkg.recommended && (
                  <div className="bg-rajasthani-green text-white text-center py-2 font-medium">Most Popular Choice</div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-rajasthani-green mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-4">{pkg.price}</div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-5 w-5 mr-2 text-rajasthani-green" />
                    <span>{pkg.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-rajasthani-green mr-2 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Places to Visit Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-rajasthani-green/10 p-3 rounded-full mb-4">
              <MapPin className="h-10 w-10 text-rajasthani-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-rajasthani-green mb-4 rajasthani-heading inline-block">
              Places You Must Visit in Jaipur
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
              Explore these magnificent attractions that showcase the rich heritage and culture of the Pink City
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg h-full">
                <div className="relative h-64">
                  <Image
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-rajasthani-green mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-rajasthani-green" />
                      <span>{attraction.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-rajasthani-green" />
                      <span>Duration: {attraction.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-rajasthani-green" />
                      <span>Best time: {attraction.bestTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rajasthani-green mb-4 rajasthani-heading inline-block">
              Why Choose Our Sightseeing Tours
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
              We provide the best sightseeing experience in Jaipur with comfortable transportation and knowledgeable
              drivers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-md p-6 text-center">
              <div className="bg-rajasthani-green/10 p-4 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-rajasthani-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-rajasthani-green mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                We offer the most competitive rates in Jaipur with no hidden charges or surprise fees.
              </p>
            </Card>

            <Card className="border-0 shadow-md p-6 text-center">
              <div className="bg-rajasthani-green/10 p-4 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-rajasthani-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-rajasthani-green mb-2">Experienced Drivers</h3>
              <p className="text-gray-600">
                Our drivers are knowledgeable about Jaipur's history and culture, providing insights during your tour.
              </p>
            </Card>

            <Card className="border-0 shadow-md p-6 text-center">
              <div className="bg-rajasthani-green/10 p-4 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-rajasthani-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-rajasthani-green mb-2">Flexible Timing</h3>
              <p className="text-gray-600">
                We accommodate your schedule and preferences, allowing you to spend more time at places you enjoy.
              </p>
            </Card>

            <Card className="border-0 shadow-md p-6 text-center">
              <div className="bg-rajasthani-green/10 p-4 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-rajasthani-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-rajasthani-green mb-2">Convenient Booking</h3>
              <p className="text-gray-600">
                Easy booking process with multiple payment options and instant confirmation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
      <section className="py-16 px-4 bg-rajasthani-pattern-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-rajasthani-green/10 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0e8a4a" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-rajasthani-green mb-4 rajasthani-heading inline-block">
              Attractions Near Jaipur
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
              Explore these magnificent destinations near Jaipur for an extended experience of Rajasthan's rich culture
              and heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nearby Attraction 1 */}
            <Card className="overflow-hidden border-0 shadow-lg h-full">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/flagged/photo-1586176182329-f901b80d3bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Pushkar"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-rajasthani-green mb-2">Pushkar</h3>
                <p className="text-gray-600 mb-4">
                  Famous for its sacred lake, the only Brahma temple in India, and the annual Pushkar Camel Fair. A
                  spiritual and cultural gem.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-rajasthani-green" />
                    <span>145 km from Jaipur</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-rajasthani-green" />
                    <span>Full day trip</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attraction 2 */}
            <Card className="overflow-hidden border-0 shadow-lg h-full">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1646559120826-a5ceb93c74b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Ajmer"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-rajasthani-green mb-2">Ajmer</h3>
                <p className="text-gray-600 mb-4">
                  Home to the revered Ajmer Sharif Dargah, Ana Sagar Lake, and Taragarh Fort. A blend of Sufi
                  spirituality and historical architecture.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-rajasthani-green" />
                    <span>135 km from Jaipur</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-rajasthani-green" />
                    <span>Full day trip</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attraction 3 */}
            <Card className="overflow-hidden border-0 shadow-lg h-full">
              <div className="relative h-64">
                <Image
                  src="https://media.istockphoto.com/id/1417862579/photo/khatu-shyam-of-rajasthan-hd-image.jpg?s=2048x2048&w=is&k=20&c=V3MvMC61MhTDfjf-nOcUdxlCeNtBXQ34AfdR_cEt4eI="
                  alt="Shree Khatu Shyam Ji Temple"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-rajasthani-green mb-2">Shree Khatu Shyam Ji Temple</h3>
                <p className="text-gray-600 mb-4">
                  A sacred Hindu temple dedicated to Khatu Shyam Ji, an incarnation of Lord Krishna. Attracts thousands
                  of devotees, especially during festivals.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-rajasthani-green" />
                    <span>80 km from Jaipur</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-rajasthani-green" />
                    <span>Half day trip</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attraction 4 */}
            <Card className="overflow-hidden border-0 shadow-lg h-full">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1615821593654-b8a80687a437?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Abhaneri Step Well"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-rajasthani-green mb-2">Abhaneri Step Well</h3>
                <p className="text-gray-600 mb-4">
                  The famous Chand Baori, one of the largest and most beautiful step wells in India, dating back to the
                  8th century.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-rajasthani-green" />
                    <span>95 km from Jaipur</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-rajasthani-green" />
                    <span>Half day trip</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attraction 5 */}
            <Card className="overflow-hidden border-0 shadow-lg h-full">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1709231479555-4361457062af?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Ranthambore National Park"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-rajasthani-green mb-2">Ranthambore National Park</h3>
                <p className="text-gray-600 mb-4">
                  One of India's largest national parks, famous for its Bengal tiger population, ancient ruins, and
                  diverse wildlife.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-rajasthani-green" />
                    <span>180 km from Jaipur</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-rajasthani-green" />
                    <span>Overnight trip recommended</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attraction 6 */}
            <Card className="overflow-hidden border-0 shadow-lg h-full">
              <div className="relative h-64">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1694475128245-999b1ae8a44e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Bhangarh Fort"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-rajasthani-green mb-2">Bhangarh Fort</h3>
                <p className="text-gray-600 mb-4">
                  Known as one of the most haunted places in India, this 17th-century fort offers beautiful ruins and
                  intriguing legends.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-rajasthani-green" />
                    <span>85 km from Jaipur</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-rajasthani-green" />
                    <span>Full day trip</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              We offer comfortable transportation and expert guides for all these destinations. Contact us to customize
              your tour package.
            </p>
            <Link href="/contact">
              <Button className="bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white">Book a Day Trip</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-rajasthani-pattern-bg rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-rajasthani-green mb-6">Ready to Explore Jaipur?</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Book your sightseeing tour today and discover the magic of the Pink City with our comfortable AC cabs
                and experienced drivers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white px-8 py-6 rounded-lg text-lg font-medium"
                  >
                    Book Now
                  </Button>
                </Link>
                <a href="tel:+919772580533">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-rajasthani-green text-rajasthani-green hover:bg-rajasthani-green hover:text-white px-8 py-6 rounded-lg text-lg font-medium"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
