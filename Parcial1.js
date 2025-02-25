let Titulo="Uncharted"
let Protagonista1="Tom holland"
let Protagonista2="Mark Walhberg"
let Protagonista3="Sophia Ali" 

let pelicula= `
<img src="PortadaUncharted.jpg"width=200 weight="250"/><br/>
${Titulo} <br/>
Descripcion: El cazador de tesoros Victor Sullivan recluta a Nathan Drake para que 
lo ayude a recuperar una fortuna de 500 años de antigüedad. 
Lo que comienza como un atraco se convierte en una competencia contra el despiadado Santiago Moncada.<br/>

<br/>Protagonistas<br/>

<table>
    <tr>
        <th>Nombre</th>
        <th>Descripcion</th>
    </tr>
    <tr>
        <td>${Protagonista1}</td>
        <td>Se trata de un cazatesoros y explorador sin temor alguno. Impulsivo y ambicioso, es un gran superviviente, sin temor a nada. Su hermano, Sam, 
        le enseñó a buscarse muy bien la vida, acostumbrándole desde muy pequeño a seguir el camino de los cazatesoros.</td> 
    </tr>
</table>
<br/>
<table>
    <tr>
        <th>Nombre</th>
        <th>Descripcion</th>
    </tr>
    <tr>
        <td>${Protagonista2}</td>
        <td>Victor Sullivan, interpretado por Mark Wahlberg, 
        es el mejor amigo de Drake y quien, de algún modo, tiene que aprender a trabajar en equipo con Nathan. </td>
    </tr>
</table>
<br/>
<table>
    <tr>
        <th>Nombre</th>
        <th>Descripcion</th>
    </tr>
    <tr>
        <td>${Protagonista3}</td>
        <td>Chloe Frazer, interpretada por Sophia Ali, es la única cazatesoros cuya habilidad puede ser comparada con la de Drake. De carácter misterioso y metódica en su trabajo, 
        Frazer tiene un gran conocimiento sobre las antigüedades, lo que la convierte en una pieza imprescindible.</td> 
    </tr>
</table>
<br/>

Calificacion IMDB<br/>
<span class="material-symbols-outlined">
sentiment_satisfied
</span>

<br/><br/>
Trailer
<a href="https://youtu.be/3xOnhOs_rHg">Ver trailer </a>
<br/>
<iframe width="656" height="369" src="https://www.youtube.com/embed/3xOnhOs_rHg" title="Uncharted: Fuera del Mapa l Tráiler Oficial l Doblado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>">
`
console.log(pelicula);
document.body.innerHTML=pelicula;