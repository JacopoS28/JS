// Recupera i dati salvati nel session storage al caricamento della pagina
const savedData = JSON.parse(sessionStorage.getItem('formData')) || {};

// Popola i campi del form con i dati recuperati
document.querySelector('.email').value = savedData.email || '';
document.querySelector('.firstname').value = savedData.firstname || '';
document.querySelector('.lastname').value = savedData.lastname || '';

// Aggiorna il titolo con il nome inserito
document.querySelector('.title-name').textContent = savedData.firstname || '';

// Aggiungi un gestore per il click del pulsante Salva
document.querySelector('.btn').addEventListener('click', function () {
    // Recupera i valori dei campi del form
    const emailValue = document.querySelector('.email').value;
    const firstnameValue = document.querySelector('.firstname').value;
    const lastnameValue = document.querySelector('.lastname').value;

    // Salva i dati nel session storage
    const formData = {
        email: emailValue,
        firstname: firstnameValue,
        lastname: lastnameValue
    };
    sessionStorage.setItem('formData', JSON.stringify(formData));

    // Aggiorna il titolo con il nome inserito
    document.querySelector('.title-name').textContent = firstnameValue;
});