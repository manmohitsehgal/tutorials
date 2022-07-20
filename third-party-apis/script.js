// creating a promise

// const firstPromise = new Promise(function(resolve, reject) {
//   // async event happens here
//   setTimeout(() => reject("I have fulfilled this promise!"), 3000);
// });

// console.log("firstPromise", firstPromise);

// firstPromise
//   .then(result => alert(`Resolved Promise with value =  ${result}`))
//   .catch(error => alert(`Resolved Promise with error =  ${error}`))
//   .finally(always => alert("I am going to run no matter what"));

/* ---------------------------------------------------------------------------------------------------------------------*/

// fetch("https://dummyjson.com/products")
//   .then(res => res.json()) // gets json
//   .then(json => console.log(json)); // json is being used here

const productsPromise = fetch("https://dummyjson.com/products");

productsPromise
  .then(val => val.json())
  .then(jsonData => {
    const productsArray = jsonData.products;
    console.log(productsArray);
  })
  .catch(error => {
    console.log(typeof error);
  })
  .finally(() => {
    console.log("this will always execute");
  });
