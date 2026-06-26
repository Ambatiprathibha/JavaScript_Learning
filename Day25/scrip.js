const ta = document.getElementById("ta");
ta.addEventListener("keydown", (e) => {
  console.log(e.key, +" " + e.code);
});
const link = document.getElementById("link");
link.addEventListener("click", (e) => {
  e.preventDefault();
});
