"use strict";

let workHours = prompt("Enter number of hours worked for the week");
let payRate = prompt("Enter how much you make an hour");
let totalPay;

parseInt(workHours);
parseInt(payRate);
  if (workHours > 40) {
	totalPay = (40 * payRate) + ((workHours - 40) * (payRate * 1.5));
}
else if (workHours <= 40) {
	totalPay = workHours * payRate
}
console.log(totalPay);