"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import React from "react";
import Title from "./Title";
import Image from 'next/image';

export function InfiniteTestimonials() {

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

  return (
    <div className="rounded-md flex flex-col dark:bg-black dark:bg-grid-white/[0.05]  justify-center relative overflow-hidden border-b border-gray-1 pb-[110px] mb-[100px]">
      <Title className="mb-[60px]">{'// Trusted parners'}</Title>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        className=" !flex !bg-red-300 h-full"
        modules={[Autoplay]}
      >
        {
          testimonials.map(item => (
            <SwiperSlide key={item.title} className='border border-gray-2 h-full self-stretch bg-transparent rounded-none'>
              <div className='flex flex-col text-gray-2 p-9 xl:p-6 h-full self-stretch'>
                <span className="text-justify text-gray-600 italic pb-[30px] mb-[30px] border-b  border-gray-1">{item.quote}</span>
                <div className="flex items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-full bg-gray-2/30 mr-5 w-[50px] h-[50px]"
                      />
                      <div className='flex flex-col items-start'>
                        <div className="font-semibold text-gray-900 text-base text-nowrap">{item.name}</div>
                        <div className="text-gray-600">{item.title}</div>
                      </div>
                    </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}