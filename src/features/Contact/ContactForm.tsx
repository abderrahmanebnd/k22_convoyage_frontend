import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomButton from "@/ui/CustomButton";
import CustomTitle from "@/ui/CustomTitle";
import { Label } from "@radix-ui/react-label";

export default function ContactForm() {
  return (
    <div>
      <CustomTitle>Contactez-nous</CustomTitle>
      <p className="text-text text-sm">
        Pour toute demande, veuillez remplir le formulaire ci-dessous. Nous vous
        répondrons rapidement
      </p>
      <form className="space-y-3">
        <div className="space-y-1 ">
          <Label htmlFor="name" className="text-black">
            Nom <span className="text-red-600">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Nom"
            required
            className="focus-visible:ring-main"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-black">
            Adresse e-mail <span className="text-red-600">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Adresse e-mail"
            required
            className=" focus-visible:ring-main "
          />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message" className="text-black">
            Message <span className="text-red-600">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Type your message here."
            required
            className="focus-visible:ring-main min-h-20"
          />
          <CustomButton
            className="bg-main text-white px-5 rounded-md"
            type="submit"
          >
            Envoyer
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
