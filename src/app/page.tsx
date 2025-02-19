import LayoutSetup from "@/components/LayoutSetup";
import { Header } from "@/components/sections/Header";
import { Main } from "@/components/sections/Main";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BluePrint } from "@/components/sections/BluePrint";
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
    </div>
  );
}
