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
    <div id='main-section' className='border-b-primary relative h-svh border-b-[1.25rem]'>
      <div className='flex h-full items-center gap-10 pl-[12.5rem] pt-[6.25rem]'>
        <div className='flex w-1/2 flex-col items-start'>
          <span className='hide-first text-grayC mb-2 text-[1.875rem] font-extrabold leading-[1.06]'>Mark Media</span>
          <h1 className='hide-first mb-7 text-[6rem] leading-[1.06]'>
            Your Bridge To Unstoppable
            <br /> Brand Success
          </h1>
          <p className='text-grayC hide-first mb-[2.125rem] text-[1.5rem] leading-[1.2]'>
            Leading You From Vision to Victory With Strategic, Results-
            <br />
            Driven Marketing Solutions
          </p>
          <button className='bg-primary rounded-[1.25rem] px-6 py-4 text-base font-bold text-black opacity-0'>
            Schedule Meeting
          </button>
        </div>
        <div className='relative h-full w-1/2'>
          <Image
            src='/images/hero-main-c.png'
            alt='Main hero image'
            className='h-full object-cover'
            width={730}
            height={890}
          />
          <Image
            src='/icons/ebd.svg'
            className='absolute bottom-5 left-5 z-[10] h-[7rem] w-[7.5rem]'
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
