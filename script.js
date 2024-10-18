var List = document.getElementById("List");
console.log(List);
var items = List.getElementsByTagName("li");
var color1 = "#E1ECF3";
var color2 = "#C3DAE7";
var currentColor = color1;

for (var i = 0; i < items.length; i++) {
  items[i].classList.add(currentColor);
  currentColor = (currentColor == color1) ? color2 : color1;
  items[i].style.backgroundColor=currentColor;
}

List.addEventListener("DOMNodeInserted", function(event) {
  if (event.target.tagName == "LI") {
    event.target.classList.add(currentColor);
    currentColor = (currentColor == color1) ? color2 : color1;
  }
});