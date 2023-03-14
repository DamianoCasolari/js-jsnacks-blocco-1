


const result = document.querySelector("h1")
let totale = 0;

for (let i = 0; i < 10; i++) {
    const user_current_number = Number(prompt("Inserisci un numero"));
    totale += user_current_number;
}

result.innerHTML = `il totale dei 10 numeri inseriti corrisponde a ${totale}`