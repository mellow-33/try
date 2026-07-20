"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MissionSection() {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 -mt-24">

  {/* Colonna Sinistra */}
  <div className="bg-linear-to-br from-green-200 to-green-100 flex items-center justify-center px-8 pt-32 pb-12 lg:px-16">
    <div className="w-full max-w-xl">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Immagine */}
        <div className="relative w-full h-56">
          <Image
            src="/aboutus-bg.jpg"
            alt="Forest mission"
            fill
            className="object-cover"
          />
        </div>

        {/* Contenuto */}
        <div className="p-8">
          <div className="inline-block bg-green-300 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
            Radici solide
          </div>

          <h3 className="text-xl font-bold text-black mb-6 leading-snug">
            Dal nostro hub di Pontinia, lavoriamo ogni giorno per essere il
            motore della transizione ecologica locale
          </h3>

          <Link
            href="/contact/#location"
            className="inline-flex items-center gap-2 font-medium text-black group"
          >
            <span>Visita l'impianto</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Colonna Destra */}
  <div className="bg-white flex items-center justify-center px-8 py-12 lg:px-16">
    <div className="w-full max-w-xl lg:pt-10">

      <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight mb-8">
        Non ci limitiamo a gestire i rifiuti, ne reinventiamo il futuro. In
        Think Green crediamo che la vera sostenibilità nasca dall'azione
        concreta: guidiamo le aziende verso l'economia circolare per proteggere
        il pianeta di domani.
      </h2>
    </div>
  </div>

</section>
  );
}