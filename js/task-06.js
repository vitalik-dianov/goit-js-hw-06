const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onValidate);

function onValidate(event) {
  const validLength = Number(inputRef.dataset.length);
  if (event.currentTarget.value.length !== validLength) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.replace("invalid", "valid");
  }
}
