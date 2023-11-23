/* -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
-Utilizzare setTimeout per simulare un'operazione asincrona. */

const student = {name: "Jacopo", surname: "Sangregorio", birthDate: "28/12/2004"};

function fetchStudent() {
    return new Promise((resolve, reject) => {
        let success = true;
        setTimeout(() => {
            if (success) {
                resolve(student);
            } else {
                reject("Errore durante il recupero dei dati");
            }
        }, 2000);
    })
};

function handleData(student) {
    console.log("Dati recuperati:", student);
};
function handleError(error) {
    console.log("Error:", error);    
}


fetchStudent()
.then(handleData)
.catch(handleError);
