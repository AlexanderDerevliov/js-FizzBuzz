


// devo recuperare elemento DOM
const blackboard = document.getElementById('blackboard');
// creazione di un ciclo che ripeta un numero da 1 a 100
for(let i = 1; i <= 100; i++) {
    //creazione variabile word
    let numberOrWord = '';
    //creazione variabile backgroundcolor
    let backgroundcolor = '';
    //controllo i multipli dell'indice
    if(!(i % 3) && !(i % 5)){
        numberOrWord = 'FizzBuzz'
        backgroundcolor = 'red';
    }else if(!(i % 3)){
        numberOrWord = 'Fizz';
        backgroundcolor = 'yellow';
    } else if (!(i % 5)){
        numberOrWord = 'Buzz'
        backgroundcolor = 'orange';
    }else{
        numberOrWord = i
        backgroundcolor = 'gray';
    }
    //console log
    console.log(numberOrWord);

    //stampare in pagina il risultato
    blackboard.innerHTML += `<div class="${backgroundcolor}">${numberOrWord}</div>`;
}