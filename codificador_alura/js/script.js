const textarea = document.querySelector(".textarea");
const msg_area = document.querySelector(".c-msg__area");

function handleEncrypt() {
  let encryptedText = encrypt(textarea.value);
  msg_area.innerHTML =
    "<div class='' ><h3 id='contentCopy'>" +
    encryptedText +
    "</h3> <button id='btnCopy' onclick='handleCopy()' class='c-button--secondary space-break '> Copiar </button></div>";
  textarea.value = "";
}

function encrypt(stringForEncrypt) {
  const keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringForEncrypt = stringForEncrypt
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  for (let index = 0; index < keys.length; index++) {
    if (stringForEncrypt.includes(keys[index][0])) {
      stringForEncrypt = stringForEncrypt.replaceAll(
        keys[index][0],
        keys[index][1]
      );
    }
  }
  return stringForEncrypt;
}

function handleDescrypt() {
  let descryptedText = descrypt(textarea.value);
  msg_area.innerHTML =
    "<div class='' ><h3>" +
    descryptedText +
    "</h3> <button class='c-button--secondary space-break '> Copiar </button></div>";
  textarea.value = "";
}

function descrypt(stringForDescript) {
  const keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringForDescript = stringForDescript
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  for (let index = 0; index < keys.length; index++) {
    if (stringForDescript.includes(keys[index][0])) {
      stringForDescript = stringForDescript.replaceAll(
        keys[index][1],
        keys[index][0]
      );
    }
  }
  return stringForDescript;
}

function handleCopy() {
  const contentCopy = document.querySelector("#contentCopy").innerHTML;
  navigator.clipboard.writeText(contentCopy);
}

const btn_encrypt = (document.querySelector("#btnEncrypt").onclick =
  handleEncrypt);
const btn_descrypt = (document.querySelector("#btnDescrypt").onclick =
  handleDescrypt);
