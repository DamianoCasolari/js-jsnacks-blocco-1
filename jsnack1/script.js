const user_number_1 = prompt("Inserisci il primo numero")
const user_number_2 = prompt("Inserisci il secondo numero")


const result = document.querySelector("h1")

if (user_number_1 > user_number_2) {
    result.innerHTML = `il numero maggiore è il primo inserito = ${user_number_1}`
} else if (user_number_1 < user_number_2) {
    result.innerHTML = `il numero maggiore è il secondo inserito = ${user_number_2}`
} else {
    result.innerHTML = `i numeri corrispondo allo stesso valore = ${user_number_2}`

}