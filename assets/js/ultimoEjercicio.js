var color = "white",
  color2 = "white";

let div1 = document.createElement("div");
div1.id = "key";
div1.style.backgroundColor = "white";
div1.style.height = "200px";
div1.style.width = "200px";
div1.style.border = "2px solid black";
div1.style.marginTop = "4rem";
div1.style.marginBottom = "4rem";
div1.style.marginLeft = "40vw";
// Agregar el div al cuerpo del documento (o a cualquier otro elemento deseado)
document.body.appendChild(div1);

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "pink";
  } else if (event.key === "s") {
    color = "orange";
  } else if (event.key === "d") {
    color = "blue";
  }
  div1.style.backgroundColor = color;
});

let div2 = document.createElement("div");
div2.id = "key2";
div2.style.backgroundColor = "white";
div2.style.height = "200px";
div2.style.width = "200px";
div2.style.border = "2px solid black";
div2.style.marginLeft = "40vw";

document.body.appendChild(div2);

document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    color2 = "purple";
  } else if (event.key === "w") {
    color2 = "grey";
  } else if (event.key === "e") {
    color2 = "brown";
  }
  div2.style.backgroundColor = color2;
});
