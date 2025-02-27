"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const CheckIcon = () => {
  return (
    <svg className='size-5' width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.7365 2.49929L11.5155 1.45879C10.7977 0.84707 9.74133 0.84707 9.02353 1.45879L7.80233 2.49932C7.49478 2.76146 7.11229 2.91981 6.70942 2.95196L5.11158 3.0794C4.17145 3.15442 3.4237 3.90099 3.34868 4.84112L3.22075 6.44024C3.18861 6.84311 3.03129 7.2254 2.76916 7.533L1.72818 8.7542C1.11646 9.472 1.11674 10.5276 1.72847 11.2454L2.76851 12.4666C3.03064 12.7742 3.18948 13.1565 3.22163 13.5594L3.34956 15.1585C3.42458 16.0986 4.17017 16.8452 5.1103 16.9202L6.70991 17.0477C7.11278 17.0798 7.49508 17.2382 7.80273 17.5003L9.02343 18.5409C9.74123 19.1526 10.7977 19.1525 11.5155 18.5407L12.7362 17.5002C13.0439 17.2381 13.4262 17.08 13.829 17.0478L15.4286 16.9202C16.3688 16.8452 17.1144 16.0984 17.1894 15.1583L17.3173 13.5593C17.3495 13.1564 17.5083 12.7738 17.7704 12.4662L18.8105 11.2454C19.4222 10.5275 19.4221 9.4716 18.8104 8.7538L17.7703 7.5332C17.5082 7.2256 17.3492 6.8431 17.317 6.44024L17.1899 4.84093C17.1148 3.9008 16.3681 3.15452 15.428 3.0795L13.8289 2.95206C13.4261 2.91991 13.0441 2.76143 12.7365 2.49929Z'
        stroke='#220A33'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.76953 10.5L8.76953 12.5L13.7695 7.5'
        stroke='#220A33'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const Testimonial = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!wrapperRef.current) return;
    const h2 = wrapperRef.current.querySelector("h2")!;
    const headerImage = wrapperRef.current.querySelector("header img")!;
    const h2Split = new SplitType(h2, {
      types: "words,chars",
    });
    const headerSpan1: HTMLElement = wrapperRef.current.querySelector("header > div > span")!;
    const headerSpan2: HTMLElement = wrapperRef.current.querySelector("header > span")!;
    const headerSpan1Split = new SplitType(headerSpan1, {
      types: "words,chars",
    });
    const headerSpan2Split = new SplitType(headerSpan2, {
      types: "words,chars",
    });
    const tl = gsap.timeline({
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
      },
      onComplete: () => {
        h2Split.revert();
        headerSpan1Split.revert();
        headerSpan2Split.revert();
      },
    });

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top 50%",
      markers: false,
      animation: tl,
    });

    tl.fromTo(
      headerImage,
      {
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.5,
      },
    )
      .fromTo(
        headerSpan1Split.chars,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.02,
        },
        "-=.6",
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
          stagger: 0.02,
        },
        "-=.75",
      )
      .fromTo(
        headerSpan2Split.chars,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.02,
        },
        "-=.75",
      )
      .fromTo(
        ".testi-item",
        {
          opacity: 0,
          yPercent: 50,
          x: "-100px",
          transform: "translateZ(300px)",
        },
        {
          opacity: 1,
          yPercent: 0,
          x: "0px",
          transform: "translateZ(0px)",
          stagger: 0.1,
        },
        "-=.6",
      );
  }, []);
  return (
    <div
      ref={wrapperRef}
      id='testimonial'
      className='relative z-[1] flex min-h-svh flex-col bg-[#FFCD0091] px-4 pb-[4.5rem] pt-[5.625rem] md:px-[7.125rem]'
    >
      <div className='relative z-[1] flex h-full flex-col justify-between gap-12'>
        <header>
          <div className='mb-[3.25rem] flex items-center'>
            <Image src='/icons/rocket.png' alt='' width={50} height={50} className='size-[3.125rem]' />
            <span className='text-sm text-[#220A33]'>Real Stories, Real Results—Straight From Our Partners</span>
          </div>
          <h2 className='mb-6 text-[clamp(2.5rem,0.9806rem+6.483vw,5rem)] font-bold leading-[1.05] text-[#220A33] md:text-[5rem]'>
            Where Great Minds Share <br className='hidden md:block' />
            Their Success Stories
          </h2>
          <span className='text-[1.875rem] leading-[1.2]'>High-Performing Teams Thrive on Inspired Ideas</span>
        </header>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          <div className='flex flex-col gap-5 md:mt-[12.5rem]' style={{ perspective: "1000px" }}>
            <div className='testi-item flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-04.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Jeff Weinstein</span>
                  <CheckIcon />
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                Mark Media completely transformed our online presence! Their team is professional, creative, and results-driven. We’ve seen a significant increase in engagement and sales since partnering with them. Highly recommend
                </p>
              </div>
            </div>
            <div className='testi-item flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-03.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Jake Mor</span>
                  <CheckIcon />
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                Working with Mark Media has been a game-changer for our social media strategy. They understand the algorithms, create stunning content, and consistently deliver measurable results. Truly a top-notch agency!.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 md:mt-[5rem]' style={{ perspective: "1000px" }}>
            <div className='testi-item flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-01.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Danny Trinh</span>
                  <CheckIcon />
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                Mark Media helped us climb to the top of Google rankings! Their SEO strategies are cutting-edge, and their team is always transparent about progress. Our website traffic has tripled in just six months!
                </p>
              </div>
            </div>
            <div className='testi-item flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-07.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Max Ogles</span>
                  <CheckIcon />
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                The ROI from Mark Media’s ad campaigns has been incredible. They’ve helped us target the right audience and optimize our ad spend. We’re seeing higher conversions and lower costs—what more could you ask for?
                </p>
              </div>
            </div>
            <div className='testi-item flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-02.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Design pappa</span>
                  <CheckIcon />
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                We’ve been working with Mark Media for over a year, and they’ve become an extension of our team. Their consistent effort and dedication have helped us grow year after year. We couldn’t be happier!
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5' style={{ perspective: "1000px" }}>
            <div className='testi-item flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-08.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Shahed Khan</span>
                  <CheckIcon />
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                From logo design to brand messaging, Mark Media nailed it! They took the time to understand our vision and brought it to life in ways we couldn’t have imagined. Our brand has never been stronger!
                </p>
              </div>
            </div>
            <div className='testi-item flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-05.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Josh Johnson</span>
                  <CheckIcon />
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                From concept to launch, Mark Media exceeded our expectations. Their professional approach and creative flair boosted our online engagement significantly.
                </p>
              </div>
            </div>
            <div className='testi-item flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-06.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Mark Johnson CC</span>
                  <CheckIcon />
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                Their commitment to excellence and keen industry insights transformed our online presence. Mark Media is our trusted partner for all marketing needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src='/images/testimonial-noise.svg'
        alt='Testimonial Background'
        fill
        className='absolute inset-0 z-[0] size-full object-cover'
      />
      <Image
        src='/images/test-vector.svg'
        alt='Testimonial Background'
        width={1000}
        height={700}
        className='absolute left-[-10rem] top-1/2 z-[0] h-[42rem] w-auto -translate-y-1/2'
      />
    </div>
  );
};
