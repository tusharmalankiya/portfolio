let h2 = document.createElement("h2");
let container = document.getElementById("container");
// h2.innerText = "H2 Tag";
// container.appendChild(h2);

//get value of input
//Phronesis = UGhyb25lc2lz

function validate() {
  let password = document.getElementById("password");
  password_value = window.btoa(password.value);
  const message = document.getElementById("message");
  if (password_value === "UGhyb25lc2lz") {
    document.getElementsByClassName("validation")[0].style.display = "none";
    // message.innerText = "correct";
  }
  else{
      message.innerText = "incorrect, try again";
  }
  password.value = "";
}

function submit() {
  let newDiv = document.createElement("div");
  let newElement = document.createElement("h2");
  const date = new Date();
  const id = date.getTime();
  newElement.id = id;
  let decryptButton = document.createElement("Button");
  decryptButton.innerText = "decrypt";
  let input = document.getElementById("input");
  let value = input.value;
  newElement.innerText = encrypt(value);
  decryptButton.onclick = () => decrypt(id);
  newDiv.appendChild(newElement);
  newDiv.appendChild(decryptButton);
  container.appendChild(newDiv);
}

function decrypt(id) {
  e = document.getElementById(id);
  text = e.innerText;
  e.innerText = window.atob(text);
  console.log(window.atob(text));
}

function encrypt(text) {
  return window.btoa(text);
}
