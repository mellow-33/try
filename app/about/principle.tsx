import { ShieldCheck } from "lucide-react";

export default function Principles() {
  const principles = [
    {
      title: "Sicurezza e Conformità Rigorosa:",
      description:
        "We assume breach in everything we build. Every connection is verified, every action is monitored, and nothing is implicitly trusted.",
    },
    {
      title: "Radical Transparency",
      description:
        "We publish our detection methodologies, share threat research openly, and never hide behind security through obscurity.",
    },
    {
      title: "Relentless Innovation",
      description:
        "Our research team continuously develops new detection models, staying ahead of adversaries through AI-driven analysis and proactive threat hunting.",
    },
  ];

  return (
    <section className="w-full bg-[#E6F0DC] py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-4">
            I Nostri Principi
          </h2>
          <p className="text-lg text-[#2D2D2D] max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item, index) => (
            <div 
              key={index} 
              // Struttura simile a una <Card> di shadcn, con colori customizzati per il Dark Theme
              className="flex flex-col bg-[#FDFBF7] rounded-2xl p-8 border border-[#C2D6B3] shadow-sm"
            >
              {/* Icona */}
              <div className="mb-6 flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4B9922]">
                  <ShieldCheck className="h-6 w-6 text-[#EBF5E6]" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Contenuto Testuale */}
              <h3 className="mb-3 text-xl font-semibold text-black">
                {item.title}
              </h3>
              <p className="text-[#2D2D2D] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}