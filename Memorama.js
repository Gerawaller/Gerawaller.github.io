// Generar 16 números aleatorios para obtener 16 Pokémon
let numeros = [];
for (let i = 0; i < 16; i++) {
    numeros.push(Math.floor(Math.random() * 898) + 1);
}

// Crear las URIs para los 16 Pokémon
let uris = numeros.map(num => `https://pokeapi.co/api/v2/pokemon/${num}`);

// Hacer las peticiones para los 16 Pokémon
uris.forEach((uri, index) => {
    fetch(uri)
        .then(response => response.json())
        .then(data => CargarDatos(data, `nombre-pokemon-${index+1}`, `img-pokemon-${index+1}`, `descripcion-pokemon-${index+1}`));
});

// Función para cargar los datos de cada Pokémon
function CargarDatos(pokemon, nombreId, imgId, descId) {
    const nombre = document.getElementById(nombreId);
    const foto = document.getElementById(imgId);
    const tipo = document.getElementById(descId);

    nombre.textContent = pokemon.name;
    foto.src = pokemon.sprites.front_default;
    tipo.textContent = pokemon.types[0].type.name;
}
