const body = document.querySelector("body")

// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

let div = document.createElement("div");

body.appendChild(div);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let div2 = document.createElement("div");
let p = document.createElement("p");

div2.appendChild(p);

body.appendChild(div2);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

let div3 = document.createElement("div");

for (let i = 0; i < 6; i++) {
    
    let p = document.createElement("p");

    div3.appendChild(p);
}

body.appendChild(div3);

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

let text = document.createElement("p");

text.innerHTML = "Soy dinámico!";

body.appendChild(text);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

document.querySelector(".fn-insert-here").innerHTML = "Wubba Lubba dub dub";

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul = document.createElement("ul");

for (const app of apps) {
    let li = document.createElement("li");

    li.innerHTML = app;

    ul.appendChild(li);
}

body.appendChild(ul);


// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let remove = document.querySelectorAll(".fn-remove-me");

for(let i = 0; i < remove.length; i++){
    remove[i].remove();
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let firstDiv = document.querySelector("div");

firstDiv.insertAdjacentHTML("afterend", "<p>Voy en medio!</p>");

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

let divInsert = document.querySelectorAll(".fn-insert-here");

for(let i = 0; i < divInsert.length; i++){
    divInsert[i].innerHTML = "<p>Voy dentro!</p>";
}
