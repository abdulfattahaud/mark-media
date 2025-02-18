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
  },
  {
    image: {
      src: "/images/about-slider-02.png",
      alt: "About slider image",
    },
    title: "Vision",
    description:
      "We envision a future where brands transcend boundaries through the perfect fusion of strategic insights and inspiring creativity—amplifying their voices in a fast-evolving digital world.",
  },
  {
    image: {
      src: "/images/about-slider-03.png",
      alt: "About slider image",
    },
    title: "Goal",
    description:
      "Our goal is to continuously refine our approach—harnessing emerging technologies, local expertise, and fresh perspectives—to ensure your brand stays one step ahead in today's competitive marketplace.",
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
      });

      gsap.to(slidersDescriptions[activeSlide].querySelectorAll(".word"), {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.1,
        stagger: 0.025,
      });
    });

    return () => ctx.revert();
  }, [activeSlide]);

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container h-full'>
        {slides.map((slides, index) => (
          <div key={index} className='embla__slide max-h-[31rem]'>
            <div className='flex h-full'>
              <Image
                src={slides.image.src}
                alt={slides.image.alt}
                width={720}
                height={495}
                className='max-w-[60%] flex-[1_0_60%] object-cover'
              />
              <div className='bg-primary flex flex-col items-start justify-center px-[2.25rem]'>
                <h4 className='select-none text-[1.875rem] font-extrabold leading-[1] text-[#00000099]'>
                  {slides.title}
                </h4>
                <div className='my-6 h-[3px] w-[3.5rem] bg-black'></div>
                <p className='select-none text-base leading-[1.5]'>{slides.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
