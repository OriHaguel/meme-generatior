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
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
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



function onMoveUp() {
   moveUp()
   renderMeme()
}

function onMoveDown() {
  moveDown()
  renderMeme()
}

function OnMoveText(ev) {

    }


function getEvPos(ev) {
	let pos = {
		x: ev.offsetX,
		y: ev.offsetY,
	}

	if (TOUCH_EVENTS.includes(ev.type)) {

		 ev.preventDefault()         // Prevent triggering the mouse events
		ev = ev.changedTouches[0]   // Gets the first touch point
		
		// Calc pos according to the touch screen
		pos = {
			x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
			y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
		}
	console.log('pos',pos )
	}
	return pos
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
// console.log('getMemeById', )
getMemeById().font = elSelect.value
renderMeme()
}