const allbtn = document.getElementById("all-btn");
const openbtn = document.getElementById("open-btn");
const closedbtn = document.getElementById("closed-btn");

allbtn.addEventListener("click", () => {
  openbtn.classList.remove("btn-primary");
  closedbtn.classList.remove("btn-primary");
  allbtn.classList.add("btn-primary");
});
openbtn.addEventListener("click", () => {
  closedbtn.classList.remove("btn-primary");
  allbtn.classList.remove("btn-primary");
  openbtn.classList.add("btn-primary");
});
closedbtn.addEventListener("click", () => {
  allbtn.classList.remove("btn-primary");
  openbtn.classList.remove("btn-primary");
  closedbtn.classList.add("btn-primary");
});
