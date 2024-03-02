'use strict'

function onGalleryInit() {
   
    renderGallery()
   
}


function renderGallery() {
    const images = gImgs
    const elGallery = document.querySelector('.gallery')

 let strHtmls = images.map(image => {
      return `<img onclick="onImgSelect(this)" class="${image.id} gImg" src="${image.url}" >`
    })


    elGallery.innerHTML = strHtmls.join('')
   
}


function onImgSelect(elImg) {
setImg(elImg)
onShowEditor()
renderMeme()
}

