"use client";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

type Slide = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    image: {
      src: "/images/exp-slide-01-c.png",
      alt: "Slide 1",
    },
    title: "Branding & Strategy",
    description:
      "We craft compelling brand identities and tailor marketing roadmaps that clearly articulate your vision, mission, and unique value proposition. By aligning creative insight with strategic precision, we position your brand for sustained growth and lasting market impact.",
  },
  {
    image: {
      src: "/images/exp-slide-02-c.png",
      alt: "Slide 2",
    },
    title: "Digital Marketing",
    description:
      "We amplify your online presence through SEO, PPC, and data-driven social media strategies that captivate and convert your target audience. Leveraging the latest tools and insights, we create tailored campaigns that drive measurable growth and lasting engagement.",
  },
  {
    image: {
      src: "/images/exp-slide-03-c.png",
      alt: "Slide 3",
    },
    title: "Data Analytics & Optimization",
    description:
      "We harness data to measure performance and gain actionable insights, enabling continuous refinement of your campaigns. By systematically analyzing results and optimizing strategies, we maximize ROI and keep your brand ahead in a dynamic market.",
  },
  {
    image: {
      src: "/images/exp-slide-04.png",
      alt: "Slide 1",
    },
    title: "Influencer Marketing",
    description:
      "We connect your brand with relevant influencers to authentically engage target audiences and build trust. By designing collaborative campaigns that leverage influencers' reach and credibility, we amplify your message and drive meaningful brand awareness.",
  },
  {
    image: {
      src: "/images/exp-slide-05.png",
      alt: "Slide 2",
    },
    title: "Content Creation & Management",
    description:
      "We produce high-quality, relevant content—from blog posts and videos to graphics—that resonates with your audience. By managing strategic content calendars and distribution, we ensure consistent engagement and amplify your brand’s voice across channels.",
  },
  {
    image: {
      src: "/images/exp-slide-06.png",
      alt: "Slide 3",
    },
    title: "Website Design & Development",
    description:
      "We craft visually stunning, user-friendly websites optimized for performance and conversion, ensuring a seamless digital experience across all devices. By blending creative design with robust development, we build online platforms that effectively communicate your brand and drive business results.",
  },
  {
    image: {
      src: "/images/exp-slide-07.png",
      alt: "Slide 3",
    },
    title: "Public Relations (PR)",
    description:
      "We manage media relations and craft compelling press releases to boost brand visibility, credibility, and positive public perception. Through strategic communications and expert crisis management, we protect and enhance your brand’s reputation.",
  },
  {
    image: {
      src: "/images/exp-slide-08.png",
      alt: "Slide 3",
    },
    title: "Video Production & Animation",
    description:
      "We create engaging video content and animated storytelling that captivates your audience while effectively conveying your brand message. By blending creative vision with technical expertise, we produce high-quality visuals that drive engagement and enhance brand identity.",
  },
];

