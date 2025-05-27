"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function BlogFAQ() {
  const faqs = [
    {
      question: "How often is the blog updated?",
      answer:
        "We publish new articles at least twice a month, covering topics related to elephant conservation, ethical tourism, elephant behavior, and behind-the-scenes stories from our sanctuary.",
    },
    {
      question: "Can I contribute to the Elefanjoy blog?",
      answer:
        "Yes! We welcome guest contributions from elephant experts, conservationists, and passionate advocates. Please contact us through our website with your article idea and credentials.",
    },
    {
      question: "How can I stay updated on new blog posts?",
      answer:
        "You can subscribe to our newsletter at the bottom of this page to receive notifications when new articles are published. You can also follow us on social media for updates.",
    },
    {
      question: "Can I share these articles on social media?",
      answer:
        "We encourage sharing our articles to spread awareness about ethical elephant tourism and conservation. Each article has social sharing buttons at the bottom.",
    },
    {
      question: "Do you have resources for students and researchers?",
      answer:
        "Yes, we provide additional resources for academic purposes. If you're a student or researcher interested in elephant conservation, please contact us directly for access to our research materials and potential collaboration opportunities.",
    },
  ]

  return (
    <div className="bg-green-50 rounded-xl p-8 mb-16">
      <h2 className="text-2xl font-bold text-rajasthani-green mb-6 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left font-medium text-rajasthani-green">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
