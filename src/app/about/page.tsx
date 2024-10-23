import Biography from '@/components/Biography'
import InfiniteTestimonials from '@/components/ClientTestimonials'
import Education from '@/components/Edu'
import FunFact from '@/components/FunFacts'
import Interest from '@/components/Interest'
import { Partners } from '@/components/Partners'
import Skills from '@/components/skills'
import TeamMembers from '@/components/ui/TeamMembers'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col w-full text-black container xl:py-[110px] text-[15px]'>
      
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
  )
}

export default About
