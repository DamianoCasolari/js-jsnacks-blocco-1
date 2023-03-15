// Snack 5 (sia con for che con while):
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


const listNumber = [
    
]


for (let i = 0; i < 6; i++) {
    
    const yourNumber = Number(prompt("Inserisci un numero"));

    if (yourNumber % 2 != 0) {
        listNumber.push(yourNumber)
    }

}

document.querySelector(".result").innerHTML = `La lista di numeri dispari inseriti è : ${listNumber}`



// While case


// const listNumber = [
    
// ]

// let i = 0
// for ( i < 6 ) {
    
//     const yourNumber = Number(prompt("Inserisci un numero"));

//     if (yourNumber % 2 != 0) {
//         listNumber.push(yourNumber)
//     }
//     i++
// }

// document.querySelector(".result").innerHTML = `La lista di numeri dispari inseriti è : ${listNumber}`



