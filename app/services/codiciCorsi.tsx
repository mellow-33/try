export interface CodiceCorso {
  id: number;
  nome: string;
  descrizione: string;
}

export const mockData: CodiceCorso[] = [
    { 
        id: 1, 
        nome: 'Corso di formazione e informazione per i lavoratori', 
        descrizione: 'Generale di 4 ore più 4, 8, 12 ore a seconda del grado di rischio dell’azienda' 
    },
    { 
        id: 2, 
        nome: 'Corso rischio stress lavoro correlato', 
        descrizione: 'Il corso dura 24 ore' 
    },
    { 
        id: 3, 
        nome: 'Corso per dirigenti e preposti', 
        descrizione: 'Per i preposti è previsto un corso di 8 ore, più sei ore di aggiornamento ogni 5 anni. Per i dirigenti il corso è di 16 ore con aggiornamento di 6 ore ogni 5 anni' 
    },
    { 
        id: 4, 
        nome: 'Corso per RSPP', 
        descrizione: 'Il lavoratore che ricopre il ruolo di RSPP deve seguire un corso di base (modulo A) di 28 ore, poi esistono il Modulo B (fra le 12 e le 68 ore a seconda del settore Ateco di appartenenza) e il modulo C (24 ore) che approfondiscono alcuni aspetti. Il corso di aggiornamento RSPP ha una durata variabile fra le 40 e le 100 ore in cinque anni, a seconda del macrosettore Ateco di appartenenza' 
    },
    { 
        id: 5, 
        nome: 'Corso RSPP datore di lavoro', 
        descrizione: 'Il datore di lavoro deve seguire un corso di 16, 32 o 48 ore a seconda del grado di rischio dell’azienda. Il corso di aggiornamento è quinquennale e ha una durata di 7 o 14 ore, sempre in base al grado di rischio' 
    },
    { 
        id: 6, 
        nome: 'Corso per RLS', 
        descrizione: 'Il corso dura 32 ore, l’aggiornamento è annuale e dura 4 ore' 
    },
    { 
        id: 7, 
        nome: 'Corso per addetto al primo soccorso', 
        descrizione: 'Per aziende di tipo A il corso dura 16 ore, per quelle di tipo B e di tipo C 12 ore. L’aggiornamento avviene ogni 3 anni con un corso di 6 ore per il gruppo A e 4 ore per i gruppi B e C' 
    },
    { 
        id: 8, 
        nome: 'Corso per addetto antincendio', 
        descrizione: 'I corsi per addetto antincendio si dividono in base al grado di rischio dell’azienda. Per il rischio basso 4 ore, per il rischio medio 8 ore, per il rischio alto 16 ore. Per l’aggiornamento i corsi sono di 2,5 o 8 ore a seconda del grado di rischio' 
    },
    { 
        id: 9, 
        nome: 'Corso primo ingresso in cantiere', 
        descrizione: 'Durata 16 ore' 
    },
    { 
        id: 10, 
        nome: 'Corso di formazione per mulettista', 
        descrizione: 'Durata 4 ore' 
    },
    { 
        id: 11, 
        nome: 'Corso di formazione ponteggiatori PIMUS', 
        descrizione: 'Durata 28 ore' 
    },
    
]