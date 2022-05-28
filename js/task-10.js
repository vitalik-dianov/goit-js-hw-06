function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("[type=number]");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", onCreateMarkupBox);
destroyBtnRef.addEventListener("click", onDestroyMarkup);

function onCreateMarkupBox() {
  const boxesMarkup = [];
  if (inputRef.value > 100) {
    alert("Максимальное число 100");
  } else {
    for (let i = 0; i < inputRef.value; i += 1) {
      const div = document.createElement("div");
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = i * 10 + 30 + "px";
      div.style.height = i * 10 + 30 + "px";

      boxesMarkup.push(div);
    }
  }
  boxesRef.append(...boxesMarkup);
}
function onDestroyMarkup() {
  boxesRef.innerHTML = "";
}
