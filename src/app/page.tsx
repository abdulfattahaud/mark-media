"use client";
import LayoutSetup from "@/components/LayoutSetup";
import { Header } from "@/components/sections/Header";
import { Main } from "@/components/sections/Main";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BluePrint } from "@/components/sections/BluePrint";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonial } from "@/components/sections/Testimonial";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// import gsap from "gsap";
import { Chat } from "@/components/ui/Chat";

// const Loader = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//     while (document.documentElement.getAttribute("loaded") !== "true") {
//       const loaded = document.documentElement.getAttribute("loaded");
//       if (loaded === "true") {
//         break;
//       }
//     }
//     setIsLoaded(true);
//   }, []);

//   useEffect(() => {
//     if (!isLoaded) return;
//     const tl = gsap.timeline({
//       defaults: {
//         ease: "power2.inOut",
//       },
//     });
//     tl.to("#loader .logo-wrapper img", {
//       yPercent: -100,
//       duration: 0.35,
//     }).to(
//       "#loader",
//       {
//         "--progress": "-50%",
//         duration: 1,
//       },
//       "-=.25",
//     );
//   }, [isLoaded]);
//   return (
//     <div>
//       <LayoutSetup />
//       <div id='loader' className='fixed left-0 top-0 z-[2000] flex h-screen w-full items-center justify-center'>
//         <div className='logo-wrapper overflow-hidden'>
//           <Image src='/icons/logo.png' alt='Mark Media Logo' width={200} height={100} className='h-auto w-[300px]' />
//         </div>
//       </div>
//       <Home />
//     </div>
//   );
// };

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <LayoutSetup />
      <Header />
      <Main />
      <About />
      <Expertise />
      <HowItWorks />
      <BluePrint />
      <Pricing />
      <Chat />
      <Testimonial />
      <Footer />
      <Toaster />
    </div>
  );
};

export default function Page() {
  return <Home />;
}
