"use client";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

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
      src: "/images/exp-slide-01.png",
      alt: "Slide 1",
    },
    title: "Branding & Strategy",
    description:
      "We craft compelling brand identities and tailor marketing roadmaps that clearly articulate your vision, mission, and unique value proposition. By aligning creative insight with strategic precision, we position your brand for sustained growth and lasting market impact.",
  },
  {
    image: {
      src: "/images/exp-slide-02.png",
      alt: "Slide 2",
    },
    title: "Digital Marketing",
    description:
      "We amplify your online presence through SEO, PPC, and data-driven social media strategies that captivate and convert your target audience. Leveraging the latest tools and insights, we create tailored campaigns that drive measurable growth and lasting engagement.",
  },
  {
    image: {
      src: "/images/exp-slide-03.png",
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
  return (
    <div className='embla__slide relative mr-4 sm:!basis-[calc((100%/2)-1rem)] md:!basis-[calc((100%/3)-1rem)]'>
      <Image
        src={slide.image.src}
        alt={slide.image.alt}
        width={488}
        height={400}
        className='h-[18rem] w-full rounded-[25px] object-cover md:h-[25rem]'
      />
      <div
        className={`absolute bottom-3 left-3 flex flex-col overflow-hidden ${isOpen ? "h-[calc(100%-1.5rem)] rounded-[20px] bg-[#FFCD00CC]" : "h-[2.5rem] rounded-[50px] bg-primary md:h-[4rem]"} w-[calc(100%-1.5rem)] px-2 py-1 transition-[height_background]`}
      >
        <div className={`flex ${isOpen ? "h-auto" : "h-full"} items-center justify-between transition-[height]`}>
          <h3 className='font-extrabold'>{slide.title}</h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='flex size-[2rem] items-center justify-center rounded-full bg-white md:size-[3.5rem]'
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
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: true }, [WheelGesturesPlugin()]);
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
      )
      .fromTo(
        "#expertise button",
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
    <div id='expertise' className='relative h-max min-h-svh overflow-hidden bg-primary pr-4 sm:pr-0'>
      <div className='relative z-[2] flex h-full flex-col justify-center gap-10 pb-[2rem] pl-[2.5rem] pt-[3rem] sm:pl-[4rem] md:gap-20 md:py-[3.25rem] md:pl-[12.5rem]'>
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
          <span className='hide-first span-2 text-xs md:text-base'>
            Harness Our Full-Spectrum Marketing Services to
            <br /> Catapult Your Brand’s Reach and Results
          </span>
          <button className='flex items-center gap-5 rounded-[85px] bg-white p-1.5 pl-[1.6rem]'>
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
          </button>
        </div>
        <div className='embla w-full' ref={emblaRef}>
          <div className='embla__container'>
            {slides.map((slide, index) => (
              <SlideItem key={index} slide={slide} />
            ))}
          </div>
        </div>
      </div>
      <Image
        src='/images/exp-bg.png'
        alt='Background noise'
        width={1600}
        height={1150}
        className='absolute right-0 top-0 z-[1] size-full object-cover'
      />
    </div>
  );
};
