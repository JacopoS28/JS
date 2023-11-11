/* Scrivi una funzione filterOutOdds che accetta un numero 
qualsiasi di argomenti e restituisce un array contenente
solo i numeri pari. Utilizzare il parametro rest per 
raccogliere gli argomenti */

function filterOutOdds(...numbers) {
    return numbers.filter(num => num % 2 === 0);
  };
  
  const result1 = filterOutOdds(1, 2, 3, 4, 5, 6);
  console.log(result1); 
  
  const result2 = filterOutOdds(10, 15, 21, 30);
  console.log(result2);