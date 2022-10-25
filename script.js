let form = document.getElementById("form");
let euer = document.querySelector("#user");
let password = document.getElementById("password");

form.addEventListener("submit", (elm) => {
  elm.preventDefault();
  alert(`Hello ${euer.value}, your password is ${password.value}`);
});
