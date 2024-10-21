import Button from '@/components/Button';
import { FlipWords } from '@/components/ui/flip-words';
import { GlareCard } from '@/components/ui/glare-card';
import React from 'react'

const Home = () => {
  const words = ["freelance", "developer", "analyzer"];

  return (
      <section className='flex flex-col container items-center h-screen justify-start perspective-800'>
        
        <div className='flex flex-col items-start justify-center mr-10 w-[464px]'>
          <h3 className='text-gray-2 uppercase text-[25px]  mb-3'>{'// Jessica Parker'}</h3>
          <h1 className='text-[31px] mb-10 text-black leading-10 uppercase font-bold'>
            creative designer <br /> and 
            <FlipWords words={words} />
          </h1>
          <Button>View portfolio</Button>
        </div>

        {/* GLARE CARD */}
        <div  className='border pt-2.5 transform -rotate-y-[20deg]'>
          <div className='relative right-3'>
            <GlareCard  className="flex flex-col items-center justify-center ">
              <p className="text-white font-bold text-3xl mt-4 uppercase">Any size</p>
            </GlareCard>
          </div>
        </div>

      </section>
  )
}

export default Home