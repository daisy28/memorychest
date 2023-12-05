import React from 'react';
import style from "./style.module.css";

const Header = () => {

  return (
    <header className={`${style.backgroundImg}  mb-[4rem] py-[4rem]`}>
      <div className={``}>
        <div className={`p-4 md:px-[4rem] max-w-[768px]`}>
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
  );
}

export default Header;