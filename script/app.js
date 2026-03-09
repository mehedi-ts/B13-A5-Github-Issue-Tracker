const allbtn = document.getElementById("all-btn");
const openbtn = document.getElementById("open-btn");
const closedbtn = document.getElementById("closed-btn");
const search = document.getElementById("search");

allbtn.addEventListener("click", () => {
  openbtn.classList.remove("btn-primary");
  closedbtn.classList.remove("btn-primary");
  allbtn.classList.add("btn-primary");
  filterByStatus("all");
});
openbtn.addEventListener("click", () => {
  closedbtn.classList.remove("btn-primary");
  allbtn.classList.remove("btn-primary");
  openbtn.classList.add("btn-primary");
  filterByStatus("open");
});
closedbtn.addEventListener("click", () => {
  allbtn.classList.remove("btn-primary");
  openbtn.classList.remove("btn-primary");
  closedbtn.classList.add("btn-primary");
  filterByStatus("closed");
});
