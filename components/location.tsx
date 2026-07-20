"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function LocationSection() {
  const locationInfo = [
    {
      icon: MapPin,
      label: "Indirizzo",
      value: "Strada secondaria A5 Pontinia(LT) 04014",
      href:"https://maps.app.goo.gl/bpP5foogdVTXZRNj6"
    },
    {
      icon: Phone,
      label: "Telefono",
      value: "+39 02 1234 5678",
      href: "tel:+390212345678",
    },
  ];

  return (
    <section className="w-full min-h-125 lg:min-h-150 grid grid-cols-1 lg:grid-cols-2 overflow-hidden pt-24">
      
    {/* Colonna Sinistra - Mappa */}
      <div className="bg-white flex items-center justify-center p-0 h-full min-h-150 sm:min-h-175 lg:min-h-auto">
        <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-200 flex items-center justify-center relative">
          {/* Iframe Mappa */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.989621034341!2d13.173047376565329!3d41.41774397129602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13253f0059fd79cd%3A0x15716f756ea67c84!2sTHINK%20GREEN%20S.R.L.!5e0!3m2!1sit!2sit!4v1784547109317!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>

  {/* Informazioni Location */}
  <div className="bg-white flex items-center justify-center p-8 lg:p-16 h-full">
    <div className="w-full max-w-xl pt-6">
      {/* Label */}
      <p className="text-gray-500 text-sm font-medium mb-4">Dove trovarci</p>

      {/* Titolo Grande */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
        Visita la nostra sede
      </h2>

      {/* Descrizione */}
      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        La nostra sede operativa si trova a Pontinia (LT), vero e proprio fulcro delle nostre attività. Ti invitiamo a scoprire il nostro impianto e i progetti concreti con cui trasformiamo ogni giorno gli scarti in nuove risorse
      </p>

      {/* Info Cards */}
      <div className="space-y-4 mb-8">
        {locationInfo.slice(0, 2).map((info, index) => {
          const IconComponent = info.icon;
          return (
            <div 
              key={index}
              className={`flex items-start gap-4 fade-in-up duration-1000 ${
              index === 0 ? 'delay-300' :
              'delay-400'
              }`}
            >
            
            {/* Icona */}
            <div className="shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <IconComponent className="h-5 w-5 text-green-700" strokeWidth={2} />
              </div>
            </div>

            {/* Testo */}
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-500 uppercase">
                {info.label}
              </p>
              {info.href ? (
                <a 
                  href={info.href}
                  className="text-lg font-medium text-black hover:text-green-700 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-lg font-medium text-black">
                  {info.value}
                </p>
              )}
            </div>
          </div>
        );
      })}

    {/* Link per visualizzare tutti i contatti */}
    <div className="pt-4 border-t border-gray-200 fade-in-up duration-1000 delay-500">
      <Link href="/contact">
        <Button className="bg-black text-white font-xl rounded-full hover:bg-gray-900 transition-colors duration-200 group hover:cursor-pointer px-4 sm:px-5 py-2 sm:py-3 h-auto shadow-md ">
          Visualizza tutti i contatti
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
      </div>
      </div>
    </div>
  </div>
</section>
  );
}