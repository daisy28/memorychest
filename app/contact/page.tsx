import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { BsFacebook, BsYoutube, BsTwitter, BsTiktok } from "react-icons/bs";
import style from "../component/style.module.css";


const Contact = () => {
  return (
    <section className={`${style.contact_page} relative top-[96px] p-4 py-[5rem] md:px-[4rem] mb-[6rem] h-[100%]`}>
      {/* <div className={` absolute rotate-[130deg] top-[-80px] right-[-80px]`}>
        <Image
        src="/cloud-s-yellow.svg"
          alt=""
          width={200}
          height={200}
          className={`w-[200px] h-[200px] `}
        />
      </div> */}
      <div className={`absolute rotate-[130deg] bottom-[-260px] left-[-160px]`}>
        <Image
        src="/cloud-s-orange.svg"
          alt=""
          width={200}
          height={200}
          unoptimized
          className={`opacity-[.4] blur-[90px] bg-blend-normal rotate-[-180deg] z-[-7] w-[400px] h-[400px]  `}
        />
      </div>
      <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 lg:gap-10 mb-[3rem] `}>
        <div className={`md:w-[50%]`}>
          <h1 className={`font-[Lora] text-[20px] font-[600] text-[#495057] uppercase tracking-[3px] leading-[42px] mb-8 text-center md:text-left`}>Contact Memory chest </h1>
          <p className={`text-[#495057] text-[14px] leading-[28px] font-[400] mb-4 md:text-[1.1rem]`}>Welcome to Memory Chest, where we are passionate about unlocking the secrets of the past and bringing historical events and documentaries to life. Your curiosity is our inspiration, and your engagements fuels our mission to preserve and share the memories of the world.</p>
        </div>
        <div className={`md:w-[50%]`}>
          <Image
              src="/images__13_-removebg-preview.png"
              alt="About us image"
              className={`w-full h-[250px] object-cover relative z-[5] rounded-[4px]`}
              width={200}
              height={200}
              unoptimized
            />
        </div>
      </div>
      <div className={`relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-[4rem] mb-[3rem]`}>
        <div className={`md:w-[50%]`}>
          <h1 className={`font-[Lora] text-[20px] font-[600] text-[#495057] uppercase tracking-[3px] leading-[42px] mb-8 text-center md:text-left`}>Get in touch </h1>
          <p className={`text-[#495057] text-[14px] leading-[28px] font-[400] mb-4 md:text-[1.1rem]`}>Have questions, suggestions, or just want to share your thoughts with us? We&apos;d love to hear from you! Feel free to reach out via email at <a href="mailto:memorychest90@gmail.com" className={`underline text-[#d4a373]`} >memorychest90@gmail.com</a></p>
        </div>
        <div className={`max-w-[330px] mx-auto md:order-[-1]`}>
          <div className={`relative`}>
          <div className={`relative right-[-45px] z-[5] w-[250px] h-[250px] `}>
          <Image
              src="/IMG-20230830-WA0026.jpg"
              alt="About us image"
              className={`object-cover w-full h-full  rounded-full ml-auto`}
              width={200}
              height={200}
              unoptimized
            />
        </div>
        <div className={`absolute top-[130px] z-[5] p-4 rounded-full bg-[#d4a373] w-[300px] h-[300px] flex justify-center items-center left-[-45px] opacity-[.9] `}>
          <form action="" className={`flex gap-2 flex-col`}>
            <input type="text" name="" id="" placeholder="First Name" className={`bg-[#fff] rounded-[4px] outline-none border-0 px-4 py-2 w-[80%] mx-auto`} />
            <input type="email" name="" id="" placeholder="example@gmail.com" className={`bg-[#fff] rounded-[4px] outline-none border-0 px-4 py-2 w-[80%] mx-auto`} />
            <textarea name="" id="" cols={20} rows={2} placeholder="Enter your message" className={`${style.text_area} bg-[#fff] rounded-[4px] outline-none border-0 px-4 py-2 w-[80%] height-[64px]  mx-auto`} ></textarea>
            <button className={` bg-[#212529] rounded-[4px] w-[80%] mx-auto p-2 px-4 text-[#e5e5e5] font-[600] outline-none hover:bg-[#d4a373] hover:text-[#495057] hover:transition-all hover:delay-300 hover:duration-300 shadow-md`}>Send</button>
          </form>
          </div>
          <div className={`absolute w-[135px] h-[135px] rounded-full flex flex-col justify-center items-center bg-[#212529] opacity-[.9] z-[6] top-[30px] left-[-48px]`}>
            <h1 className={`font-[Lora] text-[14px] font-[500] text-[#e5e5e5] uppercase tracking-[3px] leading-[42px] text-center`}>Connect</h1>
            <div className={`grid grid-cols-2 gap-2 gap-x-4`}>
              <Link href="https://www.facebook.com/nollymovie" className={`text-[1rem]`}>
                   <BsFacebook className={`text-[#fff] hover:text-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`} />
                 </Link>
                 <Link href="https://www.youtube.com/@memorychesty" className={`text-[1rem]`}>
                   <BsYoutube className={`text-[#fff] hover:text-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`} />
                 </Link>
                 <Link href="https://www.twitter.com/memorychesty" className={`text-[1rem]`}>
                   <BsTwitter className={`text-[#fff] hover:text-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`} />
                 </Link>
                 <Link href="https://www.twitter.com/memorychesty" className={`text-[1rem]`}>
                   <BsTiktok className={`text-[#fff] hover:text-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`} />
                 </Link>
            </div>
          </div>
        </div>
        </div>
        
        
      </div>
    </section>
  )
}

export default Contact;