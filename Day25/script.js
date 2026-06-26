//Get all the elements
const container = document.querySelector(".container");
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");
const holder = document.querySelector("#holder");
let count = 0;
plusBtn.addEventListener("click", () => {
  count++;
  holder.textContent = count;
});

minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }

  holder.textContent = count;
});

container.addEventListener("click", (e) => {
  console.log("You have clicked: " + e.target);
  console.log("You have clicked: " + e.target.textContent);
  console.log("You have clicked: " + e.target.id);
  console.log("The Tag name is :" + e.target.tagName);
});
