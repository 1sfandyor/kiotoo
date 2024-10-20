import { PostPorps } from '@/interfaces/post.interface'
import Link from 'next/link'
import React from 'react'

const Post = ({name, owner, postedAt, type, className, isHidden}: PostPorps) => {

  return (
    <Link href={'/'} className={`flex border-b border-gray-1 pt-10 items-start justify-between w-full !${className}`}>
        <h1 className='w-1/2 text-[21px] font-semibold pb-10 group-hover/hide:text-black text-gray-2'>{name}</h1>
        
        <div className={`${isHidden ? 'hidden' : 'flex'} transition duration-200 ease-in border-b pb-10 text-[15px] `}>
          <p className="after:relative after:content-['/'] after:ml-3 mr-3 text-black">
            <span className='text-gray-2'>By</span> {owner}</p>
          <p className="after:relative after:content-['/'] after:ml-3 mr-3 text-black">
            <span className='text-gray-2'>In</span> {type}</p>
          <p className="text-gray-2">{postedAt}</p>
        </div>
    </Link>
  )
}

export default Post