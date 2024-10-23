import { ContactCardProps } from '@/interfaces/contact.interface'
import Image from 'next/image'
import React from 'react'

const ContactCard = ({info,icon}: ContactCardProps ) => {
  return (
      <div className='border w-full p-5 flex flex-col items-center justify-center text-center'>
        <Image className='mb-2.5 justify-self-start' src={icon} alt='' width={24} height={24}/>
        <p className='text-[15px] text-gray-2'>{info}</p>
      </div>
  )
}

export default ContactCard
