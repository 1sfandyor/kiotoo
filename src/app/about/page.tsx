import Biography from '@/components/Biography'
import {InfiniteTestimonials} from '@/components/ClientTestimonials'
import Education from '@/components/Edu'
import FunFact from '@/components/FunFacts'
import Interest from '@/components/Interest'
import { Partners } from '@/components/Partners'
// import { Partners } from '@/components/Partners'
import Skills from '@/components/skills'
import TeamMembers from '@/components/ui/TeamMembers'
import React from 'react'
import { AOSInit } from "@/components/aos";

const About = () => {
  return (
    <>
      <AOSInit/>
      <div className='flex flex-col text-black container max-w-7xl xl:py-[110px] text-[15px] w-[calc(100%_-_350px)]' data-aos="fade-right">
        
        {/* BIOGRAPHY */}
        <Biography/>

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
    </>
  )
}

export default About
