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
      markers: true,
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
    <div id='about' className='relative h-screen'>
      <div className='flex h-full flex-col items-start justify-center gap-12 py-[7.25rem] pl-[12.5rem] pr-[4rem]'>
        <div className='max-w-[80%]'>
          <span className='text-grayC hide-first border-t-grayC mb-9 block w-[22rem] border-t-2 pt-6 text-[1.875rem] font-extrabold leading-[1.06]'>
            About Us
          </span>
          <h2 className='hide-first mb-5 text-[7.5rem] leading-[.88]'>Where Strategy and Creativity Converge</h2>
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
