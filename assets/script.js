

const player1 = "O";
const player2 = "X";
let playerTime = player1;
let gameOver = false;




const atualizaMostrador = () => {
    if (gameOver === true) {
        return;
    }

    if (playerTime == player1) {
        let player = document.querySelector('#jogador > img');
        player.setAttribute('src', 'assets/images/bolinha.png');
       

    } else {
        let player = document.querySelector('#jogador > img');
        player.setAttribute('src', 'assets/images/xizinho.png');
  
    }
}

function pupulaCasa() {
    let casas = document.getElementsByClassName('imagens');

    for (let i = 0; i < casas.length; i++) {
        casas[i].addEventListener('click',function() {
            if (gameOver) { return; }
                if (playerTime == player1) {
                    let player = casas[i]
                    player.setAttribute('src', 'assets/images/bolinha.png');
                    player.setAttribute('jogada', player1);
                    playerTime = player2;
                } else {
                    let player = casas[i]
                    player.setAttribute('src', 'assets/images/xizinho.png');
                    player.setAttribute('jogada', player2);
                    playerTime = player1;
                }
                
                atualizaMostrador();
                verificaVencedor();
        })

    }

}

const verificaVencedor = () =>{

let a1 = document.getElementById('a1').getAttribute('jogada');
let a2 = document.getElementById('a2').getAttribute('jogada');
let a3 = document.getElementById('a3').getAttribute('jogada');
let b1 = document.getElementById('b1').getAttribute('jogada');
let b2 = document.getElementById('b2').getAttribute('jogada');
let b3 = document.getElementById('b3').getAttribute('jogada');
let c1 = document.getElementById('c1').getAttribute('jogada');
let c2 = document.getElementById('c2').getAttribute('jogada');
let c3 = document.getElementById('c3').getAttribute('jogada');
let vencedor='';

if(( a1 == a2 && a1 == a3 && a1 != "") || (a1 == b1 && a1==c1 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")){
    vencedor = a1;
    alert(`Jogador ${vencedor} venceu!`);
}else if (( b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2==c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")){
    vencedor = b2;
    alert(`Jogador ${vencedor} venceu!`);
}else if(( c3 == b3 && c3 == a3 && c3 != "") || (c3 == c2 && c3==c1 && c3 != "")){
    vencedor = c3;
    alert(`Jogador ${vencedor} venceu!`);
}else if (a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "" && vencedor == ""){
    alert('O jogo deu velha!!!')
}


}



atualizaMostrador();
pupulaCasa();
