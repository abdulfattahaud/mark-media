"use client";
import gsap from "gsap";
import { AboutSlider } from "../ui/AboutSlider";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import SplitType from "split-type";
import Image from "next/image";

export const About = () => {
  useEffect(() => {
    const h2Split = new SplitType("#about h2", {
      types: "words,chars",
    });
    const blockquoteSplit = new SplitType("#about blockquote", {
      types: "words,chars",
    });
    const spanSplit = new SplitType("#about span", {
      types: "words,chars",
    });
    const tl = gsap.timeline({
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
      },
      onComplete: () => {
        h2Split.revert();
        blockquoteSplit.revert();
        spanSplit.revert();
      },
      onStart: () => {
        document.querySelectorAll(".hide-first").forEach((el) => {
          el.classList.remove("hide-first");
        });
      },
    });
    ScrollTrigger.create({
      trigger: "#about",
      start: "top 70%",
      end: "bottom bottom",
      markers: false,
      animation: tl,
    });

    tl.fromTo(
      "#about .left-border",
      {
        scaleY: 0,
      },
      { scaleY: "100%", duration: 1 },
    )
      .fromTo(
        spanSplit.chars,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.025,
        },
        "-=1",
      )
      .fromTo(
        h2Split.chars,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.025,
        },
        "-=.5",
      )
      .fromTo(
        blockquoteSplit.chars,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.015,
        },
        "-=.5",
      );

    return () => {
      ScrollTrigger.killAll();
      tl.kill();
    };
  }, []);
  return (
    <div id='about' className='relative min-h-screen overflow-hidden md:h-svh md:min-h-[850px]'>
      <div className='flex h-full flex-col items-start justify-center gap-12 pb-[7rem] pl-[2.5rem] pr-[1rem] pt-[3rem] sm:pl-[4rem] md:py-[7.25rem] md:pl-[12.5rem]'>
        <div className='pl-[1.5rem] sm:max-w-[80%] sm:pl-0'>
          <span className='hide-first mb-9 block w-max border-t-2 border-t-grayC pt-6 text-[1.875rem] font-extrabold leading-[1.06] text-grayC sm:w-[22rem]'>
            About Us
          </span>
          <h2 className='hide-first mb-5 text-[clamp(2.5rem,-2.2143rem+9.8214vw,3.875rem)] leading-[.88] md:text-[7.5rem]'>
            Where Strategy and Creativity Converge
          </h2>
          <blockquote className='hide-first'>
            Empowering Your Brand’s Growth Through Innovative, Results-Driven Marketing Solutions
          </blockquote>
        </div>
        <AboutSlider />
      </div>
      <Image
        src='/images/about-bg.svg'
        alt='Background hexagon shapes'
        width={1500}
        height={900}
        className='absolute right-0 top-0 z-[-1] h-auto w-full sm:w-[50%]'
      />
      <div className='left-border'></div>
    </div>
  );
};
