import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className={`bg-[#212529] relative top-[92.5px]`}>
      <div className={`p-4 py-8 md:px-[4rem] flex flex-col gap-[2rem] md:flex-row md:justify-between md:items-start`}>
        <div className={`flex gap-4 justify-center flex-col md:justify-start `}>
          <h1 className={`text-[#fff] text-[18px] font-[600] tracking-[2px] leading-[28px] capitalize`}>Contact the publisher</h1>
          <p className={`text-[#e5e5e5] text-[14px] font-[400] leading-[24px] `}>ubahgloria16@gmail.com</p>
          <p className={`text-[#e5e5e5] text-[14px] font-[400] leading-[24px]`}>+2349026115866</p>
        </div>
        <div className={`flex gap-4 justify-center flex-col md:justify-start`}>
          <h1 className={`text-[#fff] text-[18px] font-[600] tracking-[2px] leading-[28px] capitalize`}>Explore</h1>
          <Link href="/about" className={`text-[#e5e5e5] text-[14px] font-[400] leading-[24px] capitalize hover:text-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`}>about</Link>
          <Link href="/contact" className={`text-[#e5e5e5] text-[14px] font-[400] leading-[24px] capitalize hover:text-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`}>contact</Link>
          <Link href="" className={`text-[#e5e5e5] text-[14px] font-[400] leading-[24px] capitalize hover:text-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`}>partners</Link>
          <Link href="" className={`text-[#e5e5e5] text-[14px] font-[400] leading-[24px] capitalize hover:text-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`}>advertise</Link>
          <Link href="" className={`text-[#e5e5e5] text-[14px] font-[400] leading-[24px] capitalize hover:text-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`}>privacy policy</Link>
          <Link href="" className={`text-[#e5e5e5] text-[14px] font-[400] leading-[24px] capitalize hover:text-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`}>terms and conditions</Link>
          
        </div>
        <div className={`flex gap-4 justify-center flex-col md:justify-start`}>
          <h1 className={`text-[#fff] text-[18px] font-[600] tracking-[2px] leading-[28px] capitalize`}>Connections</h1>
          <div className={`flex gap-4 items-center`}>
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
      </div>
      <div className={`flex justify-center items-center bg-[#343a40] p-4 py-6`}><p className={`text-[#e5e5e5] font-[600] text-[14px] leading-[28px] tracking-[2px]`}> &copy;memorychest&nbsp;{new Date().getFullYear()}</p></div>
    </footer>
  )
}

export default Footer;