/* In questo esercizio dato un array di studenti: */

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

/* -Utilizza forEach per stampare i nomi degli studenti. */

let nomiStudenti = studenti.forEach(studenti => console.log(studenti.nome));

/* -Utilizza find per trovare uno studente con un voto superiore a 90. */

let votoMaggiore = studenti.find(studenti => studenti.voto >= 90);
console.log(votoMaggiore);

/* -Utilizza reduce per calcolare la media dei voti degli studenti.*/

let mediaVoti = studenti.reduce((a, studenti) => a + studenti.voto, 0);
mediaVoti = mediaVoti / studenti.length;
console.log(mediaVoti)

/* -Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.*/

let nomiMaiuscoli = studenti.map(studenti => studenti.nome.toUpperCase())
console.log(nomiMaiuscoli);

/* -Utilizza filter per trovare gli studenti con voti superiori a 85. */

let votoSuperiore = studenti.filter(studenti => studenti.voto >=85);
console.log(votoSuperiore);