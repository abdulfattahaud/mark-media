"use client";
import AutoHeight from "embla-carousel-auto-height";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ContactUsDialog } from "../ui/ContactUsDialog";
import { DialogTrigger } from "../ui/dialog";
export const Pricing = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [AutoHeight()]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      if (!wrapperRef.current) return;
      console.log("test");

      const h2 = new SplitType(wrapperRef.current.querySelector("h2")!, {
        types: "words,chars",
      });
      const p = new SplitType(wrapperRef.current.querySelector("p")!, {
        types: "words,chars",
      });
      const tl = gsap.timeline({
        defaults: {
          ease: (i) => 1 - Math.pow(1 - i, 3),
        },
      });

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top 50%",
        markers: false,
        animation: tl,
      });

      tl.fromTo(
        h2.chars,
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
        p.chars,
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
    });
  }, []);
  return (
    <div id='pricing' ref={wrapperRef} className='relative h-max min-h-svh'>
      <Image
        src='/images/busniess-bg-c.webp'
        alt=''
        width={1600}
        height={1200}
        className='absolute left-0 top-0 h-full w-full object-cover'
      />
      <div className='relative z-[1] flex flex-col items-center px-4 py-[8.25rem] sm:px-10 md:px-20'>
        <header className='mb-[1.5rem] flex flex-col items-center justify-center gap-6 text-center text-white'>
          <h2 className='text-[2.75rem] font-bold leading-[.84] md:text-[4rem]'>Start Your Business Journey with Us</h2>
          <p className='text-[1.25rem] leading-[1.4]'>Step Forward Together—We’ll Guide You from Vision to Victory</p>
        </header>
        <div className='grid flex-1 grid-cols-1 gap-4 rounded-[20px] bg-primary px-6 pb-[2.5rem] pt-[4.5rem] sm:px-[2.25rem] md:grid-cols-3'>
          <div className='flex flex-col'>
            <div className='mb-[3rem] flex flex-col gap-7'>
              <h3 className='text-[2rem] leading-[1.2]'>
                Save More
                <br />
                <span className='font-bold'>With Goodplans.</span>
              </h3>
              <p className='text-[1.125rem]'>
                Pick a plan, get started in minutes, and enjoy a $100 credit on your next payment.
              </p>
            </div>
            <div className='hidden rounded-[20px] bg-white p-6 sm:block sm:rounded-[3.125rem] sm:p-10'>
              <div className='mb-[2rem] flex items-center gap-6 border-b border-[#ECEDF1] pb-[1.875rem]'>
                <Image
                  src='/icons/pricing-icon.svg'
                  alt=''
                  width={90}
                  height={90}
                  className='size-[3.75rem] sm:size-[5.625rem]'
                />
                <div className='flex flex-col'>
                  <h4 className='text-[1.25rem] font-medium leading-[1.2]'>Basic</h4>
                  <p className='text-[1.25rem] font-bold leading-[1.2] sm:text-[1.5rem]'>Foundations Package</p>
                </div>
              </div>
              <ul className='mb-[2rem] flex flex-col gap-6 text-[1.125rem]'>
                <li className='flex items-center justify-between'>
                  <span className='font-medium text-[#1C2348]'>Essential Branding & Strategy</span>
                  <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                </li>
                <li className='flex items-center justify-between'>
                  <span className='font-medium text-[#1C2348]'>Responsive Website Design & Development</span>
                  <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                </li>
                <li className='flex items-center justify-between'>
                  <span className='font-medium text-[#1C2348]'>Foundational Digital Marketing</span>
                  <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                </li>
                <li className='flex items-center justify-between'>
                  <span className='font-medium text-[#1C2348]'>Basic Content Creation</span>
                  <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                </li>
              </ul>
              <ContactUsDialog>
                <DialogTrigger className='h-[3.125rem] w-full rounded-[60px] bg-primary text-[1.1875rem] font-medium text-black'>
                  Schedule Demo
                </DialogTrigger>
              </ContactUsDialog>
            </div>
          </div>
          <div className='mt-auto hidden h-max rounded-[20px] bg-white p-6 sm:block sm:rounded-[3.125rem] sm:p-10'>
            <div className='mb-[2rem] flex items-center gap-6 border-b border-[#ECEDF1] pb-[1.875rem]'>
              <Image
                src='/icons/pricing-icon.svg'
                alt=''
                width={90}
                height={90}
                className='size-[3.75rem] sm:size-[5.625rem]'
              />
              <div className='flex flex-col'>
                <h4 className='text-[1.25rem] font-medium leading-[1.2]'>Standard</h4>
                <p className='text-[1.25rem] font-bold leading-[1.2] sm:text-[1.5rem]'>Accelerate Package</p>
              </div>
            </div>
            <ul className='mb-[2rem] flex flex-col gap-6 text-[1.125rem]'>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Comprehensive Branding & Strategy</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Custom Website Design & Development</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Custom Website Design & Development</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Strategic Content Creation</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Monthly Data Analysis & Optimization </span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
            </ul>
            <ContactUsDialog>
              <DialogTrigger className='h-[3.125rem] w-full rounded-[60px] bg-primary text-[1.1875rem] font-medium text-black'>
                Schedule Demo
              </DialogTrigger>
            </ContactUsDialog>
          </div>
          <div className='hidden rounded-[20px] bg-white p-6 sm:block sm:rounded-[3.125rem] sm:p-10'>
            <div className='mb-[2rem] flex items-center gap-6 border-b border-[#ECEDF1] pb-[1.875rem]'>
              <Image
                src='/icons/pricing-icon.svg'
                alt=''
                width={90}
                height={90}
                className='size-[3.75rem] sm:size-[5.625rem]'
              />
              <div className='flex flex-col'>
                <h4 className='text-[1.25rem] font-medium leading-[1.2]'>Premium</h4>
                <p className='text-[1.25rem] font-bold leading-[1.2] sm:text-[1.5rem]'>Elevate Package</p>
              </div>
            </div>
            <ul className='mb-[2rem] flex flex-col gap-6 text-[1.125rem]'>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Full-Scale Branding & Strategy</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Advanced Website Design & Development</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Multi-Channel Digital Marketing</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Professional Content Creation</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Comprehensive PR</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Influencer Marketing</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Advanced Data Analysis</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>24/7 Customer Support</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
            </ul>
            <ContactUsDialog>
              <DialogTrigger className='h-[3.125rem] w-full rounded-[60px] bg-primary text-[1.1875rem] font-medium text-black'>
                Schedule Demo
              </DialogTrigger>
            </ContactUsDialog>
          </div>
          <div className='embla sm:hidden' ref={emblaRef}>
            <div className='embla__container items-start transition-[height]'>
              <div className='embla__slide mr-4'>
                <div className='rounded-[20px] bg-white p-6 sm:rounded-[3.125rem] sm:p-10'>
                  <div className='mb-[2rem] flex items-center gap-6 border-b border-[#ECEDF1] pb-[1.875rem]'>
                    <Image
                      src='/icons/pricing-icon.svg'
                      alt=''
                      width={90}
                      height={90}
                      className='size-[3.75rem] sm:size-[5.625rem]'
                    />
                    <div className='flex flex-col'>
                      <h4 className='text-[1.25rem] font-medium leading-[1.2]'>Basic</h4>
                      <p className='text-[1.25rem] font-bold leading-[1.2] sm:text-[1.5rem]'>Foundations Package</p>
                    </div>
                  </div>
                  <ul className='mb-[2rem] flex flex-col gap-6'>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Essential Branding & Strategy</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Responsive Website Design & Development</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Foundational Digital Marketing</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Basic Content Creation</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                  </ul>
                  <ContactUsDialog>
                    <DialogTrigger className='h-[3.125rem] w-full rounded-[60px] bg-primary text-[1.1875rem] font-medium text-black'>
                      Schedule Demo
                    </DialogTrigger>
                  </ContactUsDialog>
                </div>
              </div>
              <div className='embla__slide mr-4'>
                <div className='rounded-[20px] bg-white p-6 sm:rounded-[3.125rem] sm:p-10'>
                  <div className='mb-[2rem] flex items-center gap-6 border-b border-[#ECEDF1] pb-[1.875rem]'>
                    <Image
                      src='/icons/pricing-icon.svg'
                      alt=''
                      width={90}
                      height={90}
                      className='size-[3.75rem] sm:size-[5.625rem]'
                    />
                    <div className='flex flex-col'>
                      <h4 className='text-[1.25rem] font-medium leading-[1.2]'>Standard</h4>
                      <p className='text-[1.25rem] font-bold leading-[1.2] sm:text-[1.5rem]'>Accelerate Package</p>
                    </div>
                  </div>
                  <ul className='mb-[2rem] flex flex-col gap-6'>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Comprehensive Branding & Strategy</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Custom Website Design & Development</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Custom Website Design & Development</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Strategic Content Creation</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Monthly Data Analysis & Optimization </span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                  </ul>
                  <ContactUsDialog>
                    <DialogTrigger className='h-[3.125rem] w-full rounded-[60px] bg-primary text-[1.1875rem] font-medium text-black'>
                      Schedule Demo
                    </DialogTrigger>
                  </ContactUsDialog>
                </div>
              </div>
              <div className='embla__slide mr-4'>
                <div className='rounded-[20px] bg-white p-6 sm:rounded-[3.125rem] sm:p-10'>
                  <div className='mb-[2rem] flex items-center gap-6 border-b border-[#ECEDF1] pb-[1.875rem]'>
                    <Image
                      src='/icons/pricing-icon.svg'
                      alt=''
                      width={90}
                      height={90}
                      className='size-[3.75rem] sm:size-[5.625rem]'
                    />
                    <div className='flex flex-col'>
                      <h4 className='text-[1.25rem] font-medium leading-[1.2]'>Premium</h4>
                      <p className='text-[1.25rem] font-bold leading-[1.2] sm:text-[1.5rem]'>Elevate Package</p>
                    </div>
                  </div>
                  <ul className='mb-[2rem] flex flex-col gap-6'>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Mail Service Auth</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Users Google Form</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Responsive Template</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Bulk Upload Images</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Grid Automatically On</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Unlimited Links</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>Export to Sheets</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='font-medium text-[#1C2348]'>24/7 Customer Support</span>
                      <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                    </li>
                  </ul>
                  <ContactUsDialog>
                    <DialogTrigger className='h-[3.125rem] w-full rounded-[60px] bg-primary text-[1.1875rem] font-medium text-black'>
                      Schedule Demo
                    </DialogTrigger>
                  </ContactUsDialog>
                </div>
              </div>
            </div>
            <div className='embla__actions mt-8 flex justify-center gap-1'>
              <button
                aria-label='Previous'
                onClick={() => {
                  emblaApi?.scrollPrev();
                }}
                className='flex size-[3.5rem] items-center justify-center rounded-full border-[.5rem] border-[#E3B700] bg-black'
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
                className='flex size-[3.5rem] items-center justify-center rounded-full border-[.5rem] border-[#E3B700] bg-black'
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
        </div>
      </div>
    </div>
  );
};
