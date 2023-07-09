import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

Gsap.registerPlugin(ScrollTrigger);
Gsap.config({
    nullTargetWarn: false,
});

const Contact = () => {
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
  });}, [ref]);

 return (
  <section className='flex gap-[7.5rem] mx-auto w-full h-[38rem] items-center justify-center' id="contact" ref={ref}>
    <div className='flex flex-col gap-16 max-w-[35.5rem]'>
     <p className='header-text'>Say hi to us</p>
     <div className='flex flex-col gap-8'>
      <p className='base-text'>We specialize in website and app development, providing support for business expansion into Asian countries, including Japan, as well as engaging in trade activities.</p>
      <p className='base-text'>Mail : {' '} <a href="mailto:info@suu-and.com" target="_blank" rel="noopener noreferrer">info@suu-and.com</a></p>
     </div>
    </div>
    <img
    src="/assets/contact-image.png"
    alt="Contact"
    className='w-[462px] h-[308px]'
  />
  </section>
 );
};

export default Contact;
