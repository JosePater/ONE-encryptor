const encryptText = document.querySelector(".user-text");
const copyText = document.querySelector(".inputCopy");

const textFound = document.querySelector(".text-found");
const notFound = document.querySelector(".not-found");

let textUser;

function encrypt() {
  if (encryptText.value) {
    textUser = encryptText.value
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("u", "ufat")
      .replaceAll("o", "ober");

    copyText.value = textUser;
    encryptText.value = "";
    textFound.classList.remove("display-none");
    notFound.classList.add("display-none");
  } else {
    textFound.classList.add("display-none");
    notFound.classList.remove("display-none");
  }
}

function decrypt() {
  if (encryptText.value) {
    textUser = encryptText.value
      .replaceAll("ai", "a")
      .replaceAll("imes", "i")
      .replaceAll("enter", "e")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    copyText.value = textUser;
    encryptText.value = "";
    textFound.classList.remove("display-none");
    notFound.classList.add("display-none");
  } else {
    textFound.classList.add("display-none");
    notFound.classList.remove("display-none");
  }
}

function copy() {
  copyText.select();
  copyText.setSelectionRange(0, 99999); // Para móvile

  // Copia el texto
  navigator.clipboard.writeText(copyText.value);
}