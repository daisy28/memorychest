"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from "../style.module.css";
// import ToggleButton from '../ToggleButton';

const Navigation = () => {
     const [toggle, setToggle] = useState(false);

     return (
       <div className={`${style.backgroundImg}`}>
          <div className={`p-4`}>
               <nav>
             <div className={`flex justify-between items-center mb-8`}>
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
            <button className={`flex flex-col w-[18px] h-[14px] justify-between cursor-pointer`} onClick={() => setToggle(prevState => !prevState)}>
          <div className={`w-[18px] h-[2px] rounded-[2px] bg-[#fff]`}></div>
          <div className={`w-[10px] h-[2px] rounded-[2px] bg-[#fff] ml-auto`}></div>
          <div className={`w-[18px] h-[2px] rounded-[2px] bg-[#fff]`}>.</div>
     </button>
          
          </div>
             </div>
             <div className={`my-4 flex justify-end text-right`}>
          <ul className={`flex-col gap-4 ${toggle ? `block` : `hidden`}`}>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/categories">categories</Link>
            </li>
            <li>
              <Link href="/contact">contact us</Link>
            </li>
          </ul>
          </div>
               </nav> 
          </div>
              
       </div>
    
  )
}

export default Navigation;