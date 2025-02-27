"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Link from "next/link";
const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false, containScroll: "trimSnaps" });
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
      <div className='hidden max-w-[40rem] flex-wrap items-center justify-center gap-3 sm:flex md:max-w-[65rem]'>
        <div className='logo-wrapper flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-6 py-3 md:h-[6.875rem] md:w-[21rem] md:px-12 md:py-6'>
          <Link href='https://www.vidnik.co.uk/' target='_blank' className=''>
            <Image src='/icons/vidnik.png' alt='Vidnik Logo Image' width={256} height={85} className='h-full w-auto' />
            <span className='absolute left-0 top-0 text-[0px] opacity-0'>Vidnik</span>
          </Link>
        </div>
        <div className='logo-wrapper flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-6 py-3 md:h-[6.875rem] md:w-[21rem] md:px-12 md:py-6'>
          <Image src='/icons/unity.png' alt='Unity Marketing' width={240} height={64} className='h-full w-auto' />
        </div>
        <div className='logo-wrapper flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-6 py-3 md:h-[6.875rem] md:w-[21rem] md:px-12 md:py-6'>
          <Image src='/icons/xygma.png' alt='Xygma' width={240} height={64} className='h-full w-auto' />
        </div>
        <div className='logo-wrapper flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-6 py-3 md:h-[6.875rem] md:w-[21rem] md:px-12 md:py-6'>
          <Image src='/icons/zadlaw.png' alt='Zadlaw' width={240} height={64} className='h-full w-auto' />
        </div>
        <div className='logo-wrapper flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-12 py-1 md:h-[6.875rem] md:w-[21rem]'>
          <Link href='https://stepbytech.com' target='_blank' className='h-full'>
            <Image src='/icons/sbt.png' alt='SBT' width={256} height={256} className='h-full w-auto' />
            <span className='absolute left-0 top-0 text-[0px] opacity-0'>Step By Tech</span>
          </Link>
        </div>
      </div>

      <div ref={emblaRef} className='embla mx-[20px] w-full sm:hidden'>
        <div className='embla__container gap-4'>
          <div className='embla__slide w-full'>
            <div className='logo-wrapper flex h-[6.5rem] w-full items-center justify-center overflow-hidden rounded-[32px] bg-black px-6 py-3'>
              <Link href='https://www.vidnik.co.uk/' target='_blank' className='h-full'>
                <Image
                  src='/icons/vidnik.png'
                  alt='Vidnik Logo Image'
                  width={240}
                  height={64}
                  className='h-full w-auto'
                />
                <span className='absolute left-0 top-0 text-[0px] opacity-0'>Vidnik</span>
              </Link>
            </div>
          </div>
          <div className='embla__slide w-full'>
            <div className='logo-wrapper flex h-[6.5rem] w-full items-center justify-center overflow-hidden rounded-[32px] bg-black px-6 py-3'>
              <Image src='/icons/unity.png' alt='Unity Marketing' width={240} height={64} className='h-full w-auto' />
            </div>
          </div>
          <div className='embla__slide w-full'>
            <div className='logo-wrapper flex h-[6.5rem] w-full items-center justify-center overflow-hidden rounded-[32px] bg-black px-6 py-3'>
              <Image src='/icons/xygma.png' alt='Xygma' width={240} height={64} className='h-full w-auto' />
            </div>
          </div>
          <div className='embla__slide w-full'>
            <div className='logo-wrapper flex h-[6.5rem] w-full items-center justify-center overflow-hidden rounded-[32px] bg-black px-6 py-3'>
              <Image src='/icons/zadlaw.png' alt='Zadlaw' width={240} height={64} className='h-full w-auto' />
            </div>
          </div>
          <div className='embla__slide mr-4 w-full'>
            <div className='logo-wrapper flex h-[6.5rem] w-full items-center justify-center overflow-hidden rounded-[32px] bg-black px-12 py-3'>
              <Link href='https://stepbytech.com' target='_blank' className='h-full'>
                <Image src='/icons/sbt.png' alt='SBT' width={240} height={64} className='h-full w-auto' />
                <span className='absolute left-0 top-0 text-[0px] opacity-0'>Step By Tech</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='embla__actions mt-4 flex items-center justify-center gap-4'>
          <button
            aria-label='Previous'
            onClick={() => {
              emblaApi?.scrollPrev();
            }}
            className='flex size-[3.5rem] items-center justify-center rounded-full border-[.5rem] border-primary bg-black'
          >
            <svg
              className='h-3 w-3.5'
              width='14'
              height='12'
              viewBox='0 0 14 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.0788 11.2867C5.87678 11.4887 5.5493 11.4887 5.34727 11.2867L0.519154 6.45865C0.422109 6.36167 0.36762 6.23007 0.36762 6.09289C0.36762 5.9557 0.422109 5.8241 0.519154 5.72705L5.34727 0.898932C5.5493 0.696908 5.87678 0.696908 6.0788 0.898932C6.28083 1.10095 6.28083 1.42851 6.0788 1.63053L2.13382 5.57559L13.3001 5.57559C13.5858 5.57559 13.8174 5.8072 13.8174 6.09289C13.8174 6.37857 13.5858 6.61018 13.3001 6.61018L2.13382 6.61018L6.0788 10.5552C6.28083 10.7572 6.28083 11.0847 6.0788 11.2867Z'
                fill='white'
              />
            </svg>
          </button>
          <button
            aria-label='Next'
            onClick={() => {
              emblaApi?.scrollNext();
            }}
            className='flex size-[3.5rem] items-center justify-center rounded-full border-[.5rem] border-primary bg-black'
          >
            <svg
              className='h-3 w-3.5'
              width='14'
              height='12'
              viewBox='0 0 14 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.29034 0.897605C8.49236 0.69559 8.81984 0.69559 9.02187 0.897605L13.85 5.72568C13.947 5.82265 14.0015 5.95425 14.0015 6.09144C14.0015 6.22863 13.947 6.36023 13.85 6.45727L9.02187 11.2854C8.81984 11.4874 8.49236 11.4874 8.29034 11.2854C8.08831 11.0834 8.08831 10.7558 8.29034 10.5538L12.2353 6.60874L1.06906 6.60874C0.783363 6.60874 0.551758 6.37713 0.551758 6.09144C0.551758 5.80575 0.783363 5.57414 1.06906 5.57414L12.2353 5.57414L8.29034 1.62918C8.08831 1.42716 8.08831 1.09963 8.29034 0.897605Z'
                fill='white'
              />
            </svg>
          </button>
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
    <div
      ref={textRef}
      className='relative z-[1] mb-[8rem] px-[clamp(2rem,-0.4311rem+10.3728vw,6rem)] sm:mb-[25rem] md:px-[6rem]'
    >
      <p className='text-[clamp(1.2rem,1.0177rem+0.778vw,1.5rem)] font-light leading-[1.25] text-[#0A0B1E] md:text-[2.5rem]'>
        <span className='font-bold'>At Mark Media</span>, we&apos;re proud to partner with forward-thinking brands that
        share our passion for innovation and results. Every collaboration starts with understanding each client&apos;s
        unique vision, goals, and challenges—then crafting compelling strategies that empower them to shine. These
        trusted relationships are the backbone of our success, fueling inspired creativity and a track record of
        measurable impact.
      </p>
      <div className='cube absolute bottom-[-4rem] right-[10%] z-[-1] flex size-[14.5rem] rotate-[20deg] items-end justify-end rounded-[40px] bg-primary p-5 sm:bottom-[-10rem] sm:right-[30%] md:size-[22rem]'>
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
      <div className='flex w-full flex-col items-center justify-center gap-4 border-b border-b-[#CECECE] px-6 pb-[3.25rem] sm:flex-row sm:items-start md:justify-between'>
        <div className='flex flex-col gap-6'>
          <div className='relative flex flex-col items-center gap-2'>
            <span
              className='number-wrapper h-[5rem] w-max overflow-hidden font-syne text-[5rem] font-bold leading-[1] text-transparent'
              style={{
                // WebkitTextStroke: "#C1C1C1 2px",
                textShadow: "0px 0px 1px white, 0px 0px 0px black",
              }}
            >
              <span className='count-number flex h-full flex-col'>04</span>
            </span>
            <span className='absolute right-0 font-syne text-[2.5rem] font-bold leading-[1]'>+</span>
            <span className='text-[1.5rem] font-medium'>Years in Market</span>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='relative flex flex-col gap-2'>
            <span
              className='number-wrapper h-[5rem] w-max overflow-hidden font-syne text-[5rem] font-bold leading-[1] text-transparent'
              style={{
                // WebkitTextStroke: "#C1C1C1 2px",
                textShadow: "0px 0px 1px white, 0px 0px 0px black",
              }}
            >
              <span className='count-number flex h-full flex-col'>10</span>
            </span>
            <span className='absolute right-0 font-syne text-[2.5rem] font-bold leading-[1]'>+</span>

            <span className='text-[1.5rem] font-medium'>Project done</span>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='relative flex flex-col gap-2'>
            <span
              className='number-wrapper h-[5rem] w-max overflow-hidden font-syne text-[5rem] font-bold leading-[1] text-transparent'
              style={{
                // WebkitTextStroke: "#C1C1C1 2px",
                textShadow: "0px 0px 1px white, 0px 0px 0px black",
              }}
            >
              <span className='count-number flex h-full flex-col'>95</span>
            </span>
            <span className='absolute right-[-.5rem] font-syne text-[2.5rem] font-bold leading-[1]'>%</span>
            <span className='text-[1.5rem] font-medium'>Top Feedback</span>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='relative flex flex-col gap-2'>
            <span
              className='number-wrapper h-[5rem] w-max overflow-hidden font-syne text-[5rem] font-bold leading-[1] text-transparent'
              style={{
                // WebkitTextStroke: "#C1C1C1 2px",
                textShadow: "0px 0px 1px white, 0px 0px 0px black",
              }}
            >
              <span className='count-number flex h-full flex-col'>10</span>
            </span>
            <span className='absolute right-[1rem] font-syne text-[2.5rem] font-bold leading-[1]'>+</span>

            <span className='text-[1.5rem] font-medium'>Team Member</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Line1 = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, skipSnaps: false, containScroll: "trimSnaps" }, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false }),
  ]);
  return (
    <div
      ref={emblaRef}
      className='line embla line-1 absolute left-[-5%] top-[50%] z-[2] h-[2.75rem] w-full min-w-[110%] rotate-[12deg] bg-primary font-bold sm:left-0 sm:top-[70%] sm:h-[4.5rem] sm:rotate-[6deg] sm:text-[1.25rem]'
    >
      <div className='embla__container flex h-full items-center gap-6 sm:gap-[8.75rem]'>
        <span className='embla__slide !basis-auto text-nowrap'>Influencer Marketing</span>
        <span className='embla__slide !basis-auto text-nowrap'>Social Media Marketing</span>
        <span className='embla__slide !basis-auto text-nowrap'>Search Engine Optimization (SEO)</span>
        <span className='embla__slide !basis-auto text-nowrap'>Analytics and Reporting</span>
        <span className='embla__slide !basis-auto text-nowrap'>Influencer Marketing</span>
        <span className='embla__slide !basis-auto text-nowrap'>Social Media Marketing</span>
        <span className='embla__slide !basis-auto text-nowrap'>Search Engine Optimization (SEO)</span>
        <span className='embla__slide !basis-auto text-nowrap'>Analytics and Reporting</span>
      </div>
    </div>
  );
};

