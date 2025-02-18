"use client";
import gsap from "gsap";
import { AboutSlider } from "../ui/AboutSlider";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
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
    <div id='about' className='relative min-h-screen md:h-screen md:min-h-[850px]'>
      <div className='flex h-full flex-col items-start justify-center gap-12 py-[3rem] pl-[2.5rem] pr-[1rem] sm:py-[7.25rem] sm:pl-[12.5rem]'>
        <div className='pl-[1.5rem] sm:max-w-[80%] sm:pl-0'>
          <span className='text-grayC hide-first border-t-grayC mb-9 block w-max border-t-2 pt-6 text-[1.875rem] font-extrabold leading-[1.06] sm:w-[22rem]'>
            About Us
          </span>
          <h2 className='hide-first mb-5 text-[clamp(2.5rem,-14.6429rem+35.7143vw,7.5rem)] leading-[.88] md:text-[7.5rem]'>
            Where Strategy and Creativity Converge
          </h2>
          <blockquote className='hide-first'>
            Empowering Your Brand’s Growth Through Innovative, Results-Driven Marketing Solutions
          </blockquote>
        </div>
        <AboutSlider />
      </div>
      <div className='left-border'></div>
    </div>
  );
};
