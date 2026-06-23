const mainHeading = document.querySelector("#main-heading");
mainHeading.textContent = "Welcome to JavaScript day 23 DOM Manipulation!";

// //changing style of the main heading
// mainHeading.style.color = "blue";
// mainHeading.style.fontSize = "2rem";
// mainHeading.style.textAlign = "center";
// mainHeading.style.backgroundColor = "lightgray";
// mainHeading.style.padding = "1rem";
// mainHeading.style.width = "100%";
// mainHeading.style.borderRadius = "5px";
// mainHeading.style.border = "2px solid black";
// mainHeading.style.margin = "0px auto";

//class add
mainHeading.classList.add("highlight");
//class remove
mainHeading.classList.remove("highlight");

mainHeading.classList.toggle("highlight"); //if class is present it will remove it, if not present it will add it
