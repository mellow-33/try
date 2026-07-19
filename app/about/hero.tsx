import aboutUsImage from "../../images/try.jpg";
import Image from "next/image";

export function Hero1() {
  return (
    <section className="w-full bg-[#FFFDF7]">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col gap-6">
            
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center rounded-full bg-[#33800c] px-3 py-1">
                <span className="text-sm font-medium text-[#FFFDF7]">
                  La Nostra Missione
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Il Nostro Impegno per un Futuro Circolare
            </h1>

            {/* Quote Subtitle */}
            <p className="text-lg italic text-[#55883B]">
              Think Green si dedica alla gestione responsabile, allo stoccaggio sicuro e allo smaltimento efficiente dei rifiuti nell’Agro Pontino. Il nostro obiettivo principale è massimizzare il recupero dei materiali e ridurre al minimo l'impatto ambientale, promuovendo un’economia veramente circolare per il territorio.
            </p>

            {/* Text Paragraphs */}
            <div className="flex flex-col gap-4 md:text-xl text-[#2D2D2D] italic">
              <p>
                Operiamo con tecnologie all’avanguardia e nel rigoroso rispetto delle normative ambientali. Il nostro impianto di stoccaggio è progettato per essere sicuro e affidabile, ponendo la sostenibilità al centro di ogni nostra operazione per proteggere le comunità locali e l'ecosistema naturale.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-200">
            {/* Il contenitore mantiene gli angoli arrotondati e l'ombra */}
            <div className="overflow-hidden rounded-[20px] shadow-2xl border border-white/5 bg-[#FFFDF7]">
              <Image 
                src={aboutUsImage} 
                alt="image" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}