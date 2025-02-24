import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div>
      <div
        id='contact-us'
        className='relative mx-[22px] mb-[2.75rem] mt-[6.25rem] flex h-auto flex-col items-center justify-between gap-[2.5rem] overflow-hidden rounded-[30px] px-[2rem] py-[4rem] sm:mx-[2.5rem] sm:h-[15rem] sm:flex-row sm:gap-4 sm:py-0 md:mx-[5.5rem] md:px-[4rem]'
      >
        <Image
          src='/images/footer-bg.png'
          alt=''
          width={1400}
          height={240}
          className='absolute inset-0 z-[-1] size-full object-cover'
        />
        <span className='text-center text-[1.875rem] font-semibold leading-[1.1] text-white sm:text-left sm:text-[2.5rem] md:text-[3.5rem] md:leading-[1.3]'>
          Let’s Kickstart Your Big Success
        </span>
        <button className='flex items-center gap-[2.5rem] rounded-[70px] bg-white px-4 py-3 text-base font-bold md:px-8 md:py-6'>
          <span className='text-nowrap'>Contact us</span>
          <svg
            className='size-6'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M5 12H19' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M12 5L19 12L12 19' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </button>
      </div>
      <div className='relative px-[2rem] pb-[4.25rem] pt-[5.25rem] sm:px-[4rem] md:px-[8.375rem]'>
        <Image
          src='/images/footer-noise.png'
          alt=''
          width={1600}
          height={740}
          className='absolute inset-0 z-[-1] size-full object-cover'
        />
        <div className='flex flex-col'>
          <div className='flex flex-col items-start justify-between sm:flex-row'>
            <div className='flex flex-col gap-5'>
              <Image src='/icons/logo.png' alt='' width={100} height={100} />
              <span className='text-[1.25rem] font-bold leading-[1.2]'>Where Strategy Meets Success</span>
            </div>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <span className='text-[.625rem] font-medium leading-[1.4]'>Address</span>
                <span className='text-sm'>302E, A1 Building, Dubai Digital Park, Dubai</span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-[.625rem] font-medium leading-[1.4]'>Opening hours</span>
                <span className='text-[1.25rem] font-medium'>Mon - Fri: 9AM - 6PM</span>
              </div>
            </div>
          </div>
          <Image src='/icons/dots-line.svg' alt='' width={1200} height={40} className='my-8 h-auto w-full' />
          <div className='flex flex-wrap justify-between gap-4 sm:flex-nowrap'>
            <span className='text-[1.5rem] leading-[1.4]'>Got a great idea but need help building it?</span>
            <button className='text-nowrap rounded-full bg-primary px-4 py-2.5 text-[1.25rem] text-[#2E2E2E]'>
              Get in touch
            </button>
          </div>
          <Image src='/icons/dots-line.svg' alt='' width={1200} height={40} className='my-8 h-auto w-full' />
          <div className='flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-end'>
            <div className='flex flex-col items-center'>
              <span className='text-[clamp(3rem,1.0916rem+8.1425vw,5rem)] font-bold leading-[1.2] sm:text-[clamp(5rem,1.5714rem+7.1429vw,6rem)] md:text-[12.5rem]'>
                Markmedia
              </span>
              <span className='text-sm leading-[1.35] md:text-[1.125rem]'>© 2025 All Rights reserved</span>
            </div>
            <div className='flex h-full flex-col items-start justify-between gap-4'>
              <ul className='flex flex-col gap-4'>
                <li>
                  <Link href='/' target='_blank' className='flex items-end gap-2.5'>
                    <span>x</span>
                    <svg
                      className='size-2'
                      width='9'
                      height='9'
                      viewBox='0 0 9 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_300_1006)'>
                        <path
                          d='M0.923828 8.05917L7.96303 1.02051M7.96303 1.02051L1.65564 1.02051M7.96303 1.02051V7.3279'
                          stroke='black'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_300_1006'>
                          <rect width='8.92' height='8.92' fill='white' transform='translate(0 0.0800781)' />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <Link href='/' target='_blank' className='flex items-end gap-2.5'>
                    <span>Facebook</span>
                    <svg
                      className='size-2'
                      width='9'
                      height='9'
                      viewBox='0 0 9 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_300_1006)'>
                        <path
                          d='M0.923828 8.05917L7.96303 1.02051M7.96303 1.02051L1.65564 1.02051M7.96303 1.02051V7.3279'
                          stroke='black'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_300_1006'>
                          <rect width='8.92' height='8.92' fill='white' transform='translate(0 0.0800781)' />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <Link href='/' target='_blank' className='flex items-end gap-2.5'>
                    <span>Instagram</span>
                    <svg
                      className='size-2'
                      width='9'
                      height='9'
                      viewBox='0 0 9 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_300_1006)'>
                        <path
                          d='M0.923828 8.05917L7.96303 1.02051M7.96303 1.02051L1.65564 1.02051M7.96303 1.02051V7.3279'
                          stroke='black'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_300_1006'>
                          <rect width='8.92' height='8.92' fill='white' transform='translate(0 0.0800781)' />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <Link href='/' target='_blank' className='flex items-end gap-2.5'>
                    <span>LinkedIn</span>
                    <svg
                      className='size-2'
                      width='9'
                      height='9'
                      viewBox='0 0 9 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_300_1006)'>
                        <path
                          d='M0.923828 8.05917L7.96303 1.02051M7.96303 1.02051L1.65564 1.02051M7.96303 1.02051V7.3279'
                          stroke='black'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_300_1006'>
                          <rect width='8.92' height='8.92' fill='white' transform='translate(0 0.0800781)' />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
              </ul>
              <span className='text-sm font-bold leading-[1.35] text-[#2E2E2E] sm:mt-[2rem] md:mt-[4rem] md:text-[1.125rem]'>
                Developed by{" "}
                <Link href='https://stepbytech.com' target='_blank' className='underline'>
                  Step by Tech
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
