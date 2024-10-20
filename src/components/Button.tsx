'use client'
export default function Button({children}: {children: string}) {

  return (
    <div className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out bg-[#666666] rounded-10 shadow-md group w-[183px] h-[53px] uppercase">
      <span className="absolute inset-0 flex items-center text-[13px] justify-center w-full h-full text-white duration-300 translate-y-full bg-black group-hover:translate-y-0 ease">
        <span>{children}</span>
      </span>

      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:-translate-y-full ease text-[13px]">{children}</span>
        <span className="relative invisible">{children}</span>
      </div>
  )
}