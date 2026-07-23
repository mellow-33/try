"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const features = [
  { id: 1, title: "Trasporto", subtitle: "Servizi di logistica e movimentazione rifiuti", image: "/transport.jpg"},
  { id: 2, title: "Stoccaggio", subtitle: "Soluzioni di deposito temporaneo e gestione inventario", image: "/stoccaggio.jpg"},
  { id: 3, title: "Recupero e Smaltimento", subtitle: "Trattamento e recupero risorse da rifiuti", image: "/smaltimento.jpg"},
  { id: 4, title: "Impianto", subtitle: "Tecnologie innovative per il processamento", image: "/impianto.jpeg"},  
  { id: 5, title: "Consulenze", subtitle: "Supporto professionale per la gestione sostenibile", image: "/consulenze.jpg"},    
  { id: 6, title: "Conferimenti", subtitle: "Raccolta e conferimento autorizzato di materiali", image: "/conferimento.jpg"},
  { id: 7, title: "Intermediazioni", subtitle: "Negoziazione e collegamento con operatori qualificati", image: "/intermediazioni.jpg"},    
];

export default function ServicesShowcase() {

  const [activeIndex, setActiveIndex] = useState(3); 

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return(
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="bg-black pt-6 sm:pt-10 pb-10 sm:pb-14 md:pb-16 overflow-hidden text-white"
    >
      
      {/* Intestazione animata allo scroll */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-350 mx-auto px-6 mb-8 sm:mb-12 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Misurare, modellare e agire sulla sostenibilità
          <br />
          <span className="font-semibold font-serif italic text-emerald-400">tutto in un unico posto</span>
        </h2>
      </motion.div>

      {/* Contenitore Slider animato allo scroll */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative w-full max-w-375 mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-center"
      >
        
        {/* Freccia Sinistra */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 sm:left-4 md:left-8 z-30 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/90 backdrop-blur-sm transition-all shadow-lg border border-white/10"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        {/* Traccia delle Card (Singola su mobile, Accordion da sm in su) */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 w-full h-95 sm:h-105 md:h-125">
          {features.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                style={{
                  flexGrow: isActive ? 6 : 1,
                  flexShrink: 1,
                  flexBasis: '0%',
                }}
                className={`
                  relative h-full overflow-hidden rounded-2xl sm:rounded-[2rem] cursor-pointer 
                  transition-all duration-500 ease-out border border-white/10
                  ${isActive 
                    ? 'block w-full sm:w-auto shadow-xl brightness-100' 
                    : 'hidden sm:block brightness-60 hover:brightness-90'}
                `}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={isActive}
                />

                {/* Overlay e Contenuto Card Attiva */}
                {isActive ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end items-center pb-6 sm:pb-8 px-4 sm:px-6 text-white text-center"
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 tracking-wide drop-shadow-md">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-sm md:text-base mb-4 sm:mb-6 font-light opacity-90 line-clamp-2">
                      {item.subtitle}
                    </p>
                    <button className="px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-xs sm:text-sm transition-colors duration-300">
                      <Link href="/services">
                        Scopri di più
                      </Link>
                    </button>
                  </motion.div>
                ) : (
                  /* Testo ruotato per le card inattive (visibile solo da sm in su) */
                  <div className="absolute inset-0 hidden sm:flex items-end justify-center pb-8 sm:pb-12">
                    <span className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wider whitespace-nowrap origin-left -rotate-90 translate-y-full drop-shadow-lg opacity-80">
                      {item.title}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Freccia Destra */}
        <button 
          onClick={nextSlide}
          className="absolute right-4 sm:right-4 md:right-8 z-30 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/90 backdrop-blur-sm transition-all shadow-lg border border-white/10"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

      </motion.div>

      {/* Barra di Progresso Inferiore animata allo scroll */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="max-w-40 sm:max-w-62.5 md:max-w-md mx-auto mt-6 sm:mt-10 md:mt-14 relative px-4"
      >
        <div className="w-full h-0.5 bg-neutral-800 rounded-full"></div>
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 border-2 border-black rounded-full shadow-sm transition-all duration-500 ease-out"
          style={{ 
            left: `${(activeIndex / (features.length - 1)) * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </motion.div>

    </motion.section>
  );
}