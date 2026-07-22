"use client"

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="w-full pb-0 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        {/* Testo Gigante Sfumato con animazione di zoom, blur e fade */}
        <motion.div 
          initial={{ scale: 0.85, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mt-0 md:mt-32 flex justify-center select-none pointer-events-none"
        >
          <h1 
            className="text-[10vw] font-bold tracking-tighter leading-[0.75] bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground/80 to-transparent"
          >
            Think Green
          </h1>
        </motion.div>

      </div>
    </footer>
  );
}