import ContactOrder from "@/ui/ContactOrder";
import CustomTitle from "@/ui/CustomTitle";

const data: { title: string; text: string; imgSrc: string }[] = [
  {
    title: "Des prix compétitifs pour tous vos besoins de transport",
    text: "Chez kd22transport, nous comprenons que le coût est un facteur essentiel pour nos clients. C'est pourquoi nous nous efforçons de fournir des prix compétitifs sans compromettre la qualité de nos services. Nos tarifs varient en fonction de plusieurs éléments, tels que la distance, le type de véhicule à transporter, et les services supplémentaires requis. Nous vous invitons à nous contacter pour obtenir un devis sur mesure qui correspond parfaitement à vos attentes. Grâce à notre approche transparente, vous saurez exactement ce que vous payez et pourquoi, ce qui vous permettra de prendre une décision éclairée.",
    imgSrc: "/images/prix_page_3.webp",
  },
  {
    title: "Une personnalisation adaptée à vos besoins",
    text: "Nous croyons fermement que chaque client est unique et que ses besoins de transport le sont également. C'est pourquoi, chez kd22transport, nous proposons des solutions de convoyage automobile personnalisées. Que vous ayez besoin d'une simple livraison ou d'une assistance plus complexe, nous nous adaptons à vos exigences spécifiques. Nos prix reflètent cette personnalisation, assurant ainsi que vous ne payez que pour les services dont vous avez réellement besoin. Nous vous encourageons à nous contacter pour discuter de vos besoins et obtenir un devis qui répond à vos attentes.",
    imgSrc: "/images/prix_page_2.webp",
  },
  {
    title: "Transparence et confiance au cœur de notre service",
    text: "La transparence est essentielle dans notre relation avec nos clients. Nous nous engageons à vous fournir toutes les informations nécessaires concernant nos prix et nos services. Aucun coût caché, aucune surprise : vous serez informé à chaque étape du processus. Chez kd22transport, nous voulons établir une relation de confiance avec nos clients. En nous contactant pour un devis, vous obtenez non seulement une estimation précise, mais aussi l'assurance de travailler avec une entreprise fiable et professionnelle. N'hésitez pas à nous poser toutes vos questions, nous sommes là pour vous aider.",
    imgSrc: "/images/prix_page_1.webp",
  },
];
export default function OurPrices() {
  return (
    <>
      <main className="mt-5 container mx-auto px-10">
        <div>
          <CustomTitle className="tracking-wider font-semibold text-2xl text-left mb-2">
            Nos Prix - kd22transport
          </CustomTitle>
          <p className="text-text leading-6 text-sm">
            Sur notre page <b>'Nos Prix'</b>, vous découvrirez les différentes
            options tarifaires que nous proposons pour nos services de convoyage
            automobile. Chez kd22transport, nous nous engageons à offrir des
            solutions de transport de véhicules abordables et adaptées à vos
            besoins spécifiques. Que vous ayez besoin d'une livraison à domicile
            ou d'une assistance personnalisée, nous vous fournissons des
            informations claires et transparentes sur nos tarifs.
          </p>
        </div>

        <hr className="my-5 border-[#ccc]" />
        <ul className="grid gap-5 sm:gap-10">
          {data.map((info, index) => (
            <li
              key={index}
              className={`flex-col flex  text-center gap-5 rounded-lg  bg-white ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <img
                src={info.imgSrc}
                // alt={info.imgAlt}
                className="sm:w-1/2  scale-90 object-cover rounded-lg"
              />
              <div className="my-auto mx-auto">
                <h2 className="text-2xl text-main font-normal mb-2 text-left">
                  {info.title}
                </h2>
                <p className="text-text mb-3  text-sm sm:text-base leading-7 text-left">
                  {info.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <ContactOrder
        title="Demandez votre devis personnalisé dès aujourd'hui!"
        text="Pour connaître nos tarifs et obtenir un devis sur mesure, contactez-nous dès maintenant. Nous sommes là pour vous accompagner dans vos besoins de transport."
        buttonText="Contactez-nous"
      />
    </>
  );
}
