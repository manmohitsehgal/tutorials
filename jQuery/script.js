// SYNTAX

//$(selector).action

setTimeout(function() {
  $("#sample").hide();
}, 5000);

/* -------------------------------------------------------------------------------------------------------*/

h3 = $("h3");
generateBtn = $("#generateBtn");

function generateRandomWords(wordLength) {
  console.log("starting nere");
  let finalString = "";
  const wordsString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i <= wordLength; i++) {
    finalString += wordsString.charAt(
      Math.floor(Math.random() * wordsString.length)
    );
  }
  console.log("reached end");
  return finalString;
}

generateBtn.on("click", function() {
  console.log("click start");
  h3.text(generateRandomWords(5));
  console.log("click end");
});

/* -------------------------------------------------------------------------------------------------------*/

parentList = $("#parentList");
addNext = $("#addNext");
count = 0;

parentList.on("click", "#removeMe", function(event) {
  var x = $(event.target);
  console.log("Regular target", event.target);
  console.log("jQuery target", $(event.target));
  x.parent("li").remove();
});

function addListItem(itemId, className, itemName) {
  parentList.append(
    `<li id=${itemId} class=${className}>${itemName} <button id="removeMe">X</button>`
  );
}

addNext.on("click", function() {
  if (count !== 5) {
    var testObj = [
      { id: 1, class: "first", name: "Kira" },
      { id: 2, class: "second", name: "L" },
      { id: 3, class: "third", name: "Rem" },
      { id: 4, class: "fourth", name: "Ryuk" },
      { id: 5, class: "fifth", name: "Naiomi" }
    ];

    addListItem(testObj[count].id, testObj[count].class, testObj[count].name);
    count++;
  } else {
    alert("All Entries Added");
  }
});

/* -------------------------------------------------------------------------------------------------------*/

var selected;
parent = $("#parent");
addNewTd = $("#addNewTd");
removeTd = $("#removeTd");

parent.on("click", function(event) {
  var target = event.target;
  while (target != this) {
    console.log(target, this);
    if (target.tagName === "TD") {
      highlight(target);
      return;
    }
    target = target.parentNode;
  }
});

addNewTd.on("click", function() {
  parent.append("<tr>");
  parent.append("<td id='cEight' class='common cEight'></td>");
  parent.append("</tr>");
});

function highlight(node) {
  console.log(selected);
  if (selected) {
    selected.classList.remove("highlight");
  }
  selected = node;
  console.log("after", selected);
  selected.classList.add("highlight");
  removeTd.on("click", function() {
    node.remove();
  });
}
