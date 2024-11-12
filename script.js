const forms = document.querySelector("form");
const gruppoNomi = [];
const nuovoh1 = document.querySelector("h1");
const ul = document.getElementById("nameList")
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
    ul.innerHTML = "";
    gruppoNomi.forEach((inputNome) => {
        const li = document.createElement("li");
        li.innerText = inputNome;
        li.className = "list-group-item";
        ul.appendChild(li)
        nuovoh1.innerText = "Benvenuto " + inputNome;
    });


};
const btnRemove = document.getElementById("remove");

btnRemove.onclick = function remove() {
    // Rimuove la lista di nomi da localStorage
    localStorage.removeItem("nomi");
    // rimuovi la ul
    ul.innerHTML = "";
};



//esercizio 2 -- counter
const counterElement = document.getElementById('counter');
let count = 0;

function updateCounter() {
    count++;
    counterElement.textContent = count;
}
setInterval(updateCounter, 1000);


