 async function fetchData() {
    try {
        // URL dell'API
        const apiUrl = 'https://ringsdb.com/api/public/card/01001.json?_format=json';

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Errore nella richiesta API: ${response.status}`);
        }

        const data = await response.json();
        const characterName = data.name;
        const characterImageUrl = "https://ringsdb.com"+data.imagesrc;
        console.log(characterImageUrl);

        document.getElementById('character-name').innerText = characterName;
        document.getElementById('character-image').src = characterImageUrl;

    } catch (error) {
        console.error('Si è verificato un errore:', error);
    }
}

window.onload = fetchData();