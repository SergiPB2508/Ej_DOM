const body = document.querySelector("body");

// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ulCountries = document.createElement("ul");

for(let i = 0; i < countries1.length; i++){
	ulCountries.innerHTML += `<li>${countries1[i]}</li>`;
}

body.appendChild(ulCountries);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

document.querySelector(".fn-remove-me").remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let ulCars = document.createElement("ul");

for(let i = 0; i < cars.length; i++){
	ulCars.innerHTML += `<li>${cars[i]}</li>`;
}

body.querySelector('[data-function="printHere"]').appendChild(ulCars);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(const countrie of countries2) {
	body.innerHTML += `<div>
							<h4>${countrie.title}</h4>
							<img src="${countrie.imgUrl}" alt="${countrie.title}">
        					<button class="delete">Eliminar</button>
						</div>`;
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.
let buttonDeletLast = document.createElement("button");

buttonDeletLast.innerHTML = "Eliminar Ultimo"

body.appendChild(buttonDeletLast);

buttonDeletLast.addEventListener("click", () => {
	
	let divs = document.querySelectorAll("div");

	divs[divs.length-1].remove();
}
)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.


document.addEventListener("click", (e) => {
	let button = e.target
	
	if(button.className == "delete"){
		let pare = button.parentNode;

		pare.remove();
		
	}
})