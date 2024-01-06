import React from 'react';
import Header from '../components/header';
import Popular from '../components/popular';
import Recent from '../components/recent';

const Page = () => {
  return (
    <section className={`bg-[#fbf9fa] relative top-[92.5px]`}>
      <Header />
      <Popular />
      <Recent />
    </section>
  )
}

export default Page;