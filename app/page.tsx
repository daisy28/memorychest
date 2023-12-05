import React from 'react';
import Header from './component/header';
import Popular from './component/popular';
import Recent from './component/recent';

const Page = () => {
  return (
    <section className={`bg-[#fbf9fa] relative top-[92.5px]`}>
      <Header />
      <Popular />
      <Recent />
    </section>
  )
}

export default Page