import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="bg-[#222] text-white pt-8 text-center mt-auto">
      <h2 className="text-2xl font-bold mb-4 ">Kd22transport</h2>
      <p className="text-gray-400 mb-4">
        Transport et livraison de véhicules avec soin et efficacité.
      </p>
      <ul className="flex justify-center space-x-5 mb-6">
        <li>
          <a href="#" className=" hover:text-main ">
            <Facebook className="w-5 h-5 inline-block " />
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-main">
            <Twitter className="w-5 h-5 inline-block" />
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-main">
            <Linkedin className="w-5 h-5 inline-block" />
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-main">
            <Instagram className="w-5 h-5 inline-block" />
          </a>
        </li>
      </ul>
      <p className="text-gray-600 bg-black-2 p-2">
        Copyright &copy; {date.getFullYear()} Kd22transport.
      </p>
    </footer>
  );
}
