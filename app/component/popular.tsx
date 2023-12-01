

const Popular = () => {
  return (
    <div className={`my-8 p-4 md:px-[4rem]`}>
      <div>
        <h1 className={`text-[#495057] text-[30px] font-[600] leading-[28px] tracking-[2px] mb-6 capitalize md:mb-[2rem]`}>popular topics</h1>
        <aside className={`my-4 grid grid-cols-3 gap-x-4 md:grid-cols-6`}>
          <button className={`text-[#d4a373] text-[12px] font-[600] leading-[25px] text-left capitalize`}>all</button>
          <button className={`text-[#495057] text-[12px] font-[600] leading-[25px] text-left capitalize`}>places</button>
          <button className={`text-[#495057] text-[12px] font-[600] leading-[25px] text-left capitalize`}>events</button>
          <button className={`text-[#495057] text-[12px] font-[600] leading-[25px] text-left capitalize`}>people</button>
          <button className={`text-[#495057] text-[12px] font-[600] leading-[25px] text-left capitalize`}>wars</button>
          <button className={`text-[#495057] text-[12px] font-[600] leading-[25px] text-left capitalize`}>cultures</button>
        </aside>
     </div>
    </div>
  )};

export default Popular;