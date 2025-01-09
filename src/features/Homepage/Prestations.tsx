import { Link } from "react-router-dom";
import CustomButton from "../../ui/common/CustomButton";
import { ArrowUpRight } from "lucide-react";
import CustomTitle from "../../ui/common/CustomTitle";

const infos: {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
}[] = [
  {
    title: "Votre véhicule, notre priorité",
    text: "Nous assurons un transport sécurisé et efficace de votre véhicule.Chaque mission est réalisée avec soin et professionnalisme pour garantir votre tranquillité d'esprit.",
    imgSrc: "/images/pres.webp",
    imgAlt: "Transport de véhicules",
  },
  {
    title: "Livraison fiable et rapide",
    text: "Confiez-nous la livraison de votre véhicule en toute sérénité. Nous nous engageons à le transporter rapidement et en toute sécurité, en respectant vos exigences.",
    imgSrc: "/images/pres1.webp",
    imgAlt: "Livraison de véhicules",
  },
];

export default function Prestations() {
  return (
    <section className="py-10 ">
      <CustomTitle> Prestations de service</CustomTitle>
      <div className="container mx-auto grid grid-cols-1  gap-10 px-10">
        {infos.map((info, index) => (
          <div
            key={index}
            className={`flex-col flex text-center gap-5 rounded-lg  bg-white ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <img
              src={info.imgSrc}
              alt={info.imgAlt}
              className="sm:w-1/2  scale-90 object-cover rounded-lg"
            />
            <div className="my-auto mx-auto">
              <h2 className="text-xl font-semibold mb-2">{info.title}</h2>
              <p className="text-text mb-3  text-center text-sm sm:text-base">
                {info.text}
              </p>
              <Link to="/contact">
                <CustomButton className="bg-main text-white px-5 rounded-md">
                  Plus d'informations
                  <ArrowUpRight />
                </CustomButton>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
