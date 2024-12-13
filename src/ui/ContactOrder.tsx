import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

export default function ContactOrder() {
  return (
    <div className="bg-main px-10 py-10 ">
      <div className="container mx-auto text-center">
        <h1 className="text-white text-xl md:text-2xl">
          Prêt à discuter de vos besoins en transport ?
        </h1>
        <p className="text-sm text-whiten my-3">
          Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et
          découvrir comment nous pouvons vous aider.
        </p>
        <Link to="/contact">
          <CustomButton
            className="bg-main2 hover:bg-main2 hover:bg-opacity-80 "
            primary
          >
            Nous Contacter
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}
