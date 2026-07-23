'use client'

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function TextInfoSection() {  
  const features = [
    {
      number: "01",
      title: "Raccolta",
      description: "Servizi puntuali e personalizzati per la gestione dei rifiuti commerciali."
    },
    {
      number: "02",
      title: "Smaltimento Sicuro",
      description: "Trattamento a norma di legge per materiali speciali, pericolosi e industriali."
    },
    {
      number: "03",
      title: "Economia Circolare",
      description: "Impianti all'avanguardia per trasformare gli scarti in nuove risorse riutilizzabili."
    },
    {
      number: "04",
      title: "Consulenza Ambientale",
      description: "Supporto dedicato alle aziende per l'ottimizzazione e la conformità normativa."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" as const
      },
    },
  };

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 lg:py-32 flex justify-center">
      {/* Contenitore principale con la linea grigia a sinistra */}
      <div className="w-full max-w-7xl lg:border-l lg:border-gray-300 md:pl-12 lg:pl-20">
        
        {/* Blocco di testo principale (Titolo grande) - Slide Up & Fade */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mb-16 lg:mb-32"
        >
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-semibold text-gray-900 leading-[1.15] tracking-tight">
            Siamo il partner strategico per la gestione, il trasporto e il recupero dei rifiuti speciali, guidando le imprese verso un'economia circolare
          </h2>
        </motion.div>

        {/* Blocco di testo secondario (Paragrafo allineato a destra) */}
        <div className="flex w-full justify-start lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed space-y-4 font-normal"
          >
            <p>
              Il nostro impegno per la tutela dell'ambiente e la rigorosa conformità normativa è al centro di ogni nostra operazione. 
              Crediamo che la gestione efficiente ed ecologica degli scarti industriali sia il pilastro per uno sviluppo produttivo davvero sostenibile.
            </p>
            <p>
              Affianchiamo le aziende offrendo soluzioni ecologiche avanzate, tracciabilità completa della filiera e tecnologie 
              all'avanguardia per valorizzare i rifiuti, trasformandoli in nuove risorse e riducendo l'impatto ambientale dell'attività d'impresa.
            </p>
          </motion.div>
        </div>

        {/* Blocco Video - Effetto Soft Scale Up */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full mt-18 lg:mt-32"
        >
          <div className="relative w-full aspect-video bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 group cursor-pointer hover:shadow-lg transition-shadow duration-300">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/about-video.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          </div>
        </motion.div>

        {/* Vision e Processo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mt-18 lg:mt-32">
          
          {/* Colonna di Sinistra: Vision e Pulsante - Entrata da sinistra */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h3 className="text-green-600 font-semibold text-xl md:text-2xl tracking-wide mb-6">
              La nostra visione
            </h3>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              La nostra visione pone l'economia circolare al centro dei processi industriali. 
              Crediamo che una gestione trasparente, sicura ed efficiente dei rifiuti speciali sia un'opportunità concreta di valorizzazione per il tessuto aziendale. 
              Offriamo alle imprese soluzioni su misura per ottimizzare la gestione degli scarti e raggiungere i propri obiettivi di sostenibilità.
            </p>

            <Button className="bg-black text-white font-lg rounded-full hover:bg-gray-900 transition-colors duration-200 group hover:cursor-pointer px-4 sm:px-5 py-2 sm:py-3 h-auto shadow-md font-medium">
              <Link href="/services">
                <span>Richiedi un preventivo</span>
              </Link>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Colonna di Destra: Come Lavoriamo con animazione sequenziale dei punti */}
          <div className="flex flex-col gap-8">
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-green-600 font-semibold text-xl md:text-2xl tracking-wide"
            >
              Come lavoriamo
            </motion.h3>

            {/* Grid con effetto Staggering */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={featureItemVariants}
                  className="flex gap-3"
                >
                  {/* Number Badge */}
                  <div className="shrink-0">
                    <div className="h-px w-6 bg-gray-200 mb-2" />
                    <span className="text-xs font-bold text-gray-400 tracking-widest">
                      {feature.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base lg:text-xl font-bold mb-1">
                      <span className="hover:text-green-600 transition-colors">
                        {feature.title}
                      </span>
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}