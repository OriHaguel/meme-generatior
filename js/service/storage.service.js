"use strict";

function saveToStorage(key, val) {
  const strVal = JSON.stringify(val);
  localStorage.setItem(key, strVal);
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key);
  return JSON.parse(val);
}

const USER_KEY = "userDB";

function saveUser(user) {
  saveToStorage(USER_KEY, user);
}

function getUser() {
  return loadFromStorage(USER_KEY);
}

function onSaveUser(ev) {
  ev.preventDefault();
  console.log(ev);
  const elForm = ev.target;
  console.log(elForm);
  // console.log(elForm.querySelectorAll('input'))
  const elFormInputs = Array.from(elForm.querySelectorAll("input"));
  const user = elFormInputs.reduce((acc, elFormInput) => {
    console.log("elFormInput.id", elFormInput.id);
    if (elFormInput.id) acc[elFormInput.id] = elFormInput.value;
    return acc;
  }, {});
  console.log(user);
  saveUser(user);
  renderUserPreference(user);
}
