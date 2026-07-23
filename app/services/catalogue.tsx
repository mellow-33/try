"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Service {
  category: string;
  title: string;
  description: string;
  image: string;
}

export default function CatalogoServizi() {
  const containerRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState<Service | null>(null);

  // Tracciamento dello scroll per lo sfondo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services: Service[] = [
    {
      category: "Trasporto",
      title: "Trasporto",
      description: "Servizi di logistica e movimentazione rifiuti",
      image: "/transport.jpg",
    },
    {
      category: "Stoccaggio",
      title: "Stoccaggio",
      description: "Soluzioni di deposito temporaneo e gestione inventario",
      image: "/stoccaggio.jpg",
    },
    {
      category: "Recupero e Smaltimento",
      title: "Recupero e Smaltimento",
      description: "Trattamento e recupero risorse da rifiuti",
      image: "/smaltimento.jpg",
    },
    {
      category: "Impianto",
      title: "Impianto",
      description: "Tecnologie innovative per il processamento",
      image: "/impianto.jpeg",
    },
    {
      category: "Consulenze",
      title: "Consulenze",
      description: "Supporto professionale per la gestione sostenibile",
      image: "/consulenze.jpg",
    },
    {
      category: "Conferimenti",
      title: "Conferimenti",
      description: "Raccolta e conferimento autorizzato di materiali",
      image: "/conferimento.jpg",
    },
    {
      category: "Intermediazioni",
      title: "Intermediazioni",
      description: "Negoziazione e collegamento con operatori qualificati",
      image: "/intermediazioni.jpg",
    },
  ];

  // Dissolvenza dello strato immobile di fondo
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 0.4, 0.4, 0.2]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-black min-h-screen pt-20 px-6 md:px-16 font-sans text-white overflow-hidden flex flex-col justify-between"
    >

      {/* --- CONTENITORE PRINCIPALE --- */}
      <div id="catalogo-servizi" className="relative z-10 max-w-350 mx-auto w-full flex flex-col justify-between">
        
        {/* Intestazione della sezione con Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto pt-10 mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-green-400 mb-3 block">
            Catalogo Servizi Certificati
          </span>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight mb-4">
            Soluzioni che <span className="font-serif italic text-green-400">Scorrono</span> sul Futuro
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Esplora i nostri 7 pilastri operativi per la gestione integrata e il recupero dei rifiuti. Clicca su una card per i dettagli.
          </p>
        </motion.div>

        {/* Griglia Allineata (3 Colonne) con Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch my-auto py-6">
          {services.map((service, index) => {
            const isLastCard = index === services.length - 1;
            const cardSpanClass = isLastCard && services.length % 3 !== 0 
              ? "md:col-span-2 lg:col-span-3 lg:max-w-md lg:mx-auto w-full" 
              : "col-span-1";

            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
                onClick={() => setSelectedCard(service)}
                className={`${cardSpanClass} relative h-95 rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900/80 backdrop-blur-md p-3 flex flex-col cursor-pointer group`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs font-mono text-green-400 mb-1">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-light line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pulsante d'azione finale */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center pt-20 pb-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold text-xs font-mono uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1"
          >
            <span>Contatta l&apos;azienda</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

      </div>

      {/* --- FOOTER --- */}
      <footer className="w-full py-12 md:pb-0 relative overflow-hidden bg-black z-10 mt-12">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          
          {/* Testo Gigante Sfumato con animazione */}
          <motion.div 
            initial={{ scale: 0.85, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full mt-4 md:mt-16 flex justify-center select-none pointer-events-none"
          >
            <h1 
              className="text-5xl sm:text-7xl md:text-[10vw] font-bold tracking-tighter leading-tight md:leading-[0.75] bg-clip-text text-transparent bg-linear-to-b from-white via-white/80 to-transparent"
            >
              Think Green
            </h1>
          </motion.div>

        </div>
      </footer>

      {/* --- POPUP MODALE CON ANIMAZIONI MOTION --- */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Sfondo sfocato con dissolvenza */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Contenuto della Card Modale */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Pulsante di chiusura */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-colors border border-white/10"
                aria-label="Chiudi"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Immagine della modale */}
              <div className="relative w-full h-62.5 sm:h-80">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent" />
              </div>

              {/* Testo descrittivo */}
              <div className="p-6 sm:p-8 flex flex-col justify-between -mt-10 relative z-10 bg-neutral-900 rounded-t-3xl">
                <div>
                  <span className="text-xs font-mono text-green-400 block mb-2">
                    {selectedCard.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {selectedCard.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-8">
                    {selectedCard.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={() => setSelectedCard(null)}
                    className="w-full text-center bg-green-500 hover:bg-green-400 text-black font-semibold text-xs font-mono uppercase tracking-wider py-4 rounded-xl transition-all shadow-md"
                  >
                    Richiedi Informazioni su questo Servizio
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}