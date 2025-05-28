import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Experience = {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  badge?: {
    text: string;
    color: string;
  };
  imagePosition: "left" | "right";
};

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Walk with Elephants in Jaipur",
      description:
        "Experience the magic of walking alongside our gentle giants in a serene, cruelty-free setting.",
      imageSrc: "/images/forest.jpg", // Add a placeholder if missing
      tags: ["60 min", "Guided Nature Walk", "Family-friendly"],
      badge: {
        text: "Most Popular",
        color: "bg-rajasthani-green",
      },
      imagePosition: "left",
    },
    {
      title: "Natural Feeding Experience",
      description:
        "Join in daily care rituals like feeding and bathing, creating memorable bonds with elephants in Jaipur.",
      imageSrc:
        "https://media.istockphoto.com/id/1176307613/photo/old-sad-elephant-ride.jpg?s=2048x2048&w=is&k=20&c=7DRpNAoW7XfFw-xc-E_H0epn3YNzPGnZLQirSfhsq7I=",
      tags: ["45 min", "Hands-on", "All ages"],
      imagePosition: "right",
    },
    {
      title: "Educational Elephant Tours in Jaipur",
      description:
        "Discover the history of elephants in Rajasthan, learn about their care, behavior, and the efforts to protect them.",
      imageSrc: "/images/bath2.jpg",
      tags: ["90 min", "Refreshing", "Natural Setting"],
      badge: {
        text: "Eco-Friendly",
        color: "bg-green-600",
      },
      imagePosition: "left",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-green-50 to-white"></div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-rajasthani-green font-medium tracking-wider text-sm uppercase mb-3">
            Explore
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Book Your Elephant Experience in Jaipur Today
          </h2>
          <div className="w-24 h-1 bg-rajasthani-green rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Escape the ordinary and join us at Ele Experience Jaipur for a
            soulful, ethical adventure that celebrates elephants, conservation,
            and the rich culture of Rajasthan.
          </p>
        </div>

        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              experience.imagePosition === "right"
                ? "md:flex-row-reverse"
                : "md:flex-row"
            } items-center mb-24 overflow-hidden rounded-2xl border border-green-100 bg-white`}
          >
            <div className="md:w-1/2 w-full relative">
              <div className="aspect-[4/3]  relative overflow-hidden">
                <Image
                  src={experience.imageSrc || "/placeholder.svg"}
                  alt={experience.title}
                  fill
                  className="object-cover"
                />
                {experience.badge && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${experience.badge.color} text-white text-xs font-bold px-3 py-1.5 rounded-full`}
                    >
                      {experience.badge.text}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4 text-rajasthani-green">
                {experience.title}
              </h3>
              <p className="text-gray-600 mb-6">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-green-50 text-rajasthani-green text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="mt-16 text-center">
          <Link href="/contact">
            <Button className="bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg">
              Book An Experience
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
