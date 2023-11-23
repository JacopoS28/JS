/* Riscrivi la funzione fetchDataFromAPI 
dell'esercizio Le Callback: const person = { name: "John", age: 30 };

function fetchDataFromAPI(callback) {
  setTimeout(() => {
    callback(person);
  }, 2000);
}

function handleData(data) {
  console.log("Dati recuperati:", data);
}

fetchDataFromAPI(handleData);
 
utilizzando le Promises per una migliore gestione degli errori.
La promise dovrebbe risolversi con i dati 
e rifiutare con un messaggio di errore. */

const person = { name: "John", age: 30 };

function fetchDataFromAPI() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const success = true;

            if (success) {
                resolve(person);
            } else {
                reject(`Errore durante il recuppero dei dati.`)
            }
        }, 2000);
    })
}

function handleData(data) {
    console.log("Dati recuperati: ", data);
}

function handleError(error) {
    console.log("Errore: ", error);
}

fetchDataFromAPI()
    .then(handleData)
    .catch(handleError);





