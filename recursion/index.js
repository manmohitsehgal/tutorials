const add = num => {
  //base condition
  if (num > 50) {
    return "Reached the end";
  }
  // purpose of this function is to keep running until the base condition is met
  console.log("num = ", num, " | num + 10 = ", num + 10);
  return add(num + 10);
};

// console.log(add(5));

//----------- MANIS RECURSIVE BINARY SEARCH ATTEMPT

const mySortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function recursiveBinarySearch(arr, element) {
  const mid = parseInt(arr.length / 2);
  if (arr.length === 1 && arr[0] !== element) {
    return false;
  }
  if (element === arr[mid]) {
    return true;
  } else if (element < arr[mid]) {
    const lessThanArray = arr.slice(0, mid);
    return recursiveBinarySearch(lessThanArray, element);
  } else if (element > arr[mid]) {
    const greaterThanArray = arr.slice(mid);
    return recursiveBinarySearch(greaterThanArray, element);
  }
}

console.log(recursiveBinarySearch(mySortedArr, 17));
