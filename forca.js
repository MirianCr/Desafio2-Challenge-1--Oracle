var letrascorretas = []
var letraserradas = []    
var letrasdigitadas = [];
let listaDinamica = [];
var tentativas = 6;
var acertos = 0
var erros = 0
var listaDePalavras = ['CAVALO', 'PORCO', 'PEIXE', 'ELEFANTE', 'CORUJA', 'SERPENTE', 'MACACO', 'CACHORRO'];
var palavraSecretaSorteada; //recebe o array
var inicio = false;

//Criar função para escolher uma palavra secreta (javascript) ok
escolherPalavSecreta(1);
function escolherPalavSecreta(tamanho){   
  for (var i = 0; i < tamanho; i++) {
    var palavraAleatoria = listaDePalavras[Math.ceil(Math.random() * listaDePalavras.length)]    
    palavraSecretaSorteada = palavraAleatoria;
}
  return palavraAleatoria;
} 
  //console.log(escolherPalavSecreta(1))
  //console.log(palavraSecretaSorteada);


//criar funcao pros tracinhos(canvas)iniciar o botao novo jogo
var botaoNovoJogo = document.querySelector('#iniciar-jogo')
botaoNovoJogo.addEventListener('click', function(){
  event.preventDefault();
    letrascorretas = []
    letraserradas = []
    acertos = 0;
    erros = 0;    
    letrasdigitadas = [];   
    desenhaTela();
    desenhaLinhas(listaDePalavras);
    desenhaForca();
    inicio = true;    
  
});
function reiniciarJogo(){
  var botaoReiniciar = document.querySelector('#iniciar-jogo');
  botaoReiniciar.addEventListener("click", function(){
    location.reload();
  })
}
//conectar com a funcao do card criar palavra secreta
//verificar que a quantidade de letra da palavra secreta coincide
// com a quantidade de tracinhos desenhados
//ligar funcao ao html


//Criar função para verificar se se a chave pressionada é uma letra(javascript)
function verificaLetraEscolhida(letra){ //quando clica na tecla chama essa funcao
    if(tentativas > 0){
    mudarStyleLetra("tecla-" + letra);
    comparaListas(letra);
    desenhaLinhas();
  }
 
}
function mudarStyleLetra(tecla){//mudar a cor da tecla
  document.getElementById(tecla).style.background = 'brown'; //cor do botao
  document.getElementById(tecla).style.color = 'white' //cor da letra
}

function comparaListas(letra){
  const pos = listaDePalavras.indexOf(letra) //se a letra existir me de a posicao
  if(pos < 0){ //se a letra nao existir
  tentativas--
  desenhaForca();
  escreverLetraErrada();

  if(tentativas == 0){
    escreverPerdeu()
    desenhaTela("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
}
}    
else{
  for(i = 0; i < palavraSecretaSorteada.length; i++);
{
  if(palavraSecretaSorteada[i] == letra){
    listaDinamica[i] = letra;
  }
}
}

//vitoria
let vitoria = true;
for(i = 0; i<palavraSecretaSorteada; i++){
  if(palavraSecretaSorteada[i] != listaDinamica[i]){
    vitoria = false; //nao ganhei ainda
  }
}
if (vitoria == true){
  escreverGanhou()
  //mensagem na tela
  tentativas = 0
}
}


//Desenvolver a lógica para verificar se a pessoa errou a quantidade de 
//vezes necessárias para criar a forca completa


//do botao reiniciar das teclas
let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});



//Desenvolver a lógica para verificar se a chave pressionada é uma letra
//Ligar função correspondente ao evento correspondente no HTML


//funcao para verificar se a letra pressionada esta dentro da palavrasecreta(js)
//Desenvolver a lógica para verificar se a letra pressionada pelo usuario está em nossa palavra secreta
//Caso a letra seja parte de nossa palavra secreta deve chamar a funcionalidade: Escrever letra correta
//Caso a letra não seja parte de nossa palavra secreta deve chamar a funcionalidade: Escrever letra incorreta e a funcionalidade: Desenhar Forca
//Ligar função correspondente ao evento correspondente no HTML



//criar funcao verificar vencedor
//Desenvolver a lógica para verificar se a pessoa acertou a quantidade de letras necessárias para completar a palavra secreta
//Ligar função correspondente ao evento correspondente no HTML



//EXTRA:Criar a função que adiciona a nova palavra na lista
//Ligar a função ao evento de botão correspondente
//Isso. você provavelmten vai ter um botão que pega o texto digitado e adiciona ao array.



//funcao erros
function contaErros(){
  if(erro === 0){
    return "";
  }else if(erro === 1){
    desenhaCabeca();
  
  }if (erro == 2){
  desenhaTronco();
  }if (erro == 3){
  desenhaBracoEsq();
  }if (erro == 4){
  desenhaBracoDir();
  }if (erro == 5){
  desenhaPernaEsq();
  }if (erro == 6) {
  desenhaPernaDir();
  escreverPerdeu();
  }if (acertos >= tentativas) {
  escreverGanhou();
  }
}

