import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blog-posts"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  const relatedPosts = getRelatedPosts(params.slug)

  // If post not found, you could redirect or show a 404 page
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-6">The blog post you're looking for doesn't exist.</p>
        <Link href="/blog">
          <Button>Return to Blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Blog Post Image */}
      <section className="relative">
        <div className="relative h-[60vh] w-full">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <div className="max-w-4xl">
              <div className="mb-4">
                <span className="bg-rajasthani-green text-white px-3 py-1 rounded-full text-sm">{post.category}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Author Info and Social Sharing */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-gray-200 pb-8">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">Elephant Specialist at Elefanjoy</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 mr-2">Share:</span>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                <Facebook className="h-4 w-4 text-blue-600" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                <Twitter className="h-4 w-4 text-sky-500" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                <Linkedin className="h-4 w-4 text-blue-700" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                <Share2 className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }}></div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-green-50 text-rajasthani-green px-3 py-1 rounded-full text-sm">Elephants</span>
            <span className="bg-green-50 text-rajasthani-green px-3 py-1 rounded-full text-sm">Conservation</span>
            <span className="bg-green-50 text-rajasthani-green px-3 py-1 rounded-full text-sm">Wildlife</span>
            <span className="bg-green-50 text-rajasthani-green px-3 py-1 rounded-full text-sm">Sanctuary</span>
          </div>

          {/* Back to Blog Button */}
          <div className="mb-16">
            <Link href="/blog">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Related Posts */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold mb-8 text-rajasthani-green">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-rajasthani-green/90 text-white px-2 py-0.5 rounded-full text-xs">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-rajasthani-green transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
