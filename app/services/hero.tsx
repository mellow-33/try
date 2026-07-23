"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroServices() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-black min-h-screen py-12 px-6 md:px-16 flex items-center justify-center overflow-hidden font-sans"
    >
      
      {/* --- SFONDO CON PARALLAX E ZOOM DINAMICO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        <motion.div
          style={{ scale: backgroundScale }}
          className="absolute inset-0 opacity-40"
        >
          <Image
            src="/recycle.jpg" 
            alt="Impianto di gestione rifiuti"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradiente scuro di sovrapposizione */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/30"></div>

        {/* Sfumature luminose organiche animate in loop */}
        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-100 h-100 bg-green-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 40, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-cyan-600/15 rounded-full blur-[140px]"
        />
      </div>

      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        
        {/* Badge superiore focalizzato sui servizi */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-green-950/60 border border-green-500/30 rounded-full text-green-400 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            I Nostri Servizi Ambientali
          </span>
        </motion.div>

        {/* Titolo Principale orientato all'offerta */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6 leading-tight"
        >
          Soluzioni Complete per la <br />
          <span className="font-serif italic font-normal text-green-400">Gestione e il Riciclo</span>
        </motion.h1>

        {/* Descrizione incentrata su raccolta, trattamento e conformità */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-base sm:text-lg text-gray-300 font-light max-w-2xl mb-10 leading-relaxed"
        >
          Dalla raccolta mirata al trattamento certificato: offriamo servizi professionali per la gestione sicura di rifiuti industriali, speciali e urbani, garantendo totale conformità normativa e sostenibilità per la tua impresa.
        </motion.p>

        {/* Pulsanti Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link 
            href="/contact" 
            className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Richiedi un Preventivo
          </Link>
          <Link 
            href="#catalogo-servizi" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-xl backdrop-blur-md border border-white/15 transition-all duration-300 transform hover:-translate-y-1"
          >
            Esplora i Servizi
          </Link>
        </motion.div>

      </motion.div>

    </section>
  );
}