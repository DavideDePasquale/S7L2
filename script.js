const forms = document.querySelector("form");
const gruppoNomi = [];
const nuovoh1 = document.querySelector("h1");
//es 1 




class Registrazione {
    constructor(name) {
        this.name = name;
    }
}
forms.onsubmit = function (event) {
    event.preventDefault();
    const inputNome = document.getElementById("inputName");
    gruppoNomi.push(inputNome.value);
    console.log(gruppoNomi);
    localStorage.setItem("nomi", JSON.stringify(gruppoNomi));
    const arrayNomi = JSON.parse(localStorage.getItem("nomi"))
    arrayNomi.forEach((inputNome) => {
        nuovoh1.innerText = inputNome;

    });


};
const buttonReset = document.getElementById("reset");



//esercizio 2 -- counter
const button = document.getElementsByTagName("button")
const counterElement = document.getElementById('counter');
let count = 0;

function updateCounter() {
    count++;
    counterElement.textContent = count;
}
setInterval(updateCounter, 1000);


