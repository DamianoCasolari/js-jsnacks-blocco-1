const user_number_1 = prompt("Inserisci la prima parola")
const user_number_2 = prompt("Inserisci la seconda parola")


const result = document.querySelector("h1")

if (user_number_1.length > user_number_2.lenght) {
    result.innerHTML = `La prima parola ${user_number_1} è più lunga di ${user_number_2} `
} else if (user_number_1.length < user_number_2.length) {
    result.innerHTML = `La seconda parola ${user_number_2} è più lunga della prima ${user_number_1}`
} else {
    result.innerHTML = `Le parole corrispondo allo stesso numero di lettere `

}