import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF,faBehance, faTiktok, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { GlareCard } from './glare-card';
import { Separator } from './separator';
import Link from 'next/link';

export default function TeamMembers() {
  const teamMembers = [
    { name: 'Keita Smith', role: 'UI Designer', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Jessica Parker', role: 'Lead Designer', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Kelly Furtado', role: 'Support Manager', image: '/placeholder.svg?height=300&width=300' },
  ]

  return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">{'// TEAM MEMBERS'}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (

            <div key={member.name} className='border p-2.5 '>
              {/* CARD */}
              <GlareCard className="flex flex-col items-center justify-center">
                <p className="text-white font-bold text-2xl mt-4 uppercase">Any size</p>
              </GlareCard>

              <Separator className='mt-2.5'/>

                {/* INFO */}
                <div className='px-5 pt-5 pb-2.5 '>
                  <h2 className='font-medium text-lg'>
                    <Link href={'/'}>{member.name}</Link>
                  </h2>
                  <p className="text-[15px] ">
                    <Link className='text-gray-2' href={'/'}>{member.role}</Link>
                  </p>
                </div>

                <div className="flex space-x-2">
                  <SocialIcon Icon={faBehance} label="Behance" />
                  <SocialIcon Icon={faTiktok} label="TikTok" />
                  <SocialIcon Icon={faFacebookF} label="Facebook" />
                  <SocialIcon Icon={faDribbble} label="Dribbble" />
                </div>
              </div>
          ))}

        </div>
      </div>
  )
}

function SocialIcon({ Icon, label }: { Icon: IconProp; label: string }) {
  return (
    <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label={`${label} profile`}>
      <FontAwesomeIcon icon={Icon} />
    </a>
  )
}
