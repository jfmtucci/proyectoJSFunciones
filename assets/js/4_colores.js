const el1 = document.querySelector("#caja1");
const el2 = document.querySelector("#caja2");
const el3 = document.querySelector("#caja3");
const el4 = document.querySelector("#caja4");

let iniciar = (e, color) => {
  e.style.height = "200px";
  e.style.width = "200px";
  e.style.backgroundColor = color;
};

iniciar(el1, "blue");
iniciar(el2, "red");
iniciar(el3, "green");
iniciar(el4, "yellow");

el1.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "black";
});
el2.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "black";
});
el3.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "black";
});
el4.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "black";
});
