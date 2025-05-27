import Image from "next/image"
import { Card } from "@/components/ui/card"

type Testimonial = {
  name: string
  country: string
  image: string
  quote: string
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      country: "United States",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
      quote:
        "An incredible experience that I will never forget. The elephants are so well cared for, and the staff is knowledgeable and passionate. This ethical sanctuary is a must-visit in Jaipur!",
    },
    {
      name: "Michael Chen",
      country: "Singapore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
      quote:
        "The elephant walk was the highlight of our trip to India. It was amazing to see these magnificent animals in a natural setting rather than being ridden or performing tricks. Highly recommended!",
    },
    {
      name: "Emma Wilson",
      country: "Australia",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop",
      quote:
        "We learned so much about elephant conservation and behavior. The experience was both educational and heartwarming. The staff's dedication to these rescued elephants is truly inspiring.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-rajasthani-pattern-bg relative">
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-rajasthani-terracotta via-rajasthani-saffron to-rajasthani-ochre opacity-30"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image
              src="https://media.istockphoto.com/id/185218878/photo/elephants-in-india.jpg?s=2048x2048&w=is&k=20&c=5yeZ8iK7eA6E_pNIz4CmQWzvA0PZUlPZtiXu304zbTI="
              alt="Elephant symbol"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-rajasthani-maroon mb-4 rajasthani-heading inline-block">
            What Our Visitors Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
            Hear from people who have experienced the magic of Elefanjoy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-rajasthani-cream rounded-bl-3xl"></div>
              <div className="absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#c84c31"
                  className="bi bi-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.863-.279V3q-.78 0-1.439.297T10.139 4.08q-.442.475-.723 1.155-.28.68-.427 1.596Q9 7.496 9 8.558v2.439q0 .54.38.917.381.378.92.378zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992t.56-.683q.34-.279.863-.279V3q-.78 0-1.439.297T3.139 4.08q-.442.475-.723 1.155-.281.68-.427 1.596Q2 7.496 2 8.558v2.439q0 .54.38.917.381.378.92.378z" />
                </svg>
              </div>
              <div className="flex items-center mb-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-rajasthani-sand">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-rajasthani-maroon">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">From {testimonial.country}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
