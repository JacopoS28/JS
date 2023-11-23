/* In questo esercizio andremo a simulare il caricamento di moduli di un 
veicolo spaziale in modo asincrono e quindi lanciare il veicolo spaziale
quando tutti i moduli sono stati caricati con successo!

La funzione "caricaModulo" ritorna una promise simulando il caricamento 
di un modulo con un ritardo di 2 secondi!

Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in 
sequenza la funzione "caricaModulo" per caricare i moduli A, B e C, attendendo 
il completamento di ciascuna operazione prima di passare alla successiva.

Alla fine, quando tutti i moduli sono stati caricati con successo, stampa in 
console "Veicolo spaziale pronto per il lancio!". */

const modulo = 
{   
    A : 3,
    B : 2,
    C : 1 
};

function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

async function lanciaVeicoloSpaziale() {
    try {
        const primoModulo = await caricaModulo(modulo.A);
        console.log(primoModulo);
        const secondoModulo = await caricaModulo(modulo.B);
        console.log(secondoModulo);
        const terzoModulo = await caricaModulo(modulo.C);
        console.log(terzoModulo);
        console.log("Veicolo spaziale pronto per il lancio!");
    } catch (error) {
        console.log(error);
    }
}

lanciaVeicoloSpaziale();
caricaModulo();
