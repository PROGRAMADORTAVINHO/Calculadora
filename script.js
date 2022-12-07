function imc(){
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resposta = document.getElementById('resultado')
    let valorImc 

    if(nome !== "" && altura !== "" && peso !==""){

                Imc = peso / (altura*altura).toFixed(2)

        if(Imc < 18.50){
            valorImc = 'Abaixo do Peso'
        }else if(Imc > 18.60 && Imc < 24.90){
            valorImc = 'Peso Ideal'
        }else if(Imc > 25.00 && Imc < 29.90){
            valorImc = 'Levemente Acima do Peso'
        }else if(Imc > 30.00 && Imc < 34.90){
            valorImc = 'Obesidade grau 1'
        }else if(Imc > 35.00 && Imc < 39.90){
            valorImc = 'Obesidade grau 2 (Severa)'
        }else if(Imc > 40.00){
            valorImc = 'Obesidade grau 3 (Mórbida)'
        }
    }else{
        resposta.innerHTML = "erro"
    }
    resposta.innerHTML = valorImc
}