'use client';
import Post from '@/components/Post/Post'
import Title from '@/components/Title'
import { GlareCard } from '@/components/ui/glare-card'
import { posts } from '@/data/posts'
import React, { useEffect, useId, useRef, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts';
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from 'next/image';
import { CloseIcon } from '@/components/ui/CloseIcon';
import { AOSInit } from "@/components/aos";

// Update the PostType interface to match the posts data structure
interface PostType {
  id: string; // Change from number to string
  name: string;
  owner: string;
  type: string;
  postedAt: string; // or Date, depending on your data structure
  description?: string;
  src: string;
  content?: () => React.JSX.Element;
}

const News = () => {
  const [show, setShow] = useState(false)
  const [postData, setPostData] = useState<PostType>()
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState<(typeof posts)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  
  // Update the GetPostItem function parameter type
  const GetPostItem = (post: PostType) => { // Change parameter type to PostType
    setShow(true)
    setPostData(post);
  }

  useEffect(() => {
    setMobile(isMobile)
  }, [isMobile])

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AOSInit/>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 h-full w-full z-10 "
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            {/* MOBILE CLOSE ICON */}
            <motion.button
              key={`button-${active.id}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[300px] md:max-w-[600px] xlg:max-w-[800px] h-[90%] py-8 px-6 xlg:p-10 md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >

              <div className="relative overflow-y-scroll">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 overflow-scroll text-[15px] md:text-sm gap-0 lg:text-base md:h-fit pb-10 flex flex-col items-start dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                >
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.name}
                    className="w-full h-[125px] md:h-[270px] xlg:h-[360px] lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top mb-[30px]"
                  />

                  <motion.p
                    layoutId={`description-${active.id}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-[15px] mb-5"
                  >
                    {active.id}
                  </motion.p>

                  <motion.h3
                    layoutId={`title-${active.name}-${id}`}
                    className="font-bold text-neutral-700 text-[19px] mb-5 dark:text-neutral-200"
                  >
                    {active.name}
                  </motion.h3>

                  

                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <section className='flex relative flex-col container pt-[100px] text-black ' onMouseLeave={() => setShow(false)} data-aos="fade-right">
        <Title className='mb-2.5'>{'// Latest Posts'}</Title>

        <div className='relative'>
          {
            // Update the map function to use the PostType
            posts.map((post: PostType) => (
              <div className='relative' onMouseEnter={() => GetPostItem({ 
                ...post, 
                content: post.content || (() => <></>) // Provide a default function
              })} key={post.id} onClick={() => setActive({ 
                ...post, 
                src: post.src || '', 
                content: post.content || (() => <></>) // Provide a default function
              })}> 
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
    </>

  )
}


export default News
