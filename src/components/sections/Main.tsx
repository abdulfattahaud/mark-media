"use client";
import Image from "next/image";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useEffect } from "react";

export const Main = () => {
  useEffect(() => {
    gsap.to("#main-section .left-border", {
      scaleY: "100%",
      duration: 1,
      delay: 0.25,
      ease: (i) => 1 - Math.pow(1 - i, 3),
    });

    const h1Split = new SplitType("#main-section h1", {
      types: "words,chars",
    });
    const spanSplit = new SplitType("#main-section span", {
      types: "words,chars",
    });
    const pSplit = new SplitType("#main-section p", {
      types: "words,chars",
    });
    const tl = gsap.timeline({
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
        // duration: 1,
        stagger: 0.025,
      },
      onComplete: () => {
        h1Split.revert();
      },
      onStart: () => {
        document.querySelectorAll(".hide-first").forEach((el) => {
          el.classList.remove("hide-first");
        });
      },
    });
    tl.fromTo(
      spanSplit.chars,
      {
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        yPercent: 0,
      },
    )
      .fromTo(
        h1Split.chars,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
        },
        "-=.5",
      )
      .fromTo(
        pSplit.chars,
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
      )
      .fromTo(
        "#main-section button",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "-=1.5",
      );
  }, []);
  return (
    <div id='main-section' className='relative h-[calc(100svh-6.25rem)] border-b-[1.25rem] border-b-primary'>
      <div className='flex h-full flex-col items-center gap-10 pl-[4rem] sm:flex-row md:pl-[12.5rem]'>
        <div className='flex h-full w-full flex-col items-start justify-center text-white sm:h-auto sm:w-1/2 sm:justify-start sm:text-black'>
          <span className='hide-first mb-2 text-[1.25rem] font-extrabold leading-[1.06] text-white sm:text-grayC md:text-[1.875rem]'>
            Mark Media
          </span>
          <h1 className='hide-first mb-7 text-[clamp(2.5rem,-2.6429rem+10.7143vw,4rem)] leading-[1.06] md:text-[6rem]'>
            Your Bridge To Unstoppable
            <br /> Brand Success
          </h1>
          <p className='hide-first mb-[2.125rem] text-[1.25rem] leading-[1.2] text-white sm:text-grayC md:text-[1.5rem]'>
            Leading You From Vision to Victory With Strategic, Results-
            <br />
            Driven Marketing Solutions
          </p>
          <button className='rounded-[.75rem] bg-primary px-3 py-2 text-sm font-bold text-black md:rounded-[1.25rem] md:px-6 md:py-4 md:text-base'>
            Schedule Meeting
          </button>
        </div>
        <div className='absolute left-0 top-0 z-[-1] h-full w-full sm:relative sm:inset-auto sm:z-auto sm:w-1/2'>
          <Image
            src='/images/hero-main-c.png'
            alt='Main hero image'
            className='h-full w-full object-cover'
            width={730}
            height={890}
          />
          <div className='overlay absolute left-0 top-0 block size-full bg-[#00000048] sm:hidden'></div>
          <Image
            src='/icons/ebd.svg'
            className='absolute bottom-5 left-5 z-[10] hidden h-[7rem] w-[7.5rem] sm:block'
            alt='Eat. Breath. Design.'
            width={120}
            height={112}
          />
        </div>
      </div>
      <div className='left-border'></div>
    </div>
  );
};
