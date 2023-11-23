/* -Crea una catena di Promises per simulare 
un'operazione asincrona in più fasi. 
-La prima Promise recupera i dati 
dell'utente { id: 1, name: 'John' }. 
-La seconda Promise recupera i post 
dell'utente ['Post 1', 'Post 2', 'Post 3']. 
-Infine, chiama le funzioni per recuperare e
stampare in console il nome dell'utente e i titoli dei post. */


const user = { id: 1, name: 'John' };

function fetchUserData() {
    return new Promise((resolve, reject) => {
        success = true;
        
        setTimeout(() => {
            if (success) {
                resolve(user);
            } else {
                reject("Errore durante il recupero dati");
            }
        }, 2000);
    })
}

function handleUser(user) {
    console.log("Dati utente recuperati", user);
};

function handleError(error) {
    console.log("Error: ", error);
};

fetchUserData()
.then(handleUser)
.catch(handleError);


userPost = ['Post 1', 'Post 2', 'Post 3'];

function fetchUserPosts(userId, userName) {
    return new Promise((resolve, reject) => {
        successPost = true;

        setTimeout(() => {
            if (successPost) {
                resolve(userPost);
        } else {
                reject("Errore durante il recupero dei post dell'utente")
            }
        }, 4000);
    })
}

function handleUserPost(userPost) {
    console.log("Post recuperati: ", userPost);
}

function handleError(error) {
    console.log("Error: ", error);
}

fetchUserPosts()
.then(handleUserPost)
.catch(handleError);
