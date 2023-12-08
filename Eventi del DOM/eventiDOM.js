const $button = document.querySelector(".btn")

function toggleDarkMode() {
    document.body.classList.toggle('darkmode');
};

$button.addEventListener("click", () => {
    toggleDarkMode();
});

