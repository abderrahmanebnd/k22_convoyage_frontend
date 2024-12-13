import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

export default function ContactOrder({
  title,
  text,
  buttonText,
}: {
  title: string;
  text: string;
  buttonText: string;
}) {
  return (
    <div className="bg-main px-10 py-10 ">
      <div className="container mx-auto text-center">
        <h1 className="text-white text-xl md:text-2xl">{title}</h1>
        <p className="text-sm text-whiten my-3">{text}</p>
        <Link to="/contact">
          <CustomButton
            className="bg-main2 hover:bg-main2 hover:bg-opacity-80 "
            primary
          >
            {buttonText}
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}
