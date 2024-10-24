import Button from '@/components/Button';
import { FlipWords } from '@/components/ui/flip-words';
import { GlareCard } from '@/components/ui/glare-card';
import React from 'react'
import { AOSInit } from "@/components/aos";

const Home = () => {
  const words = ["freelance", "developer", "analyzer"];

  
  return (
    <>
      <AOSInit/>
      <div className='flex flex-col md:flex-row container items-center md:items-start lg:items-center md:justify-around h-screen justify-start perspective-800' data-aos="fade-right">
        <div className='flex flex-col items-start justify-center mb-10 '>
          <h3 className='text-gray-2 uppercase text-[14px] mb-3 lg:text-[17px]'>{'// Jessica Parker'}</h3>
          <h1 className='text-[25px] lg:text-[45px] mb-10 text-black leading-10 uppercase font-bold'>
            creative designer <br className='hidden md:block'/> and 
            <FlipWords className='px-0 sm:px-2' words={words} />
          </h1>
          <Button>View portfolio</Button>
        </div>

        {/* GLARE CARD */}
        <div  className='border pt-2.5 transform lg:-rotate-y-[20deg] xl:-translate-x-1/2 w-[220px] h-[292px] xl:w-[390px] xl:h-[600px] relative left-2.5'>
          <div className='relative right-3'>
            <GlareCard  className="flex flex-col items-center justify-center">
              <p className="text-white font-bold text-xl mt-4 uppercase">Any size</p>
            </GlareCard>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home