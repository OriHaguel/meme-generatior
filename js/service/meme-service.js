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
  {
    id: 3,
    url: 'meme-imgs/meme-imgs/3.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 4,
    url: 'meme-imgs/meme-imgs/4.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 5,
    url: 'meme-imgs/meme-imgs/5.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 6,
    url: 'meme-imgs/meme-imgs/6.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 7,
    url: 'meme-imgs/meme-imgs/7.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 8,
    url: 'meme-imgs/meme-imgs/8.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 9,
    url: 'meme-imgs/meme-imgs/9.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 10,
    url: 'meme-imgs/meme-imgs/10.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 11,
    url: 'meme-imgs/meme-imgs/11.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 12,
    url: 'meme-imgs/meme-imgs/12.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 13,
    url: 'meme-imgs/meme-imgs/13.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 14,
    url: 'meme-imgs/meme-imgs/14.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 15,
    url: 'meme-imgs/meme-imgs/15.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 16,
    url: 'meme-imgs/meme-imgs/16.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 17,
    url: 'meme-imgs/meme-imgs/17.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 18,
    url: 'meme-imgs/meme-imgs/18.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 19,
    url: 'meme-imgs/meme-imgs-ratios/2.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 20,
    url: 'meme-imgs/meme-imgs-ratios/003.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 21,
    url: 'meme-imgs/meme-imgs-ratios/004.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 22,
    url: 'meme-imgs/meme-imgs-ratios/5.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 23,
    url: 'meme-imgs/meme-imgs-ratios/006.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 24,
    url: 'meme-imgs/meme-imgs-ratios/8.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 25,
    url: 'meme-imgs/meme-imgs-ratios/9.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 26,
    url: 'meme-imgs/meme-imgs-ratios/12.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 27,
    url: 'meme-imgs/meme-imgs-ratios/19.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 28,
    url: 'meme-imgs/meme-imgs-ratios/8.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 29,
    url: 'meme-imgs/meme-imgs-ratios/Ancient-Aliens.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 30,
    url: 'meme-imgs/meme-imgs-ratios/drevil.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 31,
    url: 'meme-imgs/meme-imgs-ratios/img2.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 32,
    url: 'meme-imgs/meme-imgs-ratios/img4.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 33,
    url: 'meme-imgs/meme-imgs-ratios/img5.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 34,
    url: 'meme-imgs/meme-imgs-ratios/img6.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 35,
    url: 'meme-imgs/meme-imgs-ratios/img11.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 36,
    url: 'meme-imgs/meme-imgs-ratios/img12.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 37,
    url: 'meme-imgs/meme-imgs-ratios/leo.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 38,
    url: 'meme-imgs/meme-imgs-ratios/meme1.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 39,
    url: 'meme-imgs/meme-imgs-ratios/One-Does-Not-Simply.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 40,
    url: 'meme-imgs/meme-imgs-ratios/Oprah-You-Get-A.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 41,
    url: 'meme-imgs/meme-imgs-ratios/patrick.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 42,
    url: 'meme-imgs/meme-imgs-ratios/putin.jpg',
    keywords: ["funny", "cat"]
  },
  {
    id: 43,
    url: 'meme-imgs/meme-imgs-ratios/X-Everywhere.jpg',
    keywords: ["funny", "cat"]
  },

]

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [

  ],
}

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }




function getMeme() {
  return gMeme
}

function drawMeme(id, textX, textY, textWidth, textHeight) {
  const img = new Image()
  const imgIdx = getImageById(id)
  img.src = imgIdx.url

  img.onload = () => {

    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

    gMeme.lines.forEach((line) => {


      gCtx.lineWidth = 1.5

      gCtx.fillStyle = line.color
      gCtx.font = `${line.size}px ${line.font}`
     


      gCtx.fillText(line.txt, line.x, line.y)
      gCtx.strokeText(line.txt, line.x, line.y)


      gCtx.beginPath();
      gCtx.rect(textX, textY, textWidth, textHeight)
      gCtx.stroke();


    })

  }
}

function AddLine() {

  gMeme.lines.push({
    txt: 'your text here',
    size: 40,
    color: 'white',
    x: gElCanvas.width / 3,
    y: gElCanvas.width / 2,
    font: 'Impact'
  });


  gMeme.lines.map((line) => {

    gCtx.lineWidth = 1.5
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px ${line.font}`


    gCtx.fillText(line.txt, line.x, line.y)
    gCtx.strokeText(line.txt, line.x, line.y);
  })
}

function setLineTxt(text) {
  gMeme.lines[gMeme.selectedLineIdx].txt = text.value

}

function setImg(elImg) {
  gMeme.selectedImgId = parseInt(elImg.classList)

}

function changeColor(elColor) {
  gMeme.lines[gMeme.selectedLineIdx].color = elColor.value
}




function increaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].size +=5

}

function decreaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].size -= 5
}

function getImageById(imgId) {
  return gImgs.find(img => img.id === imgId)
}




function switchLine() {
  gMeme.selectedLineIdx++

  if (gMeme.selectedLineIdx === gMeme.lines.length) {
    gMeme.selectedLineIdx = 0
  }

  var textWidth = gCtx.measureText(getMemeById().txt).width + (getMemeById().size * 3 - 80)
  var textHeight = getMemeById().size

  var textX = gMeme.lines[gMeme.selectedLineIdx].x
  var textY = gMeme.lines[gMeme.selectedLineIdx].y - gMeme.lines[gMeme.selectedLineIdx].size 

  drawMeme(gMeme.selectedImgId, textX, textY + 5, textWidth, textHeight)

}

function getMemeById() {
  return gMeme.lines.find(line => gMeme.lines[gMeme.selectedLineIdx] === line)
}

function Delete() {
  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}



function moveUp() {
  getMemeById().y -=5

}

function moveDown() {
  getMemeById().y +=5
}












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


