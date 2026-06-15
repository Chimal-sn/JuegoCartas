
const cartas = document.querySelectorAll(".carta-inner");

cartas.forEach((carta) => {
    carta.addEventListener("click", () => {
        carta.classList.toggle("is-flipped");
    });
});

