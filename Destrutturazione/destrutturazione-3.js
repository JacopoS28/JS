/* Dato un array di colori con tre elementi,
 utilizza la destrutturazione dell'array 
 per creare variabili firstColor, secondColor 
 e thirdColor che contengono i valori dell'array. */

 const colors = ["red", "green", "blue"];
 const [firstColor, secondColor, thirdColor] = colors;
 console.log(
`The first color of array is: ${firstColor};
The second color of array is: ${secondColor};
The thir color of array is: ${thirdColor};`)
