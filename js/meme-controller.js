'use strict'
let gElCanvas
let gCtx
let isDrag = false
const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  addTouchListeners()
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

function addTouchListeners() {
  gElCanvas.addEventListener('touchstart', onText)
  gElCanvas.addEventListener('touchmove', OnMoveText)
  gElCanvas.addEventListener('touchend', onPlaceText)
}

function onMouseClick() {
  gElCanvas.addEventListener('click', function (event) {

    let meme = getMeme()
    var mouseX = event.offsetX
    var mouseY = event.offsetY

    meme.lines.forEach(function (line, idx) {
      var textWidth = gCtx.measureText(line.txt).width + (line.size * 3 - 80)
      var textHeight = line.size
      var textX = line.x
      var textY = line.y - line.size

      if (mouseX >= textX && mouseX <= textX + textWidth &&
        mouseY >= textY && mouseY <= textY + textHeight) {
        meme.selectedLineIdx = idx
        drawMeme(meme.selectedImgId, textX, textY + 3, textWidth, textHeight)
      }
    })
  })
}

function onText(ev) {
  isDrag = true
  let meme = getMeme()
  let pos = getEvPos(ev)
  var mouseX = pos.x
  var mouseY = pos.y

  meme.lines.forEach(function (line, idx) {
    var textWidth = gCtx.measureText(line.txt).width + (line.size * 3 - 80)
    var textHeight = line.size

    var textX = line.x
    var textY = line.y - line.size

    if (mouseX >= textX && mouseX <= textX + textWidth &&
      mouseY >= textY && mouseY <= textY + textHeight) {
      meme.selectedLineIdx = idx
      console.log("🚀 ~ meme.selectedLineIdx:", meme.selectedLineIdx)

    }
  })
}

function OnMoveText(ev) {
  if (!isDrag) return
  let pos = getEvPos(ev)
  getMemeById().x = pos.x - ((gCtx.measureText(getMemeById().txt).width + (getMemeById().size * 3 - 120)) / 2)
  getMemeById().y = pos.y + getMemeById().size / 2
  renderMeme()
}

function onPlaceText(ev) {
  isDrag = false
}

function getEvPos(ev) {
  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }

  if (TOUCH_EVENTS.includes(ev.type)) {

    ev.preventDefault()
    ev = ev.changedTouches[0]

    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
    }

  }
  return pos
}

function onMoveUp() {
  moveUp()
  renderMeme()
}

function onMoveDown() {
  moveDown()
  renderMeme()
}

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

function onChangeFont(elSelect) {
  getMemeById().font = elSelect.value
  renderMeme()
}

function onRemoveBorder(ev) {
  let meme = getMeme()
  var mouseX = ev.offsetX
  var mouseY = ev.offsetY

  meme.lines.forEach(function (line) {
    var textWidth = gCtx.measureText(line.txt).width + (line.size * 3 - 80)
    var textHeight = line.size

    var textX = line.x
    var textY = line.y - line.size

    if (mouseX >= textX && mouseX <= textX + textWidth &&
      mouseY >= textY && mouseY <= textY + textHeight) {
      return
    } else {
      drawMeme(meme.selectedImgId, 0, 0, 0, 0)
    }
  })
}

function onLeft() {
  getMemeById().x = gElCanvas.width / 25
  renderMeme()
}

function onCenter() {
  getMemeById().x = gElCanvas.width / 3
  renderMeme()
}

function onRight() {
  getMemeById().x = gElCanvas.width / 1.8
  renderMeme()
}

function onRandomMeme(){
  RandomMeme()
  onShowEditor()
  renderMeme()
}

function onEmoji(elEmoji){
  const memes = getMeme()
  memes.lines.push(
    {
      txt: `${elEmoji}`,
      size: 40,
      color: 'white',
      x: gElCanvas.width / 3,
      y: gElCanvas.width / 2,
      font: 'Impact'
    }
  )
  renderMeme()
  console.log('elEmoji', elEmoji)
}