import Image from "next/image";

export const HowItWorks = () => {
  return (
    <div id='how-it-works' className='relative min-h-svh py-[7.5rem]'>
      <header className='mx-auto mb-[7.25rem] flex flex-col items-center justify-center gap-8 px-5 text-center md:mb-[11.25rem]'>
        <h2 className='text-[2rem] font-extrabold text-[#24272B] md:text-[3.75rem]'>The Brands That Trust Us</h2>
        <div className='flex max-w-[40rem] flex-wrap items-center justify-center gap-3 md:max-w-[65rem]'>
          <div className='flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-6 py-3 md:h-[6.875rem] md:w-[21rem] md:px-12 md:py-6'>
            <Image src='/icons/unity.png' alt='Unity Marketing' width={240} height={64} className='h-full w-auto' />
          </div>
          <div className='flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-6 py-3 md:h-[6.875rem] md:w-[21rem] md:px-12 md:py-6'>
            <Image src='/icons/vidnik.png' alt='Vidnik' width={240} height={64} className='h-full w-auto' />
          </div>
          <div className='flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-6 py-3 md:h-[6.875rem] md:w-[21rem] md:px-12 md:py-6'>
            <Image src='/icons/xygma.png' alt='Xygma' width={240} height={64} className='h-full w-auto' />
          </div>
          <div className='flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-6 py-3 md:h-[6.875rem] md:w-[21rem] md:px-12 md:py-6'>
            <Image src='/icons/zadlaw.png' alt='Zadlaw' width={240} height={64} className='h-full w-auto' />
          </div>
          <div className='flex h-[3.5rem] w-[9.875rem] items-center justify-center overflow-hidden rounded-[12px] border-[3px] border-primary bg-black px-12 py-1 md:h-[6.875rem] md:w-[21rem]'>
            <Image src='/icons/sbt.png' alt='SBT' width={240} height={64} className='h-full w-auto' />
          </div>
        </div>
      </header>
      <div className='relative z-[1] mb-[25rem] px-[clamp(2rem,-0.4311rem+10.3728vw,6rem)] md:px-[6rem]'>
        <p className='text-[clamp(1.2rem,1.0177rem+0.778vw,1.5rem)] font-light leading-[1.25] text-[#0A0B1E] md:text-[2.5rem]'>
          <span className='font-bold'>At Mark Media</span>, we’re proud to partner with forward-thinking brands that
          share our passion for innovation and results. Every collaboration starts with understanding each client’s
          unique vision, goals, and challenges—then crafting compelling strategies that empower them to shine. These
          trusted relationships are the backbone of our success, fueling inspired creativity and a track record of
          measurable impact.
        </p>
        <div className='absolute bottom-[-10rem] right-[30%] z-[-1] flex size-[14.5rem] rotate-[20deg] items-end justify-end rounded-[40px] bg-primary p-5 md:size-[22rem]'>
          <div className='size-[3rem] rounded-full bg-[#00000024]'></div>
        </div>
      </div>
      <div className='relative z-[1] mb-[6.75rem] flex flex-col items-center justify-center gap-12 px-[1rem] text-center md:px-[15rem]'>
        <h2 className='text-[2rem] font-extrabold leading-[1.06] text-[#24272B] md:text-[3.75rem]'>
          Partnering with Visionary Brands
          <br className='hidden md:block' /> To Shape Unforgettable Success Stories
        </h2>
        <div className='flex w-full flex-wrap justify-center gap-4 border-b border-b-[#CECECE] px-6 pb-[3.25rem] md:flex-nowrap md:justify-between'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <span
                className='font-syne text-[5rem] font-bold leading-[1] text-transparent'
                style={{
                  WebkitTextStroke: "#C1C1C1 2px",
                }}
              >
                04
              </span>
              <span className='text-[1.5rem] font-medium'>Years in Market</span>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <span
                className='font-syne text-[5rem] font-bold leading-[1] text-transparent'
                style={{
                  WebkitTextStroke: "#C1C1C1 2px",
                }}
              >
                02
              </span>
              <span className='text-[1.5rem] font-medium'>Project done</span>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <span
                className='font-syne text-[5rem] font-bold leading-[1] text-transparent'
                style={{
                  WebkitTextStroke: "#C1C1C1 2px",
                }}
              >
                03
              </span>
              <span className='text-[1.5rem] font-medium'>Top Feedbak</span>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <span
                className='font-syne text-[5rem] font-bold leading-[1] text-transparent'
                style={{
                  WebkitTextStroke: "#C1C1C1 2px",
                }}
              >
                04
              </span>
              <span className='text-[1.5rem] font-medium'>Team Member</span>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 md:px-[6.25rem]'>
        <figure className='overflow-hidden rounded-[20px]'>
          <Image src='/images/par-bg.png' alt='' width={1400} height={640} className='h-[40rem] w-full object-cover' />
        </figure>
      </div>
      <Image
        src='/images/about-bg.svg'
        alt='Background hexagon shapes'
        width={1500}
        height={900}
        className='absolute right-0 top-0 z-[-1] h-auto w-[50%]'
      />
    </div>
  );
};
