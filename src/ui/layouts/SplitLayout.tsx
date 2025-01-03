interface SplitLayoutProps {
  children: React.ReactNode;
  imageSrc: string; // Image source prop
}

export function SplitLayout({ children, imageSrc }: SplitLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Full height image */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src={imageSrc}
          alt="Signup illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right side - Form */}
      <div className="flex w-full lg:w-1/2 justify-center items-center px-10 container mx-auto">
        <div className="max-w-[700px] w-full">{children}</div>
      </div>
    </div>
  );
}
