import Image from "next/image";

const CheckIcon = () => {
  return (
    <svg className='size-5' width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.7365 2.49929L11.5155 1.45879C10.7977 0.84707 9.74133 0.84707 9.02353 1.45879L7.80233 2.49932C7.49478 2.76146 7.11229 2.91981 6.70942 2.95196L5.11158 3.0794C4.17145 3.15442 3.4237 3.90099 3.34868 4.84112L3.22075 6.44024C3.18861 6.84311 3.03129 7.2254 2.76916 7.533L1.72818 8.7542C1.11646 9.472 1.11674 10.5276 1.72847 11.2454L2.76851 12.4666C3.03064 12.7742 3.18948 13.1565 3.22163 13.5594L3.34956 15.1585C3.42458 16.0986 4.17017 16.8452 5.1103 16.9202L6.70991 17.0477C7.11278 17.0798 7.49508 17.2382 7.80273 17.5003L9.02343 18.5409C9.74123 19.1526 10.7977 19.1525 11.5155 18.5407L12.7362 17.5002C13.0439 17.2381 13.4262 17.08 13.829 17.0478L15.4286 16.9202C16.3688 16.8452 17.1144 16.0984 17.1894 15.1583L17.3173 13.5593C17.3495 13.1564 17.5083 12.7738 17.7704 12.4662L18.8105 11.2454C19.4222 10.5275 19.4221 9.4716 18.8104 8.7538L17.7703 7.5332C17.5082 7.2256 17.3492 6.8431 17.317 6.44024L17.1899 4.84093C17.1148 3.9008 16.3681 3.15452 15.428 3.0795L13.8289 2.95206C13.4261 2.91991 13.0441 2.76143 12.7365 2.49929Z'
        stroke='#220A33'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.76953 10.5L8.76953 12.5L13.7695 7.5'
        stroke='#220A33'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const Testimonial = () => {
  return (
    <div
      id='testimonial'
      className='relative z-[1] flex min-h-screen flex-col bg-[#FFCD0091] px-4 pb-[4.5rem] pt-[5.625rem] md:px-[7.125rem]'
    >
      <div className='relative z-[1] flex h-full flex-col justify-between gap-12'>
        <header>
          <div className='mb-[3.25rem] flex items-center'>
            <Image src='/icons/rocket.png' alt='' width={50} height={50} className='size-[3.125rem]' />
            <span className='text-sm text-[#220A33]'>Real Stories, Real Results—Straight From Our Partners</span>
          </div>
          <h2 className='mb-6 text-[clamp(2.5rem,0.9806rem+6.483vw,5rem)] font-bold leading-[1.05] text-[#220A33] md:text-[5rem]'>
            Where Great Minds Share <br className='hidden md:block' />
            Their Success Stories
          </h2>
          <span className='text-[1.875rem] leading-[1.2]'>High-Performing Teams Thrive on Inspired Ideas</span>
        </header>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          <div className='flex flex-col gap-5 md:mt-[12.5rem]'>
            <div className='flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-01.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Jeff Weinstein</span>
                  <CheckIcon />
                  <span className='text-xs font-medium text-[#BA59FF]'>@Jeff_weinstein</span>
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>@markmedia makes thinking hard, easier.</p>
              </div>
            </div>
            <div className='flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-02.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Jake Mor</span>
                  <CheckIcon />
                  <span className='text-xs font-medium text-[#BA59FF]'>@Jake_Mor</span>
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                  Mark Media transformed our online presence with a sleek, user-friendly website that perfectly reflects
                  our development
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 md:mt-[5rem]'>
            <div className='flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-03.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Danny Trinh</span>
                  <CheckIcon />
                  <span className='text-xs font-medium text-[#BA59FF]'>@dtrinh</span>
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>Pro-tip: Use @markmedia</p>
              </div>
            </div>
            <div className='flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-04.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Max Ogles</span>
                  <CheckIcon />
                  <span className='text-xs font-medium text-[#BA59FF]'>@maxogles</span>
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                  Mark Media transformed our online presence with a sleek, user-friendly website that perfectly reflects
                  our development
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-05.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Design pappa</span>
                  <CheckIcon />
                  <span className='text-xs font-medium text-[#BA59FF]'>@designpappa</span>
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                  Mark Media transformed our online presence with a sleek, user-friendly website that perfectly reflects
                  our development
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-06.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Shahed Khan</span>
                  <CheckIcon />
                  <span className='text-xs font-medium text-[#BA59FF]'>@_shahedk</span>
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                  @markmedia is such an underrated product. Great design. Built for collaboration. Highly recommend it
                  to anyone who creates flowcharts, mind maps, etc.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-07.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Josh Johnson</span>
                  <CheckIcon />
                  <span className='text-xs font-medium text-[#BA59FF]'>@secondfret</span>
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>Dang. @markmedia is beyond good. It might turn into my favorite tool as a PM.</p>
              </div>
            </div>
            <div className='flex flex-col gap-2.5 rounded-[10px] bg-white p-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/test-08.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-xs font-bold leading-[1] text-[#220A33]'>Mark Johnson CC</span>
                  <CheckIcon />
                  <span className='text-xs font-medium text-[#BA59FF]'>@markjohnsoncc</span>
                </div>
              </div>

              <div className='pl-[3rem] text-base'>
                <p>
                  Mark Media transformed our online presence with a sleek, user-friendly website that perfectly reflects
                  our development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src='/images/testimonial-noise.svg'
        alt='Testimonial Background'
        fill
        className='absolute inset-0 z-[0] size-full object-cover'
      />
      <Image
        src='/images/test-vector.svg'
        alt='Testimonial Background'
        width={1000}
        height={700}
        className='absolute left-[-10rem] top-1/2 z-[0] h-[42rem] w-auto -translate-y-1/2'
      />
    </div>
  );
};
