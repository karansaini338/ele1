"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type GalleryImage = {
  src: string
  alt: string
  title?: string
  description?: string
  size?: "small" | "medium" | "large"
}

type ShortVideo = {
  src: string
  poster: string
  title: string
}

export default function GallerySection() {
  const shortVideos: ShortVideo[] = [
    {
      src: "/videos/review1.mp4",
      poster: "",
      title: "Elephant Bathing Ritual",
    },
    {
      src: "/videos/review2.mp4",
      poster: "",
      title: "Walking with Gentle Giants",
    },
    {
      src: "/videos/review3.mp4",
      poster: "",
      title: "Feeding Experience",
    },
    {
      src: "/videos/review4.mp4",
      poster: "",
      title: "Feeding Experience",
    },
    {
      src: "/videos/nature.mp4",
      poster: "",
      title: "Feeding Experience",
    },
    {
      src: "/videos/river.mp4",
      poster: "",
      title: "Feeding Experience",
    },
  ]

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const galleryImages: GalleryImage[] = [
    {
      src: "/images/img1.jpg",
      alt: "Family enjoying time with elephants",
      title: "Family Adventure",
      description: "Creating unforgettable memories with our gentle giants",
      size: "large",
    },
    {
      src: "/images/img4.jpg",
      alt: "Tourist feeding elephant",
      title: "Feeding Time",
      size: "small",
    },
    {
      src: "/images/img25.jpg",
      alt: "Tourist taking selfie with elephant",
      title: "Close Encounters",
      size: "small",
    },
    {
      src: "/images/img18.jpg",
      alt: "Child petting elephant",
      title: "Kids' Wonder",
      size: "small",
    },
    {
      src: "/images/img9.jpg",
      alt: "Tourist walking with elephant",
      title: "Gentle Giants",
      size: "small",
    },
    {
      src: "/images/img26.jpg",
      alt: "Group of tourists with elephants",
      title: "Shared Joy",
      description: "Families creating memories with our elephant friends",
      size: "large",
    },
    {
      src: "/images/img12.jpg",
      alt: "Tourist amazed by elephant",
      title: "Pure Amazement",
      size: "small",
    },
    {
      src: "/images/img15.jpg",
      alt: "Tourist amazed by elephant",
      title: "Pure Amazement",
      size: "small",
    },
    {
      src: "/images/img20.jpg",
      alt: "Tourists learning about elephants",
      title: "Learning Together",
      size: "medium",
    },
    {
      src: "/images/img22.jpg",
      alt: "Children excited to see elephants",
      title: "Family Fun",
      size: "small",
    },
    {
      src: "/images/img28.jpg",
      alt: "Tourist photographing elephant",
      title: "Perfect Shot",
      size: "small",
    },
    {
      src: "/images/img32.jpg",
      alt: "Family watching elephants",
      title: "Natural Wonder",
      size: "small",
    },
    {
      src: "/images/img35.jpg",
      alt: "Family watching elephants",
      title: "Natural Wonder",
      size: "small",
    }
  ]

  return (
    <section className="py-16 px-4 bg-green-50 relative">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-green-50"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-rajasthani-green/10 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0e8a4a" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-rajasthani-green mb-4 rajasthani-heading inline-block">
            Gallery Of Happiness
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6 mb-8">
            Joyful moments shared between our visitors and gentle giants - creating memories that last a lifetime
          </p>
        </div>

        {/* Short Videos Section - Horizontal Scrolling */}
        <div className="mb-12 relative">
          <h3 className="text-xl font-bold text-rajasthani-green mb-6">Elephant Shorts</h3>

          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-rajasthani-green" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
            >
              {shortVideos.map((video, index) => (
                <div key={index} className="flex-shrink-0 w-[250px] snap-start">
                  <div
                    className="bg-white rounded-xl overflow-hidden shadow-md relative"
                    style={{ width: "250px", height: "445px", aspectRatio: "9/16" }}
                  >
                    <div className="w-full h-full relative" style={{ aspectRatio: "9/16" }}>
                      <video
                        src={video.src}
                        poster={video.poster}
                        className="w-full h-full object-cover"
                        style={{ aspectRatio: "9/16", objectFit: "cover" }}
                        muted
                        loop
                        playsInline
                        id={`video-${index}`}
                      />

                      {/* Play button overlay */}
                      <button
                        className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
                        onClick={() => {
                          const videoElement = document.getElementById(`video-${index}`) as HTMLVideoElement
                          if (videoElement) {
                            if (videoElement.paused) {
                              // Try to play and handle any errors
                              const playPromise = videoElement.play()
                              if (playPromise !== undefined) {
                                playPromise
                                  .then(() => {
                                    // Video started playing successfully
                                    const buttonElement = document.getElementById(`play-button-${index}`)
                                    if (buttonElement) {
                                      buttonElement.classList.add("hidden")
                                    }
                                  })
                                  .catch((error) => {
                                    // Auto-play was prevented or other error
                                    console.error("Video play failed:", error)
                                    // Show an alert to the user
                                    alert(
                                      "Video playback failed. Please try clicking again or check your browser settings.",
                                    )
                                  })
                              }
                            } else {
                              videoElement.pause()
                              // Hide controls when video is paused
                              videoElement.controls = false
                              const buttonElement = document.getElementById(`play-button-${index}`)
                              if (buttonElement) {
                                buttonElement.classList.remove("hidden")
                              }
                            }
                          }
                        }}
                        id={`play-button-${index}`}
                      >
                        <div className="bg-white/30 rounded-full p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="#0e8a4a"
                            viewBox="0 0 16 16"
                          >
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                          </svg>
                        </div>
                      </button>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                      <h4 className="font-bold">{video.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-rajasthani-green" />
            </button>
          </div>
        </div>

        {/* Collage-style Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[200px]">
          {galleryImages.map((image, index) => {
            const colSpan =
              image.size === "large" ? "col-span-2 row-span-2" : image.size === "medium" ? "col-span-2" : ""

            return (
              <div key={index} className={`relative rounded-lg overflow-hidden group ${colSpan}`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className={`${image.size === "large" ? "text-lg" : "text-sm"} font-bold`}>{image.title}</h3>
                  {image.description && <p className="text-sm">{image.description}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
