import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../ui/CustomButton";
import { ArrowUpRight } from "lucide-react";
import CustomTitle from "../../ui/CustomTitle";

const infos: {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
}[] = [
  {
    title: "Transport de véhicules",
    text: "Transport sûr et efficace de votre véhicule.",
    imgSrc: "/images/pres.jpg",
    imgAlt: "Transport de véhicules",
  },
  {
    title: "Livraison de véhicules",
    text: "Livraison rapide et fiable de voitures à distance.",
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
              className="sm:w-1/2  object-cover rounded-lg"
            />
            <div className="my-auto mx-auto">
              <h2 className="text-xl font-semibold mb-2">{info.title}</h2>
              <p className="text-text mb-3 ">{info.text}</p>
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
