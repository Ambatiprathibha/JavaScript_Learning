const prompt = require("prompt-sync")();
let month = Number(prompt("Enter the month Number: "));
let days;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    console.log("Number of days", days);
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    console.log("Number of days", days);
    break;
  case 2:
    days = 28;
    console.log("Number of days", days);
    break;
  default:
    console.log("Invalid month number");
}
