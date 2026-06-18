
const cartas = document.querySelectorAll(".carta-inner");
let cartasactivas = 0;
let primeracarta = "";
let primeracartaHTML = null;
let segundacarta = "";
let puntos = 0;
const textopuntaje = document.getElementById("puntaje")

cartas.forEach((carta) => {
    carta.addEventListener("click", () => {

        if (!carta.classList.contains("is-flipped")) {
            if (cartasactivas == 0) {
                carta.classList.toggle("is-flipped");
                cartasactivas++;
                primeracarta = carta.dataset.pareja;
                primeracartaHTML = carta;
                console.log(primeracarta);

            } else if (cartasactivas == 1) {
                segundacarta = carta.dataset.pareja;
                carta.classList.toggle("is-flipped");
                cartasactivas++;
                setTimeout(() => {
                    if (primeracarta == segundacarta) {
                        primeracartaHTML.classList.toggle("ocultar");
                        carta.classList.toggle("ocultar");
                        puntos += 1;
                        textopuntaje.textContent = puntos;
                    } else {
                        primeracartaHTML.classList.toggle("is-flipped");
                        carta.classList.toggle("is-flipped");

                    }
                    cartasactivas = 0;
                }, 1000);
            }
        }

    });
});

