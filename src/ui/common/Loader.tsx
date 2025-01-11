const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-transparent">
      <div className="flex justify-center flex-col items-center gap-3 text-black px-2">
        <div className="flex flex-row gap-2">
          <div className="w-3 h-3 rounded-full bg-main animate-bounce"></div>
          <div className="w-3 h-3 rounded-full bg-main animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-3 h-3 rounded-full bg-main animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
