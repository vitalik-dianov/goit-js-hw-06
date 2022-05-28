const formRef = document.querySelector(".login-form");
const inputEmailRef = document.querySelector("[name='email']");
const inputPasswdRef = document.querySelector("[name='password']");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (inputEmailRef.value === "" || inputPasswdRef.value === "") {
    alert("Все поля должны быть заполнены!");
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);
    formRef.reset();
  }
}
