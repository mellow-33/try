"use client"

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="w-full py-12 md:pb-0 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        {/* Testo Gigante Sfumato con animazione */}
        <motion.div 
          initial={{ scale: 0.85, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }} // Sostituito il margine negativo con la percentuale di visibilità
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full mt-4 md:mt-32 flex justify-center select-none pointer-events-none"
        >
          <h1 
            className="text-5xl sm:text-7xl md:text-[10vw] font-bold tracking-tighter leading-tight md:leading-[0.75] bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/80 to-transparent"
          >
            Think Green
          </h1>
        </motion.div>

      </div>
    </footer>
  );
}