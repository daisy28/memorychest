"use client";
import Image from "next/image";
import { useState } from "react";
import { BsYoutube, BsHeart, BsHeartFill } from "react-icons/bs";
const Popular = () => {
  const [like, setLike] = useState<string[]>([]);
  const blogPosts = [
    {
      id: 0,
      categories: "places",
      timeStamp: "",
      img: "/Blog Image.svg",
      title: "Dream about destinations to visit this holiday? Taj Mahal is the perfect place!",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, numquam! Vel officia, dolorum possimus nihil a autem, et obcaecati, asperiores accusantium alias vero dolor earum rerum magnam voluptas necessitatibus amet.",
      like: false,
      videoUrl: `https://www.youtube.com/@memorychesty`
    },
    {
      id: 1,
      categories: "places",
      timeStamp: "",
      img: "/Blog Image (1).svg",
      title: "Breathtaking first-person photos around Egypt",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, numquam! Vel officia, dolorum possimus nihil a autem, et obcaecati, asperiores accusantium alias vero dolor earum rerum magnam voluptas necessitatibus amet.",
      like: false,
      videoUrl: "https://www.youtube.com/@memorychesty"
    },
    {
      id: 2,
      categories: "people",
      timeStamp: "",
      img: "/Blog Image (2).svg",
      title: "What researchers need to know about the last Pharaoh of Egypt",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, numquam! Vel officia, dolorum possimus nihil a autem, et obcaecati, asperiores accusantium alias vero dolor earum rerum magnam voluptas necessitatibus amet.",
      like: false,
      videoUrl: "https://www.youtube.com/@memorychesty"
    },
    {
      id: 3,
      categories: "people",
      timeStamp: "",
      img: "/Blog Image (3).svg",
      title: "What led to the death of the last Pharaoh of Egypt",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, numquam! Vel officia, dolorum possimus nihil a autem, et obcaecati, asperiores accusantium alias vero dolor earum rerum magnam voluptas necessitatibus amet.",
      like: false,
      videoUrl: "https://www.youtube.com/@memorychesty"
    },
    
    {
      id: 4,
      categories: "events",
      timeStamp: "",
      img: "/Image.svg",
      title: "10 Historical events that shaped the world",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, numquam! Vel officia, dolorum possimus nihil a autem, et obcaecati, asperiores accusantium alias vero dolor earum rerum magnam voluptas necessitatibus amet.",
      like: false,
      videoUrl: "https://www.youtube.com/@memorychesty"
    },
    {
      id: 5,
      categories: "events",
      timeStamp: "",
      img: "/Image (2).svg",
      title: "The most deadliest Wars in World History",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, numquam! Vel officia, dolorum possimus nihil a autem, et obcaecati, asperiores accusantium alias vero dolor earum rerum magnam voluptas necessitatibus amet.",
      like: false,
      videoUrl: "https://www.youtube.com/@memorychesty"
    }
  ];

  return (
    <div className={`my-8 p-4 md:px-[4rem]`}>
      <div className={`mb-4`}>
        <h1 className={`text-[#495057] text-[30px] font-[600] leading-[28px] tracking-[2px] mb-6 capitalize md:mb-[2rem] text-center md:text-left font-[Lora]`}>popular topics</h1>
        <aside className={`my-4 grid grid-cols-3 gap-4 md:grid-cols-6 `}>
          <button className={`text-[#d4a373] text-[14px] font-[600] leading-[25px] text-center  capitalize border border-[#d4a373] rounded-[4px] hover:text-[#d4a373]  hover:border-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300 font-[Lora]`}>all</button>
          <button className={`text-[#495057] text-[14px] font-[600] leading-[25px] text-center  capitalize border border-[#495057] rounded-[4px] hover:text-[#d4a373]  hover:border-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300 font-[Lora]`}>places</button>
          <button className={`text-[#495057] text-[14px] font-[600] leading-[25px] text-center  capitalize border border-[#495057] rounded-[4px] hover:text-[#d4a373]  hover:border-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300 font-[Lora]`}>events</button>
          <button className={`text-[#495057] text-[14px] font-[600] leading-[25px] text-center font-[Lora] capitalize border border-[#495057] rounded-[4px] hover:text-[#d4a373]  hover:border-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300`}>people</button>
          <button className={`text-[#495057] text-[14px] font-[600] leading-[25px] text-center  capitalize border border-[#495057] rounded-[4px] hover:text-[#d4a373]  hover:border-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300 font-[Lora]`}>wars</button>
          <button className={`text-[#495057] text-[14px] font-[600] leading-[25px] text-center  capitalize border border-[#495057] rounded-[4px] hover:text-[#d4a373]  hover:border-[#d4a373] hover:transition-all hover:delay-300 hover:duration-300 font-[Lora]`}>cultures</button>
        </aside>
      </div>
      <section className={`grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-8`}>
        {blogPosts.map(posts => {
          return <div className={`relative bg-[#fff] rounded-[5px]`} key={posts.id}>
          <Image
            src={posts.img}
            width={20}
            height={20}
            alt="random picture"
            className={`rounded-t-[5px] h-[300px] w-full object-cover mb-4`}
          />
            <div className={`absolute bg-[rgba(255,255,255,0.2)] rounded-[8px] py-[6px] px-[10px] flex justify-center items-center text-center right-[20px] top-[20px]`}><p className={`text-[#fff] font-[600] text-[10px] tracking-[2px] uppercase`}>{posts.categories}</p></div>
            <div className={`p-4`}>
              <p className={`text-[#6c757d] font-[400] text-[14px] leading-[28px]`}>{new Date().toDateString()}</p>
          <div className={`my-4`}>
              <h2 className={`text-[#495057] text-[18px] font-[600] leading-[32px] tracking-[.9px] mb-4 font-[Lora]`}>{posts.title}</h2>
                <p className={`text-[#6c757d] text-[14px] leading-[28px]`}>{posts.description}</p>
                <div className={`flex justify-between items-center mt-4`}>
                  <a href={posts.videoUrl} className={`w-[20px] h-[16px]`} target="_blank">
                    <BsYoutube className={`text-red-700`} />
                    <p className={`opacity-0 -z-10`}>{posts.videoUrl}</p>
                  </a>

                  <button id={`${posts.id}`} className={` h-[16px]`} onClick={() => {
                    like.includes(`${posts.id}`) ? setLike(like.filter(id => id !== `${posts.id}`)) : setLike([...like, `${posts.id}`])
                  }}>
                    {like.includes(`${posts.id}`) ? <BsHeartFill
                      className={`text-red-700`}
                      id={`${posts.id}`}
                    /> :
                      <BsHeart
                        id={`${posts.id}`}
                        className={`text-red-700 font-[600]`}
                      />}
                    <p className={`opacity-0`}>like</p>
                  </button>
                </div>
          </div>
            </div>
          
        </div>
        })}
      </section>
    </div>
  )};

export default Popular;