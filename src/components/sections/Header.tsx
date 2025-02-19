import Image from "next/image";

export const Header = () => {
  return (
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
      <ul className='hidden gap-10 text-base md:flex'>
        <li>Home</li>
        <li>About Us</li>
        <li>Expertise</li>
        <li>How it Works</li>
        <li>Pricing</li>
        <li>Testimonial</li>
        <li>Contact Us</li>
      </ul>
      <button className='hidden rounded-[.75rem] bg-primary px-3 py-2 text-sm font-bold text-black sm:block md:rounded-[1.25rem] md:px-6 md:py-4 md:text-base'>
        Schedule Meeting
      </button>
      <button className='rounded-[10px] bg-primary px-4 py-2.5 sm:hidden'>
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
  );
};
