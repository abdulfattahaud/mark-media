"use client";
import Image from "next/image";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useEffect } from "react";
import { ContactUsDialog } from "../ui/ContactUsDialog";
import { DialogTrigger } from "../ui/dialog";

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
        delay: 0.75,
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
      )
      .fromTo(
        [".white-grid .box-1", ".white-grid .box-2"],
        {
          scaleX: 1,
        },
        { scaleX: 0, duration: 2, ease: "expo.out" },
        "-=2",
      );
  }, []);
  return (
    <div id='main-section' className='relative h-[calc((var(--vh)*100)-4rem)] xsh:h-[calc((var(--vh)*100)-2.5rem)] smh:h-[calc(calc(var(--vh)*100)-clamp(4rem,0.5rem+16vh,6.5rem))] sm:h-[calc((var(--vh)*100)-6.25rem)] border-b-[1.25rem] border-b-primary'>
      <div className='flex h-full flex-col items-center gap-10 pl-[4rem] sm:flex-row md:pl-[12.5rem]'>
        <div className='flex h-full w-full flex-col smh:text-[clamp(0.5rem,-0.025rem+2.4vh,0.875rem)] xsh:text-[clamp(0.5rem,-0.025rem+2.4vh,0.875rem)] items-start justify-center text-white sm:h-auto sm:w-1/2 sm:justify-start sm:text-black'>
          <span className='hide-first mb-[.5em] text-[1.25em] font-extrabold leading-[1.06] text-white sm:text-grayC md:text-[1.875em]'>
            Mark Media
          </span>
          <h1 className='hide-first xsh:mb-[1.25rem] mb-[1.75rem] text-[clamp(2.5em,-2.6429em+10.7143vw,4em)] leading-[1.06] md:text-[6em]'>
            Your Bridge To Unstoppable
            <br /> Brand Success
          </h1>
          <p className='hide-first xsh:mb-[1.25rem] mb-[2.125em] text-[1.25em] leading-[1.2] text-white sm:text-grayC md:text-[1.5em]'>
            Leading You From Vision to Victory With Strategic, Results-
            <br />
            Driven Marketing Solutions
          </p>
          <ContactUsDialog>
            <DialogTrigger className='rounded-[.75em] bg-primary px-[.75em] py-[.5em] text-[.875em] font-bold text-black opacity-0 md:rounded-[1.25em] md:px-[1.5em] md:py-[1em] md:text-[1em]'>
              Schedule Meeting
            </DialogTrigger>
          </ContactUsDialog>
        </div>
        <div className='absolute left-0 top-0 z-[-1] h-full w-full sm:relative sm:inset-auto sm:z-auto sm:w-1/2'>
          <div className='white-grid absolute z-[1] hidden size-full grid-cols-3 grid-rows-3 sm:grid'>
            <div className=''></div>
            <div className=''></div>
            <div className=''></div>
            <div className='box-1 origin-left bg-white'></div>
            <div className=''></div>
            <div className=''></div>
            <div className='box-2 col-span-2 origin-left bg-white'></div>
            <div className=''></div>
          </div>
          <Image
            src='/images/hero-main-ct.png'
            alt='Main hero image'
            className='h-full max-h-[890px] w-full object-cover sm:max-h-none'
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            priority
            loading='eager'
          />
          <div className='overlay absolute left-0 top-0 block size-full bg-[#00000048] sm:hidden'></div>
          <Image
            src='/icons/sci.svg'
            className='absolute bottom-5 left-5 z-[10] hidden h-[5rem] w-[7.5rem] sm:block'
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
