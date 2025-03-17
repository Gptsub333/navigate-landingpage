"use client"

import { useState } from "react"

export default function PricingFAQs() {
  const [openFAQ, setOpenFAQ] = useState(1)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const faqs = [
    {
      id: 1,
      question: "How many properties can I search?",
      answer:
        "Unlimited property searches across all plans. Search, filter, and draw territories to your heart's content. No restrictions on how many properties you can discover.",
    },
    {
      id: 2,
      question: "What's the deal with outreach limits?",
      answer:
        "Each plan includes a set number of free skip traces, emails, and mail pieces per month. You can always add more as needed at the rates shown in each plan.",
    },
    {
      id: 3,
      question: "Can my whole team use it?",
      answer:
        "Yes! Our Growth and Professional plans are designed for teams. Each user gets their own login and allocation of resources, while sharing access to your team's territories and campaigns.",
    },
    {
      id: 4,
      question: 'Is there a catch with "unlimited"?',
      answer:
        "No catch. We truly offer unlimited property searches and unlimited emails (with a reasonable daily sending limit to maintain deliverability). We believe in transparent pricing with no hidden fees.",
    },
  ]

  const testimonials = [
    {
      id: 1,
      quote:
        "I absolutely love it! I feel like it takes about 4 different platforms and brings them together to cover what everyone else is missing. I love what I'm seeing",
      name: "Erin Krueger",
      title: "Top 1% Agent Compass, Inc.",
    },
    {
      id: 2,
      quote: "I'd definitely spend the $200-300 a month to use this",
      name: "Hugh Jordan",
      title: "Top Alt Agent Compass, Inc.",
    },
    {
      id: 3,
      quote:
        "Navigate takes all the manual work out of prospecting. Draw an area, set your criteria, and it handles the rest",
      name: "Sarah K.",
      title: "Top 1% Agent Compass, Inc.",
    },
    {
      id: 4,
      quote:
        "I've found three off-market opportunities in my farm using Navigate. The property data is reliable and the outreach tools save hours",
      name: "Michael R.",
      title: "Team Lead Agent Compass, Inc.",
    },
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        {/* FAQs Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Navigate Pricing FAQs</h2>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-200 py-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.id}. {faq.question}
                  </span>
                  <span className="text-2xl text-gray-500">{openFAQ === faq.id ? "−" : "+"}</span>
                </button>

                {openFAQ === faq.id && <div className="mt-3 text-gray-600">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-8">
            <span className="text-indigo-600 font-medium uppercase tracking-wider">TESTIMONIALS</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">What Users Are Saying</h2>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      {testimonials.map((t, index) => {
                        const adjustedIndex = (index + activeTestimonial) % testimonials.length
                        return (
                          <div key={t.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-indigo-600 mb-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                            <p className="text-gray-700 mb-4">{t.quote}</p>
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                              <div>
                                <h4 className="font-medium text-gray-900">{t.name}</h4>
                                <p className="text-sm text-gray-600">{t.title}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={prevTestimonial}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={nextTestimonial}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === activeTestimonial ? "bg-indigo-600" : "bg-gray-300"}`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

