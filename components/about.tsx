import React, { useEffect, useRef } from 'react';
import Gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

Gsap.registerPlugin(ScrollTrigger);
Gsap.config({
    nullTargetWarn: false,
});

const About = () => {
 const ref = useRef(null);
 useEffect(() => {
  Gsap.from(ref.current, {
      scrollTrigger: {
          trigger: ref.current,
          start: 'top 50%',
          end: 'bottom 80%',
          onEnter: () => {},
          onEnterBack: () => {},
      },
      opacity: 0,
      duration: 1
  });
}, [ref]);

 return (
  <section className='flex gap-[7.5rem] mx-auto w-full h-[38rem] items-center justify-center' id="about" ref={ref}>
    <img
    src="/assets/about-image.png"
    alt="About"
    className='w-[462px] h-[308px]'
  />
    <div className='flex flex-col gap-16 max-w-[35.5rem]'>
     <p className='header-text'>We don't just provide technology solutions,<br />we provide the values from around the world</p>
     <div className='flex flex-col gap-8'>
      <p className='base-text'>We are a digital creation firm that provides support from UI/UX design to implementation for websites and applications.</p>
      <p className='base-text'>However we don't just provide technology solutions, we aim to provide the cultures and values from around the world. </p>
      <p className='base-text'>We are based in Japan and Taiwan, bridging not only the cultures and values of both countries but also facilitating the exchange of technology and skills.</p>
     </div>
    </div>
  </section>
 );
};

export default About;
