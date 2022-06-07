// function hello(a, b) {
//   console.log(a + b);
//   var hello = function(a, b) {
//     console.log(a + b);
//     return a + b;
//   };
//   hello(a, b);
//   return a + b;
// }

// hello(2, 3);

// const hello = function(a, b) {
//   console.log(a + b);
//   return a + b;
// };

// hello(3, 4);

/* SCOPE */

// var animal = "dog";

// function getAnimal() {
//   var secondAnimal = "cat";
//   console.log("\n=========== INSIDE FUNCTION ===========");
//   console.log("animal is       = ", animal);
//   console.log("secondAnimal is = ", secondAnimal);
//   console.log("=========== INSIDE FUNCTION ===========\n");
// }
// console.log("\n=========== OUTSIDE FUNCTION ===========");
// console.log("animal is       = ", animal);
// console.log("secondAnimal is = ", secondAnimal);
// console.log("=========== OUTSIDE FUNCTION ===========\n");

// getAnimal();

function logItem(inOut, param) {
  console.log(`\n================ ${inOut} ================`);
  console.log(param);
  console.log(`================ ${inOut} ================\n`);
}

function test() {
  console.log();
}

logItem("OUTSIDE", this);

var myObj = {
  first: 10,
  second: 20,
  third: 30,
  customFunc: function calculateAge() {
    console.log(this);
    console.log(first);
  }
};

myObj.customFunc();
