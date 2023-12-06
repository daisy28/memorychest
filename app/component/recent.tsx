import React from 'react';
import style from "./style.module.css";

const Recent = () => {
  return (
    <article className={`${style.articleBackground} relative `}>
     <div className={`flex items-center justify-center  p-4 md:px-[4rem]`}>
          <div className={`flex flex-col gap-6 my-8 max-w-[500px]`}>
               <div className={`absolute right-[20px] top-[20px] bg-[rgba(255,255,255,0.2)] rounded-[8px] py-[6px] px-[10px] flex justify-center items-center text-center`}><p className={`text-[#fff] font-[600] text-[10px] tracking-[2px] uppercase`}>recently added</p></div>
               <div className={`mt-8`}>
                    <h1 className={`text-[#fff] text-center text-[30px] font-[600] leading-[48px] tracking-[2px] capitalize mt-8 font-[Lora]`}>Unleashing Hell. 10 deadliest battles ever fought</h1>
               </div>
               <div>
                    <p className={`text-[#e5e5e5] text-center text-[12px] md:text-[14px] font-[400] leading-[28px]`}>Explore the darkest chapters in human history with us as we journey through the 10 Deadliest Battles in World History.&nbsp; <span className={`underline text-[#fff]`}>Read more</span></p>
               </div>
               <div className={`flex flex-col gap-2`}>
                    <p className={`text-[#e5e5e5] text-center text-[14px] md:text-[16px] font-[400] leading-[32px]`}>_____</p>
                    <p className={`text-[#e5e5e5] font-[400] text-[14px] leading-[28px] text-center`}>{new Date().toDateString()}</p>
               </div>
          </div>
     </div>
    </article>
  )
}

export default Recent;