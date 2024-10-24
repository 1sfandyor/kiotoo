import ContactCard from '@/components/ContactCard'
import {ContactForm} from '@/components/Form'
import Title from '@/components/Title'
import { contact } from '@/data/contact'
import React from 'react'
import { AOSInit } from "@/components/aos";

const Contact = () => {
  return (
    <>
      <AOSInit/>
      <div className='w-full flex mx-[23.5px] px-5 pt-[100px] text-black flex-col items-start justify-center' data-aos="fade-right">
        <Title className='mb-[60px]'>{'// Get In Touch'}</Title>
        
        <div className='flex w-full items-start flex-col mb-10'>
          <div className='w-full grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            {
              contact.map(card => (
                <ContactCard key={card.id} info={card.info as string} icon={card.icon as string} />
              ))
            }
          </div>
        </div>

        <ContactForm/>

      </div>
    </>
  )
}

export default Contact