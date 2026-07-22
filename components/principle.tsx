"use client"

import Image from "next/image";
import { TelescopeIcon } from "@/components/ui/telescope";
import { EarthIcon } from "@/components/ui/earth";
import { ArrowUpRightIcon } from "@/components/ui/arrow-up-right";
import { ComponentType } from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Principles() {
  
  const iconMap: Record<string, ComponentType<any>> = {
    TelescopeIcon: TelescopeIcon,
    EarthIcon: EarthIcon,
    ArrowUpRightIcon: ArrowUpRightIcon,
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
    <section className="relative w-full py-12 md:py-24 overflow-hidden bg-gray-100">
      
      {/* Sfondo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/principle.jpg"
          alt="Principles background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay sfumato */}
      <div className="absolute inset-0 bg-linear-to-b from-white/10 via-white/5 to-white/10 z-1" />

      {/* Contenuto */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Titolo con animazione di comparsa dal basso */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-8 lg:mb-16 flex flex-col items-center"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
              Pensato per l'ambiente
              <br />
              <span className="font-serif font-black">Progettato per la tua azienda</span>
            </h2>
          </motion.div>

          <Link href="/about">
            {/* Grid delle Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {principles.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15, // Ritardo incrementale per ogni card (0s, 0.15s, 0.3s)
                      ease: "easeOut" 
                    }}
                    className="flex flex-col bg-[#FDFBF7] rounded-2xl p-8 border border-[#C2D6B3] shadow-sm"
                  >
                    {/* Icona custom */}
                    <div className="mb-6 flex">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#009D12]">
                        {IconComponent && (
                          <IconComponent className="h-6 w-6 text-[#EBF5E6] flex items-center justify-center" />
                        )}
                      </div>
                    </div>

                    {/* Contenuto Testuale */}
                    <h3 className="mb-3 text-xl font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-black leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}