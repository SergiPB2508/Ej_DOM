const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];


let ul = document.createElement("ul");

for (let i = 0; i < places.length; i++) {
    ul.innerHTML += `<li>${places[i]}</li>`;
}

document.querySelector('[data-function="printHere"]').appendChild(ul);