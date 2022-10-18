import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className=' bg-black'>
      <section className='text-white mb-36 sm:mb-36 lg:mb-36'>
        <div className='flex-column lg:flex'>
        <div className="p-12  text-center ">
          <h1 className="text-3xl mt-36">About me</h1>
          <h3 className="text-2xl">I am a self-taught webdeveloper from Stockholm,Sweden</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perspiciatis facere similique,<br /> voluptas optio nam enim impedit et quibusdam quae vero officiis minus quod porro reiciendis iste animi numquam libero inventore debitis?<br /> Quis quae sit dolores minus delectus distinctio quia soluta architecto asperiores,<br /> porro ad placeat provident expedita accusamus voluptates maiores,<br /> ea doloribus laboriosam, ratione odit illo id? Molestiae rem at consectetur iusto beatae a. Ea officiis alias et
          </p>
        </div>
        <div className="p-12 mt-24">
        <Image src="/../public/foto.jpg" width={800} height={600} alt="characterimage" className=""/>
        </div>
        </div>
      </section>
    </div>
  );
};

export default About;
