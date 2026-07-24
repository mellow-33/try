'use client';

import { useState } from "react";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { mockData, CodiceRifiuto } from "./codiciRfiutiData";
import Link from "next/link";

export default function ListaCodiciRifiuti() {
  const [selectedCode, setSelectedCode] = useState<CodiceRifiuto | null>(null);
  const [mostraTutti, setMostraTutti] = useState<boolean>(false);

  const closePopup = () => {
    setSelectedCode(null);
  };

  // Mostra solo i primi elementi se mostraTutti è false, altrimenti mostra l'intera lista
  const limit = 4;
  const datiVisualizzati = mostraTutti ? mockData : mockData.slice(0, limit);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
    <section className="bg-black py-8 px-6 md:px-12 font-sans text-white overflow-hidden lg:pt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Intestazione animata */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <h1 className="text-3xl font-bold text-white mb-2">
            Catalogo Codici Rifiuto (CER / EER)
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Seleziona un codice dalla lista per visualizzarne la definizione chiara e dettagliata.
          </p>
        </motion.div>

        {/* Griglia dei Codici animata allo scroll */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {datiVisualizzati.map((elemento) => (
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

        {/* Pulsante per reindirizzare alla pagina completa */}
        {mockData.length > limit && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/tutti-i-codici"
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-xl transition-colors cursor-pointer text-sm shadow-md inline-block"
            >
              Visualizza tutti ({mockData.length}) codici &rarr;
            </Link>
          </div>
        )}
      </div>

      {/* Popup Card (Modale) gestita con AnimatePresence */}
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
              {/* Header Popup */}
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

              {/* Corpo Popup (Scrollabile) */}
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

              {/* Footer Popup */}
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
    </section>
  );
}