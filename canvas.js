var tela = document.querySelector('#forca')
var pincel = tela.getContext('2d')

// Desenha a estrutura da forca
function desenhaForca() {
  pincel.fillStyle = 'black'
  pincel.lineWidth = 5
  pincel.beginPath()
  pincel.moveTo(100, 197)
  pincel.lineTo(100, 600)
  pincel.moveTo(100, 200)
  pincel.lineTo(280, 200)
  pincel.moveTo(100, 300)
  pincel.lineTo(200, 200)
  pincel.fill()
  pincel.stroke()
  pincel.closePath()
  pincel.lineWidth = 1
}

desenhaForca()

// Desenha a cabeça do boneco

function desenhaCabeca() {
  pincel.lineWidth = 6
  pincel.fillStyle = 'black'
  pincel.beginPath()
  pincel.arc(275, 250, 50, 0, 2 * Math.PI)
  pincel.fillStyle = '#9370DB'  
  pincel.strokeStyle = 'black'
  pincel.stroke()
  pincel.fill()
  pincel.closePath()
  pincel.lineWidth = 1
  pincel.fillStyle = 'black'
  pincel.strokeStyle = 'black'
}

// Desenha o tronco do boneco

function desenhaTronco() {
  pincel.lineWidth = 6
  pincel.beginPath()
  pincel.moveTo(275, 303)
  pincel.lineTo(275, 500)
  pincel.fillStyle = '#9370DB'
  pincel.strokeStyle = 'black'
  pincel.fill()
  pincel.stroke()
  pincel.closePath()
  pincel.lineWidth = 1
  pincel.fillStyle = 'black'
  pincel.strokeStyle = 'black'
}

// Desenha a perna esquerda do boneco

function desenhaPernaEsq() {
  pincel.lineWidth = 6
  pincel.beginPath()
  pincel.moveTo(275, 500)
  pincel.lineTo(180, 550)
  pincel.fillStyle = '#bf190a'
  pincel.strokeStyle = 'black'
  pincel.fill()
  pincel.stroke()
  pincel.closePath()
  pincel.lineWidth = 1
  pincel.fillStyle = 'black'
  pincel.strokeStyle = 'black'
}

// Desenha a perna direita do boneco
function desenhaPernaDir() {
  pincel.lineWidth = 6
  pincel.beginPath()
  pincel.moveTo(275, 500)
  pincel.lineTo(360, 550)
  pincel.fillStyle = '#bf190a'
  pincel.strokeStyle = 'black'
  pincel.fill()
  pincel.stroke()
  pincel.closePath()
  pincel.lineWidth = 1
  pincel.fillStyle = 'black'
  pincel.strokeStyle = 'black'
}

// Desenha o braço esquerdo do boneco

function desenhaBracoEsq() {
  pincel.lineWidth = 6
  pincel.beginPath()
  pincel.moveTo(275, 303)
  pincel.lineTo(360, 350)
  pincel.fillStyle = '#bf190a'
  pincel.strokeStyle = 'black'
  pincel.fill()
  pincel.stroke()
  pincel.closePath()
  pincel.lineWidth = 1
  pincel.fillStyle = 'black'
  pincel.strokeStyle = 'black'
}

// Desenha o braço direito do boneco
function desenhaBracoDir() {
  pincel.lineWidth = 6
  pincel.beginPath()
  pincel.moveTo(275, 303)
  pincel.lineTo(180, 350)
  pincel.fillStyle = '#bf190a'
  pincel.strokeStyle = 'black'
  pincel.fill()
  pincel.stroke()
  pincel.closePath()
  pincel.lineWidth = 1
  pincel.fillStyle = 'black'
  pincel.strokeStyle = 'black'
}

function limparCanvas() {
  pincel.clearRect(0, 0, tela.width, tela.height)
}

limparCanvas()
