"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!headerRef.current) return;
    const headerSplit = new SplitType(headerRef.current.querySelector("h2")!, {
      types: "words,chars",
    });
    const pSplit = new SplitType(headerRef.current.querySelector("p")!, {
      types: "words,chars",
    });
    const tl = gsap.timeline({
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
      },
      onComplete: () => {
        headerSplit.revert();
        pSplit.revert();
      },
    });
    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top 50%",
      markers: false,
      animation: tl,
    });

    tl.fromTo(
      headerSplit.chars,
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
      pSplit.chars,
      {
        opacity: 0,
        yPercent: 50,
        x: -20,
      },
      {
        opacity: 1,
        yPercent: 0,
        x: 0,
        stagger: 0.01,
      },
      "-=.6",
    );
  }, []);
  return (
    <header ref={headerRef} className='mb-[15rem] flex flex-col items-center justify-center gap-12 text-center'>
      <h2 className='text-[3.5rem] font-semibold leading-[1] md:text-[4.5rem]'>Our Blueprint for Impact</h2>
      <p className='text-[1.25rem] font-medium leading-[1.4]'>
        Turning Bold Ideas into Real-World Results—No Boundaries, Only
        <br className='hidden md:block' /> Breakthroughs
      </p>
    </header>
  );
};

const Plan = () => {
  const planRef = useRef<HTMLDivElement>(null);
  const bigTitle = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!planRef.current) return;
    const planSplit = new SplitType(planRef.current.querySelector("h3")!, {
      types: "words,chars",
    });
    const pSplit = new SplitType(planRef.current.querySelector("p")!, {
      types: "words",
    });
    const tl = gsap.timeline({
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
      },
      onComplete: () => {
        planSplit.revert();
        pSplit.revert();
      },
    });

    ScrollTrigger.create({
      trigger: planRef.current,
      start: "top 50%",
      markers: false,
      animation: tl,
    });

    tl.fromTo(
      bigTitle.current,
      {
        scale: 1.5,
        opacity: 0,
        x: -20,
      },
      {
        scale: 1,
        opacity: 1,
        x: 0,
        duration: 0.6,
      },
    )
      .fromTo(
        planSplit.chars,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.02,
        },
      )
      .fromTo(
        pSplit.words,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.01,
        },
        "-=.6",
      );
  }, []);
  return (
    <div
      ref={planRef}
      className='relative mb-[10rem] flex flex-col items-center justify-center gap-12 rounded-[40px] bg-black px-4 py-[5rem] md:mb-[15rem] md:flex-row md:gap-24 md:px-16 md:py-[9.5rem]'
    >
      <span
        ref={bigTitle}
        className='absolute left-[clamp(1rem,-1.4311rem+10.3728vw,5rem)] top-[clamp(-4.5rem,-3.2844rem+-5.1864vw,-6.5rem)] rotate-[-12deg] text-[clamp(5rem,3.1767rem+7.7796vw,8rem)] font-black leading-[1] text-[#0A0B1E] md:left-[7.5rem] md:top-[-9.5rem] md:text-[11.25rem]'
      >
        <span className='text-primary'>P</span>lan.
      </span>
      <figure className='flex flex-1 items-center justify-center'>
        <Image
          src='/images/plan-img.png'
          alt='Plan'
          width={450}
          height={500}
          className='h-auto max-h-[20rem] w-auto md:max-h-[50%]'
        />
      </figure>
      <div className='flex flex-1 flex-col gap-8 text-white'>
        <h3 className='text-[clamp(2.75rem,2.1422rem+2.5932vw,3.75rem)] font-bold leading-[.85] md:text-[3.75rem]'>
          Immerse &<br /> Strategize
        </h3>
        <p className='text-base leading-[1.5]'>
          We begin by diving headfirst into your brand—discovering what sets you apart, identifying your ideal audience,
          and clarifying your ultimate goals. This immersive process includes competitor analysis, market research, and
          brand audits to ensure we fully understand your unique value proposition. By synthesizing these insights, we
          craft a robust marketing roadmap tailored to your specific needs. Every step of the way, we collaborate
          closely with you, aligning on objectives, messaging, and measurable KPIs. The result is a comprehensive
          strategy that lays the foundation for powerful campaigns designed to capture attention and ignite growth.
        </p>
      </div>
    </div>
  );
};

