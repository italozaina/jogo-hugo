const hugo = document.querySelector('.hugo');
const robo = document.querySelector('.robo');
const pontuacao = document.querySelector('#pontuacao');

const pulo = () => {
    hugo.classList.add('pulo');
    setTimeout(()=>{
        hugo.classList.remove('pulo');
    },500)
}

let pontuou = true;

const loop = setInterval(() => {

    const posicaoRobo = robo.offsetLeft;
    const posicaoHugo = +window.getComputedStyle(hugo).bottom.replace('px','');

    if(posicaoRobo <= 75 && posicaoRobo > 0 && posicaoHugo < 100){
        robo.style.animation = 'none';
        robo.style.left = `${posicaoRobo}px`;

        hugo.style.animation = 'none';
        hugo.style.bottom = `${posicaoHugo}px`;
 
        clearInterval(loop);        
    }
    console.log(posicaoRobo);
    if(posicaoRobo < 9 && posicaoRobo > -9 ){
        if(pontuou){
            let pontosAtuais = +pontuacao.innerHTML;
            pontosAtuais++;
            pontuacao.innerHTML = pontosAtuais; 
            pontuou = false;
        }        
    }
    if(posicaoRobo < -9){
        pontuou = true;
    }

}, 10);

document.addEventListener('keydown', pulo);