"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import ContactForm from "@/components/contact-form"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const experienceCard = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function ServicesPage() {
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null)
  const welcomeRef = useRef<HTMLDivElement>(null)
  const journeyRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // Check if sections are in view
  const welcomeInView = useInView(welcomeRef, { once: true, amount: 0.3 })
  const journeyInView = useInView(journeyRef, { once: true, amount: 0.1 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  // Parallax effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Experience data
  const experiences = [
    {
      title: "Meet Your Elephant",
      subtitle: "A personal introduction to our gentle giants",
      description:
        "Begin your journey with a personal introduction to one of our rescued elephants. Learn their unique story, personality, and behaviors from our expert guides.",
      image: "https://media.istockphoto.com/id/1016237188/photo/indian-man-riding-on-elephant-near-amber-fort-jaipur-india.jpg?s=2048x2048&w=is&k=20&c=2A5W5mnEM6QtGnY_svQM8PnLim24zUOZpuon0GCKCYk=",
      features: ["30-minute guided introduction", "Learn about elephant behavior"],
    },
    {
      title: "Feed Your Elephant",
      subtitle: "Prepare and offer nutritious treats",
      description:
        "Help prepare a variety of fresh fruits, vegetables, and natural foods for our elephants. Learn about their dietary needs while offering nutritious treats.",
      image: "https://media.istockphoto.com/id/98174714/photo/elephant-on-the-road.jpg?s=2048x2048&w=is&k=20&c=Pjmfi9mwP2LD-gyKe695OCmgk6-LTPZLR9s0SWY7_Tc=",
      features: ["Food preparation experience", "Supervised feeding session"],
    },
    {
      title: "Paint Your Elephant",
      subtitle: "Create art with our gentle artists",
      description:
        "Experience the creative side of elephants as you collaborate on a unique painting. Using non-toxic, vegetable-based paints, create a memorable souvenir.",
      image: "https://media.istockphoto.com/id/481845434/photo/asian-elephant.jpg?s=2048x2048&w=is&k=20&c=jvrjvX4nrjc_4UIk92RboSbhZcrjYZRgAiZGjP1nQ-s=",
      features: ["All materials provided", "Take home your artwork"],
    },
    {
      title: "Elephant Shower",
      subtitle: "Help with the bathing ritual",
      description:
        "Participate in the elephants' natural bathing ritual. Help splash water and gently scrub their skin with special brushes while learning about elephant skin care.",
      image: "https://media.istockphoto.com/id/471106194/photo/holi-elephant-jaipur.jpg?s=2048x2048&w=is&k=20&c=hPL_XR2OjfbW1DF6Ht0dKV82eZsPA2rRf_OCgEZJiVA=",
      features: ["Natural water sources", "Guided bathing experience"],
    },
    {
      title: "Elephant Walk",
      subtitle: "Stroll alongside our gentle giants",
      description:
        "Walk side-by-side with our elephants through our lush sanctuary grounds. Experience their natural pace and behaviors while learning about their daily routines.",
      image: "https://media.istockphoto.com/id/185231993/photo/elephants-in-india.jpg?s=2048x2048&w=is&k=20&c=e0czfVHQO_qA_1dek9Gmpo85qqjhtZOKxJ_eFCKOwW0=",
      features: ["60-minute guided walk", "Natural forest environment"],
    },
    {
      title: "Treat Your Elephant",
      subtitle: "Prepare special enrichment activities",
      description:
        "Create special enrichment treats and activities that stimulate our elephants' natural foraging behaviors and problem-solving skills.",
      image: "https://media.istockphoto.com/id/174771695/photo/colorful-indian-elephant.jpg?s=2048x2048&w=is&k=20&c=rBKaAWEJ3Nq7duESqNAQvjomQahM62Jj8uFEvu4dhkE=",
      features: ["Enrichment preparation", "Learn about elephant intelligence"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-[50vh] overflow-hidden w-full">
        <motion.div style={{ scale: heroScale, y: heroY, opacity: heroOpacity }} className="absolute inset-0 ">
          <Image
            src="https://media.istockphoto.com/id/2150015755/photo/elephant-riders-in-amber-fort-famous-tourist-attraction-of-jaipur-india.jpg?s=2048x2048&w=is&k=20&c=W0Ar1YieGQ2x2K-HFRqlf4xTYMc7VcwFtKSwVEOD3JM="
            alt="Elefanjoy Services"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Elephant Experiences</h1>
            <p className="text-base md:text-lg max-w-3xl mx-auto mb-6">
              Create unforgettable memories with our gentle giants in an ethical sanctuary
            </p>
            <Link href="/contact">
              <Button className="bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white px-6 py-2 rounded-md">
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Welcome to Ele Experience Section */}
      <section ref={welcomeRef} className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100 to-white"></div>

        {/* Decorative elements */}
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rajasthani-green/5 rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-rajasthani-green/5 rounded-full transform translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            animate={welcomeInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div>
              <div className="inline-block bg-rajasthani-green/10 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0e8a4a" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-rajasthani-green mb-4 rajasthani-heading inline-block">
                Welcome to Elefanjoy
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                At Elefanjoy, we invite you to experience the majesty of elephants in an ethical and respectful
                environment. Our sanctuary provides a natural habitat where these magnificent creatures can thrive while
                offering visitors meaningful and educational interactions.
              </p>
              <p className="text-gray-600 mb-4 text-sm">
                Each of our experiences is designed with the elephants' wellbeing as the top priority. You'll have the
                opportunity to observe, learn about, and connect with our gentle giants without riding or any activities
                that compromise their dignity or natural behaviors.
              </p>
              <Button className="bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white">
                Learn About Our Mission
              </Button>
            </div>
            <motion.div
              className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://media.istockphoto.com/id/2150015755/photo/elephant-riders-in-amber-fort-famous-tourist-attraction-of-jaipur-india.jpg?s=2048x2048&w=is&k=20&c=W0Ar1YieGQ2x2K-HFRqlf4xTYMc7VcwFtKSwVEOD3JM="
                alt="Elephant at Elefanjoy"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey through the Majestic Elephant Century Section */}
      <section ref={journeyRef} className="py-24 px-4 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-gray-50"></div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-rajasthani-green/10 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0e8a4a" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-rajasthani-green mb-3 rajasthani-heading inline-block">
              Journey through the Majestic Elephant Century
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto mt-4">
              Discover our range of ethical elephant experiences designed to create meaningful connections while
              respecting these magnificent creatures
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={journeyInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {experiences.map((experience, index) => (
              <motion.div key={index} variants={experienceCard}>
                <Card className="group h-auto overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
                      <p className="text-white/90 text-sm">{experience.subtitle}</p>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{experience.description}</p>
                    <div className="space-y-3 mb-6">
                      {experience.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="w-full mt-auto">
                      <Button className="w-full text-white bg-rajasthani-green hover:bg-rajasthani-darkGreen flex items-center justify-center">
                        <span>Book This Experience</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-white"></div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-rajasthani-green/10 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0e8a4a" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-rajasthani-green mb-3 rajasthani-heading inline-block">
              What Our Visitors Say
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto mt-4">
              Hear from people who have experienced our ethical elephant encounters
            </p>
          </motion.div>

          <motion.div
            className="relative p-8 md:p-12 bg-rajasthani-green/5 rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 text-rajasthani-green opacity-20">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.3 2.3c-.2-.2-.5-.3-.7-.3s-.5.1-.7.3L3 9.3c-.4.4-.4 1 0 1.4s1 .4 1.4 0l6-6V20c0 .6.4 1 1 1s1-.4 1-1V4.7l6 6c.4.4 1 .4 1.4 0s.4-1 0-1.4l-7.8-7z" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-rajasthani-sand">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                      alt="Sarah Johnson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-rajasthani-maroon">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">United States</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm italic">
                  "The elephant walk was incredible! Being able to walk alongside these gentle giants in their natural
                  habitat was a once-in-a-lifetime experience. The staff was knowledgeable and clearly cared deeply for
                  the elephants."
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
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-rajasthani-sand">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                      alt="Michael Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-rajasthani-maroon">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">Singapore</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm italic">
                  "The painting experience was so unique! I never thought I'd create art with an elephant. It was
                  amazing to see how gentle and precise they can be. The keepers explained everything about their
                  natural behaviors and intelligence."
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
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-rajasthani-sand">
                    <Image
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop"
                      alt="Emma Wilson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-rajasthani-maroon">Emma Wilson</h3>
                    <p className="text-sm text-muted-foreground">Australia</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm italic">
                  "Feeding the elephants was such a joy! I loved learning about their diet and watching how delicately
                  they use their trunks. This sanctuary truly puts the elephants' welfare first, which made the
                  experience even more special."
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactRef} className="py-24 px-4 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-gray-50"></div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div>
              <div className="inline-block bg-rajasthani-green/10 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0e8a4a" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-rajasthani-green mb-4 rajasthani-heading inline-block">
                Want to Know More?
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Have questions about our elephant experiences or want to plan your visit? Fill out the form and our team
                will get back to you with all the information you need.
              </p>
              <p className="text-gray-600 mb-4 text-sm">We're happy to help with:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Detailed information about our experiences</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Booking assistance and availability</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Group bookings and special arrangements</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-rajasthani-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Transportation and accommodation advice</span>
                </li>
              </ul>
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0e8a4a" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us directly</p>
                  <p className="text-rajasthani-green font-bold">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ContactForm
                title="Request Information"
                description="Fill out this form and we'll get back to you with details about our elephant experiences."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
