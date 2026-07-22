"use client"

export default function HeroSection() {
  return (
<section className="relative w-full min-h-[85vh] sm:min-h-screen overflow-hidden bg-[#050914] -mt-24 lg:-mt-24">
  {/* Video di sfondo con effetto sfumato */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 90%)',
      }}
    >
      <source src="/video1.mp4" type="video/mp4" />
      Il tuo browser non supporta il tag video.
    </video>
  </div>

  {/* Overlay sfumato */}
  <div className="absolute inset-0 bg-linear-to-b from-blue-50/40 via-transparent to-white/30 z-1" />

  {/* Contenuto in primo piano - AGGIUNTO pt-24 */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pt-24">
    {/* Titolo Principale - Serif Bold */}
    <div className="max-w-4xl text-center mb-4 lg:mb-10">
      <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
        Think Green dove i <span className="font-serif italic font-normal">rifiuti</span>
        <br />
        diventano <span className="font-serif italic font-normal">risorse</span>
      </h1>
    </div>

    {/* Sottotitolo */}
    <p className="max-w-2xl text-lg sm:text-lg md:text-xl text-white text-center mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
      Riduci, Riusa, Rigenera. Il futuro è circolare
    </p>
  </div>
</section>
  );
}