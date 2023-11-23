/* Convertire la seguente funzione basata su 
callback in una funzione basata su Promise. */
/* function callback_BasedFunction(arg1, arg2, callback) {
    setTimeout(() => {
        const result = arg1 + arg2;
        if (result % 2 !== 0) {
            callback(null, result);
        } else {
            callback(new Error('Result is not odd!'), null);
        }
    }, 1000);
} 
_________________________________________________________________________________________________
*/

let sum;
let num1 = 3;
let num2 = 5;
sum = num1 + num2;
function promiseBasedFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (sum % 2 !== 0) {
                resolve(sum);
            } else {
                reject("Error: Result is not odd!")
            }
        }, 1000);
    })
}

function handlePromiseFunction() {
    console.log("The sum is an odd number:", sum);
}

function handleError(error) {
    console.log(error);
}

promiseBasedFunction()
.then(handlePromiseFunction)
.catch(handleError);