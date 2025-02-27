"use client";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import { useEffect, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
type Slide = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  text: string;
};

const slides: Slide[] = [
  {
    image: {
      src: "/images/about-slider-01.png",
      alt: "About slider image",
    },
    title: "Mission",
    description:
      "At Mark Media, our mission is to empower businesses of every size with innovative, data-driven marketing solutions that captivate audiences, spark growth, and deliver real, measurable success.",
    text: `Empower<br />
          Inspire.<br />
          Transform.`,
  },
  {
    image: {
      src: "/images/about-slider-02.png",
      alt: "About slider image",
    },
    title: "Vision",
    description:
      "We envision a future where brands transcend boundaries through the perfect fusion of strategic insights and inspiring creativity—amplifying their voices in a fast-evolving digital world.",
    text: `Imagine<br />
          Innovate<br />
          Inspire`,
  },
  {
    image: {
      src: "/images/about-slider-03.png",
      alt: "About slider image",
    },
    title: "Goal",
    description:
      "Our goal is to continuously refine our approach—harnessing emerging technologies, local expertise, and fresh perspectives—to ensure your brand stays one step ahead in today's competitive marketplace.",
    text: `
        Aim.<br />
        Achieve.<br />
        Advance.`,
  },
];

export const AboutSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, watchDrag: true }, [WheelGesturesPlugin()]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", (e) => {
        setActiveSlide(e.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  useEffect(() => {
    const slidersTitles = document.querySelectorAll("#about .embla__slide h4");
    const slidersDescriptions = document.querySelectorAll("#about .embla__slide p");

    gsap.killTweensOf("#about .embla__slide h4 .word");
    gsap.killTweensOf("#about .embla__slide p .word");

    slidersTitles.forEach((title) => {
      const split = new SplitType(title as HTMLElement, { types: "lines,words" });
      gsap.set(split.lines, { overflow: "hidden" });
      gsap.set(split.words, { yPercent: 100 });
    });

    slidersDescriptions.forEach((description) => {
      const split = new SplitType(description as HTMLElement, { types: "lines,words" });
      gsap.set(split.lines, { overflow: "hidden" });
      gsap.set(split.words, { yPercent: 100 });
    });

    const ctx = gsap.context(() => {
      gsap.to("#about .embla__slide:first-child h4 .word", {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });

      gsap.to("#about .embla__slide:first-child p .word", {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.2,
        stagger: 0.025,
      });
    });

    return () => ctx.revert(); // Cleanup animations
  }, []);

  useEffect(() => {
    const slidersTitles = document.querySelectorAll("#about .embla__slide h4");
    const slidersDescriptions = document.querySelectorAll("#about .embla__slide p");

    gsap.killTweensOf(slidersTitles[activeSlide].querySelectorAll(".word"));
    gsap.killTweensOf(slidersDescriptions[activeSlide].querySelectorAll(".word"));

    const ctx = gsap.context(() => {
      slides.forEach((_, i) => {
        gsap.set(slidersTitles[i].querySelectorAll(".word"), {
          yPercent: 100,
        });
        gsap.set(slidersDescriptions[i].querySelectorAll(".word"), {
          yPercent: 100,
        });
      });

      gsap.to(slidersTitles[activeSlide].querySelectorAll(".word"), {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.1,
      });

      gsap.to(slidersDescriptions[activeSlide].querySelectorAll(".word"), {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.2,
        stagger: 0.025,
      });
    });

    return () => ctx.revert();
  }, [activeSlide]);

  return (
    <div className='relative w-full sm:w-auto'>
      <div className='embla__actions absolute bottom-[-80px] left-[50%] flex -translate-x-1/2 gap-1 sm:bottom-auto sm:left-auto sm:right-0 sm:top-[-4rem] sm:translate-x-0'>
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
      <div className='embla relative w-full sm:w-auto' ref={emblaRef}>
        <div className='embla__container h-full'>
          {slides.map((slides, index) => (
            <div key={index} className='embla__slide max-h-[55rem] sm:max-h-[31rem]'>
              <div className='flex h-full flex-col sm:flex-row'>
                <div className='relative max-h-[50%] sm:max-h-none sm:max-w-[60%] sm:flex-[1_0_60%]'>
                  <Image
                    src={slides.image.src}
                    alt={slides.image.alt}
                    width={720}
                    height={495}
                    className='h-full w-full object-cover'
                  />
                  <div
                    className='absolute bottom-2 left-4 right-0 z-[1] text-[1.5rem] font-bold leading-[1] text-white sm:text-[2.25rem]'
                    dangerouslySetInnerHTML={{ __html: slides.text }}
                  ></div>
                </div>
                <div className='flex h-[18rem] w-full flex-col items-start justify-center bg-primary px-[2.25rem] sm:h-auto'>
                  <h4 className='select-none text-[1.875rem] font-extrabold leading-[1] text-[#00000099]'>
                    {slides.title}
                  </h4>
                  <div className='my-3 h-[3px] w-[3.5rem] bg-black sm:my-6'></div>
                  <p className='select-none text-[1rem] leading-[1.5] sm:text-[1.25rem]'>{slides.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
