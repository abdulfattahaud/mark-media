"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    const titleSplit = new SplitType(headerRef.current.querySelector("h2")!, {
      types: "words,chars",
    });
    const tl = gsap.timeline({
      onComplete: () => {
        titleSplit.revert();
      },
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
      },
    });
    tl.fromTo(
      titleSplit.chars,
      {
        opacity: 0,
        yPercent: 50,
        x: -20,
      },
      {
        opacity: 1,
        yPercent: 0,
        x: 0,
        stagger: 0.02,
      },
    ).fromTo(
      headerRef.current.querySelectorAll(".logo-wrapper"),
      {
        opacity: 0,
        yPercent: 50,
        x: -20,
      },
      {
        opacity: 1,
        yPercent: 0,
        stagger: 0.04,
        x: 0,
      },
      "-=.5",
    );
    ScrollTrigger.create({
      trigger: "#how-it-works",
      start: "top 50%",
      animation: tl,
      markers: false,
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className='mx-auto mb-[7.25rem] flex flex-col items-center justify-center gap-8 px-5 text-center md:mb-[11.25rem]'
    >
      <h2 className='text-[2rem] font-extrabold text-[#24272B] md:text-[3.75rem]'>The Brands That Trust Us</h2>
      <div className='flex max-w-[40rem] flex-wrap items-center justify-center gap-3 md:max-w-[65rem]'>
        <div className='logo-wrapper flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-6 py-3 md:h-[6.875rem] md:w-[21rem] md:px-12 md:py-6'>
          <Image src='/icons/unity.png' alt='Unity Marketing' width={240} height={64} className='h-full w-auto' />
        </div>
        <div className='logo-wrapper flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-6 py-3 md:h-[6.875rem] md:w-[21rem] md:px-12 md:py-6'>
          <Image src='/icons/vidnik.png' alt='Vidnik' width={240} height={64} className='h-full w-auto' />
        </div>
        <div className='logo-wrapper flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-6 py-3 md:h-[6.875rem] md:w-[21rem] md:px-12 md:py-6'>
          <Image src='/icons/xygma.png' alt='Xygma' width={240} height={64} className='h-full w-auto' />
        </div>
        <div className='logo-wrapper flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-6 py-3 md:h-[6.875rem] md:w-[21rem] md:px-12 md:py-6'>
          <Image src='/icons/zadlaw.png' alt='Zadlaw' width={240} height={64} className='h-full w-auto' />
        </div>
        <div className='logo-wrapper flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-12 py-1 md:h-[6.875rem] md:w-[21rem]'>
          <Image src='/icons/sbt.png' alt='SBT' width={240} height={64} className='h-full w-auto' />
        </div>
      </div>
    </header>
  );
};

const Text = () => {
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!textRef.current) return;
    const textSplit = new SplitType(textRef.current.querySelector("p")!, {
      types: "words,chars",
    });
    gsap.set(textSplit.chars, {
      opacity: 1,
    });
    const tl = gsap.timeline({
      onComplete: () => {
        textSplit.revert();
      },
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
      },
    });
    tl.fromTo(
      textSplit.words,
      {
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        yPercent: 0,
        stagger: 0.02,
      },
    ).fromTo(
      textRef.current.querySelector(".cube"),
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=.5",
    );
    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 50%",
      animation: tl,
      markers: false,
    });
  }, []);
  return (
    <div ref={textRef} className='relative z-[1] mb-[25rem] px-[clamp(2rem,-0.4311rem+10.3728vw,6rem)] md:px-[6rem]'>
      <p className='text-[clamp(1.2rem,1.0177rem+0.778vw,1.5rem)] font-light leading-[1.25] text-[#0A0B1E] md:text-[2.5rem]'>
        <span className='font-bold'>At Mark Media</span>, we&apos;re proud to partner with forward-thinking brands that
        share our passion for innovation and results. Every collaboration starts with understanding each client&apos;s
        unique vision, goals, and challenges—then crafting compelling strategies that empower them to shine. These
        trusted relationships are the backbone of our success, fueling inspired creativity and a track record of
        measurable impact.
      </p>
      <div className='cube absolute bottom-[-10rem] right-[30%] z-[-1] flex size-[14.5rem] rotate-[20deg] items-end justify-end rounded-[40px] bg-primary p-5 md:size-[22rem]'>
        <div className='size-[3rem] rounded-full bg-[#00000024]'></div>
      </div>
    </div>
  );
};

