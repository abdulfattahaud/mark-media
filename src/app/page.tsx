import { Header } from "@/components/Header";
import LayoutSetup from "@/components/LayoutSetup";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <div>
      <LayoutSetup />
      <Header />
      <Main />
    </div>
  );
}
