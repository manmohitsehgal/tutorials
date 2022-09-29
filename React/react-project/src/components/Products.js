import { useEffect, useState } from "react";

export const Products = props => {
  console.log(props);
  // const [products, setProducts] = useState(0);
  let url = null;
  if (props.productId > 0) {
    url = `https://dummyjson.com/products/${props.productId}`;
  } else {
    url = `https://dummyjson.com/products/`;
  }
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => console.log(json));
  }, [url]);
  // return products;
};
