const caixaLetras = document.querySelector('.letras')
const chanceElemento = document.querySelector('.chances')
const elementoLetrasErradas = document.querySelector('.letras-erradas')
var palavrasChaves = ['ALURA']

var indiceEscolhido
var palavraEscolhida
var palavraSeparada
var tamanhoPalavra
var letrasErradas = []
var letrasEncontradas = 0
var chances = 6

function criarElementos() {
  // ESCOLHENDO UMA DAS PALAVRAS NO ARRAY

  indiceEscolhido = gerarNumeroAletorio()
  palavraEscolhida = palavrasChaves[indiceEscolhido]
  palavraSeparada = palavraEscolhida.split('')
  tamanhoPalavra = palavraEscolhida.length

  for (var i = 0; i < tamanhoPalavra; i++) {
    // CRIANDO ELEMENTO
    let letrasIndividuais = document.createElement('div')
    // ADICIONANDO O NOVO ELEMNTO A CAIXA LETRAS
    caixaLetras.appendChild(letrasIndividuais)
    // ADICIONANDO CLASE AO NOVO ELEMNTO
    letrasIndividuais.classList.add('tracos')
    // ESCREVENDO A LETRA ESPECÍFICA
    letrasIndividuais.classList.add(palavraSeparada[i])
  }
  desenhaForca()
}

criarElementos()

document.addEventListener('keydown', interacaoUsuario)

function interacaoUsuario(evento) {
  // CAPTURANDO TECLA APERTADA
  var teclaApertada = evento.key
  teclaApertada = teclaApertada.toUpperCase()
  var estaNoAlfabeto = 'ABCÇDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(teclaApertada) > -1

  if (estaNoAlfabeto) {
    var verificarSeExisteLetra = palavraEscolhida.indexOf(teclaApertada) > -1
    var oJogadorJaErrouEssaLetra = letrasErradas.indexOf(teclaApertada) > -1
    // VERIFICAR SE A LETRA EXISTE NA PALAVRA ESCOLHIDA
    if (verificarSeExisteLetra) {
      palavraSeparada.forEach(elemento => {
        if (elemento == teclaApertada) {
          letrasEncontradas++
        }
      })

      if (letrasEncontradas == tamanhoPalavra) {
        vitoria()
      } else {
        // ADICIONAR A LETRA DIGITADA NA TELA

        var mostrarLetra = document.querySelectorAll(`.${teclaApertada}`)
        mostrarLetra.forEach(elemento => {
          elemento.innerHTML = teclaApertada
        })
      }
    } else {
      if (!oJogadorJaErrouEssaLetra) {
        // ADICIONANDO LETRA ERRADA NO ARRAY
        letrasErradas.push(teclaApertada)
        chances--
        desenha()
        elementoLetrasErradas.textContent = `Letras erradas: ${letrasErradas}`
        chanceElemento.textContent = `Chances restantes: ${chances}`

        if (chances == 0) {
          perdeu()
        }
      }
    }
  }
}

function gerarNumeroAletorio() {
  return Math.floor(Math.random() * palavrasChaves.length)
}

function perdeu() {
  limparCanvas()
  alert(`Você perdeu, a palavra correta era ${palavraEscolhida}`)
  chances = 6
  letrasEncontradas = 0
  letrasErradas = []
  chanceElemento.textContent = `Chances restantes: ${chances}`
  elementoLetrasErradas.textContent = `Letras erradas: ${letrasErradas}`
  var todasAsLetras = document.querySelectorAll('.tracos')
  todasAsLetras.forEach(elemento => {
    elemento.remove()
  })
  criarElementos()
}

function vitoria() {
  limparCanvas()
  alert('Você ganhou!')
  chances = 6
  letrasEncontradas = 0
  letrasErradas = []
  chanceElemento.textContent = `Chances restantes: ${chances}`
  elementoLetrasErradas.textContent = `Letras erradas: ${letrasErradas}`
  var todasAsLetras = document.querySelectorAll('.tracos')
  todasAsLetras.forEach(elemento => {
    elemento.remove()
  })
  criarElementos()
}

function adicionarNovaPalavra() {
  let caixaDetexto = document.querySelector('#input-nova-palavra')
  let palavraMaiuscula = caixaDetexto.value.toUpperCase()
  palavrasChaves.push(palavraMaiuscula)
  caixaDetexto.value = ''
}

function desenha() {
  if (chances == 5) {
    desenhaCabeca()
  } else if (chances == 4) {
    desenhaTronco()
  } else if (chances == 3) {
    desenhaBracoEsq()
  } else if (chances == 2) {
    desenhaBracoDir()
  } else if (chances == 1) {
    desenhaPernaEsq()
  } else if (chances == 0) {
    desenhaPernaDir()
  }
}
// hoisting -> içamento
