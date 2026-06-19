
const cartas = document.querySelectorAll(".carta-inner");
let cartasactivas = 0;
let primeracarta = "";
let primeracartaHTML = null;
let segundacarta = "";
let puntos = 0;
let segundos = 0;
let cronometro;
let juegoiniciado = false;
const textopuntaje = document.getElementById("puntaje");
const textotimepo = document.getElementById("tiempo");



barajar();

function barajar() {
    const cartas = document.querySelectorAll('.carta');
    const totalCartas = cartas.length;

    cartas.forEach(carta => {
        let posicionAleatoria = Math.floor(Math.random() * totalCartas);
        carta.style.order = posicionAleatoria;
    });
}



function iniciarCronometro() {
    cronometro = setInterval(() => {
        segundos++;
        textotimepo.textContent = segundos;
    }, 1000);
}

cartas.forEach((carta) => {
    carta.addEventListener("click", () => {

        if (juegoiniciado == false) {
            iniciarCronometro();
            juegoiniciado = true;
        }

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

