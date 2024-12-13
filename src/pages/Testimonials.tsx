import ContactOrder from "@/ui/ContactOrder";
import CustomTitle from "@/ui/CustomTitle";
import { Quote } from "lucide-react";

const testimonials: { name: string; text: string }[] = [
  {
    name: "[Jean Dupont]",
    text: "Je suis très satisfait du service de transport de kd22transport. Mon véhicule est arrivé à destination en parfait état et dans les délais. Je recommande vivement leurs services !",
  },
  {
    name: "[Jean Dupont]",
    text: "Un excellent service de transfert ! L'équipe a été très professionnelle et à l'écoute. Je n'hésiterai pas à faire appel à eux à l'avenir.",
  },
  {
    name: "[Jean Dupont]",
    text: "Kd22transport a géré la logistique de mon déménagement automobile avec efficacité. Une équipe compétente et sympathique. Merci beaucoup !",
  },
];
export default function Testimonials() {
  return (
    <main className="mt-5 ">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center container mx-auto px-10">
        <div>
          <CustomTitle className="font-semibold mb-3 text-xl md:text-2xl">
            Témoignages de nos clients{" "}
          </CustomTitle>

          <p className="text-text text-sm leading-6">
            kd22transport est une entreprise spécialisée dans le convoyage
            automobile, offrant des services de transport de véhicules, de
            transfert et de logistique en France. Forts d'une expérience
            significative, nous nous engageons à fournir un service de qualité
            supérieure à nos clients. Notre équipe dévouée utilise des méthodes
            modernes et efficaces pour assurer un transport sécurisé et rapide
            de vos véhicules. Nous comprenons l'importance de la confiance dans
            notre secteur et nous nous efforçons de bâtir des relations solides
            avec nos clients en garantissant leur satisfaction. Chez
            kd22transport, chaque mission est réalisée avec le plus grand soin
            et professionnalisme.
          </p>
        </div>
        <figure>
          <img
            src="/images/satisfaction-client-1.jpg"
            alt="A person extending their hand to another as a gesture of offering  greeting."
            className="rounded-lg"
          />
          <figcaption className="sr-only">satisfied client</figcaption>
        </figure>
      </section>
      <hr className="my-5 border-[#ccc]" />
      <ul className="container mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5  justify-center">
        {testimonials.map((item, index) => (
          <li key={index}>
            <span className="bg-main  w-15 h-15 p-2 rounded-full flex items-center justify-center mx-auto mb-2 ">
              <Quote className="w-9 h-9 text-whiter " />
            </span>
            <p className="text-text leading-7 text-center">{item.text}</p>
            <p className="text-center font-semibold mt-2 text-black">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
      <section className="bg-[#f2f2f2] py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 container mx-auto  w-[70%] justify-center gap-10 ">
          <figure>
            <img
              src="/images/client.jpg"
              alt="man"
              className="rounded-lg w-full sm:w-2/3 ml-auto"
            />
            <figcaption className="sr-only">satisfied client</figcaption>
          </figure>
          <p className="text-main text-sm leading-6">
            Je tiens à féliciter kd22transport pour leur service exceptionnel.
            Ils ont pris soin de mon véhicule pendant le transport. Je les
            recommande sans hésitation.
            <br />
            <span className="text-black font-semibold">Pierre D</span>
          </p>
        </div>
      </section>
      <ContactOrder />
    </main>
  );
}
