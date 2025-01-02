import ContactForm from "@/features/Homepage/ContactForm";
import Map from "@/features/Homepage/Map";

export default function Contact() {
  return (
    <section className="container mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <ContactForm />
      <Map />
    </section>
  );
}
