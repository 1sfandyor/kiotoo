import Button from '@/components/Button'
import { PersonalInfo } from '@/components/PersonalInfo'
import Title from '@/components/Title'
import React from 'react'

const About = () => {
  return (
    <div className='flex  text-black py-[110px] text-[15px] px-5 mx-[23px]'>

      {/*  */}
      <div className='pr-[50px] '>
        <Title>{'// Biography'}</Title>
        <p className='mt-[50px] w-[414px] mb-[30px] text-gray-2'>
          Hi, my name is Jessica Parker and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites. One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel.
        </p>
        <Button>Download cv</Button>
      </div>

      {/* PERSONAL INFO */}
      <div className='pl-[50px]'>
        <Title>{'// Personal Details'}</Title>

        <PersonalInfo/>
      </div>
    </div>
  )
}

export default About
