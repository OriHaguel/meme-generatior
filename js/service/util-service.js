"use strict";

function makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

function getAsCSV(objects) {
  let csvStr = `id, name, lat, lng, zoom`;
  objects.forEach((object) => {
    const csvLine = `\n${object.id}, ${object.name}, ${object.lat}, ${object.lng}, ${object.zoom}`;
    csvStr += csvLine;
  });
  return csvStr;
}

function downloadCSV(elLink, objects) {
  const csvContent = getAsCSV(objects);
  elLink.href = "data:text/csv;charset=utf-8," + csvContent;
  elLink.download = "places.csv";
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
