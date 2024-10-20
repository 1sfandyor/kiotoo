import React from 'react'

const Title = ({children, className}: {children: string, className?: string}) => {
  return (
    <h1 className={`${className} text-lg uppercase font-[700] tracking-[5px]`}>{children}</h1>
  )
}

export default Title