"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface FormData {
  first_name: string;
  last_name?: string;
  phone: string;
  email: string;
  message: string;
  checks: string[];
  accept_terms: boolean;
}

const ContactUsDialog = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    watch,
    clearErrors,
  } = useForm<FormData>({
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      message: "",
      checks: [],
      accept_terms: false,
    },
  });

  register("checks", {
    required: {
      value: true,
      message: "Select at least one option from below",
    },
  });

  register("accept_terms", {
    required: {
      value: true,
      message: "You must accept the terms and conditions",
    },
  });

  const checks = watch("checks");
  const acceptTerms = watch("accept_terms");

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast("Successfully submitted");
    reset();
  };
  return (
    <Dialog>
      <DialogTrigger className='flex items-center gap-[2.5em] rounded-[70px] bg-white px-4 py-3 text-base font-bold md:px-8 md:py-6'>
        <span className='text-nowrap'>Contact us</span>
        <svg
          className='size-[1.5em]'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5 12H19' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 5L19 12L12 19' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </DialogTrigger>
      <DialogContent
        className='h-[90%] w-full max-w-[90%] overflow-scroll rounded-[20px] bg-white px-[2.5em] pb-[1em] pt-[2.25em] text-[16px] sm:max-w-[44em] sm:text-[20px]'
        style={{
          boxShadow: "rgb(107 107 107) 0px 0px 0px 30px",
        }}
      >
        <DialogHeader>
          <DialogTitle
            className='mb-[.875em]'
            style={{
              background: "linear-gradient(180deg, #000000 0%, #BABABA 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1em",
              lineHeight: 1.25,
              textAlign: "start",
            }}
          >
            Partner with us to transform your ideas into reality with innovative, custom-built tech solutions.
            Experience a collaborative journey that drives success and growth.
          </DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
            <div className='mb-[1em] flex flex-col justify-between sm:flex-row'>
              <div className='mb-[2em] flex flex-1 flex-col gap-[1.25em] sm:mb-0 sm:pr-[5em]'>
                <div className='input-wrapper'>
                  <label htmlFor='first-name'>
                    First Name* {errors.first_name && <span className='text-red-500'>{errors.first_name.message}</span>}
                  </label>
                  <input
                    className='form-input'
                    {...register("first_name", { required: { value: true, message: " is required" } })}
                  />
                </div>
                <div className='input-wrapper'>
                  <label htmlFor='last-name'>
                    Last Name* {errors.last_name && <span className='text-red-500'>{errors.last_name.message}</span>}
                  </label>
                  <input
                    className='form-input'
                    {...register("last_name", { required: { value: true, message: " is required" } })}
                  />
                </div>
                <div className='input-wrapper'>
                  <label htmlFor='phone'>
                    Phone Number* {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
                  </label>
                  <input
                    className='form-input'
                    {...register("phone", {
                      required: { value: true, message: " is required" },
                      pattern: {
                        value: /^\d{10}$/,
                        message: " must be a 10-digit number",
                      },
                    })}
                  />
                </div>
                <div className='input-wrapper'>
                  <label htmlFor='email'>
                    Email* {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                  </label>
                  <input
                    className='form-input'
                    {...register("email", {
                      required: { value: true, message: " is required" },
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: " must be a valid email address",
                      },
                    })}
                  />
                </div>
                <div className='input-wrapper'>
                  <label htmlFor='message'>
                    Message* {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
                  </label>
                  <textarea
                    className='form-input !h-auto resize-none !py-2'
                    rows={5}
                    {...register("message", { required: { value: true, message: " is required" } })}
                  />
                </div>
              </div>
              <div className='flex flex-1 flex-col'>
                <header className='mb-[3.5em] flex flex-col gap-[.25em]'>
                  <h3 className='text-[1.625em] text-[#1C2348]'>Select Service</h3>
                  <p className='text-[.625em] font-extralight'>
                    Please tell us a bit about what you’re looking for
                    <br />
                    {errors.checks && <span className='text-red-500'>{errors.checks.message}</span>}
                  </p>
                </header>
                <ul className='mb-[2.25em] flex flex-col gap-[.625em] text-[1em]'>
                  <li className={`relative flex items-center justify-between`}>
                    <label>Website Design & Development</label>
                    <svg
                      className={`size-[1.5em] transition-colors ${checks.includes("Website Design & Development") ? "text-primary" : "text-black"}`}
                      width='19'
                      height='19'
                      viewBox='0 0 19 19'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <ellipse cx='9.71829' cy='9.5' rx='9.28177' ry='9.5' fill='currentColor' />
                      <path
                        d='M13.3275 6.72949L8.36438 11.8094L6.1084 9.50033'
                        stroke='white'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <input
                      type='checkbox'
                      value='Website Design & Development'
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("checks", [...checks, e.target.value]);
                        } else {
                          setValue(
                            "checks",
                            checks.filter((check) => check !== e.target.value),
                          );
                        }
                      }}
                      className='absolute inset-0 z-[10] h-full w-full cursor-pointer opacity-0'
                    />
                  </li>
                  <li className='relative flex items-center justify-between'>
                    <span>Branding & Strategy</span>
                    <svg
                      className={`size-[1.5em] transition-colors ${checks.includes("Branding & Strategy") ? "text-primary" : "text-black"}`}
                      width='19'
                      height='19'
                      viewBox='0 0 19 19'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <ellipse cx='9.71829' cy='9.5' rx='9.28177' ry='9.5' fill='currentColor' />
                      <path
                        d='M13.3275 6.72949L8.36438 11.8094L6.1084 9.50033'
                        stroke='white'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <input
                      type='checkbox'
                      value='Branding & Strategy'
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("checks", [...checks, e.target.value]);
                        } else {
                          setValue(
                            "checks",
                            checks.filter((check) => check !== e.target.value),
                          );
                        }
                      }}
                      className='absolute inset-0 z-[10] h-full w-full cursor-pointer opacity-0'
                    />
                  </li>
                  <li className='relative flex items-center justify-between'>
                    <span>Digital Marketing</span>
                    <svg
                      className={`size-[1.5em] transition-colors ${checks.includes("Digital Marketing") ? "text-primary" : "text-black"}`}
                      width='19'
                      height='19'
                      viewBox='0 0 19 19'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <ellipse cx='9.71829' cy='9.5' rx='9.28177' ry='9.5' fill='currentColor' />
                      <path
                        d='M13.3275 6.72949L8.36438 11.8094L6.1084 9.50033'
                        stroke='white'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <input
                      type='checkbox'
                      value='Digital Marketing'
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("checks", [...checks, e.target.value]);
                        } else {
                          setValue(
                            "checks",
                            checks.filter((check) => check !== e.target.value),
                          );
                        }
                      }}
                      className='absolute inset-0 z-[10] h-full w-full cursor-pointer opacity-0'
                    />
                  </li>
                  <li className='relative flex items-center justify-between'>
                    <span>Public Relations</span>
                    <svg
                      className={`size-[1.5em] transition-colors ${checks.includes("Public Relations") ? "text-primary" : "text-black"}`}
                      width='19'
                      height='19'
                      viewBox='0 0 19 19'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <ellipse cx='9.71829' cy='9.5' rx='9.28177' ry='9.5' fill='currentColor' />
                      <path
                        d='M13.3275 6.72949L8.36438 11.8094L6.1084 9.50033'
                        stroke='white'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <input
                      type='checkbox'
                      value='Public Relations'
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("checks", [...checks, e.target.value]);
                        } else {
                          setValue(
                            "checks",
                            checks.filter((check) => check !== e.target.value),
                          );
                        }
                      }}
                      className='absolute inset-0 z-[10] h-full w-full cursor-pointer opacity-0'
                    />
                  </li>
                  <li className='relative flex items-center justify-between'>
                    <span>Influencer Marketing</span>
                    <svg
                      className={`size-[1.5em] transition-colors ${checks.includes("Influencer Marketing") ? "text-primary" : "text-black"}`}
                      width='19'
                      height='19'
                      viewBox='0 0 19 19'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <ellipse cx='9.71829' cy='9.5' rx='9.28177' ry='9.5' fill='currentColor' />
                      <path
                        d='M13.3275 6.72949L8.36438 11.8094L6.1084 9.50033'
                        stroke='white'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <input
                      type='checkbox'
                      value='Influencer Marketing'
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("checks", [...checks, e.target.value]);
                        } else {
                          setValue(
                            "checks",
                            checks.filter((check) => check !== e.target.value),
                          );
                        }
                      }}
                      className='absolute inset-0 z-[10] h-full w-full cursor-pointer opacity-0'
                    />
                  </li>
                </ul>

                <div className='relative flex gap-[.625em]'>
                  <input
                    type='checkbox'
                    value='accept_terms'
                    onChange={(e) => {
                      if (e.target.checked) {
                        setValue("accept_terms", true);
                        clearErrors("accept_terms");
                      } else {
                        setValue("accept_terms", false);
                      }
                    }}
                    className='absolute inset-0 z-[10] h-full w-full cursor-pointer opacity-0'
                  />
                  <svg
                    className={`size-[1.5em] transition-colors ${acceptTerms ? "text-primary" : "text-black"}`}
                    width='19'
                    height='19'
                    viewBox='0 0 19 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <ellipse cx='9.71829' cy='9.5' rx='9.28177' ry='9.5' fill='currentColor' />
                    <path
                      d='M13.3275 6.72949L8.36438 11.8094L6.1084 9.50033'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <label htmlFor='accept_terms' className='flex-1 text-[.625em] font-extralight'>
                    By clicking submit, you agree to our <span className='font-bold'>Privacy Policy</span> and consent
                    to receive updates from Mark Media. <br />
                    {errors.accept_terms && <span className='text-red-500'>{errors.accept_terms.message}</span>}
                  </label>
                </div>
              </div>
            </div>
            <button type='submit' className='w-[15em] rounded-[60px] bg-primary py-[.875em]'>
              Submit
            </button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const GetInTouchDialog = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    watch,
    clearErrors,
  } = useForm<FormData>({
    defaultValues: {
      first_name: "",
      phone: "",
      email: "",
      message: "",
      accept_terms: false,
    },
  });

  register("accept_terms", {
    required: {
      value: true,
      message: "You must accept the terms and conditions",
    },
  });

  const acceptTerms = watch("accept_terms");

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast("Successfully submitted");
    reset();
  };
  return (
    <Dialog>
      <DialogTrigger className='text-nowrap rounded-full bg-primary px-4 py-2.5 text-[1.25em] text-[#2E2E2E]'>
        Get in touch
      </DialogTrigger>
      <DialogContent
        className='h-[90%] w-full max-w-[90%] overflow-scroll rounded-[20px] bg-white px-[2.5em] pb-[1em] pt-[2.25em] text-[16px] sm:max-w-[24em] sm:text-[20px]'
        style={{
          boxShadow: "rgb(107 107 107) 0px 0px 0px 30px",
        }}
      >
        <DialogHeader>
          <DialogTitle
            className='mb-[.5em]'
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #000000 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "2.25em",
              lineHeight: 1.25,
              textAlign: "start",
            }}
          >
            Get in touch.
          </DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)} className='flex h-full flex-col justify-between'>
            <div className='mb-[.5em] flex flex-col gap-[1em]'>
              <div className='input-wrapper'>
                <label htmlFor='first-name'>
                  First Name* {errors.first_name && <span className='text-red-500'>{errors.first_name.message}</span>}
                </label>
                <input
                  className='form-input'
                  {...register("first_name", { required: { value: true, message: " is required" } })}
                />
              </div>
              <div className='input-wrapper'>
                <label htmlFor='phone'>
                  Phone Number* {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
                </label>
                <input
                  className='form-input'
                  {...register("phone", {
                    required: { value: true, message: " is required" },
                    pattern: {
                      value: /^\d{10}$/,
                      message: " must be a 10-digit number",
                    },
                  })}
                />
              </div>
              <div className='input-wrapper'>
                <label htmlFor='email'>
                  Email* {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                </label>
                <input
                  className='form-input'
                  {...register("email", {
                    required: { value: true, message: " is required" },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: " must be a valid email address",
                    },
                  })}
                />
              </div>
              <div className='input-wrapper'>
                <label htmlFor='message'>
                  Message* {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
                </label>
                <textarea
                  className='form-input !h-auto resize-none !py-2'
                  rows={5}
                  {...register("message", { required: { value: true, message: " is required" } })}
                />
              </div>
            </div>
            <div className='relative flex gap-[.625em]'>
              <input
                type='checkbox'
                value='accept_terms'
                onChange={(e) => {
                  if (e.target.checked) {
                    setValue("accept_terms", true);
                    clearErrors("accept_terms");
                  } else {
                    setValue("accept_terms", false);
                  }
                }}
                className='absolute inset-0 z-[10] h-full w-full cursor-pointer opacity-0'
              />
              <svg
                className={`size-[1.5em] transition-colors ${acceptTerms ? "text-primary" : "text-black"}`}
                width='19'
                height='19'
                viewBox='0 0 19 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <ellipse cx='9.71829' cy='9.5' rx='9.28177' ry='9.5' fill='currentColor' />
                <path
                  d='M13.3275 6.72949L8.36438 11.8094L6.1084 9.50033'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <label htmlFor='accept_terms' className='flex-1 text-[.625em] font-extralight'>
                By clicking submit, you agree to our <span className='font-bold'>Privacy Policy</span> and consent to
                receive updates from Mark Media. <br />
                {errors.accept_terms && <span className='text-red-500'>{errors.accept_terms.message}</span>}
              </label>
            </div>
            <button
              type='submit'
              className='mx-auto mt-[1em] w-[15em] rounded-[60px] bg-primary py-[.875em] font-medium'
            >
              Submit
            </button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export const Footer = () => {
  return (
    <div>
      <div
        id='contact-us'
        className='relative mx-[22px] mb-[2.75em] mt-[6.25em] flex h-auto flex-col items-center justify-between gap-[2.5em] overflow-hidden rounded-[30px] px-[2em] py-[4em] sm:mx-[2.5em] sm:h-[15em] sm:flex-row sm:gap-4 sm:py-0 md:mx-[5.5em] md:px-[4em]'
      >
        <Image
          src='/images/footer-bg.png'
          alt=''
          width={1400}
          height={240}
          className='absolute inset-0 z-[-1] size-full object-cover'
        />
        <span className='text-center text-[1.875em] font-semibold leading-[1.1] text-white sm:text-left sm:text-[2.5em] md:text-[3.5em] md:leading-[1.3]'>
          Let’s Kickstart Your Big Success
        </span>
        <ContactUsDialog />
      </div>
      <div className='relative px-[2em] pb-[4.25em] pt-[5.25em] sm:px-[4em] md:px-[8.375em]'>
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
              <span className='text-[1.25em] font-bold leading-[1.2]'>Where Strategy Meets Success</span>
            </div>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <span className='text-[.625em] font-medium leading-[1.4]'>Address</span>
                <span className='text-sm'>302E, A1 Building, Dubai Digital Park, Dubai</span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-[.625em] font-medium leading-[1.4]'>Opening hours</span>
                <span className='text-[1.25em] font-medium'>Mon - Fri: 9AM - 6PM</span>
              </div>
            </div>
          </div>
          <Image src='/icons/dots-line.svg' alt='' width={1200} height={40} className='my-8 h-auto w-full' />
          <div className='flex flex-wrap justify-between gap-4 sm:flex-nowrap'>
            <span className='text-[1.5em] leading-[1.4]'>Got a great idea but need help building it?</span>
            <GetInTouchDialog />
          </div>
          <Image src='/icons/dots-line.svg' alt='' width={1200} height={40} className='my-8 h-auto w-full' />
          <div className='flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-end'>
            <div className='relative flex flex-col items-center'>
              <span className='text-[clamp(3em,1.0916em+8.1425vw,5em)] font-bold leading-[1.2] sm:text-[clamp(5em,1.5714em+7.1429vw,6em)] md:text-[12.5em]'>
                Markmedia
              </span>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className='absolute right-0 top-[-50%] z-[2] flex size-[2.5rem] items-center justify-center rounded-full bg-primary sm:left-0 sm:right-auto sm:top-[-3rem] sm:size-[3.5rem] md:left-[-7rem] md:top-0 md:size-[6.5rem]'
              >
                <svg
                  className='size-[1.875rem] sm:size-[2.5rem] md:size-[4.5rem]'
                  width='73'
                  height='73'
                  viewBox='0 0 73 73'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M8.9476 36.027L36.4496 8.41611L64.2798 35.6963' stroke='#273F2B' strokeWidth='8.64319' />
                  <path d='M36.6122 8.31287L36.9199 59.7998' stroke='#273F2B' strokeWidth='8.64319' />
                </svg>
              </button>
              <span className='text-sm leading-[1.35] md:text-[1.125em]'>© 2025 All Rights reserved</span>
            </div>
            <div className='flex h-full flex-col items-start justify-between gap-4'>
              <ul className='flex flex-col gap-4'>
                <li>
                  <Link href='/' target='_blank' className='flex items-end gap-2.5'>
                    <span>x</span>
                    <svg
                      className='size-[.625rem]'
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
              <span className='text-sm font-bold leading-[1.35] text-[#2E2E2E] sm:mt-[2em] md:mt-[4em] md:text-[1.125em]'>
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