const Run = () => {
  const runRef = useRef<HTMLDivElement>(null);
  const bigTitle = useRef<HTMLSpanElement>(null);
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!runRef.current) return;
    const h31 = new SplitType(block1Ref.current!.querySelector("h3")!, {
      types: "words,chars",
    });
    const h32 = new SplitType(block2Ref.current!.querySelector("h3")!, {
      types: "words,chars",
    });
    const p1 = new SplitType(block1Ref.current!.querySelector("p")!, {
      types: "words",
    });
    const p2 = new SplitType(block2Ref.current!.querySelector("p")!, {
      types: "words",
    });

    const tl = gsap.timeline({
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
      },
      onComplete: () => {
        h31.revert();
        h32.revert();
        p1.revert();
        p2.revert();
      },
    });

    ScrollTrigger.create({
      trigger: runRef.current,
      start: "top 50%",
      markers: false,
      animation: tl,
    });

    tl.fromTo(
      bigTitle.current,
      {
        scale: 1.5,
        opacity: 0,
        x: -20,
      },
      {
        scale: 1,
        opacity: 1,
        x: 0,
        duration: 0.6,
      },
    )
      .fromTo(
        h31.chars,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.02,
        },
      )
      .fromTo(
        p1.words,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.01,
        },
        "-=.6",
      )
      .fromTo(
        h32.chars,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.02,
        },
      )
      .fromTo(
        p2.words,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.01,
        },
        "-=.6",
      );
  }, []);

  return (
    <div
      ref={runRef}
      className='relative mb-[15rem] flex flex-col items-center justify-center gap-12 rounded-[40px] bg-primary px-4 py-[5rem] md:mb-[15rem] md:gap-24 md:px-16 md:py-[9.5rem]'
    >
      <span
        ref={bigTitle}
        className='absolute right-[clamp(1rem,-1.4311rem+10.3728vw,5rem)] top-[clamp(-4.5rem,-3.2844rem+-5.1864vw,-6.5rem)] rotate-[12deg] text-[clamp(5rem,3.1767rem+7.7796vw,8rem)] font-black leading-[1] text-[#0A0B1E] md:right-[7.5rem] md:top-[-9.5rem] md:text-[11.25rem]'
      >
        Run.
      </span>
      <div ref={block1Ref} className='flex flex-1 flex-col items-center justify-center gap-24 md:flex-row'>
        <div className='flex flex-1 flex-col gap-8 text-black'>
          <h3 className='text-[clamp(2.75rem,2.1422rem+2.5932vw,3.75rem)] font-bold leading-[.85] md:text-[3.75rem]'>
            Create & Launch
          </h3>
          <p className='text-base leading-[1.5]'>
            We begin by diving headfirst into your brand—discovering what sets you apart, identifying your ideal
            audience, and clarifying your ultimate goals. This immersive process includes competitor analysis, market
            research, and brand audits to ensure we fully understand your unique value proposition. By synthesizing
            these insights, we craft a robust marketing roadmap tailored to your specific needs. Every step of the way,
            we collaborate closely with you, aligning on objectives, messaging, and measurable KPIs. The result is a
            comprehensive strategy that lays the foundation for powerful campaigns designed to capture attention and
            ignite growth.
          </p>
        </div>
        <figure className='flex flex-1 items-center justify-center'>
          <Image
            src='/images/run-1.png'
            alt='Plan'
            width={450}
            height={500}
            className='h-auto max-h-[20rem] w-auto md:max-h-[50%]'
          />
        </figure>
      </div>
      <div ref={block2Ref} className='flex flex-1 flex-col-reverse items-center justify-center gap-24 md:flex-row'>
        <figure className='flex flex-1 items-center justify-center'>
          <Image
            src='/images/run-2.png'
            alt='Plan'
            width={450}
            height={500}
            className='h-auto max-h-[20rem] w-auto md:max-h-[50%]'
          />
        </figure>
        <div className='flex flex-1 flex-col gap-8 text-black'>
          <h3 className='text-[clamp(2.75rem,2.1422rem+2.5932vw,3.75rem)] font-bold leading-[.85] md:text-[3.75rem]'>
            Analyze &<br /> Optimize
          </h3>
          <p className='text-base leading-[1.5]'>
            Once campaigns are live, we rigorously track performance and collect data on everything from engagement
            rates to lead conversions. This granular analysis goes beyond vanity metrics, allowing us to uncover
            meaningful insights into audience behavior and campaign effectiveness. Using these findings, we refine our
            tactics—adjusting creative elements, reallocating budgets, and testing new approaches to keep your momentum
            strong. It’s a continuous feedback loop that ensures your marketing efforts evolve alongside your brand and
            the ever-changing market landscape. By constantly optimizing and innovating, we help you stay ahead of the
            curve and achieve sustainable, scalable success.
          </p>
        </div>
      </div>
    </div>
  );
};

