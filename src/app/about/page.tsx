import Image from "next/image"
import FAQSection from "@/components/sections/faq-section"
import { Check, Heart, Leaf, Users, Award, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[50vh] w-full">
          <Image
            src="https://media.istockphoto.com/id/1248672969/photo/historic-amber-fort-medieval-architecture-with-decorated-elephant-used-for-tourist-ride-at.jpg?s=2048x2048&w=is&k=20&c=tI4Ur1BNRgxRJkIiyEL3w8_BsA2DgJF8WxJTytOI-Vk="
            alt="About Elefanjoy Sanctuary"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Elefanjoy</h1>
            <p className="text-lg md:text-xl max-w-3xl">Our story, mission, and commitment to ethical elephant care</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Elefanjoy was founded with a simple but powerful mission: to provide a safe and natural environment for
                elephants while educating visitors about these magnificent creatures.
              </p>
              <p className="text-gray-600 mb-4">
                Our sanctuary began when we rescued our first elephant from harsh working conditions. Seeing the
                transformation in her health and happiness inspired us to expand our efforts and create a haven for more
                elephants in need.
              </p>
              <p className="text-gray-600">
                Today, we are home to 20 rescued elephants, each with their own unique personality and story. We are
                dedicated to their wellbeing and to sharing their stories with visitors from around the world.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="https://media.istockphoto.com/id/493328784/photo/mahout-riding-elephant-in-amber-fort.jpg?s=2048x2048&w=is&k=20&c=1XiAU262-M5U8fyhM0FYfGoMAAvWBNGZIY_MMB9gZ4A="
                alt="Founders of Elefanjoy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing ethical care for elephants while educating visitors about conservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://media.istockphoto.com/id/1262283995/photo/tourist-on-elephant-back-at-the-historic-amber-fort-at-jaipur-rajasthan-india-at-sunrise.jpg?s=2048x2048&w=is&k=20&c=vwAvCanSrmc5io0-u9h6JNAv9kRuBUDcWoMUQVxBzEo="
                  alt="Rescue & Rehabilitation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-700">Rescue & Rehabilitation</h3>
              <p className="text-gray-600">
                We rescue elephants from harsh working conditions and provide them with the care they need to recover
                physically and emotionally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://media.istockphoto.com/id/1176307613/photo/old-sad-elephant-ride.jpg?s=2048x2048&w=is&k=20&c=7DRpNAoW7XfFw-xc-E_H0epn3YNzPGnZLQirSfhsq7I="
                  alt="Education & Awareness"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-700">Education & Awareness</h3>
              <p className="text-gray-600">
                We educate visitors about elephant behavior, conservation challenges, and the importance of ethical
                tourism.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://media.istockphoto.com/id/493328784/photo/mahout-riding-elephant-in-amber-fort.jpg?s=2048x2048&w=is&k=20&c=1XiAU262-M5U8fyhM0FYfGoMAAvWBNGZIY_MMB9gZ4A="
                  alt="Conservation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-700">Conservation</h3>
              <p className="text-gray-600">
                We support broader conservation efforts to protect wild elephant populations and their habitats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-white"></div>

        {/* Background image with overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1500&auto=format&fit=crop"
            alt="Background elephant"
            fill
            className="object-cover"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rajasthani-green/5 rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-rajasthani-green/5 rounded-full transform translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-rajasthani-green/10 p-3 rounded-full mb-4">
              <Award className="h-10 w-10 text-rajasthani-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-rajasthani-green mb-4 rajasthani-heading inline-block">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
              At Elefanjoy, we stand apart from other elephant experiences through our unwavering commitment to ethical
              practices and elephant welfare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-rajasthani-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-rajasthani-green" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-rajasthani-green">Ethical Treatment</h3>
              <p className="text-gray-600">
                Our elephants are never chained, beaten, or forced to perform. They live freely in a natural environment
                with proper care and respect.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">No riding or performances</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Freedom to roam and socialize</span>
                </li>
              </ul>
            </div>

            {/* Reason 2 */}
            <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-rajasthani-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Leaf className="h-7 w-7 text-rajasthani-green" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-rajasthani-green">Natural Habitat</h3>
              <p className="text-gray-600">
                Our sanctuary spans over 30 acres of natural forest land, providing a spacious and enriching environment
                for our elephants.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Lush vegetation and water sources</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Natural diet and foraging opportunities</span>
                </li>
              </ul>
            </div>

            {/* Reason 3 */}
            <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-rajasthani-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-rajasthani-green" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-rajasthani-green">Certified Sanctuary</h3>
              <p className="text-gray-600">
                We're recognized by international animal welfare organizations for our high standards of elephant care
                and conservation efforts.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Transparent practices and policies</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Regular welfare assessments</span>
                </li>
              </ul>
            </div>

            {/* Reason 4 */}
            <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-rajasthani-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-rajasthani-green" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-rajasthani-green">Expert Care Team</h3>
              <p className="text-gray-600">
                Our elephants are cared for by experienced mahouts, veterinarians, and conservationists dedicated to
                their wellbeing.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Specialized veterinary care</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Positive reinforcement training</span>
                </li>
              </ul>
            </div>

            {/* Reason 5 */}
            <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-rajasthani-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#0e8a4a" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-rajasthani-green">Educational Focus</h3>
              <p className="text-gray-600">
                We prioritize education about elephant conservation, behavior, and the importance of ethical wildlife
                tourism.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Informative guided experiences</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Conservation awareness programs</span>
                </li>
              </ul>
            </div>

            {/* Reason 6 */}
            <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-rajasthani-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#0e8a4a" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-rajasthani-green">Community Impact</h3>
              <p className="text-gray-600">
                We support the local community through employment, education, and sustainable tourism practices.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Local employment opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Community conservation programs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              By choosing Elefanjoy, you're not just having an unforgettable experience – you're supporting ethical
              elephant care and conservation efforts.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Book An Experience
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="ml-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Visitors Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hear from people who have experienced Elefanjoy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={`https://images.unsplash.com/photo-${i === 1 ? "1494790108377-be9c29b29330" : i === 2 ? "1507003211169-0a1dd7228f2d" : "1539571696357-5a69c17a67c6"}?q=80&w=100&auto=format&fit=crop`}
                      alt={`Visitor ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">
                      {i === 1 ? "Sarah Johnson" : i === 2 ? "Michael Chen" : "Emma Wilson"}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {i === 1 ? "United States" : i === 2 ? "Singapore" : "Australia"}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "An incredible experience that I will never forget. The elephants are so well cared for, and the staff
                  is knowledgeable and passionate. Highly recommend!"
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#f2a81d"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
