//assegno le variabili al DOM
const name = document.getElementById('name')
const result = document.getElementById('result')
const kmField = document.getElementById('kmField')
const ageField = document.getElementById('ageField')
const generate = document.getElementById('generate')
const reset = document.getElementById('generate')

//assegno le variabili di logica
const scontoMinorenni = 20;
const scontoOver65 = 40;

//LOGICA SCONTO
generate.addEventListener('click', () => {

  const prezzoBiglietto = kmField.value * 0.21;
  let prezzoFinale = prezzoBiglietto 
  if(ageField.value === 'minorenne'){
    prezzoFinale = prezzoBiglietto * (1 - scontoMinorenni / 100)
   
  }else if(ageField.value === 'over65'){
      prezzoFinale = prezzoBiglietto * (1 - scontoOver65 / 100);
  }
  
  console.log(prezzoFinale)

  //DISPLAY CARD IL TUO BIGLIETTO
  result.classList.toggle('d-none')


})


