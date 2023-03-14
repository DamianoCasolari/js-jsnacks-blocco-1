const user_number_1 = prompt("Inserisci il primo numero")
const user_number_2 = prompt("Inserisci il secondo numero")


const result = document.querySelector("h1")

if (user_number_1 > user_number_2) {
    result.innerHTML = user_number_1;
} else {
    result.innerHTML = user_number_2;
}