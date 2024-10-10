/* Abaixo de 17 muito abaixo do peso
Entre 17 e 18,49 abaixo do peso
Entre 18,5 e 24,99 peso normal
Entre 25 e 29,99 acima do peso
*/

//peso / (altura*altura);

let peso
let altura
let imc
let resultado

function calcular(event){
    event.preventDefault()

    peso= document.getElementById('peso').value
    altura=document.getElementById('altura').value

    imc = peso / (altura * altura)

    resultado = document.getElementById('result')

    if(imc < 17){
     resultado.innerHTML = `<br> Seu IMC é:${imc.toFixed(2)} <br> Cuidado! Você está muito abaixo do peso.`
     resultado.style.color = 'darkred'
    } else if(imc > 17 && imc <= 18.49){
    resultado.innerHTML = `<br> Seu IMC é:${imc.toFixed(2)} <br> Você está abaixo do peso.`
    resultado.style.color = 'red'
    } else if(imc >= 18.5 && imc < 24.99){
    resultado.innerHTML = `<br> Seu IMC é:${imc.toFixed(2)} <br> Você está no peso ideal.`
    resultado.style.color = 'blue'
    } else if(imc > 25 && imc <= 29.99){
     resultado.innerHTML = `<br> Seu IMC é:${imc.toFixed(2)} <br> Você está acima do peso.`
     resultado.style.color = 'green'
    } else if(imc >= 30){
    resultado.innerHTML = `<br> Seu IMC é:${imc.toFixed(2)} <br> Obesidade.`
    resultado.style.color = 'orange'
    }

    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
   
   
}



