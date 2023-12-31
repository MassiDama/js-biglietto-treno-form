
// Selezione input dell'user
const inputName = document.querySelector(".info-name");

const inputKm = document.querySelector(".info-km");

const inputAge = document.querySelector(".info-age");

// salviamo i dati input dell'user
let infoName;
let infoKm;
let infoAge;
let priceTicket;

// Selezione del bottone invio dati
const sendButton = document.getElementById("genera-dati");

sendButton.addEventListener("click", 

    function () {
        infoName = inputName.value;
        infoKm = parseInt(inputKm.value);
        infoAge = parseInt(inputAge.value);
        // prezzo del biglietto dato da 0.21€ al km
        priceTicket = 0.21 * inputKm.value;

        console.log("Nome user: " + infoName,", Km user: " + infoKm, ", Età user: " + infoAge, ", Prezzo base del biglietto: " + priceTicket);

        // inserimento innerhtml nella classe .name-user
        document.querySelector(".name-user").innerHTML = inputName.value;

        // condizioni per gli sconti che vanno effettuati
        if (inputAge.value < 18) {
            finalPrice = (priceTicket - (priceTicket * 20) / 100);
            document.querySelector(".offerta").innerHTML = "Sconto under 18";
        
        } else if(inputAge.value > 65){
            finalPrice = (priceTicket - (priceTicket * 40) / 100);
            document.querySelector(".offerta").innerHTML = "Sconto over 65";
        
        } else {
            finalPrice = priceTicket
            document.querySelector(".offerta").innerHTML = "Biglietto standard";
            
        }      

        // troncatore decimale
        finalPrice = finalPrice.toFixed(2)

        // inserimento dei vari innerhtml 
        document.getElementById("price-ticket").innerHTML = finalPrice + " €";
        document.querySelector(".carrozza-random").innerHTML = Math.floor(Math.random() * 100);
        document.querySelector(".codice-random").innerHTML = Math.floor(Math.random() * 100000);

        document.querySelector('.ghost').style.display='inline-block';
    
    }

);

// selezione del bottone annulla
const cancelButton = document.getElementById("resetta-dati");

cancelButton.addEventListener("click",

    function () {
        document.querySelector('.ghost').style.display='none';
    }
);





