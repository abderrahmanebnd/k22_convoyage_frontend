export default function CustomTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-7 text-main">
      {children}
    </h1>
  );
}
