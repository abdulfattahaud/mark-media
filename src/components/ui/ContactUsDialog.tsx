import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  checks: string[];
  accept_terms: boolean;
}

export const ContactUsDialog = ({ children }: { children: React.ReactNode }) => {
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
      name: "",
      phone: "",
      email: "",
      message: "",
      checks: [],
      accept_terms: false,
    },
  });
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const dataToSend = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
      services: data.checks,
    };
    axios
      .post(
        "https://6qxcdqe8vb.execute-api.eu-west-3.amazonaws.com/testing-markmedia-rest-api/schedule-meeting",
        dataToSend,
        {
          headers: {
            "x-api-key": "87654321edfjnjkk",
          },
        },
      )
      .then(() => {
        toast("Successfully submitted");
        const dialogCloseBtn = document.querySelector(".dialog-close-btn");
        if (dialogCloseBtn) {
          (dialogCloseBtn as HTMLButtonElement).click();
        }
        reset();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Dialog
      onOpenChange={() => {
        reset();
      }}
    >
      {children}
      <DialogContent className='h-max max-h-[90%] w-full max-w-[85%] overflow-scroll rounded-[20px] bg-white px-[2.5em] pb-[1em] pt-[2.25em] text-[16px] shadow-[rgb(107_107_107)_0px_0px_0px_20px] sm:max-w-[44em] sm:text-[20px] sm:shadow-[rgb(107_107_107)_0px_0px_0px_30px]'>
        <DialogHeader>
          <DialogTitle
            className='mb-[.875em] pt-[1.5rem] sm:pt-0'
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
                    Name* {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                  </label>
                  <input
                    className='form-input'
                    {...register("name", { required: { value: true, message: " is required" } })}
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
                    <div
                      className={`check-box flex size-[1.5em] items-center justify-center rounded-[6px] border-2 transition-colors ${checks.includes("Website Design & Development") ? "border-transparent bg-primary" : "border-[#343839AB] bg-transparent"}`}
                    >
                      <svg
                        className='size-[1.125em]'
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15 4.5L6.75 12.75L3 9'
                          stroke='#FEFEFE'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
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
                    <div
                      className={`check-box flex size-[1.5em] items-center justify-center rounded-[6px] border-2 transition-colors ${checks.includes("Branding & Strategy") ? "border-transparent bg-primary" : "border-[#343839AB] bg-transparent"}`}
                    >
                      <svg
                        className='size-[1.125em]'
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15 4.5L6.75 12.75L3 9'
                          stroke='#FEFEFE'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
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
                    <div
                      className={`check-box flex size-[1.5em] items-center justify-center rounded-[6px] border-2 transition-colors ${checks.includes("Digital Marketing") ? "border-transparent bg-primary" : "border-[#343839AB] bg-transparent"}`}
                    >
                      <svg
                        className='size-[1.125em]'
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15 4.5L6.75 12.75L3 9'
                          stroke='#FEFEFE'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
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
                    <div
                      className={`check-box flex size-[1.5em] items-center justify-center rounded-[6px] border-2 transition-colors ${checks.includes("Public Relations") ? "border-transparent bg-primary" : "border-[#343839AB] bg-transparent"}`}
                    >
                      <svg
                        className='size-[1.125em]'
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15 4.5L6.75 12.75L3 9'
                          stroke='#FEFEFE'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
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
                    <div
                      className={`check-box flex size-[1.5em] items-center justify-center rounded-[6px] border-2 transition-colors ${checks.includes("Influencer Marketing") ? "border-transparent bg-primary" : "border-[#343839AB] bg-transparent"}`}
                    >
                      <svg
                        className='size-[1.125em]'
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15 4.5L6.75 12.75L3 9'
                          stroke='#FEFEFE'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
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
                  <div
                    className={`check-box flex size-[1.5em] items-center justify-center rounded-[6px] border-2 transition-colors ${acceptTerms ? "border-transparent bg-primary" : "border-[#343839AB] bg-transparent"}`}
                  >
                    <svg
                      className='size-[1.125em]'
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 4.5L6.75 12.75L3 9'
                        stroke='#FEFEFE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <label htmlFor='accept_terms' className='flex-1 text-[.625em] font-extralight'>
                    By clicking submit, you agree to our <span className='font-bold'>Privacy Policy</span> and consent
                    to receive updates from Mark Media. <br />
                    {errors.accept_terms && <span className='text-red-500'>{errors.accept_terms.message}</span>}
                  </label>
                </div>
              </div>
            </div>
            <button
              disabled={loading}
              type='submit'
              className={`w-[15em] rounded-[60px] bg-primary py-[.875em] font-medium ${loading ? "pointer-events-none cursor-wait opacity-50" : ""}`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
