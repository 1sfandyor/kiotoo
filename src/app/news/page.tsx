'use client';
import Post from '@/components/Post/Post'
import Title from '@/components/Title'
import { GlareCard } from '@/components/ui/glare-card'
import { posts } from '@/data/posts'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts';

// Update the PostType interface to match the posts data structure
interface PostType {
  id: string; // Change from number to string
  name: string;
  owner: string;
  type: string;
  postedAt: string; // or Date, depending on your data structure
}

const News = () => {
  const [show, setShow] = useState(false)
  const [postData, setPostData] = useState<PostType>()
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [mobile, setMobile] = useState(false);

  
  // Update the GetPostItem function parameter type
  const GetPostItem = ({ post }: { post: PostType }) => {
    setShow(true)
    setPostData(post);
  }

  useEffect(() => {
    setMobile(isMobile)
  }, [isMobile])

  return (
    <section className='flex relative flex-col container pt-[100px] text-black ' onMouseLeave={() => setShow(false)}>
      <Title className='mb-2.5'>{'// Latest Posts'}</Title>

      <div className='relative'>
        {
          // Update the map function to use the PostType
          posts.map((post: PostType) => (
            <div className='relative' onMouseEnter={() => GetPostItem({ post })} key={post.id}> 
              <Post isMobile={isMobile} isHidden={show} className='hover:text-black group/hide' name={post.name} owner={post.owner} type={post.type} postedAt={post.postedAt} />
            </div>
          ))
        }
      </div>

      {/* GlareCard ni postlar ro'yxatidan tashqarida joylashtirdik */}
      {
        !mobile && (
          <div className={`fixed z-50 right-0 -translate-x-1/2 translate-y-1/3 lg:translate-y-1/4 2xl:translate-y-1/4 perspective-800 ${show ? 'block transition-all duration-400 ease-in' : 'hidden'}`}>
            <div className='lg:w-[330px] lg:h-[450px] xl:w-[340px] xl:h-[500px] 2xl:w-[396px] 2xl:h-[584px] border pt-2.5 transform -rotate-y-[20deg] pr-3'>
              <GlareCard className="flex flex-col items-center justify-center p-5 w-full h-full">
                <p className="text-gray-2/40 font-bold text-sm  lg:text-2xl xl:text-3xl mt-4 uppercase">{postData?.type}</p>
              </GlareCard>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default News
