'use strict'
let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

  
  renderMeme()

}

function renderMeme() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  
  const meme = getMeme()
  const { selectedImgId, selectedLineIdx, } = meme
  const { txt, size, color} = meme.lines[selectedLineIdx]


  drawMeme(selectedImgId,txt,size,color)

}

function onSetLineTxt(elText){
  setLineTxt(elText)
  renderMeme()
}

function onChangeColor(elColor) {
  changeColor(elColor)
  renderMeme()
}

function onIncreaseFont() {
  increaseFont()
  renderMeme()
}


function onDecreaseFont() {
  decreaseFont()
  renderMeme()
}