let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject("I have fulfilled this promise!"), 3000);
});

promise
  .then(function(result) {
    alert(`Resolved Promise with value =  ${result}`);
  })
  .catch(function(error) {
    alert(`Resolved Promise with error =  ${error}`);
  })
  .finally(function() {
    console.log("This will run regardless");
  });

fetch("https://dummyjson.com/products/1")
  .then(res => res.json())
  .then(json => console.log(json));
