import Image from "next/image";

export const Pricing = () => {
  return (
    <div className='relative min-h-[850px] md:h-screen'>
      <Image
        src='/images/busniess-bg.png'
        alt=''
        width={1600}
        height={1200}
        className='absolute left-0 top-0 h-full w-full object-cover'
      />
      <div className='relative z-[1] flex flex-col items-center px-20 py-[8.25rem]'>
        <header className='mb-[1.5rem] flex flex-col items-center justify-center gap-6 text-center text-white'>
          <h2 className='text-[2.75rem] leading-[.84] md:text-[4rem]'>Start Your Business Journey with Us</h2>
          <p className='text-[1.25rem] leading-[1.4]'>Step Forward Together—We’ll Guide You from Vision to Victory</p>
        </header>
        <div className='grid flex-1 grid-cols-1 gap-4 rounded-[20px] bg-primary px-[2.25rem] pb-[2.5rem] pt-[4.5rem] md:grid-cols-3'>
          <div className='flex flex-col'>
            <div className='mb-[3rem] flex flex-col gap-7'>
              <h3 className='text-[2rem] leading-[1.2]'>
                Save More
                <br />
                <span className='font-bold'>With Goodplans.</span>
              </h3>
              <p className='text-[1.125rem]'>
                Pick a plan, get started in minutes, and enjoy a $100 credit on your next payment.
              </p>
            </div>
            <div className='rounded-[3.125rem] bg-white p-10'>
              <div className='mb-[2rem] flex items-center gap-6 border-b border-[#ECEDF1] pb-[1.875rem]'>
                <Image src='/icons/pricing-icon.svg' alt='' width={90} height={90} className='size-[5.625rem]' />
                <div className='flex flex-col'>
                  <h4 className='text-[1.25rem] font-medium leading-[1.2]'>Starter</h4>
                  <p className='text-[1.5rem] font-bold leading-[1.2]'>For small businesses just starting out</p>
                </div>
              </div>
              <ul className='mb-[2rem] flex flex-col gap-6'>
                <li className='flex items-center justify-between'>
                  <span className='font-medium text-[#1C2348]'>Mail Service Auth</span>
                  <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                </li>
                <li className='flex items-center justify-between'>
                  <span className='font-medium text-[#1C2348]'>Users Google Form</span>
                  <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                </li>
                <li className='flex items-center justify-between'>
                  <span className='font-medium text-[#1C2348]'>Responsive Template</span>
                  <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                </li>
                <li className='flex items-center justify-between'>
                  <span className='font-medium text-[#1C2348]'>Bulk Upload Images</span>
                  <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
                </li>
              </ul>
              <button className='h-[3.125rem] w-full rounded-[60px] bg-primary text-[1.1875rem] font-medium text-black'>
                Schedule Demo
              </button>
            </div>
          </div>
          <div className='rounded-[3.125rem] bg-white p-10'>
            <div className='mb-[2rem] flex items-center gap-6 border-b border-[#ECEDF1] pb-[1.875rem]'>
              <Image src='/icons/pricing-icon.svg' alt='' width={90} height={90} className='size-[5.625rem]' />
              <div className='flex flex-col'>
                <h4 className='text-[1.25rem] font-medium leading-[1.2]'>Pro</h4>
                <p className='text-[1.5rem] font-bold leading-[1.2]'>Momentum Package</p>
              </div>
            </div>
            <ul className='mb-[2rem] flex flex-col gap-6'>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Mail Service Auth</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Users Google Form</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Responsive Template</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Bulk Upload Images</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Grid Automatically On</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Unlimited Links</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Export to Sheets</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>24/7 Customer Support</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
            </ul>
            <button className='h-[3.125rem] w-full rounded-[60px] bg-primary text-[1.1875rem] font-medium text-black'>
              Schedule Demo
            </button>
          </div>
          <div className='rounded-[3.125rem] bg-white p-10'>
            <div className='mb-[2rem] flex items-center gap-6 border-b border-[#ECEDF1] pb-[1.875rem]'>
              <Image src='/icons/pricing-icon.svg' alt='' width={90} height={90} className='size-[5.625rem]' />
              <div className='flex flex-col'>
                <h4 className='text-[1.25rem] font-medium leading-[1.2]'>Pro</h4>
                <p className='text-[1.5rem] font-bold leading-[1.2]'>Momentum Package</p>
              </div>
            </div>
            <ul className='mb-[2rem] flex flex-col gap-6'>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Mail Service Auth</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Users Google Form</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Responsive Template</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Bulk Upload Images</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Grid Automatically On</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Unlimited Links</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>Export to Sheets</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
              <li className='flex items-center justify-between'>
                <span className='font-medium text-[#1C2348]'>24/7 Customer Support</span>
                <Image src='/icons/check.svg' alt='' width={24} height={24} className='size-6' />
              </li>
            </ul>
            <button className='h-[3.125rem] w-full rounded-[60px] bg-primary text-[1.1875rem] font-medium text-black'>
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
