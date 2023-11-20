
// Selezione input dell'user
const inputName = document.querySelector(".info-name");

const inputKm = document.querySelector("info-km");

const inputGender = document.querySelector("info-gender");


// Selezione del bottone invio dati
const sendButton = document.getElementById("genera-dati");


// salviamo i dati input dell'user
let infoName;
let infoKm;
let infoGender;

sendButton.addEventListener("click", 

    function () {
        infoName = inputName.value;
        infoKm = inputKm.value;
        infoGender = inputGender.value;
        
        console.log(infoName, infoKm, infoGender);
    }

);







// // chiediamo all' utente il numero di km che vuole percorrere 
// const kmUser = parseInt("Dichiarare i km che si vogliono percorrere");

// // chiediamo all'utente la propria età
// const ageUser = parseInt("Dichiarare la propria età");

// // prezzo del biglietto dato da 0.21€ al km
// let priceTicket = 0.21 * kmUser;

// console.log(priceTicket);


// // condizioni per gli sconti che vanno effettuati
// if (ageUser < 18) {
//     priceTicket = (priceTicket - (priceTicket * 20) / 100);

//     console.log( "Il prezzo scontanto per persone sotto i 18 anni: " + priceTicket + " €" ) ;
 
// } else if(ageUser > 65){
//     priceTicket = (priceTicket - (priceTicket * 40) / 100);

//     console.log( "Il prezzo scontanto per persone sopra i 65 anni: " + priceTicket + " €" ) ;
 
// } else {

//     console.log( "La tua età non rientra tra i prezzi scontati: " + priceTicket + " €" ) ;
 
// }

// // funzione con massimo due decimali
// priceTicket = priceTicket.toFixed(2)


// // output del prezzo finale (con massimo due decimali)

// document.getElementById("final-price").innerHTML = "Il prezzo del tuo biglietto è " + priceTicket + " €" ;