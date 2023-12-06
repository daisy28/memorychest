import React from 'react'
import Link from 'next/link';
const Logo = () => {
  return (
    <div className={`relative cursor-pointer`}>
     <div className={`absolute w-[77px] h-[96px] left-[39.5px] top-[-32px] bg-[#d4a373] z-[2]`}>
     </div>
     <Link href="/" className={`relative uppercase text-[20px] leading-[32px] tracking-[5px] font-[600] text-[#fff] font-[Lora] italic z-[3]`}>memory chest</Link>
    </div>
  )
}

export default Logo;