'use strict'

function onGalleryInit() {
    
}


function renderGallery() {
    const images = gImgs
    const elGallery = document.querySelector('.gallery')

 let strHtmls = images.map(image => {
      return `<img class="${image.id}" src="${image.url}" >`
    })


    elGallery.innerHTML = strHtmls.join('')

}