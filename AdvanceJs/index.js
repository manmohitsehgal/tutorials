// var useInEntireFile = 5000;
// function oneMain() {
//   const newVal = 10 + useInEntireFile;
//   let varOne = "Mani";
//   function subOne() {
//     console.log(varOne);
//     // contains major logic
//   }
//   return subOne;
// }
// //1000 lines of code written here
// const hello = oneMain();
// hello();

// Closure is function bound together with its lexical scope.

// lexical envrionment is local memory + refrence to the lexical envoirnment of the parent

//Lexical Environment is the environment of the function where it is written.
//That is, the static order/place where it is situated, regardless from where it is called from.

console.log("Start Here");
document.getElementById("btn").addEventListener("click", function hello() {
  console.log("click happened");
});
console.log("Already Done");

// we can say fn subOne is lexically inside function oneMain
// oneMain is lexically inside the global scope
