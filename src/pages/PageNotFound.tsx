import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  function handleQuit() {
    navigate("/");
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center container m-auto">
      <img
        src="/images/404 error with a landscape-cuate.svg"
        alt="404 error"
        className="max-w-72"
        width="250px"
        height="250px"
      />
      <h1 className="text-xl sm:text-2xl capitalize text-black font-semibold">
        Oups ! Page non trouvée
      </h1>
      <p className="text-center mt-2">
        La page que vous essayez d'accéder n'existe pas ou a été déplacée.
        Essayez de revenir à notre page d'accueil
      </p>
      <button
        onClick={handleQuit}
        className="mt-4 block rounded-lg border border-main bg-main py-3 font-medium px-4 text-white transition 
          duration-200"
      >
        Retourner
      </button>
    </div>
  );
}

export default PageNotFound;
