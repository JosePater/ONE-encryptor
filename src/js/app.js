const encryptText = document.querySelector('.user-text');
const copyText = document.querySelector('.inputCopy');

const textFound = document.querySelector('.text-found');
const notFound = document.querySelector('.not-found');

let textUser;

function encrypt() {
  // If there isn't text
  if (encryptText.value.trim() == '') {
    myAlert('center', 'error', `No hay mensaje para encriptar`, 1500);
    return true;
  }

  if (encryptText.value) {
    // Texto en minúsculas
    textUser = encryptText.value.toLowerCase()
      .replaceAll('e', 'enter')
      .replaceAll('i', 'imes')
      .replaceAll('a', 'ai')
      .replaceAll('u', 'ufat')
      .replaceAll('o', 'ober');

    if (compareTexts(encryptText.value, textUser)) {
      myAlert(
        'center',
        'question',
        'Mensaje no válido para encriptar!',
        1500
      );
      return;
    }
    myAlert('center', 'success', '¡¡¡Encriptado!!!', 1500);
    setTimeout(() => {
      showResult();
    }, 1500);
  }
}

function decrypt() {
  // If there isn't text
  if (encryptText.value.trim() == '' && !copyText.value) {
    myAlert('center', 'error', `No hay mensaje para desencriptar`, 1500);
    return;
  }

  // textarea 1
  if (encryptText.value) {
    textUser = _decrypt(encryptText.value.toLowerCase()); // minúsculas

    if (compareTexts(encryptText.value, textUser)) return;
    myAlert('center', 'success', '¡¡¡Desencriptado!!!', 1500);
    setTimeout(() => {
      showResult();
    }, 1500);

    // textarea 2
  } else if (copyText.value) {
    textUser = _decrypt(copyText.value);

    if (compareTexts(copyText.value, textUser)) return;
    myAlert('center', 'success', '¡¡¡Desencriptado!!!', 1500);
    setTimeout(() => {
      showResult();
    }, 1500);
  }
}

// input text with output text
function compareTexts(input, output) {
  // comparaciones de textos en minúsculas
  if (input.toLowerCase() == output) {
    myAlert('center', 'question', 'No es un mensaje encriptado!', 1500);
    return true;
  }
}

// Copiar texto textarea 2
function copy() {
  copyText.select();
  copyText.setSelectionRange(0, 99999); // Para móvile
  // Copia el texto
  navigator.clipboard.writeText(copyText.value);
  myAlert('center', 'success', 'Mensaje copiado!');
}

// Alert
function myAlert(position, type, title, time = 1300) {
  Swal.fire({
    position: position,
    icon: type,
    title: title,
    showConfirmButton: false,
    timer: time,
  });
}

// Desencriptar
function _decrypt(text) {
  return text
    .replaceAll('ai', 'a')
    .replaceAll('imes', 'i')
    .replaceAll('enter', 'e')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');
}

function showResult() {
  copyText.value = textUser;
  encryptText.value = '';
  textFound.classList.remove('display-none');
  notFound.classList.add('display-none');
  // Screen max 1080
  if (window.innerWidth < 1080) {
    setTimeout(() => {
      textFound.scrollIntoView({ behavior: 'smooth' });   
    }, 300);
  }
}