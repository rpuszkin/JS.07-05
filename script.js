function createButton() {
  const button = document.createElement("button");

  button.id = "super-button";

  button.innerText = "Kliknij mnie!";

  document.body.appendChild(button);

  return button;
}

function openAlert() {
  window.alert("super");
}

const button = createButton();

button.addEventListener("click", openAlert);
