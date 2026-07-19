
import { Truck, Recycle, Package, Handshake, Building, Check } from "lucide-react";

export function ServicesList() {
  const platformFeatures = [
    {
      icon: Truck,
      title: "Trasporto",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet"
      ]
    },
    {
      icon: Package,
      title: "Stoccaggio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet"
      ]
    },
    {
      icon: Recycle,
      title: "Recupero e Smaltimento",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet"
      ]
    },
    {
      icon: Building,
      title: "Impianto",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet"
      ]
    },
    {
      icon: Handshake,
      title: "Consulenze",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet"
      ]
    },
  ];

  return (
    <section className="w-full bg-[#FFFDF7] py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-300">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-4">
            Cosa Forniamo 
          </h2>
          <p className="text-base text-[#2D2D2D] max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col bg-[#FDFBF7] rounded-2xl p-8 border border-[#C2D6B3] shadow-lg hover:border-slate-700 transition-colors"
              >
                {/* Icon Container */}
                <div className="mb-6 flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4B9922]">
                    <Icon className="h-6 w-6 text-[#EBF5E6]" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Text Content */}
                <h3 className="mb-3 text-lg font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-[#2D2D2D] text-sm leading-relaxed mb-6 grow">
                  {item.description}
                </p>

                {/* Checklist */}
                <ul className="space-y-3 flex flex-col justify-end">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-[#33800c] mt-0.5 shrink-0" strokeWidth={2} />
                      <span className="text-[#2D2D2D] text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>        
      </div>
    </section>
  );
}