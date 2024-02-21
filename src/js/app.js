const encryptText = document.querySelector('.user-text');
const copyText = document.querySelector('.inputCopy');

const textFound = document.querySelector('.text-found');
const notFound = document.querySelector('.not-found');

let textUser;

function encrypt() {
  if (encryptText.value) {
    myAlert('center', 'success', '¡¡¡Encriptado!!!', 1500);
    setTimeout(() => {
      textUser = encryptText.value
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('u', 'ufat')
        .replaceAll('o', 'ober');

      copyText.value = textUser;
      encryptText.value = '';
      textFound.classList.remove('display-none');
      notFound.classList.add('display-none');
    }, 1500);
  } else {
    myAlert('center', 'error', 'No hay mensaje para encriptar', 1500);
    textFound.classList.add('display-none');
    notFound.classList.remove('display-none');
  }
}

function decrypt() {
  myAlert('center', 'success', '¡¡¡Desencriptado!!!', 1500);
  if (encryptText.value) {
    setTimeout(() => {
      textUser = encryptText.value
        .replaceAll('ai', 'a')
        .replaceAll('imes', 'i')
        .replaceAll('enter', 'e')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

      copyText.value = textUser;
      encryptText.value = '';
      textFound.classList.remove('display-none');
      notFound.classList.add('display-none');
    }, 1500);
  } else {
    myAlert('center', 'error', 'No hay mensaje para desencriptar', 1500);
    textFound.classList.add('display-none');
    notFound.classList.remove('display-none');
  }
}

function copy() {
  copyText.select();
  copyText.setSelectionRange(0, 99999); // Para móvile

  // Copia el texto
  navigator.clipboard.writeText(copyText.value);
  // Alert
  myAlert('center', 'success', 'Mensaje copiado!');
}

function myAlert(position, type, title, time = 1300) {
  Swal.fire({
    position: position,
    icon: type,
    title: title,
    showConfirmButton: false,
    timer: time,
  });
}
