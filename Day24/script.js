const btn = document.getElementById("main-head");
const out = document.getElementById("output");

// btn.addEventListener("click", function handleClick() {
//   out.textContent = "The Button Has Been Clicked!";
// });

// btn.addEventListener("click", function () {
//   out.textContent = "The Button Has Been Clicked!";
// });

btn.addEventListener("click", () => {
  out.textContent = "The Button Has Been Clicked!";
  console.log("The Button Has Been Clicked!");
});

// btn.addEventListener("click", function () {
//   btn.style.backgroundColor = "orange";
// });

function clrChange() {
  btn.classList.toggle("btnclr");
}
btn.addEventListener("click", function clrChange(e) {
  btn.classList.toggle("btnclr");
  console.log(e.pointerType + " " + e.type);
  console.log(e.target);
});

btn.removeEventListener("click", clrChange);
