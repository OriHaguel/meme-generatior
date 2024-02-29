'use strict'
let gElCanvas
let gCtx
let isDrag = false
function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

  renderMeme()
}

function renderMeme() {
  const meme = getMeme()
  const { selectedImgId } = meme

  drawMeme(selectedImgId)
  onMouseClick()

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

function OnDelete() {
  Delete()
  renderMeme()
}


function onMouseClick() {
  gElCanvas.addEventListener('click', function (event) {

    let meme = getMeme()
    var mouseX = event.offsetX
    var mouseY = event.offsetY

    meme.lines.forEach(function (line, idx) {
      var textWidth = gCtx.measureText(line.txt).width + (line.size * 3 - 80)
      var textHeight = line.size

      var textX = 100 + (idx * 50)
      var textY = (100 - textHeight) + (idx * 50)

      if (mouseX >= textX && mouseX <= textX + textWidth &&
        mouseY >= textY && mouseY <= textY + textHeight) {
        meme.selectedLineIdx = idx
        drawMeme(meme.selectedImgId, textX, textY + 3, textWidth, textHeight)
        isDrag = true
      }
    })
  })
}



// function onMoveUp() {
//    moveUp()
//   // renderMeme()
// }


// function OnMoveText(ev) {
//   let meme = getMeme()
//   if (isDrag) {
//     var mouseX = ev.offsetX
//     var mouseY = ev.offsetY
//     var textWidth = gCtx.measureText(meme.lines[meme.selectedLineIdx].txt).width
//     var textHeight = meme.lines[meme.selectedLineIdx].size
//     var textX = 100 + (meme.selectedLineIdx * 50)
//     var textY = (100 - textHeight) + (meme.selectedLineIdx * 50)
//     if (mouseX >= textX && mouseX <= textX + textWidth &&
//       mouseY >= textY && mouseY <= textY + textHeight) {
//       drawMeme(meme.selectedImgId, textX, textY + 3, textWidth, textHeight)
//     }
//   }
// }



function onSwitchLine() {
  switchLine()


}

function onShowEditor() {
  let elEditor = document.querySelector('.editor')
  let elGallery = document.querySelector('.gallery')

  elEditor.style.display = 'grid'
  elGallery.style.display = 'none'
}

function onShowGallery() {
  let elEditor = document.querySelector('.editor')
  let elGallery = document.querySelector('.gallery')




  elEditor.style.display = 'none'
  elGallery.style.display = 'grid'


}

