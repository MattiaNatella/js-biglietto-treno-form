//assegno le variabili al DOM
const name = document.getElementById('name')
const result = document.getElementById('result')
const kmField = document.getElementById('kmField')
const ageField = document.getElementById('ageField')
const generate = document.getElementById('generate')
const reset = document.getElementById('reset')

//assegno variabili area IL TUO BIGLIETTO
let tName = document.getElementById('ticketName')
let tOffer = document.getElementById('ticketOffer')
let tCarroz = document.getElementById('ticketCarroz')
let tCpCode = document.getElementById('ticketCpCode')
let tPrice = document.getElementById('ticketPrice')

//assegno le variabili di logica
const scontoMinorenni = 20;
const scontoOver65 = 40;

//LOGICA SCONTO + COMPILAZIONE AREA IL TUO BIGLIETTO
generate.addEventListener('click', handlerClickGenerate)

reset.addEventListener('click', handlerClickReset)




//FUNCTIONS

function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min +1) + min)
  }

function handlerClickGenerate() {
  
  const prezzoBiglietto = kmField.value * 0.21;
  let prezzoFinale = prezzoBiglietto 
  let message = 'Prezzo Intero'

    if(ageField.value === 'minorenne'){
      prezzoFinale *= 1 - scontoMinorenni / 100
      message = 'Sconto Minorenne'
    
    }else if(ageField.value === 'over65'){
        prezzoFinale *= 1 - scontoOver65 / 100;
        message = 'Sconto Over 65'
    }

    console.log(prezzoFinale)

    result.classList.toggle('d-none')

    tName.innerHTML = name.value
    tOffer.innerText = message
    tCarroz.innerText = getRandomNumber(1,12)
    tCpCode.innerText = getRandomNumber(10000,1000000)
    tPrice.innerText = prezzoFinale.toFixed(2) + '€'
}

function handlerClickReset() {

  
  result.classList.toggle('d-none')

  name.value = ''
  kmField.value = ''
  ageField.value = ''
 
  tName.innerText = ''
  tOffer.innerText = ''
  tCarroz.innerText = ''
  tCpCode.innerText = ''
  tPrice.innerText = ''
}