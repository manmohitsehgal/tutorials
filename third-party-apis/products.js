const productsPromise = fetch("https://dummyjson.com/products");

productsPromise
  .then(val => val.json())
  .then(jsonData => {
    const productsArray = jsonData.products;
    getIds(productsArray);
  });

getIds = productsArray => {
  const idArrays = [];
  for (let i = 0; i < productsArray.length; i++) {
    idArrays.push(productsArray[i].id);
  }
};
