import { PostPorps } from '@/interfaces/post.interface'
import React from 'react'

const Post = ({name, owner, postedAt, type, className, isHidden, isMobile}: PostPorps) => {

  if (isMobile) {
    isHidden = false;
  };

  return (
    <div className={`flex flex-col lg:flex-row  ${isHidden ? 'border-gray-1/50 text-gray-2' : 'border-gray-1'} border-b  pt-10 items-start justify-between w-full !${className}`}>
      <div className={`${isHidden ? 'hidden' : 'flex flex-wrap lg:flex-nowrap'} transition duration-200 ease-in pb-10 text-[15px] `}>
        <p className="after:relative after:content-['/'] after:ml-3 mr-3 text-black">
          <span className='text-gray-2'>By</span> {owner}</p>
        <p className="after:relative after:content-['/'] after:ml-3 mr-3 text-black">
          <span className='text-gray-2'>In</span> {type}</p>
        <p className="text-gray-2">{postedAt}</p>
      </div>
      <h1 className={`w-full lg:w-1/2 text-[21px] font-semibold pb-10 text-black lg:-order-1`}>{name}</h1>
    </div>
  )
}

export default Post