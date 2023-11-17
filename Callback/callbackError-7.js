/* Partendo dall'esercizio Le Callback:
function performOperation(a, b, callback) {
    const result = a * b; // Operazione matematica 
    callback(result);
}

function displayResult(result) {
    console.log(`Il risultato dell'operazione è:${result}`);
}

const operazione = performOperation(13, 5, displayResult);

includi la gestione degli errori. Se la funzione di callback
genera un errore, catturalo e gestiscilo. Modificare la 
funzione performOperation per gestire l'errore e 
registrare un messaggio di errore.*/


function performOperation(a, b, callback) {
    const result = a * b;
    if (isNaN(result)) {
        const error = new Error("L'operazione ha restituito un risultato non valido")
        console.log(error.message);
        callback(error);
    } else {
        callback(null, result)
    }
}

function displayResult(error, result) {
    if (error) {
        console.error(`Errore durante la visualizzazione del risultato: ${error.message}`);
    } else {
        console.log(`Il risultato dell'operazione è: ${result}`);
    }
}

performOperation(5, 3, displayResult);
