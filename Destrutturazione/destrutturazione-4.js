/* Date due variabili a e b, scambia 
i loro valori usando la destrutturazione. */

let a = [5];
let b = [10];

[a, b] = [b, a];
console.log(
`Nuovo valore di a:${a}
Nuovo valore di b:${b}`);
