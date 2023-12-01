import React from 'react';
import Popular from './component/popular';
import Recent from './component/recent';

const Page = () => {
  return (
    <section className={`bg-[#fbf9fa]`}>
      <Popular />
      <Recent />
    </section>
  )
}

export default Page