import Image from "next/image";

export const Header = () => {
  return (
    <div
      className='fixed left-0 top-0 z-[100] flex h-[6.25rem] w-full items-center justify-between gap-2 border-b border-[#BABABA33] bg-white px-16 py-4'
      style={{
        boxShadow: "0px 4px 100px 0px #C3C3C340",
      }}
    >
      <Image src='/icons/logo.png' width={115} height={60} className='w-[7.25rem]' alt='Media Mark Logo' />
      <ul className='flex gap-10 text-base'>
        <li>Home</li>
        <li>About Us</li>
        <li>Expertise</li>
        <li>How it Works</li>
        <li>Pricing</li>
        <li>Testimonial</li>
        <li>Contact Us</li>
      </ul>
      <button className='bg-primary rounded-[1.25rem] px-6 py-4 text-base font-bold text-black'>
        Schedule Meeting
      </button>
    </div>
  );
};
