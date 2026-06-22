//atm machine
const scan = require("prompt-sync")();
//custom error object
class PINError extends Error {}

class ATM {
  atmPin = 7000;
  enteredPin;
  input() {
    return Number(scan("Enter your ATM pin: "));
  }
  validatePin() {
    if (this.atmPin === this.enteredPin) {
      console.log("Pin is correct. Access granted.");
    } else {
      throw new PINError("Invalid PIN. Access denied.");
    }
  }
}
const hdfc = new ATM();
hdfc.enteredPin = hdfc.input();
try {
  hdfc.validatePin();
} catch (error) {
  console.error(error.message);
}
