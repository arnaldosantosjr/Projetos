'use strict';
const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'Kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const criarDiv = (texto) => {

        const div = document.createElement('div');
        div.classList.add('key');
        div.textContent = texto;
        div.id = texto;
        document.getElementById('container').appendChild(div);
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

//exibir (sons);
const tocarSom = (letra) =>{
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}
const adicionarEfeito = (letra) => document.getElementById(letra)
                                           .classList.add('active');

const removerEfeito = (letra) => document.getElementById(letra)
                                        .classList.remove('active');                   

const ativarDiv = (evento) => {
    const letra = evento.target.id;
    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida){
        adicionar(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
    

}

exibir(sons);
document.getElementById('container')
        .addEventListener('click', ativarDiv);
