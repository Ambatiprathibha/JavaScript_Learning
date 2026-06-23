const box = document.querySelector("#box");

const high = document.getElementById("highlightBtn");

high.onclick = function () {
  box.classList.toggle("highlight");
};

document.querySelector("#roundedBtn").onclick = function () {
  box.classList.toggle("rounded");
};

document.querySelector("#shadowBtn").onclick = function () {
  box.classList.toggle("shadow");
};

document.querySelector("#resetBtn").onclick = function () {
  // box.className = "box"; //this will remove all the classes and add only box class
  box.classList.remove("highlight", "rounded", "shadow"); //this will remove all the classes
};
//changing attribute of the box
box.setAttribute("data-info", "This is a box");
