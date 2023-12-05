"use client";
import React, { useState } from 'react';
import Link  from 'next/link';
import Image from 'next/image';
import style from "./style.module.css";
// import { useRouter } from 'next/navigation';

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${style.backgroundImg} fixed top-0 left-0 right-0 z-[10] shadow-md border-b border-gray-600`}>
     <nav className={`bg-[rgba(0,0,0,0.2)] p-4 flex justify-between items-center md:flex-row md:px-[4rem]  ${toggle ? `flex-col transition-all delay-200 duration-1000` : `flex-row transition-all delay-200 duration-1000`}`}>
             <div className={`flex justify-between items-center w-full md:w-[20%]`}>
               <div>
                 <Link href="/">
                   <Image src="/IMG-20230830-WA0026.jpg"
                     width={200}
                     height={200}
                     alt="Memory Chest logo"
                     className={`w-[60px] h-[60px] rounded-full object-cover`}
                   />
                 </Link>
               </div>
          <div>
            <button className={`${style.toggle_btn} flex flex-col w-[18px] h-[14px] justify-between cursor-pointer md:hidden`} onClick={() => setToggle(prevState => !prevState)}>
          <div className={`w-[18px] h-[2px] rounded-[2px] bg-[#fff]`}><p className={`opacity-0`}>.</p></div>
          <div className={`w-[10px] h-[2px] rounded-[2px] bg-[#fff] ml-auto`}></div>
          <div className={`w-[18px] h-[2px] rounded-[2px] bg-[#fff]`}></div>
     </button>
          
          </div>
             </div>
             <div className={`ml-auto md:flex flex-col md:flex-row md:justify-end md:items-center w-[100%] gap-[2rem] ${toggle ? `flex transition-all delay-200 duration-1000` : `hidden transition-all delay-200 duration-1000`}`}>
               <div className={`flex justify-end text-right`}>
          <ul className={`my-4 md:my-0 flex flex-col  md:flex-row gap-6 text-[#fff] text-[12px] font-[500] capitalize `}>
            <li>
              <Link href="/" className={`text-[#d4a373] border-b border-[#d4a373] pb-1 hover:text-[#d4a373] hover:border-b hover:border-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`}>home</Link>
            </li>
            <li>
              <Link href="/about" className={`pb-1 hover:text-[#d4a373] hover:border-b hover:border-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`}>about</Link>
            </li>
            <li>
              <Link href="/categories" className={`pb-1 hover:text-[#d4a373] hover:border-b hover:border-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`}>categories</Link>
            </li>
            <li>
              <Link href="/contact" className={`pb-1 hover:text-[#d4a373] hover:border-b hover:border-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`}>contact us</Link>
            </li>
          </ul>
               </div>
               <div className={`md:flex gap-4 items-center justify-end ${toggle ? `flex` : `hidden`}`}>
                 <Link href="https://www.facebook.com/nollymovie">
                   <Image
                     src="/facebook.svg"
                     width={20}
                     height={20}
                     alt="Facebook link icon"
                   />
                 </Link>
                 <Link href="https://www.youtube.com/@memorychesty">
                   <Image
                     src="/youtube.svg"
                     width={20}
                     height={20}
                     alt="Youtube link icon"
                   />
                 </Link>
                 <Link href="https://www.twitter.com/memorychesty">
                   <Image
                     src="/twitter.svg"
                     width={20}
                     height={20}
                     alt="Twitter link icon"
                   />
                 </Link>
               </div>
             </div>
             
               </nav> 
    </div>
  )
}

export default Navigation;