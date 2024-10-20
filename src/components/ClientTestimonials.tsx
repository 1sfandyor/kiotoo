'use client'

import Image from 'next/image'
import * as React from "react"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Title from './Title'

const testimonials = [
  {
    quote: "The first time I got an issue sorted within seconds. The author responded to my email within minutes. I am happy to recommend anyone not only this wonderful theme but also the author.",
    name: "Armin Van Buuren",
    title: "Content Manager",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    quote: "I rarely like to write reviews, but the Marketify team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism.",
    name: "Baraka Clinton",
    title: "English Teacher",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    quote: "Outstanding service and incredible flexibility! The team went above and beyond to meet our unique requirements. Their attention to detail and quick turnaround time exceeded our expectations.",
    name: "Sophie Chen",
    title: "Product Manager",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function InfiniteTestimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Testimonials massivini 3 marta takrorlash
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  useEffect(() => {
    if (!api) {
      return
    }

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [api])

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap())
      // Agar oxirgi elementga yetib borsa, boshiga qaytarish
      if (api.selectedScrollSnap() === extendedTestimonials.length - 1) {
        setTimeout(() => api.scrollTo(testimonials.length, false), 100)
      }
      // Agar boshiga qaytib kelsa, oxiriga o'tkazish
      if (api.selectedScrollSnap() === 0) {
        setTimeout(() => api.scrollTo(extendedTestimonials.length - testimonials.length - 1, false), 100)
      }
    })
  }, [api])

  return (
    <section className="w-full">
      <div className="max-w-7xl px-4 ">
        <Title>{'What Our Clients Say'}</Title>
        <Carousel 
          setApi={setApi} 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {extendedTestimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2">
                <Card className="border-none shadow-md h-full">
                  <CardContent className="flex flex-col p-6 h-full">
                    <blockquote className="text-gray-600 italic mb-4 flex-grow">{testimonial.quote}</blockquote>
                    <div className="flex items-center mt-4">
                      <div className="flex-shrink-0 mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.title}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
