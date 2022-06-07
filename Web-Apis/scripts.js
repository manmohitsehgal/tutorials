var count = 0;
var tableStarter = 11; // camelCase <-- variables or function should be named in JS
var stopIntervalId;

function itemSelector(id) {
  return document.querySelector(id);
}

var addToTable = itemSelector("#table");
var start = itemSelector("#start");
var stop = itemSelector("#stop");
var input = itemSelector("input");
var h3 = itemSelector("h3");

function setTableText(start, product) {
  addToTable.textContent = `${start} * ${count} = ${product}`;
}

function doTableMultiplication() {
  count++;
  var endProduct = tableStarter * count;
  setTableText(tableStarter, endProduct);
}

function displayString(item, name, nickname) {
  item.textContent = `Hero ${name} has a nickname, ${nickname}`;
  item.className = "first";
  setTimeout(function() {
    item.textContent = "";
    // item.dataset.state = "hidden"; // can also be used to set the state
    item.setAttribute("data-state", "hidden");
  }, 3000);
}

function accessCustomDataAttributes() {
  var elements = document
    .getElementById("customDivContainer")
    .querySelectorAll(".customDiv");
  elements.forEach(function(item) {
    const heros = item.getAttribute("data-hidden-village-heros");
    const nicknames = item.getAttribute("data-hidden-village-heros-nickname");
    displayString(item, heros, nicknames);
  });
}

start.addEventListener("click", function() {
  if (!stopIntervalId) {
    stopIntervalId = setInterval(doTableMultiplication, 1000);
    accessCustomDataAttributes();
    h3.innerHTML = `local storage value = ${localStorage.getItem(
      "inputValue"
    )}`;
  }
});

stop.addEventListener("click", function() {
  clearInterval(stopIntervalId);
  stopIntervalId = null;
});

input.addEventListener("keyup", function() {
  console.log(localStorage);
  localStorage.setItem("inputValue", input.value);
  h3.textContent = localStorage.getItem("inputValue");
});
