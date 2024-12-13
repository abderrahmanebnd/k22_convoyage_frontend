import CustomButton from "@/ui/CustomButton";

export default function Homepage() {
  return (
    <section
      className="bg-cover relative bg-center h-screen"
      style={{ backgroundImage: 'url("/images/bg_1.png")' }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="absolute top-1/2 -translate-y-1/2 px-5 sm:px-10 z-10">
        <p className="text-white sm:text-base sm:w-2/3 text-sm w-full">
          Nous sommes spécialisés dans le convoyage automobile en <b>FRANCE</b>,
          offrant un service fiable et professionnel pour tous vos besoins de
          transport.
        </p>
        <h1 className="text-white text-4xl  sm:text-5xl capitalize font-bold tracking-wide mb-5 mt-3">
          Rapide, simple et facile.
        </h1>
        <CustomButton primary>contacter nous</CustomButton>
      </div>
    </section>
  );
}