const Line2 = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, skipSnaps: false, containScroll: "trimSnaps" }, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      direction: "backward",
    }),
  ]);

  return (
    <div
      ref={emblaRef}
      className='line embla line-2 absolute left-[-5%] top-[50%] z-[2] h-[2.75rem] w-full min-w-[110%] rotate-[-12deg] bg-white font-bold sm:left-0 sm:top-[70%] sm:h-[4.5rem] sm:rotate-[-6deg] sm:text-[1.25rem]'
    >
      <div className='embla__container flex h-full items-center gap-6 sm:gap-[8.75rem]'>
        <span className='embla__slide !basis-auto text-nowrap'>Pay-Per-Click (PPC) Advertising</span>
        <span className='embla__slide !basis-auto text-nowrap'>Content Marketing</span>
        <span className='embla__slide !basis-auto text-nowrap'>Video Production & Animation</span>
        <span className='embla__slide !basis-auto text-nowrap'>Web Design and Development</span>
        <span className='embla__slide !basis-auto text-nowrap'>Conversion Rate Optimization</span>
        <span className='embla__slide !basis-auto text-nowrap'>Pay-Per-Click (PPC) Advertising</span>
        <span className='embla__slide !basis-auto text-nowrap'>Content Marketing</span>
        <span className='embla__slide !basis-auto text-nowrap'>Video Production & Animation</span>
        <span className='embla__slide !basis-auto text-nowrap'>Web Design and Development</span>
        <span className='embla__slide !basis-auto text-nowrap'>Conversion Rate Optimization</span>
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
        <Image src='/images/par-bg.png' alt='' width={1400} height={640} className='h-[40rem] w-full object-cover' />
      </figure>
      <Line1 />
      <Line2 />
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
        className='absolute bottom-[-30.5rem] left-[-10rem] z-[-1] hidden h-auto w-[50%] sm:block'
      />
    </div>
  );
};
