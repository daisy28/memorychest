"use client";
import React, { useState } from 'react';
import Link  from 'next/link';
import Image from 'next/image';
import style from "../style.module.css";
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  // const route = useRouter();
  // console.log(route)

     return (
       <header className={`${style.backgroundImg}`}>
          <div className={``}>
               <nav className={`bg-[rgba(0,0,0,0.2)] p-4 flex justify-between items-center md:flex-row md:px-[4rem] ${toggle ? `flex-col` : `flex-row`}`}>
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
            <button className={`flex flex-col w-[18px] h-[14px] justify-between cursor-pointer md:hidden`} onClick={() => setToggle(prevState => !prevState)}>
          <div className={`w-[18px] h-[2px] rounded-[2px] bg-[#fff]`}><p className={`opacity-0`}>.</p></div>
          <div className={`w-[10px] h-[2px] rounded-[2px] bg-[#fff] ml-auto`}></div>
          <div className={`w-[18px] h-[2px] rounded-[2px] bg-[#fff]`}></div>
     </button>
          
          </div>
             </div>
             <div className={`ml-auto md:flex flex-col md:flex-row md:justify-end md:items-center w-[100%] gap-[2rem] ${toggle ? `flex` : `hidden`}`}>
               <div className={`flex justify-end text-right`}>
          <ul className={`my-4 md:my-0 flex flex-col  md:flex-row gap-6 text-[#fff] text-[12px] font-[500] capitalize `}>
            <li>
              <Link href="/" className={`border-b border-[#d4a373] pb-1`}>home</Link>
            </li>
            <li>
              <Link href="/about" className={`border-b border-[#d4a373] pb-1`}>about</Link>
            </li>
            <li>
              <Link href="/categories" className={`border-b border-[#d4a373] pb-1`}>categories</Link>
            </li>
            <li>
              <Link href="/contact" className={`border-b border-[#d4a373] pb-1`}>contact us</Link>
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

           <div className={`p-4 my-[4rem] md:px-[4rem] max-w-[768px]`}>
             <div className={`py-[5px] px-[10px] flex justify-center items-center text-center bg-[rgba(255,255,255,0.15)] rounded-[8px] w-[80px] mb-6`}>
               <p className={`uppercase text-[#fff] text-[10px] font-[600] leading-normal tracking-[2px]`}>history</p>
             </div>
             <h1 className={`text-[#fff] text-[1.5rem] md:text-[2rem] font-[600] leading-4 tracking-[3px] capitalize mb-8 md:leading-[42px]`}>Memory chest</h1>
             <p className={`text-[#cfcece] text-[14px] leading-[28px] font-[400] mb-4 md:text-[1.1rem]`}>We are dedicated to unlocking the secrets of the past, bringing historical events and documentaries to life.</p>
             <p className={`text-[#cfcece] text-[14px] leading-[28px] font-[400] mb-8 md:text-[1.1rem]`}>Our mission is to preserve and share the memories of the world, fueling curiosity and inspiring a deeper undersatanding of our shared history.</p>
             <p className={`text-[#cfcece] text-[14px] leading-[20px] font-[400] mb-4 capitalize md:text-[1.1rem]`}> <span className={`pb-6`}>----</span> Unlocking the treasures of the past.</p>
               </div>
          </div> 
       </header>
    
  )
}

export default Navigation;