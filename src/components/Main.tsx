import Image from "next/image";

export const Main = () => {
  return (
    <div className='border-b-primary relative h-svh border-b-[1.25rem]'>
      <div className='flex h-full items-center gap-10 pl-[12.5rem] pt-[6.25rem]'>
        <div className='flex w-1/2 flex-col items-start'>
          <span className='text-grayC mb-2 text-[1.875rem] font-extrabold leading-[1.06]'>Mark Media</span>
          <h1 className='mb-7 text-[6rem] leading-[1.06]'>
            Your Bridge To Unstoppable
            <br /> Brand Success
          </h1>
          <p className='text-grayC mb-[2.125rem] text-[1.5rem] leading-[1.2]'>
            Leading You From Vision to Victory With Strategic, Results-
            <br />
            Driven Marketing Solutions
          </p>
          <button className='bg-primary rounded-[1.25rem] px-6 py-4 text-base font-bold text-black'>
            Schedule Meeting
          </button>
        </div>
        <div className='relative h-full w-1/2'>
          <Image
            src='/images/hero-main.png'
            alt='Main hero image'
            className='h-full object-cover'
            width={730}
            height={890}
          />
          <Image
            src='/icons/ebd.svg'
            className='absolute bottom-5 left-5 z-[10] h-[7rem] w-[7.5rem]'
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
