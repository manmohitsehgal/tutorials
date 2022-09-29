// let originalArray = [1, 3, 2, 5, 10];
// const secondArray = [];
// const oddOrEven = originalArray.map(num => {
//   if (num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// });

// const filterdResults = originalArray.filter(num => num > 2);

// [...itemsInAnArray]
// console.log("originalArray", originalArray);
// console.log("originalArray spread out", ...originalArray);
// originalArray = [...originalArray, 11];

// console.log("before push", originalArray);
// originalArray.push(12);
// console.log("after push", originalArray);

// const [, , , , ten] = originalArray;
// const one2 = originalArray[0];
// console.log(ten);

// const animeList = {
//   name: "Deathnote",
//   mc: "Kira-Light Yagami",
//   sideKick: "Ruyk-Shinigami",
//   mani: [1, 2, 3, 4, 5]
// };

// const [one, two, three, four, five] = originalArray;
// const { name, mc, sideKick, mani } = animeList;
// console.log(name, mc, sideKick, ...mani);

const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  console.log("hitt");
});
