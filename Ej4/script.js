
let button = document.getElementById("btnToClick");

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

button.addEventListener("click", () => {
    let value = document.querySelector(".click").value;

    console.log(value);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

button.addEventListener("focus", () => {
    let value = document.querySelector(".focus").value;

    console.log(value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let input = document.querySelector(".value");

input.addEventListener("input", () => {
    let value = input.value;

    console.log(value);
});