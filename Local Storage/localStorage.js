// Recupera il nome dal local storage al caricamento della pagina
const savedName = localStorage.getItem('savedName');
if (savedName) {
    document.querySelector('.title-name').textContent = savedName;
}

// Aggiungi un gestore per il click del pulsante Salva
document.querySelector('.btn').addEventListener('click', () => {
    // Recupera il valore del campo Nome
    const nameValue = document.querySelector('.firstname').value;

    // Aggiorna il titolo con il nome inserito
    document.querySelector('.title-name').textContent = nameValue;

    // Salva il nome nel local storage
    localStorage.setItem('savedName', nameValue);
});