"use client";

import Title from '@/components/Title'
import { Slash } from "lucide-react"
import { AOSInit } from "@/components/aos";
import { breadcrumbs } from '@/data/breadcrumb';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { portfolio } from '@/data/portfolio';
import { GlareCard } from '@/components/ui/glare-card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from "react";
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/animated-modal';


const Portfolio = () => {
  return (
    <>
      <AOSInit/>
      
      <div className='flex flex-col text-black w-full 2xl:py-[95px] pb-[80px] text-[15px] 2xl:px-5 mx-[23px]' data-aos="fade-right">
        {/* TOP */}
        <div className='flex flex-col xlg:flex-row  items-center justify-between mb-[30px] xlg:mb-[70px] 2xl:mb-[70px]'>

          <Title className='mb-[50px] xlg:mb-0'>{'// Creative Portfolio'}</Title>
          <Breadcrumb>
            <BreadcrumbList>
              {
                breadcrumbs.map(breadcrumb => (
                  <React.Fragment key={breadcrumb.id}>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">{breadcrumb.name}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash />
                    </BreadcrumbSeparator>
                  </React.Fragment>
                ))
              }
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* CONTENT */}
        <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          {
            portfolio.map(card => (
              <div key={card.id} className='border p-2.5 '>
                <Modal>
                  <ModalTrigger >
                    {/* CARD */}
                    <GlareCard key={card.id} className="flex flex-col items-center justify-center">
                      <p className="text-white font-bold text-2xl mt-4 uppercase">Any size</p>
                    </GlareCard>
                  </ModalTrigger>

                  <ModalBody>
                    <ModalContent>
                      <iframe 
                        width="1280" 
                        height="720" 
                        src="https://www.youtube.com/embed/Zq5fmkH0T78" 
                        title="Next.js 15 Crash Course | Build and Deploy a Production-Ready Full Stack App" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen/>
                    </ModalContent>
                  </ModalBody>
                </Modal>
                <Separator className='mt-2.5'/>
                
                {/* INFO */}
                <div className='px-5 pt-5 pb-2.5 '>
                  <h2 className='font-medium text-lg'>
                    <Link href={'/'}>{card.name}</Link>
                  </h2>
                  <p className="text-[15px] ">
                    <Link className='text-gray-2' href={'/'}>{card.media}</Link>
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Portfolio