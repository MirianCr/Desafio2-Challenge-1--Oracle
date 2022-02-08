
var tela = document.querySelector('#forca-canvas');
var pincel = tela.getContext('2d');//pincel que escreve em 2d

//pincel.fillStyle = 'lightgray'; // define a cor de preenchimento do retângulo


//montagem da forca 
function desenhaForca(){
  pincel.fillStyle = 'brown';
  pincel.fillRect(10, 750, 120, 10); //baixo
  pincel.fillRect(30, 40, 15, 720); //vertical
  pincel.fillRect(10, 50, 500, 10);
  pincel.fillRect(500, 40, 15, 110)
  pincel.lineWidth = 2;
  }


//cabeça do creeper
function desenhaCabeca(){
  pincel.fillStyle = 'darkgreen';
  pincel.fillRect(400,150,200,200);
  // olhos
  pincel.fillStyle = 'black';
  pincel.fillRect(430, 170, 50, 50);
  pincel.fillRect(530, 170, 50, 50);
  // nariz
  pincel.fillRect(480, 220, 60, 80);
  // boca ou barba
  pincel.fillRect(450, 250, 30, 80);
  pincel.fillRect(540, 250, 30, 80); 
} 

//corpo
function desenhaTronco(){
  pincel.fillStyle = 'darkgreen';
  pincel.fillRect(430,350,130,220);
}

//perna direita
function desenhaPernaDir(){
  pincel.fillStyle = 'darkgreen';
  pincel.fillRect(560,560,80,100); //direito frente
  pincel.fillStyle = 'black';
  pincel.fillRect(570, 640, 60, 20); //detalhe direito
}

//braco direito que fica atras
function desenhaBracoDir(){
  pincel.fillStyle = '#8FBC8F';
  pincel.fillRect(540,560,80,100); //braco direito atras
  pincel.fillStyle = '#2F4F4F';
  pincel.fillRect(550, 640, 60, 20); //braco detalhe direito atras
}

//perna esquerda
function desenhaPernaEsq(){
  pincel.fillStyle = 'darkgreen';
  pincel.fillRect(350,560,80,100); //esquerdo frente
  pincel.fillStyle = 'black';
  pincel.fillRect(360, 630, 60, 20); //detalhe esquerdo
}

//braco esquerdo que fica atras
function desenhaBracoEsq(){
  pincel.fillStyle = '#8FBC8F';
  pincel.fillRect(370,560,80,100); //braco esquerdo atras
  pincel.fillStyle = '#2F4F4F';
  pincel.fillRect(380, 630, 60, 20); //braco detalhe esquerdo atras

}

/* Função que desenha a tela de jogo */
function desenhaTela(){ 
  var tela = document.querySelector('#forca-canvas');
  var pincel = tela.getContext('2d'); 
  pincel.fillStyle = '#e9eef2';  
  pincel.font = '48px arial';
  pincel.fillStyle = '#000000';
  pincel.strokeStyle = '#000000';
  pincel.strokeText('Letras erradas: ', 650, 280);
  pincel.fillText('Letras erradas: ', 650, 280);
}

//Função que desenha as linhas os tracinhos
function desenhaLinhas(){ 
var tela = document.querySelector('#forca-canvas');
var pincel = tela.getContext('2d');
var quantLinhas = listaDePalavras;
var x = 50;
var y = 100;
for(var i = 0; i<quantLinhas; i++){
  pincel.fillStyle = 'black';
  pincel.beginPath();
  pincel.moveTo(x,700);
  pincel.lineTo(y,700);
  x = x + 60;
  y = y + 60;        
  pincel.fill();
  pincel.closePath();
  pincel.stroke();    
  } 
  
}

//criar funcao para desenhar letra correta (canvas)
function escreverLetraCorreta(letra,pos){  
  var tela = document.querySelector('#forca-canvas');
  var pincel = tela.getContext('2d'); 
  pincel.font = '48px Arial';
  pincel.strokeText(letra, 60*pos, 680);
  pincel.fillText(letra, 60*pos, 680);
  pincel.closePath();
}


//criar funcao para desenhar letra errada (canvas)
function escreverLetraErrada(letra,pos){
  var tela = document.querySelector('#forca-canvas');
  var pincel = tela.getContext('2d'); 
  var qtdeErradas = letrasErradas.length;  
  pincel.font = '48px Arial';
  pincel.strokeText(letra, 650+(qtdeErradas*15), 320);
  pincel.closePath();
}

//criar funcao mensagem vc perdeu(canvas)
function escreverPerdeu(){  
  var tela = document.querySelector('#forca-canvas');
  var pincel = tela.getContext('2d'); 
  pincel.beginPath();
  pincel.font = '48px arial';
  pincel.fillStyle = 'red';
  pincel.fillText('Você perdeu!', 650, 420);
  pincel.closePath();
}

//criar funcao mensagem vc venceu(canvas)
function escreverGanhou(){ 
  var tela = document.querySelector('#forca-canvas');
    var pincel = tela.getContext('2d'); 
  pincel.beginPath();
  pincel.font = '48px arial';
  pincel.fillStyle = 'green';
  pincel.fillText('Você venceu. Parabéns!', 650, 420);
  pincel.closePath();
}














