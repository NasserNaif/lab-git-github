let form = document.getElementById("form");
let euer = document.querySelector("#user");

form.addEventListener("submit", (elm) => {
  elm.preventDefault();
  alert(`Hello ${euer.value}`);
});
