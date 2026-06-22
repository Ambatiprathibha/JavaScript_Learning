const prompt = require("prompt-sync")();

let balance = 10000;
let correctPin = 1234;

let pin = Number(prompt("Enter PIN: "));

if (pin !== correctPin) {
  console.log("Invalid PIN!");
} else {
  console.log("\n1. Check Balance");
  console.log("2. Deposit");
  console.log("3. Withdraw");
  console.log("4. Exit");

  let choice = Number(prompt("Choice: "));

  switch (choice) {
    case 1:
      console.log(` Balance: ₹${balance}`);
      break;

    case 2:
      let deposit = Number(prompt("Enter deposit amount: "));
      balance += deposit;
      console.log(` Deposited! New balance: ₹${balance}`);
      break;

    case 3:
      let withdraw = Number(prompt("Enter withdraw amount: "));
      if (withdraw > balance) {
        console.log(" Insufficient balance");
      } else {
        balance -= withdraw;
        console.log(`Withdrawn! New balance: ₹${balance}`);
      }
      break;

    case 4:
      console.log("Thank you for using ATM");
      break;

    default:
      console.log(" Invalid choice");
  }
}
