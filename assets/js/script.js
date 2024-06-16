const ele = document.getElementById("ele1");
ele.style.marginTop = "15vh";
ele.style.textAlign = "center";

function pintar(e, color = "green") {
  e.target.style.backgroundColor = color;
}

ele.addEventListener("click", (e) => {
  pintar(e);
});
ele.addEventListener("click", (e) => {
  pintar(e, "red");
});