const SlideItem = ({ slide }: { slide: Slide }) => {
  const [isOpen, setIsOpen] = useState(false);
  const item = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const splitP = new SplitType("#expertise .embla__slide p", {
      types: "lines,words",
    });
    gsap.set(splitP.words, {
      opacity: 0,
      yPercent: 50,
    });
    return () => splitP.revert();
  }, []);

  useEffect(() => {
    if (!item.current) return;
    if (isOpen) {
      gsap.fromTo(
        item.current?.querySelectorAll("p .word"),
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.02,
          duration: 0.5,
        },
      );
    } else {
      gsap.to(item.current?.querySelectorAll("p .word"), {
        opacity: 0,
        yPercent: 50,
        duration: 0.5,
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={item}
      className='embla__slide relative mr-4 sm:!basis-[calc((100%/2)-1rem)] md:!basis-[calc((100%/3)-1rem)]'
    >
      <Image
        src={slide.image.src}
        alt={slide.image.alt}
        width={488}
        height={400}
        className='h-[32rem] w-full rounded-[25px] object-cover md:h-[25rem]'
      />
      <div
        className={`absolute bottom-3 left-3 flex flex-col overflow-hidden ${isOpen ? "h-[calc(100%-1.5rem)] rounded-[20px] bg-[#FFCD00CC]" : "h-[2.5rem] rounded-[50px] bg-primary md:h-[4rem]"} w-[calc(100%-1.5rem)] px-2 py-2 transition-[height_background]`}
      >
        <div className={`flex ${isOpen ? "h-auto" : "h-full"} items-center justify-between transition-[height]`}>
          <h3 className='pl-5 font-extrabold'>{slide.title}</h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close" : "Open"}
            className='flex size-[1.5rem] items-center justify-center rounded-full bg-white md:size-[3rem]'
          >
            <svg
              className={`size-[1rem] md:size-[1.5rem] ${isOpen ? "rotate-[140deg]" : ""} transition-[transform]`}
              width='26'
              height='26'
              viewBox='0 0 26 26'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M20.4702 13.0901H5.47021H20.4702Z' fill='black' />
              <path d='M20.4702 13.0901H5.47021' stroke='black' strokeWidth='2' strokeLinecap='round' />
              <path d='M20.4699 13.0903L14.4702 19.0903L20.4699 13.0903Z' fill='black' />
              <path d='M20.4699 13.0903L14.4702 19.0903' stroke='black' strokeWidth='2' strokeLinecap='round' />
              <path d='M20.4702 13.0901L14.4702 7.09009L20.4702 13.0901Z' fill='black' />
              <path d='M20.4702 13.0901L14.4702 7.09009' stroke='black' strokeWidth='2' strokeLinecap='round' />
            </svg>
          </button>
        </div>
        <p
          className={`my-auto text-sm leading-[1.5] md:text-[1.25rem] ${isOpen ? "opacity-100" : "opacity-0"} transition-[opacity]`}
        >
          {slide.description}
        </p>
      </div>
    </div>
  );
};

export const Expertise = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: true }, [
    WheelGesturesPlugin(),
  ]);
  useEffect(() => {
    const h2Split = new SplitType("#expertise h2", {
      types: "words,chars",
    });
    const spanSplit1 = new SplitType("#expertise span.text-sm", {
      types: "words,chars",
    });
    const spanSplit2 = new SplitType("#expertise span.span-2", {
      types: "words,chars",
    });
    const tl = gsap.timeline({
      defaults: {
        ease: (i) => 1 - Math.pow(1 - i, 3),
      },
      onComplete: () => {
        h2Split.revert();
        spanSplit1.revert();
        spanSplit2.revert();
      },
      onStart: () => {
        document.querySelectorAll(".hide-first").forEach((el) => {
          el.classList.remove("hide-first");
        });
      },
    });

    ScrollTrigger.create({
      trigger: "#expertise",
      start: "top 70%",
      end: "bottom bottom",
      markers: false,
      animation: tl,
    });
    tl.fromTo("#expertise .exp-icon", { opacity: 0 }, { opacity: 1 })
      .fromTo(
        spanSplit1.chars,
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
        spanSplit2.chars,
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
    <div id='expertise' className='relative h-max overflow-hidden bg-primary pr-4 sm:pr-0'>
      <div className='relative z-[2] flex h-full flex-col justify-center gap-10 pb-[2rem] pl-[2.5rem] pt-[3rem] sm:pl-[4rem] md:py-[7.25rem] md:pl-[12.5rem]'>
        <div className='flex flex-col items-start gap-8'>
          <div className='flex items-center gap-5'>
            <Image
              src='/icons/exp-icon.png'
              alt='icon'
              width={60}
              height={60}
              className='exp-icon hide-first size-[1.875rem] md:size-[3.75rem]'
            />
            <span className='hide-first text-sm font-bold md:text-[1.75rem]'>Expertise</span>
          </div>
          <h2 className='hide-first text-[2.75rem] leading-[.84] md:text-[5.5rem]'>
            Supercharge Your
            <br /> Growth
          </h2>
          <span className='hide-first span-2 text-base md:text-[1.25rem]'>
            Harness Our Full-Spectrum Marketing Services to
            <br /> Catapult Your Brand’s Reach and Results
          </span>
          {/* <button className='flex items-center gap-5 rounded-[85px] bg-white p-1.5 pl-[1.6rem]'>
            <span className='text-xs md:text-base'>Explore our work</span>
            <div className='flex size-[1.875rem] items-center justify-center rounded-full bg-black md:size-[3.5rem]'>
              <svg
                className='size-[.75rem] md:size-[1.5rem]'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M20.4702 13.0901H5.47021H20.4702Z' fill='black' />
                <path d='M20.4702 13.0901H5.47021' stroke='white' strokeWidth='2' strokeLinecap='round' />
                <path d='M20.4699 13.0903L14.4702 19.0903L20.4699 13.0903Z' fill='black' />
                <path d='M20.4699 13.0903L14.4702 19.0903' stroke='white' strokeWidth='2' strokeLinecap='round' />
                <path d='M20.4702 13.0901L14.4702 7.09009L20.4702 13.0901Z' fill='black' />
                <path d='M20.4702 13.0901L14.4702 7.09009' stroke='white' strokeWidth='2' strokeLinecap='round' />
              </svg>
            </div>
          </button> */}
          <div className='embla__actions left-0 top-[20px] flex gap-1'>
            <button
              onClick={() => {
                emblaApi?.scrollPrev();
              }}
              aria-label='Previous'
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
              onClick={() => {
                emblaApi?.scrollNext();
              }}
              aria-label='Next'
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
        <div className='embla relative w-full' ref={emblaRef}>
          <div className='embla__container'>
            {slides.map((slide, index) => (
              <SlideItem key={index} slide={slide} />
            ))}
          </div>
        </div>
      </div>
      <Image
        src='/images/exp-bg-ct.png'
        alt='Background noise'
        width={1600}
        height={1150}
        className='absolute hidden sm:block right-0 top-0 z-[1] size-full object-cover'
      />
      <Image
        src='/images/exp-bg-ct.png'
        alt='Background noise'
        width={400}
        height={800}
        className='absolute sm:hidden right-0 top-0 z-[1] size-full object-cover'
      />
    </div>
  );
};
