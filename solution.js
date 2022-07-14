// Exercise - 01

var isDog = true;
isDog == true
  ? console.log("Pat, pat, good dog")
  : console.log("Find me a dog to pat!");

// Exercise - 02

var speedLimit = 50;
var yourSpeed = 51;
console.log(
  speedLimit < yourSpeed
    ? "you're going too fast!"
    : "You're driving below the speed limit, Oma"
);

// Exercise - 03

var age = 15;

if (age < 16) {
  console.log("serve butter beer");
} else {
  console.log("serve beer");
}

// Exercise - 04

var isStudent = true;

if (isStudent === true) {
  console.log("Ticket costs €5,00");
} else {
  console.log("Ticket costs €12,00");
}

// Exercise - 05

var okMarie = "cake";

if (okMarie === "cake") {
  console.log("Let them eat cake");
} else {
  console.log("Oh, bother");
}

// Exercise - 05

var num1 = 30;
console.log(num1 % 2 === 0 ? `${num1} is even` : `${num1} is odd`);

var num2 = 939;
console.log(num2 % 2 === 0 ? `${num2} is even` : `${num2} is odd`);

var num3 = 40.9;
console.log(num3 % 2 === 0 ? `${num3} is even` : `${num3} is odd`);
