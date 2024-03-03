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
    elGallery.style.display = 'grid'
}

function onImgSelect(elImg) {
    getMeme().lines = []
    setImg(elImg)
    onShowEditor()
    renderMeme()
}


function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL("image/jpeg");
    elLink.href = imgContent;
}


function onImgInput(ev) {
    getMeme().lines = []
    loadImageFromInput(ev, renderImg);
    renderMeme()
}



function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader();
    reader.onload = (ev) => {
        let img = new Image();
        img.src = ev.target.result;
        gImgs.push(
            {
                id: makeId(),
                url: `${ev.target.result}`,
                keywords: ["funny", "cat"]
            },
        )
            gMeme.selectedImgId = gImgs[gImgs.length-1].id
        //   console.log("🚀 ~ loadImageFromInput ~ ev.target.result;:", ev.target.result)

        img.onload = () => onImageReady(img);
    };
    reader.readAsDataURL(ev.target.files[0]);
}

function renderImg(img) {
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width;
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

    function onSuccess(uploadedImgUrl) {
        const url = encodeURIComponent(uploadedImgUrl);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${url}`);
    }

    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {
    const formData = new FormData();
    formData.append("img", imgDataUrl);

    const XHR = new XMLHttpRequest();
    XHR.onreadystatechange = () => {
        if (XHR.readyState !== XMLHttpRequest.DONE) return;

        if (XHR.status !== 200) return console.error("Error uploading image");
        const { responseText: url } = XHR;

        console.log("Got back live url:", url);
        onSuccess(url);
    };
    XHR.onerror = (req, ev) => {
        console.error(
            "Error connecting to server with request:",
            req,
            "\nGot response data:",
            ev
        );
    };
    XHR.open("POST", "//ca-upload.com/here/upload.php");
    XHR.send(formData);
}