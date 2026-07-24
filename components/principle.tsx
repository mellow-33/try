"use client"

import Link from "next/link";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBinoculars,              
  faEarthAmericas,                   
  faArrowUpRightFromSquare,  
  type IconDefinition 
} from "@fortawesome/free-solid-svg-icons";

export default function Principles() {
  
  const iconMap: Record<string, IconDefinition> = {
    TelescopeIcon: faBinoculars,
    EarthIcon: faEarthAmericas,
    ArrowUpRightIcon: faArrowUpRightFromSquare,
  };

  const principles = [
    {
      icon: "TelescopeIcon",
      title: "La chiarezza guida il recupero",
      description:
        "Crediamo che un corretto smaltimento inizi da processi trasparenti, percorsi tracciati, dati misurabili e conformità garantita",
    },
    {
      icon: "EarthIcon",
      title: "La sostenibilità é un ciclo",
      description:
        "Costruiamo soluzioni che collegano le operazioni quotidiane all'impatto ambientale, trasformando ogni scarto in una nuova risorsa",
    },
    {
      icon: "ArrowUpRightIcon",
      title: "Progresso misurabile",
      description:
        "Supportiamo il vero cambiamento, aiutando le organizzazioni a passare dalle semplici ambizioni ecologiche a risultati concreti sul territorio",
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-24 overflow-hidden bg-black">
      
      {/* Sfondo 
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/principi.jpg"
          alt="Sfondo principi aziendali"
          fill
          className="object-cover"
          priority
        />
      </div>*/}

      {/* Overlay sfumato 
      <div className="absolute inset-0 bg-linear-to-b from-white/10 via-white/5 to-white/10 z-1" />*/}

      {/* Contenuto */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Titolo con animazione di comparsa dal basso */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12 lg:mb-20 flex flex-col items-center"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-4 leading-tight">
              Pensato per l'ambiente
              <br />
              <span className="font-serif font-black">Progettato per la tua azienda</span>
            </h2>
          </motion.div>

          {/* Grid delle Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              
              return (
                // Spostato il Link QUI per avvolgere la singola card
                <Link href="/about" key={index} className="block outline-none h-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    // Animazione al passaggio del mouse: la card sale di 8px
                    whileHover={{ y: -8 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15, // Effetto a cascata in ingresso
                      ease: "easeOut" 
                    }}
                    className="flex flex-col h-full bg-neutral-900 rounded-2xl p-8 border border-white/10 shadow-sm hover:shadow-lg hover:border-white/20 transition-all duration-300"
                  >
                    {/* Icona custom */}
                    <div className="mb-6 flex">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-white/10 shadow-inner">
                        {IconComponent && (
                          <FontAwesomeIcon icon={IconComponent} className="h-6 w-6 text-emerald-400" />
                        )}
                      </div>
                    </div>

                    {/* Contenuto Testuale */}
                    <h3 className="mb-3 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </motion.div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}