import AccordionHomePage from "@/features/Homepage/AccordionHomePage";
import HeroSection from "@/features/Homepage/HeroSection";
import Prestations from "@/features/Homepage/Prestations";
import Contact from "./Contact";

export default function Homepage(): JSX.Element {
  return (
    <>
      <HeroSection />
      <Prestations />
      <AccordionHomePage />
      <Contact />
      {/* <WhoAreWe /> */}
    </>
  );
}
