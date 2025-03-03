let numero = Math.floor(Math.random() * 898) + 1; 
let numero1 = Math.floor(Math.random() * 898) + 1;


var uri1 = `https://pokeapi.co/api/v2/pokemon/${numero}`;
var uri2 = `https://pokeapi.co/api/v2/pokemon/${numero1}`;

fetch(uri1)
    .then(response => response.json())
    .then(data => CargarDatos(data, "nombre-pokemon-1", "img-pokemon-1", "descripcion-pokemon-1"));

fetch(uri2)
    .then(response => response.json())
    .then(data => CargarDatos(data, "nombre-pokemon-2", "img-pokemon-2", "descripcion-pokemon-2"));

function CargarDatos(pokemon, nombreId, imgId, descId) {
    const nombre = document.getElementById(nombreId);
    const foto = document.getElementById(imgId);
    const tipo = document.getElementById(descId);

    
    nombre.textContent = pokemon.name;
    foto.src = pokemon.sprites.front_default;
    tipo.textContent = pokemon.types[0].type.name;
    

}