const Recap = () => {
  const recapRef = useRef<HTMLDivElement>(null);
  const bigTitle = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!recapRef.current) return;
    const h3 = new SplitType(recapRef.current.querySelector("h3")!, {
      types: "words,chars",
    });
    const p = new SplitType(recapRef.current.querySelector("p")!, {
      types: "words",
    });
    const tl = gsap.timeline({
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
      },
    });

    ScrollTrigger.create({
      trigger: recapRef.current,
      start: "top 50%",
      markers: false,
      animation: tl,
    });

    tl.fromTo(
      bigTitle.current,
      {
        scale: 1.5,
        opacity: 0,
        x: -20,
      },
      {
        scale: 1,
        opacity: 1,
        x: 0,
        duration: 0.6,
      },
    )
      .fromTo(
        h3.chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.02,
        },
      )
      .fromTo(
        p.words,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.01,
        },
        "-=.6",
      );
  }, []);

  return (
    <div
      ref={recapRef}
      className='relative mb-[10rem] flex flex-col items-center justify-center gap-12 rounded-[40px] bg-black px-4 py-[5rem] md:mb-[15rem] md:flex-row md:gap-24 md:px-16 md:py-[9.5rem]'
    >
      <span
        ref={bigTitle}
        className='absolute left-[clamp(1rem,-1.4311rem+10.3728vw,5rem)] top-[clamp(-4.5rem,-3.2844rem+-5.1864vw,-6.5rem)] rotate-[-12deg] text-[clamp(5rem,3.1767rem+7.7796vw,8rem)] font-black leading-[1] text-[#0A0B1E] md:left-[7.5rem] md:top-[-9.5rem] md:text-[11.25rem]'
      >
        <span className='text-primary'>Recap</span>.
      </span>
      <div className='flex flex-1 flex-col gap-8 text-white'>
        <h3 className='text-[clamp(2.75rem,2.1422rem+2.5932vw,3.75rem)] font-bold leading-[.85] md:text-[3.75rem]'>
          The Big Picture
        </h3>
        <p className='text-base leading-[1.5]'>
          Our holistic, three-phase marketing framework—Immerse & Strategize, Create & Launch, Analyze &
          Optimize—ensures every campaign is backed by deep insights, brought to life through creative excellence, and
          continuously refined for sustained impact. We start by immersing ourselves in your brand to develop a
          tailored, results-driven roadmap, then launch multi-channel strategies that resonate with your audience.
          Through ongoing analysis, we refine tactics to keep your brand on the cutting edge, driving measurable
          outcomes in an ever-evolving market. It’s a dynamic process that nurtures continuous growth, helping you
          see—and seize—the full scope of your brand’s potential.
        </p>
      </div>
      <figure className='flex flex-1 items-center justify-center'>
        <Image
          src='/images/recap-img.png'
          alt='Plan'
          width={450}
          height={500}
          className='h-auto max-h-[20rem] w-auto md:max-h-[50%]'
        />
      </figure>
    </div>
  );
};

const Collaborate = () => {
  const collaborateRef = useRef<HTMLDivElement>(null);
  const bigTitle = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!collaborateRef.current) return;
    const h3 = new SplitType(collaborateRef.current.querySelector("h3")!, {
      types: "words,chars",
    });
    const p = new SplitType(collaborateRef.current.querySelector("p")!, {
      types: "words",
    });
    const tl = gsap.timeline({
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
      },
    });

    ScrollTrigger.create({
      trigger: collaborateRef.current,
      start: "top 50%",
      markers: false,
      animation: tl,
    });

    tl.fromTo(
      bigTitle.current,
      {
        scale: 1.5,
        opacity: 0,
        x: -20,
      },
      {
        scale: 1,
        opacity: 1,
        x: 0,
        duration: 0.6,
      },
    )
      .fromTo(
        h3.chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.02,
        },
      )
      .fromTo(
        p.words,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.01,
        },
        "-=.6",
      );
  }, []);
  return (
    <div
      ref={collaborateRef}
      className='relative mb-[10rem] flex flex-col items-center justify-center gap-12 rounded-[40px] bg-primary px-4 py-[5rem] md:mb-[15rem] md:flex-row md:gap-24 md:px-16 md:py-[9.5rem]'
    >
      <span
        ref={bigTitle}
        className='absolute right-[clamp(1rem,-1.4311rem+10.3728vw,5rem)] top-[clamp(-3.5rem,-3.2844rem+-5.1864vw,-6.5rem)] rotate-[12deg] text-[clamp(3rem,-0.0389rem+12.966vw,8rem)] font-black leading-[1] text-[#0A0B1E] md:right-[7.5rem] md:top-[-9.5rem] md:text-[11.25rem]'
      >
        Collaborate.
      </span>
      <figure className='flex flex-1 items-center justify-center'>
        <Image
          src='/images/collaborate-1.png'
          alt='Plan'
          width={450}
          height={500}
          className='h-auto max-h-[20rem] w-auto md:max-h-[50%]'
        />
      </figure>
      <div className='flex flex-1 flex-col gap-8'>
        <h3 className='text-[clamp(2.75rem,2.1422rem+2.5932vw,3.75rem)] font-bold leading-[.85] md:text-[3.75rem]'>
          Collaborate for
          <br className='hidden md:block' /> Impact
        </h3>
        <p className='text-base leading-[1.5]'>
          At Mark Media, we believe collaboration is the cornerstone of success. By partnering closely with you, we fuse
          your vision with our strategic expertise to build meaningful marketing solutions that truly resonate and
          deliver tangible results. Your insights guide us every step of the way, ensuring a shared vision, unified
          approach, and unstoppable brand growth.
        </p>
      </div>
    </div>
  );
};

export const BluePrint = () => {
  return (
    <div className='md-[10rem] min-h-svh md:mt-[30rem]'>
      <div className='h-max min-h-full overflow-hidden px-[2rem] md:px-[10rem]'>
        <Header />
        <Plan />
        <Run />
        <Recap />
        <Collaborate />
      </div>
    </div>
  );
};
