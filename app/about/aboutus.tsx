"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsIntro(){
    return(
    <section className="relative w-full h-dvh overflow-hidden bg-gray-900">
      
      {/* BACKGROUND CON EFFETTO SOFT KEN BURNS (Zoom-out lento) */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Immagine Mobile */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <Image
            src="/sm-about-bg.jpg"
            alt="Professionisti gestione ambientale e rifiuti mobile"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Immagine Desktop/Tablet */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src="/big-about-bg.png"
            alt="Professionisti gestione ambientale e rifiuti"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* OVERLAY - Scurisce l'immagine per far risaltare il testo */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>

      {/* CONTENT - Animato al caricamento */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 pb-16 lg:pb-28">
        
        {/* Label: Dissolvenza dall'alto */}
        <motion.p 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-light mb-3 sm:mb-4 md:mb-6 lg:mb-8 tracking-widest text-center uppercase"
        >
          About Us
        </motion.p>
        
        {/* Title: Comparsa a cascata dal basso */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-2xl sm:max-w-4xl leading-tight text-center">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="text-green-500 block"
          >
            Passione
          </motion.span>

          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            className="text-white block"
          >
            e sostenibilità
          </motion.span>
        </h1>
      </div>

      {/* WAVE - Fissata in basso */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 z-20 w-full pointer-events-none"
      >
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

        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 md:h-24 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="wave-path"
            d="M0,80 Q360,40 720,80 T1440,80 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </motion.div>

    </section>
    );
}