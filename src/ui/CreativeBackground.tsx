export default function CreativeBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-primary/30 via-background to-primary/20 rotate"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/30 rounded-full blur-3xl float"
        style={{ animationDelay: "-3s" }}
      ></div>
      <div className="absolute top-3/4 left-1/2 w-24 h-24 bg-primary/40 rounded-full blur-2xl pulse"></div>
    </div>
  );
}
