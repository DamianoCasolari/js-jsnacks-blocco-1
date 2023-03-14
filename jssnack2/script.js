const user_word_1 = prompt("Inserisci la prima parola")
const user_word_2 = prompt("Inserisci la seconda parola")



const result = document.querySelector("h1")

if (user_word_1.length > user_word_2.length) {
    result.innerHTML = `La prima parola ${user_word_1} è più lunga di ${user_word_2} `
} else if (user_word_1.length < user_word_2.length) {
    result.innerHTML = `La seconda parola ${user_word_2} è più lunga della prima ${user_word_1}`
} else {
    result.innerHTML = `Le parole ${user_word_2} e ${user_word_1} corrispondo allo stesso numero di lettere`

}