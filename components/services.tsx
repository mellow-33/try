"use client";

import {ArrowRight} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function ServicesShowcase() {
const features = [
    {
      number: "01",
      title: "Trasporto",
      description: "Servizi di logistica e movimentazione rifiuti",
    },
    {
      number: "02",
      title: "Stoccaggio",
      description: "Soluzioni di deposito temporaneo e gestione inventario",
    },
    {
      number: "03",
      title: "Recupero e Smaltimento",
      description: "Trattamento e recupero risorse da rifiuti",
    },
    {
      number: "04",
      title: "Impianto",
      description: "Tecnologie innovative per il processamento",
    },
    {
      number: "05",
      title: "Consulenze",
      description: "Supporto professionale per la gestione sostenibile",
    },
    {
      number: "06",
      title: "Conferimenti",
      description: "Raccolta e conferimento autorizzato di materiali",
    },
    {
      number: "07",
      title: "Intermediazioni",
      description: "Negoziazione e collegamento con operatori qualificati",
    },
  ];

  return(
    <section className="w-full py-16 lg:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Title con animazione dal basso */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Misurare, modellare e agire sulla sostenibilità
            <br />
            <span className="font-semibold font-serif italic">tutto in un unico posto</span>
          </h2>
        </motion.div>
        
        <Separator className="mb-12 lg:mb-20" />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Image with entry from left */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-full min-h-96">
              {/* Background Image */}
              <Image
                src="/recycle.jpg"
                alt="recycle image"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right Side - Features Grid with entry from right */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            {/* Grid Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  {/* Number Badge */}
                  <div className="shrink-0">
                    <Separator />
                    <span className="text-xs font-bold text-gray-400 tracking-widest">
                      {feature.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base lg:text-lg font-bold mb-1">
                      <Link href="/services">
                        {feature.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Separator className="mb-8" />
              <Button className="bg-black text-white font-lg rounded-full hover:bg-gray-900 transition-colors duration-200 group hover:cursor-pointer px-4 sm:px-5 py-2 sm:py-3 h-auto shadow-md font-medium">
                <Link href="/services" className="flex items-center gap-2">
                  <span>Scopri i servizi</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}