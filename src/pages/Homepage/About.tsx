import ContactOrder from "@/features/Homepage/ContactOrder";
import CustomTitle from "@/ui/common/CustomTitle";

export default function About() {
  return (
    <main className="mt-5">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center container mx-auto px-10 mb-5">
        <figure>
          <img
            src="/images/a_propos_us.webp"
            alt="Workspace with a coffee mug, notebook, pencil, and a laptop in the background."
            className="rounded-lg"
          />
          <figcaption className="sr-only">About kd22transport</figcaption>
        </figure>
        <div>
          <CustomTitle className="font-semibold mb-3 text-xl md:text-2xl">
            À Propos de Kd22transport
          </CustomTitle>

          <p className="text-text text-sm leading-6">
            kd22transport a vu le jour d'une passion profonde pour le transport
            de véhicules et le désir d'offrir un service irréprochable. Fondée
            par un professionnel du secteur, notre entreprise s'engage à
            répondre aux besoins spécifiques de chaque client.
          </p>
          <p className="text-text text-sm leading-6 mt-3">
            Nous avons commencé avec l'idée que chaque véhicule mérite un
            traitement particulier lors de son transport. Grâce à notre
            expérience et notre connaissance du métier, nous avons perfectionné
            notre approche, alliant efficacité et attention aux détails. Chaque
            mission est pour nous l'occasion de prouver notre sérieux et notre
            engagement envers la satisfaction de nos clients.
          </p>
          <p className="text-text text-sm leading-6 mt-3">
            Chez kd22transport, nous considérons nos clients comme des
            partenaires et nous nous efforçons de bâtir une relation de
            confiance. Votre véhicule est entre de bonnes mains, et nous mettons
            tout en œuvre pour que son transport soit une expérience sans
            stress.
          </p>
          <p className="text-text text-sm leading-6 mt-3">
            Nous sommes fiers de contribuer à votre tranquillité d'esprit en
            veillant à ce que votre véhicule arrive en toute sécurité à
            destination.
          </p>
        </div>
      </section>
      <ContactOrder
        title="Prêt à discuter de vos besoins en transport ?"
        text="Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir comment nous pouvons vous aider."
        buttonText="Nous contacter"
      />
    </main>
  );
}
