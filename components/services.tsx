"use client";

import {ArrowRight} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function ServicesShowcase() {
const features = [
    {
      number: "001",
      title: "Trasporto",
      description: "Servizi di logistica e movimentazione rifiuti",
    },
    {
      number: "002",
      title: "Stoccaggio",
      description: "Soluzioni di deposito temporaneo e gestione inventario",
    },
    {
      number: "003",
      title: "Recupero e Smaltimento",
      description: "Trattamento e recupero risorse da rifiuti",
    },
    {
      number: "004",
      title: "Impianto",
      description: "Tecnologie innovative per il processamento",
    },
    {
      number: "005",
      title: "Consulenze",
      description: "Supporto professionale per la gestione sostenibile",
    },
    {
      number: "006",
      title: "Conferimenti",
      description: "Raccolta e conferimento autorizzato di materiali",
    },
    {
      number: "007",
      title: "Intermediazioni",
      description: "Negoziazione e collegamento con operatori qualificati",
    },
  ];

  return(
    <section className="w-full py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Title */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Misurare, modellare e agire sulla sostenibilità
            <br />
            <span className="font-semibold font-serif italic">tutto in un unico posto</span>
          </h2>
        </div>
        
        <Separator className="mb-12 lg:mb-20" />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Image with Overlay */}
          <div className="relative flex items-center justify-center">
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
          </div>

          {/* Right Side - Features Grid */}
          <div className="flex flex-col gap-8">
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
                      {feature.title}
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
              <Button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-lg rounded-full hover:bg-gray-900 transition-colors duration-200 group hover:cursor-pointer">
                <Link href="/services">
                  <span>Scopri i servizi</span>
                </Link>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}