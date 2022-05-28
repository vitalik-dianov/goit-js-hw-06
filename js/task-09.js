function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const textColorRef = document.querySelector(".color");
const changeColorBtnRef = document.querySelector(".change-color");

changeColorBtnRef.addEventListener("click", onBtnChanger);

function onBtnChanger() {
  textColorRef.textContent = getRandomHexColor();
  bodyRef.setAttribute("style", `background: ${textColorRef.textContent} `);
}
