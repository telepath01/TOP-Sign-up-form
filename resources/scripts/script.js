"use strict";

const password = document.getElementById("pw");
const pwConfirm = document.getElementById("confirm-pw");
const pwError = document.querySelector("#confirm-pw + span.error");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  if (pwConfirm.value != password.value) {
    event.preventDefault();
  }
});
pwConfirm.addEventListener("input", (event) => {
  if (pwConfirm.value === "") {
    pwError.textContent = "";
  } else {
    showError();
  }
});

function showError() {
  if (pwConfirm.value != password.value) {
    pwError.textContent = "Password does not watch. Please fix!!!";
  } else {
    pwError.textContent = "";
    pwError.className = "error";
  }
}
