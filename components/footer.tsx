
export default function Footer() {
  return (
    <footer className="w-full pb-0 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Testo Gigante Sfumato (Gradient Text) */}
        <div className="w-full mt-0 md:mt-32 flex justify-center select-none pointer-events-none">
          <h1 
            className="text-[10vw] font-bold tracking-tighter leading-[0.75] bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground/80 to-transparent "
          >
            Think Green
          </h1>
        </div>
      </div>
    </footer>
  );
}