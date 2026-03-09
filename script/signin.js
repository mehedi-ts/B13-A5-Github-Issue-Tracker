const naemEl = document.getElementById("name");
const passwordEl = document.getElementById("password");
const submitEl = document.getElementById("submit");

submitEl.addEventListener("click", (e) => {
  e.preventDefault();
  const name = naemEl.value;
  const password = passwordEl.value;
  if (name !== "admin" && password !== "admin123") {
    alert("Invalid UserName or Password!");
    return;
  }

  naemEl.value = "";
  passwordEl.value = "";
  window.location.replace("dashboard.html");
});
