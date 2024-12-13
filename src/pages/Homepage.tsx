import AccordionHomePage from "@/features/Homepage/AccordionHomePage";
import { Header } from "@/features/Homepage/Header";
import HeroSection from "@/features/Homepage/HeroSection";
import Prestations from "@/features/Homepage/Prestations";
import Contact from "./Contact";
import WhoAreWe from "@/features/Homepage/WhoAreWe";
import Footer from "@/features/Homepage/Footer";

export default function Homepage(): JSX.Element {
  return (
    <>
      <Header />
      <HeroSection />
      <Prestations />
      <AccordionHomePage />
      <Contact />
      {/* <WhoAreWe /> */}
      <Footer />
    </>
  );
}
