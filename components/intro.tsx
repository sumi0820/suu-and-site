import Gsap, { Power3 } from 'gsap';
import { useEffect } from "react";

const Intro = () => {

  useEffect(() => {
    Gsap.from('#logo', 3, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  }, []);
  return (
    <section className="flex items-center justify-center mx-auto my-auto h-[80vh]">
      <img
        src="/assets/company-big-logo.svg"
        alt="SuU and Inc."
        className="w-[196px] h-[160px]"
        id="logo"
      />{" "}
    </section>
  );
};

export default Intro;
