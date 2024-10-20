import Title from '@/components/Title'
import { Separator } from '@/components/ui/separator'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { services } from '@/data/service'
import Image from 'next/image'
import React from 'react'

const Service = () => {
  return (
    <div className='flex text-black py-[100px] text-[15px] px-5 mx-[23px]'>
      {/*  */}
      <div className=''>
        <Title>{'// Top Notch Services'}</Title>
        <div className='grid grid-cols-3 gap-10 mt-[60px]'>
        {
          services.map((service, i) => (
            <SpotlightCard key={i} className="px-[45px] py-[50px] ">
              <Image color='#fff' className='text-red-300 mb-4 z-50 relative' src={service.icon} alt='' width={40} height={40}/>
              <p className="text-lg font-bold mb-[29px] relative z-20 mt-2 text-black">
                {service.title}
              </p>
              <Separator className='mb-[25px]' />
              <div className="text-neutral-200 mt-4 relative z-20">
                <ul className="mt-2">
                  {
                    service.list.map((item, i) => (
                      <li className='text-gray-2 flex items-center' key={i}>
                        <span className="inline-block w-1.5 h-1.5 bg-[#00000026] rounded-full mr-2" aria-hidden="true"></span>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </SpotlightCard>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Service