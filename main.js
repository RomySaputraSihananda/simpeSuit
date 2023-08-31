const hasil = document.querySelector('.hasil');
const container = document.querySelector('.container');
const mulai = document.getElementById('mulai');

const showHuman = document.querySelector('.human');
const showCom = document.querySelector('.com');

const batu = document.getElementById('batu');
const kertas = document.getElementById('kertas');
const gunting = document.getElementById('gunting');

let human;
let com;
let score = 0;

const getCom = () => {
    let com = Math.floor(Math.random() * 3 + 1);
    if(com == 1){
        com = '✊';
    }else if(com == 2){
        com = '🖐️';
    }else{
        com = '✌️';
    }
    return com;
}

const condition = (con) => {
    if(con == 'win'){
        hasil.textContent = 'MENANG 😎';
        score++;
    }else{
        hasil.textContent = 'KALAH 😢';
        score -= 1000;
    }
    mulai.textContent = `SCORE KAMU : ${score}`;
}

const whoWin = (human, com) => {

    if(human == com){
        hasil.textContent = 'SERI 😒';
    }else if(human == '✊'){
        (com == '🖐️') ? condition('lose') : condition('win');
    }else if(human == '🖐️'){
        (com == '✌️') ? condition('lose') : condition('win');
    }else if(human == '✌️'){
        (com == '✊') ? condition('lose') : condition('win');
    }else{
        alert('ERRRRROOOOOOORRRRRRRR!!!!!!!!!!!!')
    }
}

mulai.addEventListener('click', () => {
    container.style.display = 'flex';
    mulai.textContent = `YOUR SCORE : ${score}`;
    
    
    batu.addEventListener('click', () => {
        human = '✊';
        com = getCom();
        showHuman.innerHTML = human;
        showCom.innerHTML = com;
        whoWin(human, com);
        reset();
    });
    
    kertas.addEventListener('click', () => {
        human = '🖐️';
        com = getCom();
        showHuman.innerHTML = human;
        showCom.innerHTML = com;
        whoWin(human, com);
        reset();
    });
    
    gunting.addEventListener('click', () => {
        human = '✌️';
        com = getCom();
        showHuman.innerHTML = human;
        showCom.innerHTML = com;
        whoWin(human, com);
        reset();
    });

});


const reset  = () => {
    setTimeout(() => {
        showHuman.textContent = '';
        showCom.textContent = '';
        hasil.textContent = '';
    }, 1000);
}














