
const calcular = document.getElementById('calcular');


function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !==''){
        

        const valorIMC = (peso/ (altura * altura)).toFixed(3);

        let classificacao = '';

        if (valorIMC <15) {
            classificacao = 'só a pele e o osso!';
        }else if
            (valorIMC <16.5 ){
                classificação = ' desnutrido.';
        }else if
            (valorIMC <18.5){
                classificacao = 'abaixo do peso.';
        }else if 
            (valorIMC <24.9){
                classificacao = 'no pesso ideal. Arroacha, garurumon!!';
        }else if 
            (valorIMC <29.9){

                classificacao = 'acima do peso';
        }else if 
            (valorIMC <34.9){
                classificacao = 'gordo (a)';
        }else if
            (valorIMC <39.9){
                classificacao = 'à beira da morte!';
        }else{
                classificacao = 'parecendo o planeta Júpiter.';
        }



        resultado.textContent =  `${nome}, seu imc é ${valorIMC}. E você tá ${classificacao}`;

    }else{
        resultado.textContent='Preencha todos os campos!';
    }
}


calcular.addEventListener('click', imc);
