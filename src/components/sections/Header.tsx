"use client";
import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { useEffect, useRef } from "react";
import { ContactUsDialog } from "../ui/ContactUsDialog";
import { DialogTrigger } from "../ui/dialog";

CustomEase.create("ease-in-css", ".25, 1, 0.1 ,1");

gsap.registerPlugin(ScrollTrigger, CustomEase);

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Expertise",
    href: "#expertise",
  },
  {
    name: "How it Works",
    href: "#how-it-works",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonial",
    href: "#testimonial",
  },
  {
    name: "Contact Us",
    href: "#footer",
  },
];

export const Header = () => {
  const menuOpen = useRef<HTMLButtonElement>(null);
  const mobileMenu = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const main: HTMLElement = document.querySelector("body")!;

    ScrollTrigger.create({
      start: "top -30%",
      markers: false,
      onUpdate: () => {
        main.classList.add("scrolled");
      },
      onLeaveBack: () => {
        main.classList.remove("scrolled");
      },
    });
  }, []);

  const handleMouseOver = () => {
    const main = document.querySelector("body");
    main?.setAttribute("data-navigation-status", "hover");
  };

  const handleMouseLeave = () => {
    const main = document.querySelector("body");
    if (main?.getAttribute("data-navigation-status") === "hover") {
      main.setAttribute("data-navigation-status", "not-active");
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    const main = document.querySelector("body");
    if (
      main?.getAttribute("data-navigation-status") === "not-active" ||
      main?.getAttribute("data-navigation-status") === "hover"
    ) {
      main.setAttribute("data-navigation-status", "active");
    } else {
      main?.setAttribute("data-navigation-status", "not-active");
    }
  };

  return (
    <div id='home' className='relative'>
      <div className='menu-open-wrapper pointer-events-none fixed right-[32px] top-[16px] z-[49] sm:right-[48px] sm:top-[48px]'>
        <button
          aria-label='Open menu'
          ref={menuOpen}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className='menu-open flex size-[clamp(3.125rem,0.625rem+5.2083vw,6.875rem)] items-center justify-center overflow-hidden rounded-full bg-primary'
          style={{
            boxShadow: "hsl(47.91deg 100% 30.39%) 0px 0px 4px 0px",
          }}
        >
          <svg
            className='arr-svg pointer-events-none absolute size-[1.5rem] sm:size-[4.5rem]'
            width='72'
            height='72'
            viewBox='0 0 72 72'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M35.5537 63.36L8.10767 35.6935L35.5537 8.02686' stroke='#273F2B' strokeWidth='8.64319' />
            <path d='M8.00531 35.5303L59.4932 35.5303' stroke='#273F2B' strokeWidth='8.64319' />
          </svg>
          <svg
            className='arr-svg pointer-events-none absolute left-[116%] size-[4.5rem]'
            width='72'
            height='72'
            viewBox='0 0 72 72'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M35.5537 63.36L8.10767 35.6935L35.5537 8.02686' stroke='#ffcd00' strokeWidth='8.64319' />
            <path d='M8.00531 35.5303L59.4932 35.5303' stroke='#ffcd00' strokeWidth='8.64319' />
          </svg>
        </button>
      </div>
      <div className='menu-screen-wrapper fixed left-0 top-0 z-[1001] hidden w-full justify-end sm:flex'>
        <div className='menu-screen w-ful relative z-[2] flex h-[100dvh] rounded-l-[3.125rem] bg-primary px-[3.125rem] py-[4.5rem] md:w-[35%] md:min-w-[30rem]'>
          <button
            aria-label='Close menu'
            onClick={() => document.body.setAttribute("data-navigation-status", "not-active")}
            className='close-but absolute right-4 top-4 z-[10] flex size-[3.5rem] items-center justify-center rounded-full bg-white'
          >
            <svg
              className='size-[1.25rem]'
              width='19'
              height='19'
              viewBox='0 0 19 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.1233 1.87669C17.6725 2.42587 17.6725 3.31626 17.1233 3.86543L3.86502 17.1237C3.31585 17.6729 2.42546 17.6729 1.87628 17.1237C1.32711 16.5745 1.32711 15.6841 1.87628 15.1349L15.1345 1.87669C15.6837 1.32752 16.5741 1.32752 17.1233 1.87669Z'
                fill='black'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.1228 17.1233C16.5736 17.6724 15.6833 17.6724 15.1341 17.1233L1.87583 3.86502C1.32665 3.31585 1.32665 2.42546 1.87583 1.87628C2.425 1.32711 3.31539 1.32711 3.86457 1.87628L17.1228 15.1345C17.672 15.6837 17.672 16.5741 17.1228 17.1233Z'
                fill='black'
              />
            </svg>
          </button>
          <div className='flex w-full flex-1 flex-col justify-between gap-[48px] overflow-y-scroll sm:w-auto'>
            <div className='flex h-full flex-col justify-between gap-[1.625rem]'>
              <ul className='items-list flex cursor-pointer flex-col gap-4 text-[2.75rem] font-bold leading-[110%]'>
                {links.map((link, index) => (
                  <li key={index} className='cursor-pointer'>
                    <div
                      className='link-click'
                      onClick={() => {
                        document.body.setAttribute("data-navigation-status", "not-active");
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <div className='link-content'>
                        <span className='block leading-[100%]'>{link.name}</span>
                        <svg
                          className='size-4'
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.1687 2.8301L0 13.9988L2.0012 16L13.17 4.8311V13.8675H16.0001V0H2.1327V2.8301H11.1687Z'
                            fill='black'
                          />
                        </svg>
                      </div>
                      <div className='link-content duplicate'>
                        <span className='block leading-[100%]'>{link.name}</span>
                        <svg
                          className='size-4'
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.1687 2.8301L0 13.9988L2.0012 16L13.17 4.8311V13.8675H16.0001V0H2.1327V2.8301H11.1687Z'
                            fill='black'
                          />
                        </svg>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className='flex flex-col gap-5'>
                <Image
                  src='/icons/logo.png'
                  alt='Mark Media'
                  width={115}
                  height={60}
                  className='w-[5.5rem] sm:w-[7.25rem]'
                />
                <span className='text-[1.25rem] font-medium'>Where Strategy Meets Success</span>
                <div className='flex gap-[.625rem]'>
                  <Link className='cursor-pointer' href='https://www.instagram.com/markmedia.id/' target='_blank'>
                    <Image src='/icons/instagram.svg' alt='Instagram' width={24} height={24} />
                  </Link>
                  <Link className='cursor-pointer' href='https://www.facebook.com/markmedia.id/' target='_blank'>
                    <Image src='/icons/facebook.svg' alt='Facebook' width={24} height={24} />
                  </Link>
                  <Link className='cursor-pointer' href='https://www.twitter.com/markmedia.id/' target='_blank'>
                    <Image src='/icons/twitter.svg' alt='Twitter' width={24} height={24} />
                  </Link>
                  <Link className='cursor-pointer' href='https://www.tiktok.com/@markmedia.id' target='_blank'>
                    <Image src='/icons/tiktok.svg' alt='TikTok' width={24} height={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='overlay absolute left-0 top-0 z-[1] h-full w-full bg-[#3837373D] opacity-0'></div>
      </div>
      <div className='mobile-menu-wrapper fixed left-0 top-0 z-[1001] h-[100svh] w-full bg-primary sm:hidden'>
        <div className='relative h-full w-full'>
          <button
            aria-label='Close menu'
            onClick={() => document.body.setAttribute("data-navigation-status", "not-active")}
            className='close-but absolute right-4 top-4 z-[10] flex size-[3.5rem] items-center justify-center rounded-full bg-white'
          >
            <svg
              className='size-[1.25rem]'
              width='19'
              height='19'
              viewBox='0 0 19 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.1233 1.87669C17.6725 2.42587 17.6725 3.31626 17.1233 3.86543L3.86502 17.1237C3.31585 17.6729 2.42546 17.6729 1.87628 17.1237C1.32711 16.5745 1.32711 15.6841 1.87628 15.1349L15.1345 1.87669C15.6837 1.32752 16.5741 1.32752 17.1233 1.87669Z'
                fill='black'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.1228 17.1233C16.5736 17.6724 15.6833 17.6724 15.1341 17.1233L1.87583 3.86502C1.32665 3.31585 1.32665 2.42546 1.87583 1.87628C2.425 1.32711 3.31539 1.32711 3.86457 1.87628L17.1228 15.1345C17.672 15.6837 17.672 16.5741 17.1228 17.1233Z'
                fill='black'
              />
            </svg>
          </button>
          <div className='flex h-full flex-col justify-between gap-[1.625rem] px-4 py-6'>
            <Image
              src='/icons/logo.png'
              alt='Mark Media'
              width={115}
              height={60}
              className='w-[5.5rem] sm:w-[7.25rem]'
            />
            <ul className='items-list flex cursor-pointer flex-col gap-4 text-[1.875rem] font-bold leading-[110%]'>
              {links.map((link, index) => (
                <li key={index} className='cursor-pointer'>
                  <div
                    className='flex items-end gap-2'
                    onClick={() => {
                      document.body.setAttribute("data-navigation-status", "not-active");
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className='block leading-[100%]'>{link.name}</span>
                    <svg
                      className='size-3'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.1687 2.8301L0 13.9988L2.0012 16L13.17 4.8311V13.8675H16.0001V0H2.1327V2.8301H11.1687Z'
                        fill='black'
                      />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
            <div className='flex flex-col gap-5'>
              <Image
                src='/icons/logo.png'
                alt='Mark Media'
                width={115}
                height={60}
                className='w-[5.5rem] sm:w-[7.25rem]'
              />
              <span className='text-[1.25rem] font-medium'>Where Strategy Meets Success</span>
              <div className='flex gap-[.625rem]'>
                <Link className='cursor-pointer' href='https://www.instagram.com/markmedia.id/' target='_blank'>
                  <Image src='/icons/instagram.svg' alt='Instagram' width={24} height={24} />
                </Link>
                <Link className='cursor-pointer' href='https://www.facebook.com/markmedia.id/' target='_blank'>
                  <Image src='/icons/facebook.svg' alt='Facebook' width={24} height={24} />
                </Link>
                <Link className='cursor-pointer' href='https://www.twitter.com/markmedia.id/' target='_blank'>
                  <Image src='/icons/twitter.svg' alt='Twitter' width={24} height={24} />
                </Link>
                <Link className='cursor-pointer' href='https://www.tiktok.com/@markmedia.id' target='_blank'>
                  <Image src='/icons/tiktok.svg' alt='TikTok' width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='flex h-[4rem] w-full items-center justify-between gap-2 border-b border-[#BABABA33] bg-white px-8 py-4 sm:h-[6.25rem] md:px-16'
        style={{
          boxShadow: "0px 4px 100px 0px #C3C3C340",
        }}
      >
        <Image
          src='/icons/logo.png'
          width={115}
          height={60}
          className='w-[5.5rem] sm:w-[7.25rem]'
          alt='Media Mark Logo'
        />
        <ul className='hidden gap-10 text-[1.125rem] md:flex'>
          {links.map((link, index) => (
            <li
              key={index}
              className='cursor-pointer'
              onClick={() => {
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link.name}
            </li>
          ))}
        </ul>
        <ContactUsDialog>
          <DialogTrigger className='hidden rounded-[.75rem] bg-primary px-3 py-2 text-sm font-bold text-black sm:block md:rounded-[1.25rem] md:px-6 md:py-4 md:text-base'>
            Schedule Meeting
          </DialogTrigger>
        </ContactUsDialog>
        <button
          aria-label='Open menu'
          ref={mobileMenu}
          onClick={handleClick}
          className='rounded-[10px] bg-primary px-4 py-2.5 sm:hidden'
        >
          <svg
            className='h-3.5 w-[1.125rem]'
            width='18'
            height='14'
            viewBox='0 0 18 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 7H17M1 1H17M1 13H17'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
