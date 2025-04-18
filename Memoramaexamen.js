let aciertos = 0;
let errores = 0;
let primerCarta = null;
let bloqueo = false;

const contenedor = document.getElementById("contenedor");
const aciertosSpan = document.getElementById("aciertos");
const erroresSpan = document.getElementById("errores");

iniciarJuego();

function iniciarJuego() {
  const numeros = [];
  while (numeros.length < 8) {
    let n = Math.floor(Math.random() * 898) + 1;
    if (!numeros.includes(n)) {
      numeros.push(n);
    }
  }

  const duplicados = [...numeros, ...numeros];
  const mezclados = duplicados.sort(() => Math.random() - 0.5);

  Promise.all(mezclados.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())))
    .then(pokemones => {
      contenedor.innerHTML = '';
      pokemones.forEach(pokemon => {
        crearTarjeta(pokemon);
      });
    });
}

function crearTarjeta(pokemon) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjetapokemon");

  const carta = document.createElement("div");
  carta.classList.add("carta");
  carta.dataset.nombre = pokemon.name;

  carta.innerHTML = `
    <div class="cara trasera">?</div>
    <div class="cara frontal">
      <img src="${pokemon.sprites.front_default}" width="80">
    </div>
  `;

  tarjeta.appendChild(carta);
  contenedor.appendChild(tarjeta);

  tarjeta.addEventListener("click", () => {
    if (bloqueo || carta.classList.contains("volteada")) return;

    carta.classList.add("volteada");

    if (!primerCarta) {
      primerCarta = carta;
    } else {
      bloqueo = true;
      const nombre1 = primerCarta.dataset.nombre;
      const nombre2 = carta.dataset.nombre;

      if (nombre1 === nombre2) {
        aciertos++;
        aciertosSpan.textContent = aciertos;
        primerCarta = null;
        bloqueo = false;
      } else {
        errores++;
        erroresSpan.textContent = errores;
        setTimeout(() => {
          carta.classList.remove("volteada");
          primerCarta.classList.remove("volteada");
          primerCarta = null;
          bloqueo = false;
        }, 1000);
      }
    }
  });
}