const Partner = () => {
  const partnerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!partnerRef.current) return;
    const h2Split = new SplitType(partnerRef.current.querySelector("h2")!, {
      types: "words,chars",
    });

    // Create array of numbers 0-9 for the rotating effect
    const numbers = Array.from({ length: 10 }, (_, i) => i);

    const tl = gsap.timeline({
      onComplete: () => {
        h2Split.revert();
      },
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
      },
    });

    tl.fromTo(
      h2Split.chars,
      {
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        yPercent: 0,
        stagger: 0.02,
      },
    );

    // Add number counting animations
    const numberElements = partnerRef.current.querySelectorAll(".count-number");
    numberElements.forEach((el) => {
      const targetNumber = parseInt(el.textContent || "0", 10);
      const targetStr = targetNumber.toString().padStart(2, "0");
      const [tens, ones] = targetStr.split("").map(Number);

      // Create two columns of numbers for two-digit display
      const numberRows = `
        <div class="flex">
          <div class="digit-column">
            ${numbers.map((n) => `<div class="number-row leading-[1]">${n}</div>`).join("")}
          </div>
          <div class="digit-column">
            ${numbers.map((n) => `<div class="number-row leading-[1]">${n}</div>`).join("")}
          </div>
        </div>
      `;
      el.innerHTML = numberRows;

      const digitColumns = el.querySelectorAll(".digit-column");

      // Animate first digit (tens)
      gsap.fromTo(
        digitColumns[0].querySelectorAll(".number-row"),
        {
          yPercent: 0,
        },
        {
          yPercent: -tens * 100,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            markers: false,
          },
        },
      );

      // Animate second digit (ones)
      gsap.fromTo(
        digitColumns[1].querySelectorAll(".number-row"),
        {
          yPercent: 0,
        },
        {
          yPercent: -ones * 100,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            markers: false,
          },
        },
      );
    });

    ScrollTrigger.create({
      trigger: partnerRef.current,
      start: "top 50%",
      animation: tl,
      markers: false,
    });
  }, []);
  return (
    <div
      ref={partnerRef}
      className='relative z-[1] mb-[6.75rem] flex flex-col items-center justify-center gap-12 px-[1rem] text-center md:px-[15rem]'
    >
      <h2 className='text-[2rem] font-extrabold leading-[1.06] text-[#24272B] md:text-[3.75rem]'>
        Partnering with Visionary Brands
        <br className='hidden md:block' /> To Shape Unforgettable Success Stories
      </h2>
      <div className='flex w-full flex-wrap justify-center gap-4 border-b border-b-[#CECECE] px-6 pb-[3.25rem] md:flex-nowrap md:justify-between'>
        <div className='flex flex-col gap-6'>
          <div className='relative flex flex-col items-center gap-2'>
            <span
              className='number-wrapper h-[5rem] w-max overflow-hidden font-syne text-[5rem] font-bold leading-[1] text-transparent'
              style={{
                WebkitTextStroke: "#C1C1C1 2px",
              }}
            >
              <span className='count-number flex h-full flex-col'>04</span>
            </span>
            <span className='absolute right-[1rem] font-syne text-[2.5rem] font-bold leading-[1]'>+</span>
            <span className='text-[1.5rem] font-medium'>Years in Market</span>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='relative flex flex-col gap-2'>
            <span
              className='number-wrapper h-[5rem] w-max overflow-hidden font-syne text-[5rem] font-bold leading-[1] text-transparent'
              style={{
                WebkitTextStroke: "#C1C1C1 2px",
              }}
            >
              <span className='count-number flex h-full flex-col'>10</span>
            </span>
            <span className='absolute right-[1rem] font-syne text-[2.5rem] font-bold leading-[1]'>+</span>

            <span className='text-[1.5rem] font-medium'>Project done</span>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='relative flex flex-col gap-2'>
            <span
              className='number-wrapper h-[5rem] w-max overflow-hidden font-syne text-[5rem] font-bold leading-[1] text-transparent'
              style={{
                WebkitTextStroke: "#C1C1C1 2px",
              }}
            >
              <span className='count-number flex h-full flex-col'>30</span>
            </span>
            <span className='absolute right-[-.5rem] font-syne text-[2.5rem] font-bold leading-[1]'>%</span>
            <span className='text-[1.5rem] font-medium'>Top Feedbak</span>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='relative flex flex-col gap-2'>
            <span
              className='number-wrapper h-[5rem] w-max overflow-hidden font-syne text-[5rem] font-bold leading-[1] text-transparent'
              style={{
                WebkitTextStroke: "#C1C1C1 2px",
              }}
            >
              <span className='count-number flex h-full flex-col'>15</span>
            </span>
            <span className='absolute right-[1rem] font-syne text-[2.5rem] font-bold leading-[1]'>+</span>

            <span className='text-[1.5rem] font-medium'>Team Member</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageComp = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapper.current) return;
    const tl = gsap.timeline({
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
      },
    });
    tl.fromTo(
      wrapper.current.querySelector(".line-1"),
      {
        // clip path from left to right
        clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
      },
      {
        clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
        duration: 1.5,
      },
    ).fromTo(
      wrapper.current.querySelector(".line-2"),
      {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
      },
      "-=1.5",
    );

    ScrollTrigger.create({
      trigger: wrapper.current,
      start: "top 50%",
      animation: tl,
      markers: false,
    });
  }, []);
  return (
    <div ref={wrapper} className='relative px-4 md:px-[6.25rem]'>
      <figure className='overflow-hidden rounded-[20px]'>
        <Image
          src='/images/par-bg.png'
          alt=''
          width={1400}
          height={640}
          className='h-[20rem] w-full object-cover sm:h-[40rem]'
        />
      </figure>
      <div className='line line-1 absolute left-[-5%] top-[50%] z-[2] flex h-[2.75rem] w-[110%] rotate-[12deg] items-center gap-6 bg-primary font-bold sm:left-0 sm:top-[70%] sm:h-[4.5rem] sm:w-[100%] sm:rotate-[6deg] sm:gap-[8.75rem] sm:text-[1.25rem]'>
        <span className='text-nowrap'>Search Engine Optimization (SEO)</span>
        <span className='text-nowrap'>Search Engine Optimization (SEO)</span>
        <span className='text-nowrap'>Search Engine Optimization (SEO)</span>
        <span className='text-nowrap'>Search Engine Optimization (SEO)</span>
        <span className='text-nowrap'>Search Engine Optimization (SEO)</span>
        <span className='text-nowrap'>Search Engine Optimization (SEO)</span>
        <span className='text-nowrap'>Search Engine Optimization (SEO)</span>
        <span className='text-nowrap'>Search Engine Optimization (SEO)</span>
        <span className='text-nowrap'>Search Engine Optimization (SEO)</span>
      </div>
      <div className='line line-2 absolute left-[-5%] top-[50%] z-[1] flex h-[2.75rem] w-[110%] rotate-[-12deg] items-center gap-6 bg-white font-bold sm:left-0 sm:top-[70%] sm:h-[4.5rem] sm:w-[100%] sm:rotate-[-6deg] sm:gap-[8.75rem] sm:text-[1.25rem]'>
        <span className='text-nowrap'>Pay-Per-Click (PPC) Advertising</span>
        <span className='text-nowrap'>Pay-Per-Click (PPC) Advertising</span>
        <span className='text-nowrap'>Pay-Per-Click (PPC) Advertising</span>
        <span className='text-nowrap'>Pay-Per-Click (PPC) Advertising</span>
        <span className='text-nowrap'>Pay-Per-Click (PPC) Advertising</span>
        <span className='text-nowrap'>Pay-Per-Click (PPC) Advertising</span>
        <span className='text-nowrap'>Pay-Per-Click (PPC) Advertising</span>
        <span className='text-nowrap'>Pay-Per-Click (PPC) Advertising</span>
        <span className='text-nowrap'>Pay-Per-Click (PPC) Advertising</span>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <div id='how-it-works' className='relative min-h-svh py-[7.5rem]'>
      <Header />
      <Text />
      <Partner />
      <ImageComp />
      <Image
        src='/images/about-bg.svg'
        alt='Background hexagon shapes'
        width={1500}
        height={900}
        className='absolute right-0 top-0 z-[-1] h-auto w-[50%]'
      />
      <Image
        src='/images/test-vector-2.svg'
        alt='Background hexagon shapes'
        width={1500}
        height={900}
        className='absolute bottom-[-30.5rem] left-[-10rem] z-[-1] h-auto w-[50%]'
      />
    </div>
  );
};
