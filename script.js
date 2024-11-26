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
generate.addEventListener('click', () => {

  const prezzoBiglietto = kmField.value * 0.21;
  let prezzoFinale = prezzoBiglietto 
  let message = ''
  if(ageField.value === 'minorenne'){
    prezzoFinale = prezzoBiglietto * (1 - scontoMinorenni / 100)
    message = 'Sconto Minorenne'
   
  }else if(ageField.value === 'over65'){
      prezzoFinale = prezzoBiglietto * (1 - scontoOver65 / 100);
      message = 'Sconto Over 65'
  } else {
    message = 'Prezzo Intero'
  }
  
  console.log(prezzoFinale)

  //DISPLAY CARD IL TUO BIGLIETTO
  result.classList.toggle('d-none')

  tName.innerHTML = name.value
  tOffer.innerText = message
  tCarroz.innerText = Math.ceil(Math.random()*10);
  tCpCode.innerText = '16TNRM'
  tPrice.innerText = prezzoFinale.toFixed(2) + '€'

})

reset.addEventListener('click', () => {
 
  result.classList.toggle('d-none')

  name.value = ''
  kmField.value = ''
  ageField.value = ''
 
  tName.innerText = ''
  tOffer.innerText = ''
  tCarroz.innerText = ''
  tCpCode.innerText = ''
  tPrice.innerText = ''

})


