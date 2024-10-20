import ContactCard from '@/components/ContactCard'
import {ContactForm} from '@/components/Form'
import Title from '@/components/Title'
import { contact } from '@/data/contact'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-full flex mx-[23.5px] px-5 pt-[100px] text-black flex-col items-start justify-center'>
      <Title className='mb-[60px]'>{'// Get In Touch'}</Title>
      
      <div className='flex w-full items-start flex-col mb-10'>
        <div className='flex w-full items-center justify-between gap-10'>
          {
            contact.map(card => (
              <ContactCard key={card.id} info={card.info as string} icon={card.icon as string} />
            ))
          }
        </div>
      </div>

      <ContactForm/>

    </div>
  )
}

export default Contact