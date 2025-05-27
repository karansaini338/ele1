import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getAllBlogPosts, getFeaturedPost } from "@/data/blog-posts"
import BlogFAQ from "@/components/blog-faq"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  // Get blog posts from our data file
  const blogPosts = getAllBlogPosts()
  const featuredPost = getFeaturedPost()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative">
        <div className="relative h-[50vh] w-full">
          <Image
            src="https://media.istockphoto.com/id/2135041962/photo/indian-elephant-riders-in-amber-fort-famous-tourist-attraction-jaipur-india.jpg?s=2048x2048&w=is&k=20&c=dZzhi2UeTIQK7DaUpHpS_LAjqLEySYwU9xToTaZ-yxU="
            alt="Elefanjoy Blog"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Elefanjoy Blog</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Stories, insights, and updates from our elephant sanctuary
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post - Redesigned */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="bg-rajasthani-green/10 text-rajasthani-green px-4 py-1 rounded-full text-sm font-medium">
                Featured Article
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-rajasthani-green mt-4 mb-2">Editor's Pick</h2>
              <div className="w-24 h-1 bg-rajasthani-green rounded-full mx-auto"></div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Image Section - Takes up 3/5 on large screens */}
                <div className="lg:col-span-3 relative">
                  <div className="relative h-[300px] lg:h-full w-full">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-rajasthani-green text-white px-3 py-1 rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section - Takes up 2/5 on large screens */}
                <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>

                    <div className="flex items-center mb-6">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={featuredPost.authorImage || "/placeholder.svg"}
                          alt={featuredPost.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">By {featuredPost.author}</p>
                        <p className="text-xs text-gray-500">Elephant Specialist</p>
                      </div>
                    </div>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="w-full bg-rajasthani-green hover:bg-rajasthani-darkGreen text-white flex items-center justify-center">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-rajasthani-green mb-4">Latest Articles</h2>
            <div className="w-24 h-1 bg-rajasthani-green rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block h-full">
                <Card className="border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-56 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-rajasthani-green/90 text-white px-3 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-rajasthani-green">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-500">By {post.author}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* FAQ Section */}
          <BlogFAQ />
        </div>
      </section>
    </div>
  )
}
