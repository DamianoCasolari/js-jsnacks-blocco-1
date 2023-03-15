// Snack 4 (sia con for che con while):
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// const listGuest = [
//     'Paola Rizzo',
//     'Gilio Golia',
//     'Marco Marchese',
//     'Giulia Ottaviano'
// ]

// const yourName = prompt("Inserisci il tuo nome")

// let confirm = true;
// for (let i = 0; i < listGuest.length; i++) {
//     const singleName = listGuest[i];
//     if (singleName == yourName) {
//         document.querySelector(".result").innerHTML = `Il tuo nome (${yourName})è registarto nella lista degli invitati`
//         confirm = false;
//     }

// }

// if (confirm == true) {
//     document.querySelector(".result").innerHTML = `Il tuo nome (${yourName})NON è registarto nella lista degli invitati`
// }


// While case



const listGuest = [
    'Paola Rizzo',
    'Gilio Golia',
    'Marco Marchese',
    'Giulia Ottaviano'
]

const yourName = prompt("Inserisci il tuo nome")

let confirm = true;
let i = 0
while (i < listGuest.length) {
    const singleName = listGuest[i];
    if (singleName == yourName) {
        document.querySelector(".result").innerHTML = `Il tuo nome (${yourName})è registarto nella lista degli invitati`
        confirm = false;
    }
    i++
}

if (confirm == true) {
    document.querySelector(".result").innerHTML = `Il tuo nome (${yourName})NON è registarto nella lista degli invitati`
}


