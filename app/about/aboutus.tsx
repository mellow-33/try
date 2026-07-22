'use client'

import Image from "next/image";

export default function AboutUsIntro(){
    return(
    <section className="relative w-full h-125 lg:h-screen overflow-hidden -mt-24">
      
      {/* BACKGROUND */}
      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image
          src="/sm-about-bg.jpg"
          alt="Solar panels professionals mobile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Immagine per tablet e desktop */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Image
          src="/big-about-bg.png"
          alt="Solar panels professionals"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* OVERLAY - Mobile First */}
      <div className="absolute inset-0 bg-black/30 z-5"></div>

      {/* CONTENT - Mobile First */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        
        {/* Label - Mobile First */}
        <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-light mb-3 sm:mb-4 md:mb-6 lg:mb-8 tracking-widest">
          About Us
        </p>
        
        {/* Title - Mobile First */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-2xl sm:max-w-3xl leading-tight">
          <span className="text-green-500 block">Passione</span>
          <span className="text-white block">e sostenibilità</span>
        </h1>
      </div>

      {/* WAVE - Mobile First */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full">
        <style>{`
          @keyframes wave {
            0% {
              d: path('M0,80 Q360,40 720,80 T1440,80 L1440,120 L0,120 Z');
            }
            50% {
              d: path('M0,90 Q360,30 720,90 T1440,90 L1440,120 L0,120 Z');
            }
            100% {
              d: path('M0,80 Q360,40 720,80 T1440,80 L1440,120 L0,120 Z');
            }
          }
          
          .wave-path {
            animation: wave 3.5s ease-in-out infinite;
          }
        `}</style>

        {/* SVG con 2 ondulazioni - Mobile First */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="wave-path"
            d="M0,80 Q360,40 720,80 T1440,80 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
    );
}