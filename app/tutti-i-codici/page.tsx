'use client';

import { useState } from "react";
import { motion, AnimatePresence, Variants } from 'framer-motion';
// Assicurati che il percorso del file dati sia corretto rispetto a dove salvi questa pagina
import { mockData, CodiceRifiuto } from "../services/codiciRfiutiData"; 

export default function TuttiICodiciRifiuti() {
  const [selectedCode, setSelectedCode] = useState<CodiceRifiuto | null>(null);

  const closePopup = () => {
    setSelectedCode(null);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" as const }
    },
  };

  return (
    <main className="min-h-screen bg-black p-6 md:p-12 font-sans text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <a
              href="/"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              &larr; Torna alla home
            </a>
            <span className="text-xs font-mono bg-green-400/10 text-green-400 border border-green-400/20 px-3 py-1 rounded-full">
              Totale: {mockData.length} codici
            </span>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">
            Catalogo Completo Codici Rifiuto (CER / EER)
          </h1>
          <p className="text-sm text-gray-400">
            Elenco completo di tutti i codici disponibili. Seleziona un elemento per visualizzarne i dettagli.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {mockData.map((elemento) => (
            <motion.button
              variants={cardVariants}
              key={elemento.id}
              onClick={() => setSelectedCode(elemento)}
              className="bg-neutral-900 border border-white/10 rounded-xl p-5 text-left hover:bg-neutral-800 hover:border-green-500/50 transition-colors group flex flex-col justify-between min-h-32 cursor-pointer shadow-lg"
            >
              <div>
                <span className="text-green-400 font-mono font-bold text-xl group-hover:text-green-300 transition-colors">
                  {elemento.codice}
                </span>
                <p className="text-white text-sm font-medium mt-2 line-clamp-2 leading-relaxed">
                  {elemento.nomeRifiuto}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                  Dettagli &rarr;
                </span>
                <div className={`w-2 h-2 rounded-full ${elemento.codice.includes('*') ? 'bg-red-500' : 'bg-green-500'}`} />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closePopup}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} 
              className="bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden cursor-default max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-neutral-800/50 px-6 py-4 border-b border-white/10 flex justify-between items-center shrink-0">
                <h2 className="text-xl font-bold text-white flex items-center">
                  Codice CER: 
                  <span className="font-mono text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-0.5 rounded ml-3">
                    {selectedCode.codice}
                  </span>
                </h2>
                <button
                  onClick={closePopup}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-2xl leading-none"
                >
                  &times;
                </button>
              </div>

              <div className="p-6 space-y-6 overflow-y-auto">
                <div className="bg-neutral-800/30 p-5 rounded-xl border border-white/5 space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                    Definizione Dettagliata
                  </label>
                  <p className="text-base text-gray-200 leading-relaxed font-medium">
                    {selectedCode.nomeRifiuto}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 px-1">
                  <span>ID Registro: #{selectedCode.id}</span>
                  <span className={selectedCode.codice.includes('*') ? 'text-red-400 font-semibold' : 'text-green-400 font-semibold'}>
                    {selectedCode.codice.includes('*') ? 'Rifiuto Pericoloso' : 'Rifiuto Non Pericoloso'}
                  </span>
                </div>
              </div>

              <div className="bg-neutral-800/50 px-6 py-4 border-t border-white/10 flex justify-end shrink-0">
                <button
                  onClick={closePopup}
                  className="bg-green-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-green-400 shadow-md transition-colors cursor-pointer text-sm"
                >
                  Chiudi
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}