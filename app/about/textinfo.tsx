'use client'

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TextInfoSection() {  
const features = [
  {
    number: "01",
    title: "Raccolta",
    description: "Servizi puntuali e personalizzati per la gestione dei rifiuti urbani e commerciali."
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

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 lg:py-32 flex justify-center">
      {/* Contenitore principale con la linea grigia a sinistra */}
      <div className="w-full max-w-7xl lg:border-l lg:border-gray-300 md:pl-12 lg:pl-20">
        
        {/* Blocco di testo principale (Titolo grande) */}
        <div className="max-w-4xl mb-16 lg:mb-32">
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-semibold text-gray-900 leading-[1.15] tracking-tight">
            Siamo orgogliosi di offrire un'ampia gamma di servizi per la gestione dei rifiuti, includendo la raccolta differenziata, lo smaltimento sicuro e il riciclo
          </h2>
        </div>

        {/* Blocco di testo secondario (Paragrafo allineato a destra) */}
        <div className="flex w-full justify-start lg:justify-end">
          <div className="max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed space-y-4 font-normal">
            <p>
              Il nostro impegno per la tutela dell'ambiente è al centro di tutto ciò che facciamo.
              Crediamo che l'economia circolare sia la chiave per un futuro più sostenibile,
              e ci dedichiamo ogni giorno a mantenere pulite e sicure le nostre comunità.
            </p>
            <p>
              Ecco perché collaboriamo con cittadini e imprese, offrendo soluzioni ecologiche
              e tecnologie all'avanguardia per trasformare gli scarti in nuove risorse e
              ridurre l'impatto ambientale.
            </p>
          </div>
        </div>

        <div className="w-full mt-18 lg:mt-32">
          <div className="relative w-full aspect-video bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 group cursor-pointer hover:shadow-lg transition-shadow duration-300">
            
            {/* 
              Sostituisci questo blocco con il tuo iframe o tag <video>.
              Esempio:
              <iframe className="absolute top-0 left-0 w-full h-full" src="URL_DEL_VIDEO" ...></iframe>
            */}
            <video
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/about-video.mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
            </video>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mt-18 lg:mt-32">
          
          {/* Colonna di Sinistra: Vision e Pulsante */}
          <div className="max-w-xl">
            <h3 className="text-green-600 font-semibold text-xl md:text-2xl tracking-wide mb-6">
              La nostra visione
            </h3>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Il nostro impegno per l'economia circolare è al centro di tutto ciò che facciamo. 
              Crediamo che una gestione intelligente e sostenibile dei rifiuti sia la chiave per un futuro più pulito, 
              e ci dedichiamo a renderla accessibile ed efficiente per tutti. 
              Ecco perché offriamo soluzioni flessibili e competitive per privati e imprese.
            </p>

            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-black text-white font-medium px-7 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow"
            >
              <span>RICHIEDI UN PREVENTIVO</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Colonna di Destra: Come Lavoriamo (Fasi del Processo) */}
          <div className="flex flex-col gap-8">
            
            {/* Titolo di sezione a destra */}
            <h3 className="text-green-600 font-semibold text-xl md:text-2xl tracking-wide">
              Come lavoriamo
            </h3>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}