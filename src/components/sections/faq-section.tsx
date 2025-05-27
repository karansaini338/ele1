"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FAQItem = {
  question: string
  answer: string
  category: "general" | "experience" | "booking" | "conservation"
}

export default function FAQSection() {
  const faqs: FAQItem[] = [
    {
      question: "What is an ethical elephant sanctuary?",
      answer:
        "An ethical elephant sanctuary is a facility that prioritizes the welfare and natural behaviors of elephants. At Elefanjoy, we provide a natural habitat where elephants can roam freely, socialize with other elephants, and engage in natural behaviors without being forced to perform or carry tourists. We focus on observation and education rather than exploitation.",
      category: "general",
    },
    {
      question: "How is Elefanjoy different from other elephant attractions?",
      answer:
        "Unlike traditional elephant tourism that may involve riding, performances, or unnatural behaviors, Elefanjoy focuses on ethical interactions. Our elephants are never chained, beaten, or forced to perform. They live in a spacious, natural environment with proper nutrition, veterinary care, and the freedom to express natural behaviors. Visitors observe and interact with elephants respectfully, learning about conservation and elephant welfare.",
      category: "general",
    },
    {
      question: "What should I wear when visiting the sanctuary?",
      answer:
        "We recommend comfortable, casual clothing suitable for outdoor activities. Wear closed-toe shoes or sturdy sandals as you'll be walking on natural terrain. During monsoon season (July-September), bring a light raincoat or umbrella. Hats and sunscreen are recommended year-round. Avoid bright colors or strong perfumes that might disturb the elephants.",
      category: "experience",
    },
    {
      question: "How long do the experiences last?",
      answer:
        "Our guided elephant walks typically last 60-90 minutes. Feeding experiences are approximately 45 minutes. The full-day packages run from 9:00 AM to 4:00 PM with breaks and lunch included. We recommend arriving 15 minutes before your scheduled experience for a brief orientation.",
      category: "experience",
    },
    {
      question: "Is this experience suitable for children?",
      answer:
        "Yes, our experiences are family-friendly and educational for children of all ages. Children must be accompanied by an adult at all times. We offer special activities and educational materials designed specifically for younger visitors. For safety reasons, very young children (under 5) may have limited interaction during certain activities.",
      category: "experience",
    },
    {
      question: "Do I need to book in advance?",
      answer:
        "Yes, we strongly recommend booking at least 2-3 days in advance, especially during peak tourist season (October-March). This ensures we can accommodate your preferred date and time while maintaining appropriate visitor numbers for the wellbeing of our elephants. Last-minute bookings may be possible during off-peak times, subject to availability.",
      category: "booking",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We offer full refunds for cancellations made at least 48 hours before your scheduled visit. Cancellations within 48 hours may receive a partial refund or the option to reschedule, depending on circumstances. In case of severe weather conditions that might affect safety, we may reschedule your visit or offer a full refund.",
      category: "booking",
    },
    {
      question: "How do you care for the elephants' health?",
      answer:
        "Our elephants receive regular check-ups from qualified veterinarians specializing in elephant care. We maintain detailed health records for each elephant and provide preventative care, proper nutrition, and immediate attention to any health concerns. Our staff is trained to monitor behavioral and physical signs that might indicate health issues.",
      category: "conservation",
    },
    {
      question: "Where do your elephants come from?",
      answer:
        "Our elephants have been rescued from various situations including logging operations, street begging, and tourism industries where they faced harsh conditions. Each elephant has a unique story, which our guides share during your visit. We never purchase elephants, as this would contribute to the capture and trafficking of wild elephants.",
      category: "conservation",
    },
    {
      question: "How can I support elephant conservation beyond my visit?",
      answer:
        "Beyond visiting our sanctuary, you can support elephant conservation by spreading awareness about ethical tourism, donating to reputable elephant conservation organizations, avoiding products made from elephant parts, and supporting habitat protection initiatives. We provide information about our conservation partners and specific projects you can support during your visit.",
      category: "conservation",
    },
  ]

  // Group FAQs by category
  const generalFAQs = faqs.filter((faq) => faq.category === "general")
  const experienceFAQs = faqs.filter((faq) => faq.category === "experience")
  const bookingFAQs = faqs.filter((faq) => faq.category === "booking")
  const conservationFAQs = faqs.filter((faq) => faq.category === "conservation")

  return (
    <section className="py-16 px-4 bg-white relative">
      {/* Rajasthani pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="rajasthaniFAQPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M15,0 L45,0 L45,15 L60,15 L60,45 L45,45 L45,60 L15,60 L15,45 L0,45 L0,15 L15,15 Z"
              stroke="#d9a036"
              strokeWidth="1"
              fill="none"
            />
            <path d="M30,15 L30,45 M15,30 L45,30" stroke="#d9a036" strokeWidth="1" strokeDasharray="2,2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#rajasthaniFAQPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block bg-rajasthani-green/10 p-3 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0e8a4a" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-rajasthani-green mb-4 rajasthani-heading inline-block">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6 mb-8">
            Find answers to common questions about our elephant sanctuary and your visit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-rajasthani-maroon flex items-center">
              <span className="bg-rajasthani-maroon/10 p-2 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8b2635" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </span>
              About Our Sanctuary
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {generalFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-rajasthani-green">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <h3 className="text-xl font-semibold mb-4 mt-8 text-rajasthani-maroon flex items-center">
              <span className="bg-rajasthani-maroon/10 p-2 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8b2635" viewBox="0 0 16 16">
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
              </span>
              Booking Information
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {bookingFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`booking-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-rajasthani-green">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-rajasthani-maroon flex items-center">
              <span className="bg-rajasthani-maroon/10 p-2 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8b2635" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
              </span>
              Your Experience
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {experienceFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`experience-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-rajasthani-green">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <h3 className="text-xl font-semibold mb-4 mt-8 text-rajasthani-maroon flex items-center">
              <span className="bg-rajasthani-maroon/10 p-2 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8b2635" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327z" />
                </svg>
              </span>
              Conservation & Care
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {conservationFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`conservation-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-rajasthani-green">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gray-700 mb-4">Still have questions? We're happy to help!</p>
          <a
            href="/contact"
            className="inline-flex items-center text-rajasthani-green hover:text-rajasthani-darkGreen font-medium"
          >
            Contact us for more information
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
          </a>
        </motion.div>
      </div>
    </section>
  )
}
