import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"
import FAQSection from "@/components/sections/faq-section"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative">
        <div className="relative h-[50vh] w-full">
          <Image
            src="https://media.istockphoto.com/id/154894958/photo/amber-fort-jaipur-india.jpg?s=2048x2048&w=is&k=20&c=eb_FhMhQ4CzcdQHAWU9Pkvqk--rkFPIPQcDfxaa7TiU="
            alt="Contact Elefanjoy Sanctuary"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We'd love to hear from you. Reach out with any questions about our elephant sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions about our experiences, want to make a booking, or need assistance with
                anything else, our team is here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-700 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-gray-600">Elefanjoy Sanctuary, Near Amer, Jaipur, Rajasthan, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-700 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-700 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">info@elefanjoy.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-green-700 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Hours</h3>
                    <p className="text-gray-600">Open daily: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm
                title="Send Us a Message"
                description="Fill out the form below and we'll get back to you as soon as possible."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're located just outside Jaipur city, near Amer Fort.
            </p>
          </div>

          <div className="relative h-96 w-full rounded-xl overflow-hidden">
            {/* This would be replaced with an actual map component */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.422688547067!2d75.84795767522697!3d26.985175676604097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db1b3145fc8b5%3A0x61d8074ece8d74fa!2sAmer%20Palace%20and%20Fort%2C%20Amer%20Rd%2C%20Devisinghpura%2C%20Amer%2C%20Jaipur%2C%20Rajasthan%20302028!5e0!3m2!1sen!2sin!4v1746533599359!5m2!1sen!2sin" width="100%" height="100%" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}
