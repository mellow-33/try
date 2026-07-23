"use client"

import { motion } from "motion/react";

export default function HeroSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Spaziatura temporale tra la comparsa del titolo e del sottotitolo
        delayChildren: 0.2,    // Breve attesa iniziale per permettere al video di caricarsi
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      filter: "blur(12px)", 
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const, // Curva cubic-bezier morbida e di impatto "editorial"
      },
    },
  };

  return (
<section className="relative w-full h-dvh overflow-hidden bg-[#050914]">
  
  {/* Video di sfondo: Effetto Slow-Zoom / Camera Reveal */}
  <motion.div 
    initial={{ opacity: 0, scale: 1.12 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2, ease: "easeOut" }}
    className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
  >
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
  </motion.div>

  {/* Overlay sfumato */}
  <div className="absolute inset-0 bg-linear-to-b from-blue-50/40 via-transparent to-white/30 z-1" />

  {/* Contenuto in primo piano - Perfettamente Centrato */}
  <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    {/* Titolo Principale - Fade in con Blur + ScaleUp */}
    <motion.div variants={itemVariants} className="max-w-4xl text-center mb-6 lg:mb-8">
      <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
        Think Green dove i <span className="font-serif italic font-normal">rifiuti</span>
        <br />
        diventano <span className="font-serif italic font-normal">risorse</span>
      </h1>
    </motion.div>

    {/* Sottotitolo - Compare subito dopo il titolo */}
    <motion.p 
      variants={itemVariants}
      className="max-w-2xl text-lg sm:text-xl md:text-2xl text-white text-center leading-relaxed"
    >
      Riduci, Riusa, Rigenera. Il futuro è circolare
    </motion.p>
  </motion.div>
</section>
  );
}