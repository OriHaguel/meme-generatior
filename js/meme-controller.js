let gElCanvas;
let gCtx;

function onInit() {
  gElCanvas = document.querySelector("canvas");
  gCtx = gElCanvas.getContext("2d");
  //   renderMeme();
  drawImg();
}

function renderMeme() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);

  //   gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height);
  //   gCtx.fillStyle = "black";
  //   gCtx.font = "20px Arial";
}
