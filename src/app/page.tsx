import LayoutSetup from "@/components/LayoutSetup";
import { Header } from "@/components/sections/Header";
import { Main } from "@/components/sections/Main";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BluePrint } from "@/components/sections/BluePrint";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonial } from "@/components/sections/Testimonial";
import { Chat } from "@/components/ui/Chat";
import { Footer } from "@/components/sections/Footer";
export default function Home() {
  return (
    <div>
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
    </div>
  );
}
