'use strict'
var gImgs = [
  {
    id: 1,
    url: 'meme-imgs/meme-imgs/1.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 2,
    url: 'meme-imgs/meme-imgs/2.jpg',
    keywords: ["funny", "cat"]
  },
]

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: "CHINA",
      size: 20,
      color: "red",
    },
  ],
}

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }


function getMeme() {
  return gMeme
}
// draw img handler
function drawMeme(id,txt,size,color) {
  const img = new Image()
  const imgIdx = getPlaceById(id)

  img.src = imgIdx.url
  img.onload = () => {

      gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)


    
    gCtx.fillStyle = color
    gCtx.font = `${size}px Arial`
    gCtx.fillText(txt, 100, 100)
  }
}

function setLineTxt(text) {
gMeme.lines[gMeme.selectedLineIdx].txt = text.value
 
}


function setImg(elImg){
  gMeme.selectedImgId = parseInt(elImg.classList)
  
}















function getPlaceById(imgId) {
  return gImgs.find(img => img.id === imgId)
}























// download / upload handler
function downloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL("image/jpeg");
  elLink.href = imgContent;
}

function onImgInput(ev) {
  loadImageFromInput(ev, renderImg);
}

function loadImageFromInput(ev, onImageReady) {
  const reader = new FileReader();
  reader.onload = (ev) => {
    let img = new Image();
    img.src = ev.target.result;
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


