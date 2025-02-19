import { Header } from "@/components/sections/Header";
import { Main } from "@/components/sections/Main";
import { About } from "@/components/sections/About";
import LayoutSetup from "@/components/LayoutSetup";
import { Expertise } from "@/components/sections/Expertise";

export default function Home() {
  return (
    <div>
      <LayoutSetup />
      <Header />
      <Main />
      <About />
      <Expertise />
    </div>
  );
}
