import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className={`relative top-[96px] p-4 py-[5rem] md:px-[4rem]`}>
      <div className={``}>
        <h1 className={`font-[Lora] text-[20px] font-[600] text-[#495057] uppercase tracking-[3px] leading-[42px] mb-8 text-center`}>About us</h1>
        <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 lg:gap-10 mb-[3rem]`}>
          <div className={`md:w-[50%]`}>
            <h3 className={`text-[16px] font-[600] text-[#495057] capitalize tracking-[3px] leading-[32px] mb-4`}>Welcome to memory chest</h3>
        <p className={`text-[#495057] text-[14px] leading-[28px] font-[400] mb-4 md:text-[1.1rem]`}>We are dedicated to unlocking the secrets of the past, bringing historical events and documentaries to life.</p>
          <p className={`text-[#495057] text-[14px] leading-[28px] font-[400] mb-8 md:text-[1.1rem]`}>Our mission is to preserve and share the memories of the world, fueling curiosity and inspiring a deeper undersatanding of our shared history.</p>
          </div>
          <div className={`md:w-[50%]`}>
            <Image
              src="/images (12).jpeg"
              alt="About us image"
              className={`w-full h-[250px] object-cover relative z-[5] rounded-[4px]`}
              width={200}
              height={200}
              unoptimized
            />
          </div>
        </div>
        
        <article className={`my-[3rem] relative flex flex-col md:items-center md:justify-between md:flex-row gap-4 lg:gap-10`}>
          <div className={`md:w-[50%]`}>
            <div className={`relative w-[270px]`}>
            <div
        className={`absolute w-[70px] h-[40px] right-[-8px] top-[0px] bg-[#d4a373] z-[1]`}
      ></div>
          <h1 className={`font-[Lora] text-[18px] font-[600] text-[#495057] uppercase tracking-[3px] leading-[42px] mb-2 relative z-[2]`}>who the site is for</h1>
          </div>
          <p className={`text-[#495057] text-[14px] leading-[28px] font-[400] mb-8 md:text-[1.1rem]`}>Memory Chest is designed for history enthusiasts, curious minds, and anyone passionate about uncovering the fascinating stories of the past. Whether you&apos;re a seasoned historian or just starting your journey into the realms of history, our platform is crafted for individuals hungry for knowledge.</p>
          </div>
          <div className={`md:order-[-1] md:w-[50%]`}>
            <Image
              src="/images (2).jpeg"
              alt="Who the site is for image"
              className={`w-full h-[250px] object-cover relative z-[5] rounded-[4px]`}
              width={200}
              height={200}
              unoptimized
            />
          </div>
          
        </article>
        <article className={`my-[3rem] relative flex flex-col md:items-center md:justify-between md:flex-row gap-4 lg:gap-10`}>
          <div className={`md:w-[50%]`}>
            <div className={`relative w-[270px]`}>
            <div
        className={`absolute w-[80px] h-[40px] left-[-16px] top-[0px] bg-[#d4a373] z-[1]`}
      ></div>
          <h1 className={`font-[Lora] text-[18px] font-[600] text-[#495057] uppercase tracking-[3px] leading-[42px] mb-2 relative z-[2]`}>what to expect</h1>
          </div>
          <p className={`text-[#495057] text-[14px] leading-[28px] font-[400] mb-8 md:text-[1.1rem]`}>At Memory Chest, expect a captivating exploration of historical events and documentaries that transcend time. We breathe life into the narratives of the past, unlocking the treasures that have shaped our world. Immerse yourself in rich, well-researched content that fuels curiosity, providing a dynamic and engaging learning experience.</p>
          </div>
          <div className={`md:w-[50%]`}>
            <Image
              src="/images (3).jpeg"
              alt="What to expect image"
              className={`w-full h-[250px] object-cover relative z-[5] rounded-[4px]`}
              width={200}
              height={200}
              unoptimized
            />
          </div>
          
        </article>
        <article className={`my-[3rem] relative flex flex-col md:items-center md:justify-between md:flex-row gap-4 lg:gap-10`}>
          <div className={`md:w-[50%]`}>
            <div className={`relative w-[270px]`}>
            <div
        className={`absolute w-[80px] h-[40px] right-[60px] top-[0px] bg-[#d4a373] z-[1]`}
      ></div>
          <h1 className={`font-[Lora] text-[18px] font-[600] text-[#495057] uppercase tracking-[3px] leading-[42px] mb-2 relative z-[2]`}>where to start</h1>
          </div>
          <p className={`text-[#495057] text-[14px] leading-[28px] font-[400] mb-8 md:text-[1.1rem]`}>Embark on your historical journey with Memory Chest by diving into our curated collections. Explore topics that pique your interest, from ancient civilizations to modern revolutions. Each piece is a key to unlocking the secrets of the past, fostering a deeper understanding of our shared history. Begin your adventure today, and let the exploration of memories commence.</p>
          </div>
          <div className={`md:w-[50%] md:order-[-1]`}>
            <Image
              src="/images (7).jpeg"
              alt="About us image"
              className={`w-full h-[250px] object-cover relative z-[5] rounded-[4px]`}
              width={200}
              height={200}
              unoptimized
            />
          </div>
          
        </article>
        <article className={`my-[3rem] relative flex flex-col md:items-center md:justify-between md:flex-row gap-4 lg:gap-10`}>
          <div className={`md:w-[50%]`}>
             <div
        className={`absolute w-[142px] h-[40px] left-[-16px] top-[0px] bg-[#d4a373] z-[1]`}
      ></div>
          <h1 className={`font-[Lora] text-[18px] font-[600] text-[#495057] uppercase tracking-[3px] leading-[42px] mb-2 relative z-[2]`}>Subscribe to our newsletter</h1>
          <p className={`text-[#495057] text-[14px] leading-[28px] font-[400] mb-8 md:text-[1.1rem]`}>Join Memory Chest in preserving and sharing the memories of our world. Unlock the treasures of the past with us. Subscribe, explore, and become part of a community dedicated to unraveling the threads of history. Together, let&apos;s ignite curiosity and inspire a profound appreciation for the stories that have shaped our existence. Memory Chest - where history comes alive.</p>
          </div>
          <div className={`md:w-[50%]`}>
            <Image
              src="/images (8).jpeg"
              alt="Subscribe to newsletter image"
              className={`w-full h-[250px] object-cover relative z-[5] rounded-[4px]`}
              width={200}
              height={200}
              unoptimized
            />
          </div>
         
        </article>
        <form action="" className={`relative md:w-[500px] mx-auto`}>
          <input type="email" name="" id="" placeholder='example@gmail.com' className={`p-2 px-4 my-2 border border-[#cfcece] rounded-[8px] relative shadow-md w-full outline-none`} />
          <button className={`absolute right-0 top-[8.5px] bg-[#212529] rounded-r-[8px] p-2 px-4 text-[#e5e5e5] font-[600] outline-none hover:bg-[#d4a373] hover:text-[#495057] hover:transition-all hover:delay-300 hover:duration-300 shadow-md`}>Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default About;
