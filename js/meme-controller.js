'use strict'
let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')


  renderMeme()
  
}

function renderMeme() {
  // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

  const meme = getMeme()
  const { selectedImgId, selectedLineIdx, } = meme
  // const { txt, size, color} = meme.lines[selectedLineIdx]


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


function onMouseMove() {
  gElCanvas.addEventListener('mousemove', function (event) {

// console.log('gElCanvas', gCtx)
    var mouseX = event.offsetX;
    var mouseY = event.offsetY;

    gMeme.lines.forEach(function(line,idx) {
      var textWidth = gCtx.measureText(line.txt).width;
      var textHeight = line.size; 


// console.log('textWidth', textWidth)
// console.log('textHeight', textHeight)

      var textX = 100 + (idx * 50); 
      var textY = (100 - textHeight) + (idx * 50); 

      if (mouseX >= textX && mouseX <= textX + textWidth &&
          mouseY >= textY && mouseY <= textY + textHeight) {
        console.log('Mouse is over the text!');
      } 
       
      
    });
  });
}
