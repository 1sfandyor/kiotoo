import Button from '@/components/Button'
import InfiniteTestimonials from '@/components/ClientTestimonials'
// import ClientTestimonials from '@/components/ClientTestimonials'
import Education from '@/components/Edu'
import FunFact from '@/components/FunFacts'
import Interest from '@/components/Interest'
import { Partners } from '@/components/Partners'
import { PersonalInfo } from '@/components/PersonalInfo'
import Skills from '@/components/skills'
import Title from '@/components/Title'
import TeamMembers from '@/components/ui/TeamMembers'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col w-full text-black container xl:py-[110px] text-[15px]'>
      
      {/* BIOGRAPHY */}
      <div className='w-full flex flex-col md:flex-row md:items-start items-center justify-between pb-[100px] mb-[100px] border-b border-gray-1' >
        <div className='xl:pr-[50px] w-full xl:w-1/2 mb-[60px] md:mr-5'>
          <Title>{'// Biography'}</Title>
          <p className='mt-[50px] mb-[30px] text-gray-2 w-full'>
            Hi, my name is Jessica Parker and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites. One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel.
          </p>
          <Button>Download cv</Button>
        </div>

        {/* PERSONAL INFO */}
        <div className='xl:pl-[50px] w-full xl:w-1/2 '>
          <Title>{'// Personal Details'}</Title>

          <PersonalInfo/>
        </div>
      </div>

      {/* SKILLS */}
      <Skills/>

      {/* INTERESTS & AWARDS */}
      <Interest/>

      {/* EDUCATION & EXPERIENCE */}
      <Education/>

      {/* FUN FACTS */}
      <FunFact/>

      {/* TRUSTED PARTNERS */}
      <Partners/>

      {/* TEAM MEMBERS */}
      <TeamMembers/>

      {/* CLIENT TESTIMONIALS */}
      <InfiniteTestimonials/>
    </div>
  )
}

export default About
