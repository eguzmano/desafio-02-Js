//problema 1
const foto = document.querySelector(".img1");

foto.addEventListener("click", () => {
  if (foto.style.border === "2px solid red") {
    foto.style.border = "";
  } else {
    foto.style.border = "2px solid red";
  }
});

//problema 2
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const btnStickers = document.querySelector(".btn-stickers");
const verifyStickers = document.querySelector('.verificacion-stickers')

btnStickers.addEventListener("click", () => {
  let totalStickers =
    Number(input1.value) + Number(input2.value) + Number(input3.value);

  if (totalStickers <= 10) {
    verifyStickers.textContent = `Llevas ${totalStickers} Stickers`;
  } else {
    verifyStickers.textContent = 'Llevas demasiados Stickers';
  }
});

//problema 3
const select1 = document.querySelector(".select1");
const select2 = document.querySelector(".select2");
const select3 = document.querySelector(".select3");
const btnPass = document.querySelector(".btn-pass");
const verifyPass = document.querySelector('.verificacion-pass')

btnPass.addEventListener("click", () => {
  if (select1.value == 9 && select2.value == 1 && select3.value == 1) {
    verifyPass.textContent = 'Password 1 correcta';
  } else if (select1.value == 7 && select2.value == 1 && select3.value == 4) {
    verifyPass.textContent = 'Password 2 correcta';
  } else {
    verifyPass.textContent = 'Password incorrecta';
  }
});
