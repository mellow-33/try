
export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      number: "2",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      number: "3",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      number: "4",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    }
  ];

  return (
    <section className="w-full bg-[#FFFDF7] pb-12 md:pb-28">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-4">
            Come funziona
          </h2>
          <p className="text-base text-[#2D2D2D] max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {/* Number Circle */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#4B9922] shadow-lg shadow-[#C2D6B3]/20">
                <span className="text-xl font-bold text-white">
                  {step.number}
                </span>
              </div>
              
              {/* Text Content */}
              <h3 className="mb-3 text-xl text-[#2D2D2D]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}