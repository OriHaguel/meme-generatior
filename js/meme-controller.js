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
  const { txt } = meme.lines[selectedLineIdx]
  console.log('txt', txt)



 
  drawMeme(selectedImgId,txt)

 

  

}