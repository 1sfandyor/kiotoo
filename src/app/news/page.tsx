'use client';
import Post from '@/components/Post/Post'
import Title from '@/components/Title'
import { GlareCard } from '@/components/ui/glare-card'
import { posts } from '@/data/posts'
import React, { useState } from 'react'

const News = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='flex relative flex-col w-full px-5 mx-[23.5px] pt-[100px] text-black ' onMouseLeave={() => setShow(false)}>
      <Title className='mb-2.5'>{'// Latest Posts'}</Title>

      <div className='relative'>
        {
          posts.map(post => (
            <div className='relative' onMouseEnter={() => setShow(true)} key={post.id}>
              <Post isHidden={show} className='hover:text-black group/hide' name={post.name} owner={post.owner} type={post.type} postedAt={post.postedAt} />
            </div>
          ))
        }
      </div>

      {/* GlareCard ni postlar ro'yxatidan tashqarida joylashtirdik */}
      <div className={`fixed z-50  right-[5%] perspective-800 ${show ? 'block transition-all duration-400 ease-in' : 'hidden'}`}>
        <div className=' border pt-2.5 transform -rotate-y-[20deg] pr-3'>
          <GlareCard  className="flex flex-col items-center justify-center">
            <p className="text-gray-2/40 font-bold text-3xl mt-4 uppercase">Any size</p>
          </GlareCard>
        </div>
      </div>
    </div>
  )
}

export default News
