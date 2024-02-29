'use strict'
let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

  renderMeme()
}

function renderMeme() {
  const meme = getMeme()
  const { selectedImgId } = meme

  drawMeme(selectedImgId)
  onMouseMove()
}

function onSetLineTxt(elText) {
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

function OnAddLine() {
  AddLine()
}


function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function onMouseMove() {
  gElCanvas.addEventListener('click', function (event) {

    let meme = getMeme()
    var mouseX = event.offsetX
    var mouseY = event.offsetY

    meme.lines.forEach(function (line, idx) {
      var textWidth = gCtx.measureText(line.txt).width 
      var textHeight = line.size
       console.log('textWidth', textWidth)
      var textX = 100 + (idx * 50)
      var textY = (100 - textHeight) + (idx * 50)

      if (mouseX >= textX && mouseX <= textX + textWidth &&
        mouseY >= textY && mouseY <= textY + textHeight) {
        meme.selectedLineIdx = idx
         drawMeme(meme.selectedImgId,textX,textY + 3,textWidth,textHeight)
      }
    })
  })
}

function onSwitchLine() {
  switchLine()
}