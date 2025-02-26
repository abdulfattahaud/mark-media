import Image from "next/image";

export const Chat = () => {
  return (
    <div className='relative z-[2] bg-white'>
      <div className='flex translate-y-[5.325rem] flex-col items-end gap-2 pr-4 sm:pr-10 md:translate-y-[10.625rem] md:gap-4'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-4 rounded-[64px] bg-[#FFCD001C] p-2 pl-[2rem] md:p-4'>
            <span className='text-[1.4rem] font-bold uppercase leading-[1.3] text-[#26422B] sm:text-[1.75rem] md:text-[3.375rem]'>
              our customers
            </span>
            <Image
              src='/images/jumbo-picture.png'
              alt='Jumbo Picture'
              width={72}
              height={72}
              className='size-[2.25rem] rounded-full md:size-[4.5rem]'
            />
          </div>
          <div className='flex size-[3.375rem] items-center justify-center rounded-full bg-black md:size-[6.5rem]'>
            <svg
              className='size-[2.25rem] md:size-[4.5rem]'
              width='73'
              height='72'
              viewBox='0 0 73 72'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_427_482)'>
                <g clipPath='url(#clip1_427_482)'>
                  <path
                    d='M49.9806 14.8428C49.9804 14.8427 49.981 14.8429 49.9806 14.8428C48.8452 15.154 47.7531 15.6954 46.7728 16.4741C45.9295 17.1441 45.2387 17.9351 44.7055 18.8027C44.705 18.8025 44.7061 18.8028 44.7055 18.8027C45.2387 17.9351 45.9295 17.1441 46.7728 16.4741C47.7531 15.6954 48.8452 15.154 49.9806 14.8428Z'
                    fill='white'
                  />
                  <path
                    d='M42.9313 11.8775C40.9959 11.3968 38.9716 11.1416 36.8876 11.1416C23.0886 11.1416 11.9023 22.3279 11.9023 36.1268C11.9023 40.3806 12.9653 44.386 14.8401 47.8918L11.9023 61.1119L25.1224 58.1741C28.6285 60.0492 32.6338 61.1119 36.8876 61.1119C50.6864 61.1119 61.8727 49.9256 61.8727 36.1268C61.8727 35.7764 61.8655 35.4277 61.8512 35.081C61.7911 35.1304 61.7305 35.1791 61.6693 35.2277C59.8831 36.6469 57.8727 37.5922 55.7899 38.0811C54.8116 47.6573 46.7219 55.1285 36.8876 55.1285C33.642 55.1285 30.6032 54.3198 27.9441 52.8978L25.9889 51.8522L19.7831 53.2313L21.1621 47.0255L20.1166 45.0701C18.6946 42.4112 17.8858 39.3722 17.8858 36.1268C17.8858 25.6325 26.3932 17.1251 36.8876 17.1251C37.5226 17.1251 38.1506 17.1562 38.7697 17.2171C39.7001 15.2029 41.0938 13.3663 42.9313 11.8775Z'
                    fill='white'
                  />
                  <path
                    d='M46.7737 16.4743C42.8897 19.56 42.2425 25.21 45.3281 29.094C48.4137 32.9781 54.0638 33.6253 57.9478 30.5397C61.8318 27.454 62.4791 21.804 59.3934 17.92C56.3078 14.0359 50.6578 13.3887 46.7737 16.4743Z'
                    fill='#FFCD00'
                  />
                </g>
              </g>
              <defs>
                <clipPath id='clip0_427_482'>
                  <rect width='72' height='72' fill='white' transform='translate(0.200195)' />
                </clipPath>
                <clipPath id='clip1_427_482'>
                  <rect width='72' height='72' fill='white' transform='translate(0.200195)' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className='mr-[4.5rem] flex items-center gap-4 rounded-[64px] bg-[#FFCD00] p-2 pr-[2rem] md:mr-[9.75rem] md:p-4'>
          <svg
            className='h-[2.375rem] w-[4.5rem] md:h-[4.5rem] md:w-[8rem]'
            width='128'
            height='72'
            viewBox='0 0 128 72'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='128' height='72' rx='36' fill='white' />
            <rect x='32' y='28' width='16' height='16' rx='8' fill='#273F2B' />
            <rect x='56' y='28' width='16' height='16' rx='8' fill='#273F2B' />
            <rect x='80' y='28' width='16' height='16' rx='8' fill='#273F2B' />
          </svg>
          <span className='text-[1.4rem] font-bold uppercase leading-[1.3] text-[#26422B] sm:text-[1.75rem] md:text-[3.375rem]'>
            Say It
          </span>
        </div>
        <div className='flex items-center gap-4 pr-2 md:pr-10'>
          <div className='rounded-[64px] bg-[#FFCD0075] px-6 py-2 md:px-12 md:py-4'>
            <span className='text-[1.4rem] font-bold uppercase leading-[1.3] text-[#26422B] sm:text-[1.75rem] md:text-[3.375rem]'>
              Best !!
            </span>
          </div>
          <div className='flex size-[3.375rem] items-center justify-center rounded-full bg-primary md:size-[6.5rem]'>
            <svg
              className='size-[2.375rem] md:size-[4.5rem]'
              width='73'
              height='72'
              viewBox='0 0 73 72'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M63.5295 36.4463L35.8629 63.8923L8.19629 36.4463' stroke='#273F2B' strokeWidth='8.64319' />
              <path d='M35.7002 63.9947V12.5068' stroke='#273F2B' strokeWidth='8.64319' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
