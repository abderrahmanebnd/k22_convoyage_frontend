import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomTitle from "../../ui/CustomTitle";

const accordionItems: { ques: string; ans: string }[] = [
  {
    ques: "Comment fonctionne le service de convoyage ?",
    ans: "Notre service de convoyage fonctionne sur réservation. Une fois que vous nous contactez, nous organisons le transport selon vos besoins.",
  },
  {
    ques: "Quels types de véhicules pouvez-vous transporter ?",
    ans: "Nous pouvons transporter tout type de véhicule, y compris les voitures, motos, et véhicules utilitaires.",
  },
  {
    ques: "Quels sont vos tarifs ?",
    ans: "Nos tarifs varient en fonction de la distance et du type de véhicule. Contactez-nous pour un devis personnalisé.",
  },
];
export default function AccordionHomePage() {
  return (
    <section className="  p-10 bg-[#f2f2f270] ">
      <CustomTitle>Foire aux questions</CustomTitle>
      <Accordion
        type="single"
        collapsible
        className="w-full lg:w-1/2 mx-auto container"
      >
        {accordionItems.map((item) => {
          return (
            <AccordionItem
              key={item.ques}
              value={item.ques}
              className="text-white  last:border-b-main   "
            >
              <AccordionTrigger className="bg-main text-white px-2 ">
                {item.ques}
              </AccordionTrigger>
              <AccordionContent className="text-main p-4 border-x border-main ">
                {item.ans}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
